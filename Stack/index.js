var Stack = /** @class */ (function () {
    function Stack(_data) {
        this._data = _data;
    }
    Stack.prototype.push = function (item) {
        if (!this._data) {
            this._data = [item];
        }
        else {
            this._data.push(item);
        }
    };
    Stack.prototype.pushMany = function (items) {
        var _this = this;
        if (items.length > 0) {
            items.forEach(function (item) { var _a; return (_a = _this._data) === null || _a === void 0 ? void 0 : _a.push(item); });
        }
        else {
            throw new Error("Cannot push empty Array");
        }
    };
    Stack.prototype.pop = function (amount) {
        var _a;
        if (amount === void 0) { amount = 1; }
        if (!this._data) {
            throw new Error("Cannot pop an empty stack");
        }
        else if (amount < 1) {
            throw new Error("Cannot push less than one Item");
        }
        else if (amount > 1) {
            if (amount > ((_a = this._data) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error("Number of items to pop is too big.");
            }
            else {
                for (var i = 0; i < amount; i++) {
                    this._data.pop();
                }
            }
        }
        else {
            return this._data.pop();
        }
    };
    Stack.prototype.getLength = function () {
        var _a;
        return (_a = this._data) === null || _a === void 0 ? void 0 : _a.length;
    };
    return Stack;
}());
var stack = new Stack();
stack.push('First Item');
stack.push('Second Item');
stack.push(new Stack(['1', 2, 3, '4']));
console.log(stack.pop());
