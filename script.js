function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

    const colors = ['#ff4d6d', '#ff758f', '#ff9a9e', '#ffd6e0'];
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 150);

function showSurprise() {
    document.getElementById('message').style.display = 'block';
    document.getElementById('bigHeart').style.display = 'block';
    fireworks();
}

function fireworks() {
    const colors = ['#ff4d6d', '#ffd166', '#ffffff', '#ff9a9e'];

    for (let i = 0; i < 80; i++) {
        const fw = document.createElement('div');
        fw.className = 'firework';

        fw.style.left = '50%';
        fw.style.top = '50%';
        fw.style.background = colors[Math.floor(Math.random() * colors.length)];
        fw.style.setProperty('--x', (Math.random() - 0.5) * 400 + 'px');
        fw.style.setProperty('--y', (Math.random() - 0.5) * 400 + 'px');

        document.body.appendChild(fw);
        setTimeout(() => fw.remove(), 1000);
    }
}
