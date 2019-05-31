<template>
  <div class="profession_solution">
    <div class="professtion-solution-content">
      <div class="professtion-solution-content-item">
        <el-button @click="changeComp()">test</el-button>
        <div :is="dataValue"></div>
      </div>
      <child1></child1>
      <child2></child2>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'

  let bus = new Vue();


  let child1 = {
    name: "child1",
    data: function () {
      return {
        message: '',
        infoForChild2: ''
      }
    },
    props: {

    },
    methods: {
      doChild: function () {
        this.infoForChild2 = '这是给组件2的内容';
        bus.$emit("getInfo1",this.infoForChild2);
      },
      learnOn: function () {
        bus.$on(
          "getInfo2", (massage)=>{
            this.message = massage;
          }
        )
      }
    },
    mounted(){

    },
    created(){
        this.learnOn();
    },
    components:{

    },
    template:`
        <div class="child-1">
          <div>我是兄弟1</div>
          <div>message from child-2:&nbsp;{{message}}</div>
          <div>
              <Button @click="doChild">执行1</Button>
          </div>
        </div>
`
  };

  let child2 = {
    name: "child2",
    data: function () {
      return {
        message: '',
        infoForChild1: ''
      }
    },
    props: {

    },
    methods: {
      doChild: function () {
        this.infoForChild2 = '这是给组件1的内容';
        bus.$emit("getInfo2",this.infoForChild2);
      },
      learnOn: function () {
        bus.$on(
          "getInfo1", (massage)=>{
            this.message = massage;
          }
        )
      }
    },
    mounted(){

    },
    created(){
      this.learnOn();
    },
    components:{

    },
    template: `
         <div class="child-1">
          <div>我是兄弟2</div>
          <div>message from child-1:&nbsp;{{message}}</div>
          <div><Button @click="doChild">执行2</Button></div>
        </div>
    `
  };


  let home = {template:'<div>我是主页</div>'};
  let post = {template:'<div>我是提交页</div>'};
  let archive = {template:'<div>我是存档页</div>'};
  let async = function (resolve) {
    require(['@/test/solution/public_solution'], resolve)
  };

    export default {
        name: "profession_solution",
        data: function () {
          return{
            data: ['home','post','archive'],
            number: 0,
            dataValue: null
          }
        },
        props: {

        },
        created: function(){
          this.changeComp(0);
        },
        methods:{
          changeComp: function(index) {
            if(index==undefined){
              this.number = ++this.number%3;
              this.dataValue = this.data[this.number];
            }
            else{
              this.dataValue = this.data[index];
            }
          }
        },
        provide: function(){
             return{
               changeComp: this.changeComp(),
               dataValue: this.dataValue,
               newValue: null
             }
        },
        components: {
          home,
          post,
          archive,
          child1,
          child2
        }
    }
</script>

<style scoped>
.profession_solution{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
}
  .professtion-solution-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: #FFFFFF;
  }

  .professtion-solution-content-item{
    margin-top: 20px;
    height: 30%;
  }


  .child-1{
     height: 300px;
     display: flex;
     flex-direction: column;
  }
</style>
