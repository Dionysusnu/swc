let C = class _class extends class _class1 extends class _class2 {
    constructor(){
        this.a = 1;
    }
} {
    constructor(...args){
        super(...args);
        this.b = 2;
    }
} {
    constructor(...args){
        super(...args);
        this.c = 3;
    }
};
let c = new C();
c.a;
c.b;
c.c;