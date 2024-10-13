let deferredPrompt;
const installButton = document.getElementById('installButton');

// Listen for the 'beforeinstallprompt' event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.hidden = false;

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

// Listen for app installation success
window.addEventListener('appinstalled', (evt) => {
    console.log('PWA installed successfully');
});
