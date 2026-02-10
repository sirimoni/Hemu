function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

    const reds = ['#ff1e4d', '#ff0033', '#e60026', '#ff4d6d'];
    heart.style.background = reds[Math.floor(Math.random() * reds.length)];

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 180);

function showMessage() {
    document.getElementById('message').style.display = 'block';
}
