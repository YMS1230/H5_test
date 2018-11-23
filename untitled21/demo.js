/**
 * 改变文字颜色
 */
function test1() {
    let tmp = document.getElementById("p_test1");
    tmp.style.color = "#FF4545";
}
/**
 * 验证输入
 */
function test2() {
    var tmp = document.getElementById("input_test").value;
    if (tmp == "" || isNaN(tmp)) {
        alert("请输入正确的数字!");
    }
}