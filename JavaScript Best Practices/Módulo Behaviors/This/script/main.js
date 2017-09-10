var obj = {
    val: 'Hi there',
    printVal: function() {
        console.log(this); //var print = obj.printVall.bind(obj2);
        console.log(this.val);//'hi there', 'whats up'
    }
};

obj.printVal(); //hi there

var obj2 = {
    val: 'Whats up'
};

//
//var print = obj.printVall.bind(obj2);
var print = obj.printVal;
print(); //undefined, no apunta a nada

obj2.printVal = obj.printVal;
obj2.printVal();//Whats up
