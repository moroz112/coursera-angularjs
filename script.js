(function() {
function some(a) {
    // return function f(b) {
    //     console.log("total", a + b)
    // }
    console.log("ololo", a);
    return some;
}
some(4)(5)(5)(12)(11)(3);
some(2)(3);
var a = some(3);
    console.log(a);
})();