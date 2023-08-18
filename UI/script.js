const openButton = document.getElementById('add_task_button');
const closeButton = document.getElementById('closeBtn');
const overlay = document.getElementById('add_task');

openButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});




/**
# taskパネルの追加
@param {string} title

 */
function add_task(title){

}

function move_to_done(){
    
}