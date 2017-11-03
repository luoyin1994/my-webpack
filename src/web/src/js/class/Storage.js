class Storage {
    constructor() {

    }

    getItem(key) {
        let data = localStorage.getItem(key);
        if (data) {
            if (!/^function(.|\n|\r)*\}$/.test(data)) {
                data = JSON.parse(data);
            } else {
                data = eval(data);
            }
            return data;
        }
        return false;
    }

    setItem(key, value) {
        let data;
        if (typeof value !== 'function') data = JSON.stringify(value);
        return localStorage.setItem(key, data);
    }
}

export default Storage;

