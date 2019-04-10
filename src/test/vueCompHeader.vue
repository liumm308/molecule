<template>
  <div class="comp-content">
    <div v-for="(item, index) in items" :key="index">
      <slot v-bind="item">
        <div class="comp-content-title" @click="goto(item.url)">{{item.name}}</div>
        <div class="comp-content-item">
          <ul class="item-li">
            <li class="item-li-content" v-for="(content,index) in item.content" :key="index">
              {{content.name}}
            </li>
          </ul>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>

    export default {
        name: "compA-header",
        props: {
           items: {
             type: Array
           }
        },
        data: function () {
          return {

          }
        },
        methods: {
          goto: function (url) {
            this.$router.push({name: url})
          }
        }
    }
</script>

<style scoped>

  .comp-content{
    margin: 10px;
    padding: 10px;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  .comp-content > div{
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
    font-size: 14px;
    width: 23%;
  }

  .comp-content-title{
    padding: 0 0 7px 5px;
    border-bottom: 2px solid rgb(128, 128, 128);
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  .comp-content-title:hover{
    cursor:pointer;
    color: #40baff;
  }

  .comp-content-item{
    width: 100%;
    height: 215px;
  }

  .item-li{
    height: 100%;
    text-align: left;
  }

  .item-li-content{
    height: 22px;
    padding-left: 15px;
    color: white;
    font-size: 12px;
    list-style-type:none;
  }

  .item-li-content:hover{
    color: #7ca1ff;
  }


</style>
