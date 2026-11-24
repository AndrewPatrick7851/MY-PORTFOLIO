// ================= AUTOPLAY MUTED VIDEOS ON SCROLL =================
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.scroll-video');

    if (!videos.length) return;

    function postCommand(iframe, func) {
        iframe.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: func, args: [] }),
            '*'
        );
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const iframe = entry.target;
            if (entry.isIntersecting) {
                postCommand(iframe, 'playVideo');
            } else {
                postCommand(iframe, 'pauseVideo');
            }
        });
    }, {
        threshold: 0.5 // video must be 50% visible to trigger
    });

    videos.forEach((iframe) => observer.observe(iframe));
});