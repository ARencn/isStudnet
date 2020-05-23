(function() {
    function JQuery(selector) {
        return new JQuery.prototype.init(selector)
    }
    JQuery.prototype.init = function(selector) {
        let dom;
        this.length = 0;
        if (selector == null) {
            return this;
        }

        if (typeof selector == 'string') {
            if (selector.indexOf('.') != -1) {
                dom = document.getElementsByClassName(selector.slice(1));
            } else if (selector.indexOf('#') != -1) {
                dom = document.getElementById(selector.slice(1));
            }
        }


        if (selector instanceof Element || dom.length == null) {
            this[0] = dom || selector;
            this.length++;
        } else {
            for (let i = 0; i < dom.length; i++) {
                this[i] = dom[i];
                this.length++;
            }
        }
    }


    //传入索引找出相应元素
    jQuery.prototype.get = function(num) {
        return num != null ? (num >= 0 ? this[num] : this[num + this.length]) : [].slice.call(this, 0);
    }



    JQuery.prototype.init.prototype = JQuery.prototype;




    window.jQuery = window.$ = JQuery;
})()