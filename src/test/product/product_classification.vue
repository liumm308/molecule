<template>
  <div class="product-classfication">
    <div class="product-classfication-content" @click = 'testSomething'>产品分类模块</div><div class="list_group">testSomething<div class="dddd">subDiv</div></div>
    <div id="tab">
      <ul class="list_group">
        <li class=".content-test-li"><a class="active" href="javascript:;">1</a></li>
        <li class=".content-test-li"><a href="javascript:;">2</a></li>
        <li class=".content-test-li"><a href="javascript:;">3</a></li>
        <li class=".content-test-li"><a href="javascript:;">4</a></li>
      </ul>
      <div class="box">
        <div class="content-test-dq">
          <img alt="1" src="../../assets/img/shuziyi.png">
        </div>
        <div class="content-test-dq">
          <img alt="2" src="../../assets/img/shuzier.png">
        </div>
        <div class="content-test-dq">
          <img alt="3" src="../../assets/img/shuzisan.png">
        </div>
        <div class="content-test-dq">
          <img alt="4" src="../../assets/img/shuzisi.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {$d} from './components/myJs'
  import myJs from '../commonJs/commonJs'

    export default {
        name: "product_classfication",
        data: function () {
          return{

          }
        },
        mounted(){
         this.getData();
        },
        methods: {
          getData: function () {
            $d(function(){
              $d('.content-test-li').click(function(){
                let index=$d(this).index();
                $d('.content-test-dq').hide();
                $d('.content-test-dq').eq(index).show();
                $d('.content-test-li').css('background-color','white');
                $d(this).css('background-color','#ccc');

              })
            })
          },
          testSomething: function () {
            /*if(this.$el.nodeType === 1){
             /!* console.log(this.$el.nodeName);

              console.log(this.$el.childNodes.item(0));
              console.log(this.$el.childNodes.item(1));
              console.log(this.$el.childNodes.item(2));
            *!/

              var d = this.$el.appendChild(this.$el.childNodes.item(0));
              console.log(d);
              console.log(this.$el.childNodes);
            }*/
            /*   console.log(myJs);
            let myJsExtend = (function($){
              $.testExtend = function() {
                alert("Hello Extend");
              };
              return $
            })(myJs);
            console.log(myJsExtend);
            myJsExtend.testExtend();*/
            //console.log(window);
            //let appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
            //console.log(appVersion);
            //console.log(navigator.vendor);

            function Person(){

            }
            Person.prototype = {
              name: 'Nicholas',
              age: 29,
              job: 'Software Engineer',
              showName: function () {
                alert(this.name);
              }
            };

            Object.defineProperty(Person.prototype,'constructor', {
              enumerable: false,
              value: Person
            });

            let person = new Person();
            console.log(person.name);

            this.handleSubmit();
          },
          handleSubmit () {
            let paramslmm = {
              baseInfo: {
                id: "",
              }
            };
            this.$http.post('api/test/queryUserById', paramslmm)
              .then((response) => {
                console.log(response);
              }).catch((res)=> {
                console.log(res);
            })
          },
        }
    }
</script>

<style>
  *{
    margin:0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  a{text-decoration: none;}

  #tab{
    width: 400px;
    margin:100px auto;
    height: 100%;
  }
  .list_group li{
    float: left;
  }
  .list_group li a{
    display: block;
    width: 40px;
    line-height: 30px;
    text-align: center;
  }
  .box{
    clear: both;
  }
  .content-test-dq{
    display: none;
  }
  .content-test-dq img{
    border: 1px solid black;
    width: 400px;height: 300px;
  }
</style>

<style scoped>

  .product-classfication{
    width: 100%;
    height: 600px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .product-classfication-content{
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    font-size: 16px;
  }

</style>
