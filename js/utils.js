function createKey(issueId, userId, formType) {
    return `ImaticPersistentBugnoteText_${issueId}_${userId}_${formType}`;
}

function saveBugnoteText(key, text) {
    const encodedText = encodeURIComponent(text);
    const encryptedText = CryptoJS.AES.encrypt(encodedText, 'secret-key').toString();
    localStorage.setItem(key, encryptedText);
}

function loadBugnoteText(key) {
    const encryptedText = localStorage.getItem(key);
    if (encryptedText === null) {
        return null;
    }
    const bytes = CryptoJS.AES.decrypt(encryptedText, 'secret-key');
    const decodedText = bytes.toString(CryptoJS.enc.Utf8);// console.log(decodedText)
    return decodeURIComponent(decodedText);
}

function clearBugnoteText(key, userId) {
    localStorage.removeItem(key);
}

function getSettings() {
    const el = document.querySelector("#ImaticPersistentBugnoteText");
    if (el == null) {
        return;
    }
    return JSON.parse(el.dataset.settings);
}

async function checkIfIBugWasChanged(url, bugId, lastUpdated) {

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bugId: bugId,
                lastUpdated: lastUpdated
            }),
        });

        const data = await response.json()
        if (data.success) {
            const existingBugLastUpdated = data.existingBugLastUpdated;

            return lastUpdated != existingBugLastUpdated
        }

    } catch (err) {

    }


}

export {saveBugnoteText, loadBugnoteText, clearBugnoteText, createKey, getSettings, checkIfIBugWasChanged};
