<template>
  <div class="component-child-b">
    <div class="component-child-b-name">
      子组件。
    </div>
    <p>
      父组件被点击了：{{data}}
    </p>
    <p>
       <el-button @click='change(10)' type="primary" round>执行</el-button>
        <!-- <input :value="inputValue" @input="inputValue = $event.target.value"> -->
       <div style="text-align: center">
        <el-input style="width: 50%" v-model="inputValue"  placeholder="计算参数"> </el-input>
       </div>
    </p>
  </div>
</template>

<script>
    export default {
      name: "vTestB",
      props: ['data','method'],
      data: function(){
        return {
          dataValue: 0,
          testData: 0,
          inputValue: null
        };
      },
      methods: {
        change: function(params){
          if(this.inputValue != undefined){
            this.testData = this.method(this.inputValue);
          } else {
            this.testData = this.method(params);
          }
          this.$emit("callback",this.testData);
        }
      }
    }
</script>

<style scoped>
  .component-child-b{
    display: flex;
    flex-direction: column;
  }

  .component-child-b-name{
    padding-top: 10px;
    font-size: larger;
    color: #ffffff;
  }

  .component-child-b > div, p{
    margin: 5px 0;
  }


</style>
