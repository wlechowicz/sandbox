module.exports = class Random {
    constructor() {

    }

    static hexString(length = 8) {
        if (!length || length < 1) {
            return '';
        }
        const chars = '0123456789abcdef';
        let result = '';
        for (let i = 0; i < length; i ++) {
            result += chars.charAt(Math.floor(Math.random() * 16));
        }
        return result;
    }
}