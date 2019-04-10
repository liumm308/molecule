<template>
  <div>
    <el-popover
      ref="popover1"
      title="标题"
      width="200"
      trigger="hover"
      placement = "right-start"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </el-popover>

    <el-button v-popover:popover1>hover 激活</el-button>
  </div>
</template>
<script>
    export default {
        name: "vTestA",
        data: function () {
          return {
            flagC: '1'
          }
        }
    }
</script>
<style>
   .ellipse-item-content{
     background: transparent;
   }

   .test-class1{
     margin-top: 20px;
     background-color: gray;
   }

   .test-class2{
     font-size: 10px;
     color: red;
   }
</style>

<style scoped>


</style>
