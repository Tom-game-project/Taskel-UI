const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const popup = document.getElementById('popup');

openButton.addEventListener('click', () => {
    popup.style.display = 'flex'; // ポップアップを表示する
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'; // ポップアップを非表示にする
});
