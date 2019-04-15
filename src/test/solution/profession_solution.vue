<template>
  <div class="profession_solution">
    <div class="professtion-solution-content">
      <div class="professtion-solution-content-item">
        <el-button @click="changeComp()"> test</el-button>
        <div :is="dataValue"></div>
      </div>

    </div>
  </div>
</template>

<script>

  let home = {template:'<div>我是主页</div>'};
  let post = {template:'<div>我是提交页</div>'};
  let archive = {template:'<div>我是存档页</div>'};

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
        components: {
          home,
          post,
          archive
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
    justify-content: center;
    height: 100%;
    color: #FFFFFF;
  }

  .professtion-solution-content-item{
    height: 30px;
  }
</style>
