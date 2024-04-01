document.getElementById('setSpeed').addEventListener('click', () => {
    const speed = document.getElementById('speed').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: setPlaybackSpeed,
            args: [speed]
        });
    });
});

function setPlaybackSpeed(speed) {
    const video = document.querySelector('video');
    if(video) {
        video.play
    }
}