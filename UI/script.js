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
## taskパネルの追加
yet領域にtaskパネルを追加します
@param {String} title
@param {String} description
deadlineはnumber型
@param {Number} deadline
*/
function add_task(title, description,deadline){
    const yet_container = document.getElementById("yet_container");
    
    //taskパネルを生成
    const task = document.createElement("div");
    task.setAttribute("class","task");

    //task title の生成 追加
    const task_title = document.createElement("h3");
    task_title.setAttribute("class","task_title");
    task_title.textContent=title;
    task.appendChild(task_title);

    //task memo の生成 追加
    const task_memo = document.createElement("div");
    task_memo.setAttribute("class","task_memo");
    task_memo.textContent=description;
    task.appendChild(task_memo);

    yet_container.appendChild(task);
}

/**
## doneにtaskパネルを移動させます
 */
function move_to_done(){

}

function main(){
    add_task(
        "タイトル","ダミー",
        10
    )
}

main()