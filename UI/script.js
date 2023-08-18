const openButton = document.getElementById('add_task_button');
const closeButton = document.getElementById('closeBtn');
const addButton = document.getElementById("addBtn");
const overlay = document.getElementById('add_task');


openButton.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

addButton.addEventListener('click',addbutton_onclick)


//html初期設定
function set_hh_mm_options() {
    const hh = document.getElementById("hh");
    const mm = document.getElementById("mm");
    //時間 hh
    for (let i = 0; i < 24; i++) {
        const elem = document.createElement("option");
        elem.setAttribute("value", i.toString().padStart(2, '0'));
        elem.textContent = `${i}時`;
        hh.appendChild(elem);
    }
    //分 mm
    for (let i = 0; i < 60; i++) {
        const elem = document.createElement("option");
        elem.setAttribute("value", i.toString().padStart(2, '0'));
        elem.textContent = `${i}分`;
        mm.appendChild(elem)
    }
}

//eventlistener


/**
## addbutton_onclick
*/
function addbutton_onclick(){
    const ask_task_title = document.getElementById("ask_task_title");
    const ask_task_date = document.getElementById("ask_task_date");
    const select_hh = document.getElementById("hh");
    const select_mm = document.getElementById("mm");
    const ask_task_memo = document.getElementById("ask_task_info");

}


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
    const task_memo = document.createElement("p");
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
        "タイトル",
        `
        \nダミー
        \nダミー
        \nダミー`,
        10
    )
    console.log("ask_task_title",ask_task_title.value)
    console.log("ask_task_date",ask_task_date.value)
    console.log("select_hh",select_hh.value)
    console.log("select_mm",select_mm.value)
    console.log("ask_task_memo",ask_task_memo.value)
}



//初期設定

set_hh_mm_options()

main()