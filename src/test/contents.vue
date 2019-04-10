<template>
  <div class="home-constant">
    <Carousel class="caro" autoplay :autoplaySpeed="autop">
      <Carousel-item class="caro-item">
        <div class="caro-item-img"><img src="../assets/img/new_bg1.jpg" height="400"></div>
        <div class="caro-item-contents">
          <div class="caro-item-sub-contents-title">
            开放搜索算法平台即将公测
          </div>
          <div class="caro-item-sub-contents-item">
            快速提升搜索效果，通俗易懂的创建人气模型。
          </div>
          <div class="caro-item-sub-contents-enter">
            <span>
              立即报名&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </Carousel-item>
      <Carousel-item class="caro-item">
        <div class="caro-item-img"><img src="../assets/img/new_bg2.jpg" height="400"></div>
        <div class="caro-item-contents">
          <div class="caro-item-sub-contents-title">
            沃云 MVP第八期全球发布
          </div>
          <div class="caro-item-sub-contents-item">
            一起出发，走向未来。
          </div>
          <div class="caro-item-sub-contents-enter">
            <span>
              了解更多&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </Carousel-item>
      <Carousel-item class="caro-item">
        <div class="caro-item-img"><img src="../assets/img/new_bg3.jpg" height="400"></div>
        <div class="caro-item-contents">
          <div class="caro-item-sub-contents-title">
            图数据库GDB ·为高度连接数据而生
          </div>
          <div class="caro-item-sub-contents-item">
            支持Gremlin查询语言，高性能自研引擎
          </div>
          <div class="caro-item-sub-contents-enter">
            <span>
              查看详情&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </Carousel-item>
      <Carousel-item class="caro-item">
        <div class="caro-item-img"><img src="../assets/img/new_bg4.jpg" height="400"></div>
        <div class="caro-item-contents">
          <div class="caro-item-sub-contents-title">
            云数据库RDS新品发布 - 高性能ESSD云盘
          </div>
          <div class="caro-item-sub-contents-item">
            全新RDS存储能力，高达100万IOPS的高性能ESSD云盘，助力企业数据库性能提升
          </div>
          <div class="caro-item-sub-contents-enter">
            <span>
              马上体验&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </Carousel-item>
    </Carousel>
    <subcontent-a></subcontent-a>
    <subcontent-b></subcontent-b>
  </div>
</template>

<script>

    import subcontentA from "./subcontentA"
    import subcontentB from "./subcontentB"

    export default {
        name: "",
        data: function () {
          return{
            autop: 10000
          }
        },
        components: {
          "subcontent-a": subcontentA,
          "subcontent-b": subcontentB,
        }
    }
</script>

<style scoped>

  .home-constant{
    display: flex;
    flex-direction: column;
  }

  .caro{
    height: 400px;
  }

  .caro-item{

    height: 100%;
  }

  .caro-item > div{
    height: 100%;
  }

  .caro-item-img{
    height: 400px;
  }

  .caro-item-contents{
    position:absolute;
    width: 700px;
    height: 300px;
    color: white;
    margin: -400px 0 0 150px;
    font-size: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .caro-item-sub-contents-title{
    cursor:pointer;
    margin: 10px;
    width: 100%;
    height: 75px;
    padding: 10px;
    color: white;
    font-size: 35px;
    font-weight: bold;
  }

  .caro-item-sub-contents-item{
    cursor:pointer;
    width: 100%;
    height: auto;
    padding: 10px;
    margin-left: 10px;
    color: white;
    font-size: 20px;
  }

  .caro-item-sub-contents-enter{
    cursor:pointer;
    width: 100%;
    height: auto;
    margin: 50px 0 10px 10px;
    color: white;
    font-size: 20px;
    padding: 10px;
  }

  .caro-item-sub-contents-enter span{
    cursor:pointer;
    border-bottom: 4px solid #1fd8ff;
  }

  .caro-item-sub-contents-enter span:hover{
    cursor:pointer;
    color: #1fd8ff;
    border-bottom: 4px solid #1fd8ff;
  }


</style>
