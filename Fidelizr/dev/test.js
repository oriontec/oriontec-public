if(typeof testObject === "undefined"){ //In case of duplication 

var testObject;
var test = function(){
    
};

test.prototype.initEvents = function(){
    console.log('On test');
};


testObject = new test();

testObject.initEvents();


}