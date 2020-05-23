(function () {
    function jQuery(selector) {
        return new jQuery.prototype.init(selector)
    }
    jQuery.prototype.init = function (selector) {
        let dom;
        //选出 dom 标签 并且包装为 jquery对象 返回
        this.length = 0;
        if (selector == null) {
            return this;
        }


        if (typeof selector == 'string' && selector.indexOf('.' != -1)) {
            dom = document.getElementsByClassName(selector.slice(1));

        } else if (typeof selector == 'string' && selector.indexOf('#' != -1)) {
            dom = document.getElementById(selector.slice(1));
        }

        if (selector instanceof Element || dom.length == undefined) {
            this[0] = dom || selector;
            this.length++;
        } else {
            for (let i = 0; i < dom.length; i++) {
                this[i] = dom[i];
                this.length++;
            }
        }

    }


    jQuery.prototype.css = function (config) {
        for (const attr in config) {
            if (config.hasOwnProperty(attr)) {
                this[i].style[attr] = config[attr];
            }
        }
        //链式操作
        return this;
    }

    //获取该元素内的索引子元素 的 原生dom对象  不传即选中所有
    jQuery.prototype.get = function (num) {
        return num == null ? [].slice.call(this, 0) : (num >= 0 ? this[num] : this[num + this.length])
    }
    //获取该元素内的索引子元素 的 原生dom对象  不传即什么都不选
    jQuery.prototype.eq = function (num) {
        let dom = num != null ? (num >= 0 ? this[num] : this[num + this.length]) : null;
        return this.pushStack(dom);
    }

    //给对象添加prevObject
    jQuery.prototype.pushStack = function (dom) {

        if (dom.constructor != jQuery) {
            jQuery(dom);
        }
        dom.prveObject = this;
        return dom;
    }
    jQuery.prototype.add = function (selector) {
        let curObj = jQuery(selector);
        let baseObj = this;
        let newObj = jQuery();
        console.log(this.length)
        for (let i = 0; i < baseObj.length; i++) {
            newObj[newObj.length++] = baseObj[i];
        }
        for (let i = 0; i < curObj.length; i++) {
            newObj[newObj.length++] = curObj[i];
        }
        newObj.prveObject = this;
        this.pushStack(newObj);
        return newObj;

    }
    jQuery.prototype.end = function () {
        return this.prveObject;
    }
    jQuery.prototype.myOn = function (type, handler) {
        for (let i = 0; i < this.length; i++) {
            if (!this[i].cacheEvent) {
                this[i].cacheEvent = {};
            }    
            if (!this[i].cacheEvent[type]) {
                this[i].cacheEvent[type] = [handler];
            } else {
                this[i].cacheEvent[type].push(handler);
            }


        }
    }
    jQuery.prototype.myTrigger = function (type) {
        var parmams = arguments.length > 1 ? [].slice.call(arguments,1) : [];
        let self = this;
        for(let i = 0; i<this.length;i++){
            if(this[i].cacheEvent[type]){
                this[i].cacheEvent[type].forEach(function(ele,index){
                    ele.apply(self,parmams)
                });
            }
        }
    }

    jQuery.prototype.myQueue = function(){
        var queueObj = this;
        var queueName = arguments[0] || 'fx' ;
        var addFuc = arguments[1] || null;
        var len =arguments.length;

        //获取队列
        if(len == 1){
            return  queueObj[0][queueName];
        }

        //添加队列
        queueObj[0][queueName] == undefined  ?  queueObj[0][queueName] = [addFuc] :  queueObj[0][queueName].push(addFuc);
        return this;

    }
    jQuery.prototype.myDequeue = function(type){
        var self = this;
        var queueName = arguments[0] || 'fx' ;
        var queueArr = this.myQueue(queueName);
        var currFuc = queueArr.shift();
        if(currFuc == undefined){
            return;
        }
        function next(){
            self.myDequeue(queueName)
        }
        currFuc(next);
        return this;
    }
    
    jQuery.prototype.myDelay = function(duration){
        var queueArr  = this[0]['fx'];
        queueArr.push(function(next){
            setTimeout(function(){
                next();
            },duration)
        })
        return this;

    }


    jQuery.prototype.myAnimate = function(){

        var let =  this.length;
        var self = this;
        //添加到最后的队列里 的函数
        var baseFuc = function(){
            var times = 0;
            for(var i = 0 ;i<len ;i++){
                startMove(self[i],json,function(){
                    times++;
                    if(times == len){
                        callblack && callblack();
                        next();
                    }
                })
            }
        }
        this.myQueue('fx',baseFuc)

        if(this.myQueue('fx').length == 1){
            this.myDequeue('fx');
        }


        function getStyle (obj, attr) {
            if (obj.currentStyle) {
                return obj.currentStyle[attr];
            }else {
                return window.getComputedStyle(obj,false)[attr];
            }
        }
                
        function startMove (obj, json, callblack) {
            clearInterval(obj.timer);
            var iSpeed;
            var iCur;
            var name;
            obj.timer = setInterval(function () {
                var bStop = true;
                for (var attr in json) {                            
                    if (attr === 'opacity') {                                
                        name = attr;
                        iCur = parseFloat(getStyle(obj, attr)) * 100;
                    }else {
                        iCur = parseInt(getStyle(obj, attr));
                    }                            
                    iSpeed = (json[attr] - iCur) / 7;
                    if (iSpeed > 0) {
                        iSpeed = Math.ceil(iSpeed);
                    }else {
                        iSpeed = Math.floor(iSpeed);
                    }
                    if (attr === 'opacity') {
                        obj.style.opacity = (iCur + iSpeed) / 100;
                    }else {
                        obj.style[attr] = iCur + iSpeed + 'px';
                    }
                    if (json[attr] - iCur !== 0) {
                        bStop = false;
                    }
                }
                if (bStop) {
                    clearInterval(obj.timer);
                    callblack();
                }
            }, 30);
        }

        return this;   
    }

    JQuery.myCallbacks = function(){
        // once memory null
        //存储参数
        var  options =arguments[0] || '';
        //通过add 来加入方法
        var list = [];
        //记录当前要执行函数的索引
        var fireIndex = 0;
        //实际参数列表
        var args= [];
        //记录是否被fire过
        var fired  =false;

        var fire = function(){
            for(;fireIndex<list.length;fireIndex){
                list[fireIndex].apply(window,args);
            }
            if(options.indexOf('once') != -1){
                list = [];
                fireIndex = 0;
            }
        }
        return{
            add:function(func){
                lsit.push(func)
                if(options.indexOf('memory') != -1 && fired ){
                   fire();
                }
                return this;
            },
            fire:function(){
                fireIndex =0;
                args = arguments;
                fired =true;
                fire();
            }
        }
    }

    //给原型链赋予jQuery的原型链
    jQuery.prototype.init.prototype = jQuery.prototype;

    //将jQuery 对象保存到全局变量环境中
    window.$ = window.j = jQuery;
})()