
const MyPromise = (()=>{
    const PENDING = 'pending',
          RESOLVED= 'resolved',
          REJECTED = 'rejected',
          PromiseValue =  Symbol('PromiseValue'),  //状态数据
          PromiseStatus = Symbol('PromiseStatus'), // 当前状态
          changeStatus = Symbol('ChangeStatus'),  //改变状态
          thenables = Symbol('thenable'),
          catchables = Symbol('catchable'),
          settleHandle = Symbol('settleHandle'),
          linkPromise = Symbol('linkPromise');
    return class {
        
        /**
         * 
         * @param { Function } executor 未决状态下(pending) 下的处理函数 
         */
        constructor(executor){
            this[PromiseValue] = undefined;
            this[PromiseStatus] = PENDING;
            this[thenables] = [];
            this[catchables] = [];
            const resolve = data=>{
                this[changeStatus](RESOLVED,data,this[thenables])
            },
            reject = reason=>{
                this[changeStatus](REJECTED,reason,this[catchables])
            }

            try {
                executor(resolve,reject);
            } catch (error) {
                reject(error)
            }
          
        }

        [linkPromise](thenable,catchable){
            return new MyPromise((resolve,reject)=>{

            })
        }

        /**
         * 
         * @param {*} newStatus 改变的状态
         * @param {*} newValue 改变的值
         * @param {Array} queue 要执行的队列
         */
        [changeStatus](newStatus,newValue,queue){
            if(this[PromiseStatus] !== PENDING){
                return
            }
            this[PromiseStatus] =newStatus;
            this[PromiseValue] = newValue;
            queue.forEach(handler=>handler(newValue))
        }
        /**
         * 
         * @param {*} handler 
         * @param {*} immediatelyStatus 
         * @param {*} queue 
         */
        [settleHandle](handler,immediatelyStatus,queue){
            if(typeof handler !== 'function'){
                return
            }
            if(this[PromiseStatus === immediatelyStatus]){
                setTimeout(()=>{
                    handler(this[PromiseValue])
                },0)
                
            }else{
                queue.push(handler);
            }
        }

        then(thenable,catchable){
           this[settleHandle](thenable,RESOLVED,this[thenables])
            this.catch(catchable);
            return this[linkPromise](thenable,catchable);
        }

        catch(catchable){
            this[settleHandle](catchable,REJECTED,this[catchables])
            return this[linkPromise](undefined,catchable);
        }
        
    }
})()