//可重复调用的加载函数
function myAddEvent(obj,sEv,fn){
  if(obj.attachEvent){
    obj.attachEvent('on'+sEv,function(){
      fn.call(obj);//兼容ie
    });
  }else{
    obj.addEventListener(sEv,fn,false);
  }
}

//class选择器调用函数
function getByClass(oParent,sClass){
  let aEle=oParent.getElementsByTagName('*');//选择父元素的所有元素
  let aResult=[];
  let re=new RegExp('\\b'+sClass+'\\b','i');//正则边界
  let i=0;
  for(i=0;i<aEle.length;i++){
    if(re.test(aEle[i].className)){
      aResult.push(aEle[i]);
    }
  }
  return aResult;
}

//获取计算后的样式
function getStyle(obj,attr){
  //元素，样式
  if(obj.currentStyle){//兼容ie9及以下
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,false)[attr];
  }
}

//定义dQuery对象
function dQuery(vArg){//参数是变体变量
  this.elements=[];//选择器选择的元素扔到这个数组中
  switch(typeof vArg){
    //如果参数是函数
    case 'function':
      myAddEvent(window,'load',vArg);
      break;
    //如果参数是字符串
    case 'string':
      switch(vArg.charAt(0)){
        case '#'://id选择器参数应该为#号之后的字符段
          let obj=document.getElementById(vArg.substring(1));
          this.elements.push(obj);
          break;

        case '.'://class
          this.elements=getByClass(document,vArg.substring(1));
          break;

        default://标签
          this.elements=document.getElementsByTagName(vArg);
      }
      break;
    //如果参数是对象。
    case 'object':
      this.elements.push(vArg);

  }
}

//定义简写
function $d(vArg){
  return  new dQuery(vArg);
}


//对选择器函数绑定click事件
dQuery.prototype.click=function(fn){
  let i=0;
  //对于返回器数组的内容
  for(i=0;i<this.elements.length;i++){
    myAddEvent(this.elements[i],'click',fn);
  }
};

//对选择器函数绑定show/hide事件
dQuery.prototype.show=function(){
  let i=0;
  //对于返回器数组的内容
  for(i=0;i<this.elements.length;i++){
    this.elements[i].style.display='block';
  }
};

dQuery.prototype.hide=function(){
  let i=0;
  //对于var返回器数组的内容
  for(i=0;i<this.elements.length;i++){
    this.elements[i].style.display='none';
  }
};

//hover方法
dQuery.prototype.hover=function(fnover,fnout){
  let i=0;
  //对于返回器数组的内容
  for(i=0;i<this.elements.length;i++){
    //给这个对象一次性绑定两个事件
    myAddEvent(this.elements[i],'mouseover',fnover);
    myAddEvent(this.elements[i],'mouseout',fnout);
  }
};

//css方法
dQuery.prototype.css=function(attr,value){
  if(arguments.length===2){//当参数个数为2时，使用设置css的方法
    let i=0;
    for(i=0;i<this.elements.length;i++){
      this.elements[i].style[attr]=value;
    }
  }else{//只有一个参数时获取样式
    return getStyle(this.elements[0],attr);
  }
};

//toggle方法：
dQuery.prototype.toggle=function(){
  let _arguments=arguments;//把toggle的arguments存起来，以便在其它函数中可以调用。

  //私有计数器，计数器会被一组对象所享用。
  function addToggle(obj){
    let count=0;
    myAddEvent(obj,'click',function(){
      _arguments[count++%_arguments.length].call(obj);
    })
  }

  let i=0;
  for(i=0;i<this.elements.length;i++){
    addToggle(this.elements[i]);
  }
};


//attr方法和css方法类似。
dQuery.prototype.attr=function(attr,value){
  if(arguments.length===2){//设置属性
    let i=0;

    for(i=0;i<this.elements.length;i++){
      this.elements[i][attr]=value;
    }
  }else{//获取属性
    return this.elements[0][attr];
  }
};

//eq选择器
dQuery.prototype.eq=function(n){
  return new dQuery(this.elements[n]);
};


//find选择器
//定义一个小函数，两个数组（元素集合），把两个类数组（html元素集合）合并在一块。
function appendArr(arr1, arr2){
  let i=0;

  for(i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
  }
}

dQuery.prototype.find=function(str){
  let i=0;
  let aResult=[];//存放临时数据

  for(i=0;i<this.elements.length;i++){
    let aEle = null;
    switch(str.charAt(0)){

      case '.'://class类
        aEle=getByClass(this.elements[i],str.substring(1));
        aResult.concat(aEle);//桥接到aResult内。但是
        break;

      default://其它标签名(TagName)
        aEle=this.elements[i].getElementsByTagName(str);
        appendArr(aResult,aEle);
    }
  }
  let newdQuery=new dQuery();
  newdQuery.elements=aResult;
  return newdQuery;//保持可链。
};

//获取索引值函数
function getIndex(obj){
  let aBrother=obj.parentNode.children;
  let i=0;

  for(i=0;i<aBrother.length;i++){
    if(aBrother[i]===obj){
      return i;
    }
  }
}
dQuery.prototype.index=function(){
  return getIndex(this.elements[0]);
};

export {
  $d
}
