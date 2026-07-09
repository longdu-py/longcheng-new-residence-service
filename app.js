// 顶部实时时间
function updateTime(){
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN');
    document.getElementById('nowTime').innerText = timeStr;
}
updateTime();
setInterval(updateTime,1000);

// 模拟本地存储表单提交（报修/发布功能本地保存）
function saveLocalData(key,data){
    let list = JSON.parse(localStorage.getItem(key) || '[]');
    list.unshift(data);
    localStorage.setItem(key,JSON.stringify(list));
}
function getLocalData(key){
    return JSON.parse(localStorage.getItem(key) || '[]');
}
