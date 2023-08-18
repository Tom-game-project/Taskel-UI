const openButton = document.getElementById('add_task_button');
const closeButton = document.getElementById('closeBtn');
const overlay = document.getElementById('add_task');

openButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});
