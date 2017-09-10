var Calc = function (start) {
    var that = this;
    this.add = function (x) {
        start = start + x;
        return that;
    };
    
    this.multiply = function (x) {
        start = start * x;
        return that;
    };
    
    this.equals = function (callback) {
        callback(start);
        return that;
    };
}

//module.exports = Calc;

module.exports = {
    add: function (x, y) {
        return new Calc(x).add(y || 0);
    },
    multiply: function (x, y) {
        return new Calc(x).multiply(y || 1)
    }
};


