<template>
  <div class="product" :class="{'product-bg1': flag, 'product-bg2': !flag}">
     <div class="product-content" @click="changeProduct">
       产品模块
     </div>
  </div>
</template>

<script>
    export default {
        name: "product",
        data: function () {
          return{
            flag: true
          }
        },
        methods: {
          changeProduct: function () {
            this.flag= !this.flag;
          }
        }
    }
</script>

<style scoped>

.product{
  width: 100%;
  height: 600px;
}

 .product-content{
   display: flex;
   justify-content: center;
   font-size: 16px;
   color: #FFFFFF;
 }

  .product-bg1{
    background-color: rgba(92, 17, 255, 0.5);
  }

  .product-bg2{
    background-color: rgba(0, 0, 255, 0.5);
  }
</style>
