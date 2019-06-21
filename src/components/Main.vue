<template>
  <div class="main note" :style ="note">
    <Header class="m-header"></Header>
    <div class="m-content">
      <router-view></router-view>
    </div>
    <Footer class="m-footer"></Footer>
    <!--<WaterMark :inputText="markText"></WaterMark>-->
  </div>
</template>

<script>
  import $ from 'jquery'
  import Header from './vheader'
  import Footer from './vfooter'
  import WaterMark from '../common_component/waterMark'

  export default {
    name: "Main",
    data: function (){
      return{
        note: {
          backgroundImage: "url(" + require("../assets/wbg1.jpg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: null,
          marginTop: "5px",
        },
        markText: 'liumm308'
      }
    },
    created(){
    },
    mounted(){

    },
    methods:{

    },
    components: {
        Header: Header,
        Footer: Footer,
        WaterMark:  WaterMark
    }
  }

</script>

<style scoped>
  .main{
    display: flex;
    flex-direction: column;
  }

  .m-header{
    width: 100%;
    height: 55px;
  }
  .m-content{
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    background-color: rgba(15, 189, 255, 0.05);

  }

  .m-footer{
    width: 100%;
    height: 300px;
  }



</style>
