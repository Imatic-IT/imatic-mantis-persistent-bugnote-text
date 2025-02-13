import {
    saveBugnoteText,
    loadBugnoteText,
    clearBugnoteText,
    createKey,
    getSettings,
    checkIfIBugWasChanged
} from './utils';

(function () {
    "use strict";

    async function initPersistentBugnoteText() {

        const settings = getSettings();

        if (null !== settings) {
            const bugId = settings.issue_id;
            const userId = settings.user_id;
            const url = settings.check_last_updated_url
            const lastUpdated = settings.bug_last_updated

            const bugnoteTextArea = document.querySelector("#bugnote_text");

            if (null !== bugnoteTextArea) {
                const bugnoteForm = document.querySelector("#bugnoteadd");
                const bugnoteChangeStatusForm = document.querySelector("#bug-change-status-form");

                const handleCreateKey = async () => {
                    if (bugnoteForm !== null) {
                        return createKey(bugId, userId, 'bugnoteadd')
                    } else if (bugnoteChangeStatusForm !== null) {
                        return createKey(bugId, userId, 'bug-change-status-form')
                    }
                }

                const handleSaveText = (key, text) => {
                    saveBugnoteText(key, text);
                }

                const handleLoadText = (key) => {
                    const text = loadBugnoteText(key)
                    return text !== null ? text : '';
                }

                const handleBugnoteText = async (createKey, saveText, loadText) => {
                    const key = await createKey()
                    const loadedText = loadText(key);

                    console.log(key)

                    if (loadedText !== '') {
                        bugnoteTextArea.value = loadedText;

                    }

                    bugnoteTextArea.addEventListener('input', () => saveText(key, bugnoteTextArea.value))

                    if (null !== bugnoteForm) {
                        bugnoteForm.addEventListener("submit", function () {
                            clearBugnoteText(key, userId);
                        });
                    }

                    if (null !== bugnoteChangeStatusForm) {
                        bugnoteChangeStatusForm.addEventListener("submit", async function (event) {
                            event.preventDefault()
                            try {
                                const result = await checkIfIBugWasChanged(url, bugId, lastUpdated);
                                if (result === false) {
                                    clearBugnoteText(key, userId)
                                }
                                bugnoteChangeStatusForm.submit();
                            } catch (error) {
                                console.error('Error checking bug status:', error);
                            }
                        });
                    }
                }

                handleBugnoteText(
                    handleCreateKey,
                    handleSaveText,
                    handleLoadText
                )
            }
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        initPersistentBugnoteText();

    });
})
();




