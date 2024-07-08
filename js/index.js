import { saveBugnoteText, loadBugnoteText, clearBugnoteText } from './utils';

(function () {

    "use strict";
    function getSettings() {
        const el = document.querySelector("#ImaticPersistentBugnoteText");
        if (el == null) {
            return;
        }

        return JSON.parse(el.dataset.settings);
    }

    function initPersistentBugnoteText() {

        const settings = getSettings();

        if (null !== settings) {
            const issueId = settings.issue_id;
            const userId = settings.user_id;
            const bugnoteTextArea = document.querySelector("#bugnote_text");

            if (null !== bugnoteTextArea) {
                const bugnoteText = loadBugnoteText(issueId, userId);

                if (null !== bugnoteText) {
                    bugnoteTextArea.value = bugnoteText;
                }

                bugnoteTextArea.addEventListener("input", function () {
                    saveBugnoteText(issueId, userId, bugnoteTextArea.value);
                });

                const bugnoteForm = document.querySelector("#bugnoteadd");
                if (null !== bugnoteForm) {
                    bugnoteForm.addEventListener("submit", function () {
                        clearBugnoteText(issueId, userId);
                    });
                }
            }
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        initPersistentBugnoteText();
    });
})
();




