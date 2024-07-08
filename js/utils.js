function saveBugnoteText(issueId, userId, text) {
    const key = 'ImaticPersistentBugnoteText_' + issueId + '_' + userId;
    const encodedText = encodeURIComponent(text);

    localStorage.setItem(key, encodedText);
}

function loadBugnoteText(issueId, userId) {
    const key = 'ImaticPersistentBugnoteText_' + issueId + '_' + userId;
    const encodedText = localStorage.getItem(key);
    if (encodedText === null) {
        return null;
    }
    return decodeURIComponent(encodedText);
}

function clearBugnoteText(issueId, userId) {
    const key = 'ImaticPersistentBugnoteText_' + issueId + '_' + userId;
    localStorage.removeItem(key);
}

export { saveBugnoteText, loadBugnoteText, clearBugnoteText };
