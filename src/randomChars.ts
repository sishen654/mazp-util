export default function randomChars(len: number): string {
    const result: string[] = [];

    for (let i = 0; i < len; i++) {
        // 生成0~25的随机数字
        const ram = Math.ceil(Math.random() * 25);
        // 获取大写字母（A~Z的ASCII码65-90）
        const char = String.fromCharCode(65 + ram);
        // 随机转为大小
        result.push(Math.random() > 0.5 ? char.toLowerCase() : char);
    }

    return result.join('');
}
