<template>
  <div class="content">
    <div class="navigation">
      <div class="nav-title">{{ msg }}</div>
      <div class="nav-item">
        <el-button @click="add" type="primary" round>点击</el-button>
      </div>
      <div class="nav-item">
        {{newValue}}
      </div>
    </div>
    <div class="content-item">
      <div class="component-a">
        <component-a></component-a>
      </div>
    </div>
    <div class="content-item">
      <div class="component-b">
        <component-b :data="dataValue" :method="test" @callback="doIt"></component-b>
      </div>
    </div>
    <div class="content-item">
      <div class="component-c">
        <component-c></component-c>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import componentA from './vueTestA'
  import componentB from './vueTestB'
  import componentC from './vueTestC'

  export default {
    name: 'Content',
    data () {
      return {
        msg: '动态组件',
        btn: '点击',
        dataValue: 0,
        newValue: 1,
      }
    },
    created(){
    },
    mounted(){
      this.getClass();
    },
    methods: {
      add: function(){
        this.dataValue++;
      },
      test: function(testParams){
        return testParams += 10;
      },
      doIt: function (params) {
        this.newValue *= params;
      },
      getClass: function(){
        let _Width=(($(window).width()-$('.navigation').width())/3).toFixed(6);
        console.log(_Width);
        $('.content-item').width(_Width);
      }
    },
    components: {
      "component-a" : componentA,
      "component-b" : componentB,
      "component-c" : componentC
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    width: 100%;
    min-height: 550px;
  }

  .content-item{
    background-color: rgba(128, 128, 128, 0.15);
    margin: 5px;
    padding: 0 10px
  }

  .component-a{
    margin: 5px;
    padding: 10px;
  }

  .component-c{
    margin: 5px;
    padding: 10px;
  }

  .component-b{
    color: #808080;
  }

  .component-b:active{
    width: 100%;
    height: 100%;
    color: #31fe57;
    background: -webkit-linear-gradient(left,rgba(255,255,255,0), rgba(255,255,255,.5),rgba(255,255,255,0));
  }

  .component-b:focus{
    width: 100%;
    height: 100%;
    color: #31fe57;
    background: -webkit-linear-gradient(left,rgba(255,255,255,0), rgba(255,255,255,.5),rgba(255,255,255,0));
  }

  .component-b:hover{
    width: 100%;
    height: 100%;
    color: #31fe57;
    background: -webkit-linear-gradient(left,rgba(255,255,255,0), rgba(255,255,255,.5),rgba(255,255,255,0));
  }

  .component-c{
    color: #808080;
    height: 100%;
  }

  .component-c:active{
    background: -webkit-linear-gradient(lemonchiffon,rgba(255,255,255,0), rgba(255,255,255,.5),rgba(255,255,255,0));
  }
  .component-c:hover{
    background: -webkit-linear-gradient(lemonchiffon,rgba(255,255,255,0), rgba(255,255,255,.5),rgba(255,255,255,0));
  }
  .component-c:focus{
    background: -webkit-linear-gradient(lemonchiffon,rgba(255,255,255,0), rgba(255,255,255,.5),rgba(255,255,255,0));
  }



  .navigation{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 200px;
    color: #FFFFFF;
    background-color: rgba(44, 62, 80, 0.11);
  }

  .nav-title{
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    color: #ffffff;
  }

  .nav-item{
    margin-top: 10px;
  }

  .nav-bottom{
    display: flex;
    flex-direction: column-reverse;
    height: 75%;
  }

  .nav-subbottom{
  }

</style>
