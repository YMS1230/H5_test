/**
 * 验证输入
 */
function test1() {
    var tmp = document.getElementById("input_test").value;
    if (tmp == "" || isNaN(tmp)) {
        alert("请输入合法的数字");
    }
}
/**
 * 修改内容
 */
function test2() {
    document.getElementById("p_test").innerHTML = "我的第一段JavaScript代码";
}
/**
 * 测试JavaScript把标签写入HTML 并且在文档结束后 会覆盖所有的
 */
function test3(){
    document.write("糟糕，\
    文档消失了");
}