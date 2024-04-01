document.getElementById('setSpeed').addEventListener('click', () => {
    const speed = document.getElementById('speed').value;
    chrome.tabs.query({active: true, currentWindow: true})
})