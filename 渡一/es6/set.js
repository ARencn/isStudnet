class MySet{
    constructor(iterator = []){
        //验证是否是可迭代对象

        if(typeof iterator[Symbol.iterator] !== 'function'){
            throw new TypeError('参数非可迭代对象')
        }
        this._datas = [];
        for (const item of iterator) {
            this.add(item)
        }
    }
    add(data){
        if(!this.has(data)){
            this._datas.push(data);
        }
        
    }
    has(data){
        for (const item of this._datas) {
            if(this.isEqual(data,item)){
                return true;
            }
        }
        return false;
        
    }

    isEqual(data1,data2){
        if(data1 === 0 && data2 === 0){
            return true;
        }
        return Object.is(data1,data2);
    }
}