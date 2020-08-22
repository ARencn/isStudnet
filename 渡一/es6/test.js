class Test{
    constructor(a){
    
        this.a = a
        console.log( this.a)
    }

    v = 4

    get a (){
        return this.v
    }
    set a(val){
        this.v = val
    }
}
