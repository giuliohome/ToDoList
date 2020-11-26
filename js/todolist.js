export default class ToDoList {
    constructor() {
        this._list = [];
    }

    getList() {
        return this._list;
    }

    clearList() {
        this._list = [];
    }
}