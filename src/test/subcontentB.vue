<template>
  <div class="home-contents-item">
    <div class="home-contents-item-subcontent">
      <div class="home-contents-item-subcontent-item-title">
        <div class="img-color">
          <img src="../assets/logo1.png">
        </div>
        <div class="home-contents-item-subcontent-item-subtitle">
          全球领先、安全、稳定的云计算产品
        </div>
        <div class="home-contents-item-subcontent-item-subItem">
          计算、存储、网络、安全、大数据、人工智能，普惠科技助您飞跃发展
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  .home-contents-item{
    display: flex;
    justify-content: center;
    width: 100%;
    background: rgba(233, 233, 233, 0.95);
    height: 700px;
    padding: 10px;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
  }

  .home-contents-item-subcontent{
    display: flex;
    flex-direction: column;
    width: 78%;
    height: 100%;
    padding: 15px;
  }

  .home-contents-item-subcontent-item-title{
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    margin-bottom: 5px;
    height: 75px;
  }

  .home-contents-item-subcontent-item-title .home-contents-item-subcontent-item-subtitle{
    margin-bottom: 5px;
    height: 75px;
    color: black;
    font-size: 28px;
  }

  .home-contents-item-subcontent-item-subItem{
    margin-bottom: 5px;
    height: 45px;
    color: black;
    font-size: 16px;
  }

  .img-color{
    color: dodgerblue;
  }
</style>
