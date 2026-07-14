var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
 {
    var blockvar=" i m a block variable";
    var blocklet="i m block but scoped with let";
    const blockconst="i m a block const";
 }
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
//console.log(blockvar);
//console.log(blocklet);
console.log(blockconst);
function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError
    