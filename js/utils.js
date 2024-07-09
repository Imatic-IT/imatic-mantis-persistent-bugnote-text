function saveBugnoteText(issueId, userId, text) {
    const key = 'ImaticPersistentBugnoteText_' + issueId + '_' + userId;
    const encodedText = encodeURIComponent(text);
    const encryptedText = CryptoJS.AES.encrypt(encodedText, 'secret-key').toString();
    localStorage.setItem(key, encryptedText);
}

function loadBugnoteText(issueId, userId) {
    const key = 'ImaticPersistentBugnoteText_' + issueId + '_' + userId;
    const encryptedText = localStorage.getItem(key);
    if (encryptedText === null) {
        return null;
    }
    const bytes = CryptoJS.AES.decrypt(encryptedText, 'secret-key');
    const decodedText = bytes.toString(CryptoJS.enc.Utf8);
    return decodeURIComponent(decodedText);
}

function clearBugnoteText(issueId, userId) {
    const key = 'ImaticPersistentBugnoteText_' + issueId + '_' + userId;
    localStorage.removeItem(key);
}

export { saveBugnoteText, loadBugnoteText, clearBugnoteText };
