export default function formatTime(time: number) {
    let date = new Date(time); // 初始化日期
    let year = date.getFullYear(); //获取年份
    let month = date.getMonth() + 1; // 获取月份
    let day = date.getDate(); // 获取具体日
    let hour = date.getHours(); // 获取时
    let minutes = date.getMinutes(); // 获取分
    let seconds = date.getSeconds(); // 获取秒
    return year + '-' + month + '-' + day + '-' + hour + '-' + minutes + '-' + seconds
}
