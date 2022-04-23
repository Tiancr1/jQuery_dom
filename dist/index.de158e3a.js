jQuery('.test') //因为jQuery不返回元素们，返回的是一个api对象;用jQuery找到test，用返回得到的对象通过addClass方法添加className
//下面的return this的作用就是 api->addClass('red')->api->addClass('blue')->api->addClass('green')
.addClass('red') //这个api里有addClass,作用是遍历所有刚才获取的元素，添加.red。
.addClass('blue') //因为addClass执行完返回了api，所以api.addClass()就等于api————这叫做链式操作
.addClass('green') //函数如果用一个对象来调用的话，这个函数里的this就是对象，所以this就是api
;
jQuery('.test1').find('.child').addClass('blue').end().addClass('green');
const x = jQuery('.test');
//x是可以操作所有child的api，所以x可以使用each；(div)=>console.log(div)是一个函数
//这个函数会被each调用
x.parent().print();
x.children().print();

//# sourceMappingURL=index.de158e3a.js.map
