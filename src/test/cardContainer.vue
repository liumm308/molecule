<template>
  <div class="card-container">
    <el-row  class="card-container-row">
      <el-col :span="3" class="card-container-item" v-for="(item,index) in cards" :key="index">
        <div class="card-container-item-title">
          {{item.name}}
        </div>
        <div class="card-container-item-content">
          {{item.content}}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "card-container",
        data: function () {
          return{
            cards: [
              {
                name: '卡片1',
                content: '块存储'
              },
              {
                name: '卡片2',
                content: '对象存储'
              },{
                name: '卡片3',
                content: '文件存储'
              },{
                name: '卡片4',
                content: '日志存储'
              },{
                name: '卡片5',
                content: '文档存储'
              },{
                name: '卡片6',
                content: '智能相册'
              },{
                name: '卡片7',
                content: '云存储'
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .card-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin: 5px;
    padding: 10px;
  }

  .card-container-row{
    width: 100%
  }

  .card-container-item{
    height: 220px;
    margin: 15px;
    background-color: #5c11ff;
  }

  .card-container-item .card-container-item-title{
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
  }

  .card-container-item .card-container-item-content{
    color: #1fd8ff;
    font-size: 16px;
  }

</style>
