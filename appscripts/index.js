

const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    request();
});



/**
 * @param {string} text 
 */
function request(text) {
    google.script.run.withSuccessHandler(example_return).example(
        text
    );
}
function example_return(ret) {
    // サーバーサイド関数の戻り値を使用する処理
    // サーバーサイド関数の戻り値が表示される
    console.log("予想 :", ret);
}