<template>
  <div class="product">
     <div class="product-content">
       产品模块
     </div>
  </div>
</template>

<script>
    export default {
        name: "product",
        data: function () {
          return{

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
</style>
