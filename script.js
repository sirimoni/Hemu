function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';

    const colors = ['#ff4d6d', '#ff758f', '#ff9a9e', '#ffb3c1'];
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 200);

function showMessage() {
    document.getElementById('message').style.display = 'block';
}
