var playRenderButton = document.getElementById('play-render');
var header = document.getElementById('header');

playRenderButton.addEventListener('click', () => {
    var renderPlayer = document.createElement('video');
    var closeRenderPlayer = document.createElement('button');
    renderPlayer.style.width = '100%';
    renderPlayer.style.height = '100vh';
    renderPlayer.style.zIndex = '999';
    renderPlayer.style.position = 'absolute';
    renderPlayer.style.top = '0';
    renderPlayer.style.backgroundColor = '#000';
    renderPlayer.setAttribute('src', 'assets/videos/video-1.mp4');
    header.appendChild(renderPlayer);

    setTimeout(() => {
        renderPlayer.play();
    }, 100);

    closeRenderPlayer.innerHTML = 'Close Render';
    closeRenderPlayer.style.zIndex = '9999';
    closeRenderPlayer.style.position = 'absolute';
    closeRenderPlayer.style.width = '100%';
    closeRenderPlayer.style.bottom = '0';
    closeRenderPlayer.style.textAlign = 'center';
    closeRenderPlayer.style.padding = '1rem'
    header.appendChild(closeRenderPlayer);

    closeRenderPlayer.addEventListener('click', () => {
        renderPlayer.pause();
        renderPlayer.currentTime = 0;
        closeRenderPlayer.remove();
        renderPlayer.remove();
    })
})