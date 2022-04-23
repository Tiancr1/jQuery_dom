//核心思想：jQuery提供一个函数，这个函数接收一个选择器，根据这个选择器得到一些元素，然后返回一个对象，这个对象有一个方法可以操作这个元素
//jQuery不能只接收一个选择器，还得接收一个数组
window.jQuery = function(selectorOrArray) {
    //声明一个elements，让他的值为空，然后根据选择器是string还是Array，分别赋予不同的值，然后再返回一个api去操作它
    let elements;
    if (typeof selectorOrArray === 'string') elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) //如果接收的是一个数组，就让xin'de
    elements = selectorOrArray;
    //api 可以操作elements api是一个对象，这个对象的key是addClass，他的value是一个函数
    //也可以写成 
    // const api = {
    //     "addClass":function(){console.log(elements)}
    // }
    //const api = 
    return {
        oldApi: selectorOrArray.oldApi,
        //这是一个闭包：函数访问了外部的变量（addClass访问了elements，这个elements是外部的变量）
        addClass (className) {
            for(let i = 0; i < elements.length; i++)//给第i个elements添加className
            elements[i].classList.add(className);
            //return api  把addClass返回给api
            return this //这个函数里的this就是对象，所以this就是api
            ;
        },
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++)//用之前的空数组连接上新的元素，然后把新的元素得到的新数组再放回array
            array = array.concat(Array.from(elements[i].querySelectorAll(selector)));
            array.oldApi = this //this就是api
            ;
            const newApi = jQuery(array);
            //因为不能return之前的api，我们需要一个新的api，这个新的api需要通过jQuery构造出来
            return newApi;
        //可以简写成return jQuery(array)
        },
        end () {
            return this.oldApi //this是当前的api（api2） 所以this.oldApi就是api1
            ;
        },
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
            return this;
        },
        parent () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(node.parentNode);
            });
            return jQuery(array);
        },
        children () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(...node.children);
            });
            return jQuery(array);
        },
        print () {
            console.log(elements);
        }
    };
// return api 声明了一个对象叫api，return这个对象，那可以直接return这个对象
};

//# sourceMappingURL=index.3e2f9b55.js.map
