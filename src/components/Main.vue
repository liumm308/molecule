<template>
  <div class="main note" :style ="note">
    <Header class="m-header"></Header>
    <div class="m-content">
      <router-view></router-view>
    </div>
    <Footer class="m-footer"></Footer>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Header from './vheader'
  import Footer from './vfooter'

  export default {
    name: "Main",
    data: function (){
      return{
        note: {
          backgroundImage: "url(" + require("../assets/wbg1.jpg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: null,
          marginTop: "5px",
        }
      }
    },
    created(){
      this.getBackGroundSize();
      this.getWindowSize();
    },
    mounted(){
      this.getBackGroundSize();
      this.getWindowSize();
    },
    methods:{
      getBackGroundSize: function () {
        let _Win_width=$(window).width();
        this.note.backgroundSize = _Win_width+"px"+" "+ "auto";
      },
      getWindowSize: function () {
        let headerHeight =$('.m-header').height();
        let footerHeight = $('.m-footer').height();
        let windowHeight = $(window).height();
        let contentHeight = $('.m-content').height();
        if(windowHeight > headerHeight+footerHeight +contentHeight){
          let _Height=windowHeight-headerHeight-footerHeight;
          $('.m-content').height(_Height)
        }
      }
    },
    components: {
        Header: Header,
        Footer: Footer
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
    width: 100%;
    background-color: rgba(15, 189, 255, 0.05);
  }

  .m-footer{
    width: 100%;
    height: 300px;
  }


</style>
