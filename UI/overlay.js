const openButton = document.getElementById('add_task_button');
const closeButton = document.getElementById('closeBtn');
const addButton = document.getElementById("addBtn");
const overlay = document.getElementById('add_task');


openButton.addEventListener('click', async () => {
    overlay.style.display = 'flex';
    init_form();//popupの初期化
    await set_outside_onclick_event();
});

closeButton.addEventListener('click', onclose_popup);

addButton.addEventListener('click',addbutton_onclick);


//#html初期設定
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

//#formの初期化
/**
# formの初期化
 */
function init_form(){
    //on open popup window
    const ask_task_title = document.getElementById("ask_task_title");
    const ask_task_date = document.getElementById("ask_task_date");
    const select_hh = document.getElementById("hh");//この二つはデフォルトの入力が絶対にある
    const select_mm = document.getElementById("mm");//この二つはデフォルトの入力が絶対にある
    const ask_task_memo = document.getElementById("ask_task_info");

    ask_task_title.value="";
    ask_task_date.value = "";
    select_hh.value="00";
    select_mm.value="00";
    ask_task_memo.value = "";

    const error_msgs =document.getElementsByClassName("ask_error") ;
    for (const elem of error_msgs){
        console.log(elem);
        elem.style.color="red";
        elem.style.display="none";
    }
}



//イベントのセッティング
/**
 * 
 */

function set_outside_onclick_event() {
    return new Promise((resolve) => {
        setTimeout(() => {

            //New Task欄以外をタップしたりクリックしたりするのはクローズの操作と等価とみなす
            document.addEventListener("click", onclick_outside);

            resolve();
        }, 100);  // 0.1秒後に非同期処理が完了
    });
}

//#eventlistener
//#on any event




/**
## addbutton_onclick
### add buttonが押されたときの処理
 */
function addbutton_onclick(){
    const ask_task_title = document.getElementById("ask_task_title");
    const ask_task_date = document.getElementById("ask_task_date");
    const select_hh = document.getElementById("hh");//この二つはデフォルトの入力が絶対にある
    const select_mm = document.getElementById("mm");//この二つはデフォルトの入力が絶対にある
    const ask_task_memo = document.getElementById("ask_task_info");
    //各入力欄は必ず埋めなければならない
    //入力に欠けがあった場合errorみたいなものを出してuserに伝える
    const ask_title_error = document.getElementById("ask_title_error");
    const ask_deadline_error = document.getElementById("ask_deadline_error");

    let error_flag = false;
    if (ask_task_title.value.length===0){//タイトルが入力されていない
        error_flag=true;
        ask_title_error.style.display = "flex";
    }else{//タイトルが入力されている
        ask_title_error.style.display = "none";
    }
    if (ask_task_date.value.length===0) {//日付が入力されていない
        error_flag=true;
        ask_deadline_error.style.display = "flex";
    }else{//日付が入力されている
        ask_deadline_error.style.display = "none";
    }
    if (ask_task_memo.value.length===0){//メモが入力されてない
        
    }else{//されてる
    }

    if (error_flag){
        //errorがあればスルー
    }else{
        // errorがなければ
        add_task(
            ask_task_title.value,
            ask_task_memo.value,
        );
        onclose_popup();
    }
}


/**
 * # 要素root内にある要素targetが含まれるかどうかを再帰的に探索する関数
 * @param {object} root 
 * @param {object} target 
 * @returns {bool}
 */
function containsElement(root, target) {
    if (root === target) {
        return true;
    }

    for (const child of root.children) {
        if (containsElement(child, target)) {
            return true;
        }
    }

    return false;
}

/**
 * # onclick_outside
 * ## popupを開いているときpopup領域以外がクリックされたときの処理
 * @param {*} event 
 */
function onclick_outside(event){
    //範囲外をクリックされたかをチェックをする
    const elem = document.getElementById("popup");
    console.log(event.target);
    if (event.target !== elem && !containsElement(elem,event.target)) {
        console.log("outside");
    }
    //popup範囲外がクリックされたらpopupを閉じて終了する


}

/**
 * # ポップアップが閉じられた時の処理
 */
function onclose_popup(){
    overlay.style.display = 'none';
    document.removeEventListener("click",onclick_outside);
}


/**
 *## taskパネルの追加
 *yet領域にtaskパネルを追加します
 *@param {String} title
 *@param {String} description
 *deadlineはnumber型
 *@param {Number} deadline
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

    const edit_button =    document.createElement("div");
    const delete_button =  document.createElement("div");
    const done_button =    document.createElement("div");
    //トグルボタン
    const run_toggle_button = document.createElement("div")
    
    //トグルチャイルド
    const runcheck_span = document.createElement("span");
    runcheck_span.textContent = "待機中...";
    const runcheck_label =document.createElement("label");
    runcheck_label.setAttribute("class", "toggle-switch");
    //トグルチャイルド：ラベルのチャイルド
    const runcheck_label_input = document.createElement("input");
    runcheck_label_input.setAttribute("type", "checkbox");
    runcheck_label_input.setAttribute("class", "toggle-input");
    const runcheck_label_span = document.createElement("span");//ボタンのサークル
    runcheck_label_span.setAttribute("class", "toggle-slider");
    runcheck_label.appendChild(runcheck_label_input);
    runcheck_label.appendChild(runcheck_label_span);

    //トグルチャイルドを追加
    run_toggle_button.appendChild(runcheck_span);
    run_toggle_button.appendChild(runcheck_label);



    /**
    ```html
    <div class="run_check">
        <span>実行中</span>
        <label class="toggle-switch">
            <input type="checkbox" class="toggle-input">
            <span class="toggle-slider"></span>
        </label>
    </div>
    ```
    */
    
    edit_button.textContent="Edit";
    delete_button.textContent="Delete";
    done_button.textContent="Done!";

    edit_button.setAttribute("class", "task_ope_button task_ope_button_edit");
    delete_button.setAttribute("class", "task_ope_button task_ope_button_delete");
    done_button.setAttribute("class", "task_ope_button task_ope_button_done");
    run_toggle_button.setAttribute("class","task_ope_button run_check")


    const task_ope = document.createElement("div");
    task_ope.setAttribute("class","task_ope");
    
    
    
    edit_button.addEventListener("click",()=>{
        task_edit();
    });
    delete_button.addEventListener("click",()=>{
        task_delete();
    });
    done_button.addEventListener("click",()=>{
        task_done();
    });

    task_ope.appendChild(run_toggle_button);
    task_ope.appendChild(edit_button);
    task_ope.appendChild(delete_button);
    task_ope.appendChild(done_button);


    task.appendChild(task_ope);

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

    const ask_task_title = document.getElementById("ask_task_title");
    const ask_task_date = document.getElementById("ask_task_date");
    const select_hh = document.getElementById("hh");
    const select_mm = document.getElementById("mm");
    const ask_task_memo = document.getElementById("ask_task_info");
    console.log("ask_task_title",ask_task_title.value)
    console.log("ask_task_date",ask_task_date.value)
    console.log("select_hh",select_hh.value)
    console.log("select_mm",select_mm.value)
    console.log("ask_task_memo",ask_task_memo.value)
}



//初期設定

set_hh_mm_options()

main()