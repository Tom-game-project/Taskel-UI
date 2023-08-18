const openButton = document.getElementById('openBtn');
const closeButton = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

openButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});
