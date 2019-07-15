import loginInfo from "../store/modules/loginInfo";
<template>
  <div class="vheader">
    <div class="vheader-title">
      <div class="vheader-enter">
        <div class="a">
          <i class="fa fa-bars icon-size" aria-hidden="true"></i>
          <div class="icon-content">
            <ul id="header-url" class="subIcon">
              <li v-for="(item,index) in hData" :key="index">
                <div @click="goto(item.url)">
                  {{item.name}}
                </div>
                <div class="li-content">
                  <comp-header-a :items="item.value" @changeHover="hoverHidden()">
                  </comp-header-a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="vheader-item" @click="testMyVue">
          沃云
        </div>
      </div>
      <div class="vheader-edit">
        <span><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;购物车</span>
        <span><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;邮箱</span>
        <span v-if="!isLogin" @click="login"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;登录</span>
        <span v-else @click="outLogin"><i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;退出</span>
      </div>
    </div>
    <sub-header></sub-header>
  </div>

</template>

<script>

    import comp_header_A from '../test/vueCompHeader'
    import subheader from  "../test/subContentHander"
    import {mapGetters} from 'vuex'

    export default {
        name: "header",
        data: function () {
          return{
            hData: [
              {
                name: '云产品',
                url: 'product',
                value: [
                        {name: "产品分类", url: "product_classification", content: [{name: "计算类"},{name: "存储类"},{name: "网络类"}]},
                        {name: "产品精选", url: "product_competitive", content: [{name: "沃云云盘"},{name: "高效块存储"},{name: "虚拟路由器"}]},
                        {name: "云数据库", url: "product_redis", content: [{name: "云数据库POLARDB"},{name: "云数据库RDS"},{name: "云数据库 MariaDB 版"}]},
                        {name: "云服务器", url: "product_nova", content: [{name: "云服务器 ECS "},{name: "弹性裸金属服务器"},{name: "轻量应用服务器"},{name: "FPGA 云服务器"},{name: "GPU 云服务器"},{name: "专有宿主机"}]},
                        {name: "云存储", url: "product_cinder", content: [{name: "对象存储 OSS"},{name: "文件存储"},{name: "块存储"},{name: "日志存储"},{name: "归档存储"}]},
                        {name: "容器服务", url: "product_docker", content: [{name: "容器服务 Kubernetes 版"},{name: "弹性容器实例 ECI NEW"},{name: "容器镜像服务"},{name: "弹性编排"}]}
                      ]
              },
              {
                name: '解决方案',
                url: "solution",
                value: [
                  {name: "通用解决方案", url: "public_solution", content: [{name: "网站"},{name: "IPv6解决方案"},{name: "企业互联网架构"}]},
                  {name: "行业解决方案", url: "profession_solution", content: [{name: "新金融 "},{name: "新制造"},{name: "智能工业"},{name: "大媒体"},{name: "交通物流"},{name: "教育"}]},
                  {name: "安全解决方案", url: "product", content: [{name: " 新零售安全"},{name: "政务云安全"},{name: "互联网金融安全"},{name: "社交/媒体spam"},{name: "游戏安全"}]},

                ]
              },
              {
                name: '支持与服务',
                url: "product",
                value: [
                  {name: "服务", url: "product", content: [{name: "咨询与设计"},{name: "迁移与部署"},{name: "运维与管理"},{name: "优化与提升"}]},
                  {name: "支持中心", url: "product", content: [{name: "智能顾问"},{name: "联系客服"},{name: "公告"}]}
                ]
              },
              {
                name: '开发者',
                url: "product",
                value: [
                      {name: "API中心", url: "product", content: [{name: "API错误中心"},{name: "SDK"},{name: "Java 开发者手册"},{name: "API Explorer"}]},
                      {name: "开源社区", url: "product", content: [{name: "代码托管 Git"},{name: "项目管理"},{name: "大数据竞赛"},{name: "AI学习"}]},
                      {name: "开源资源和工具", url: "product", content: [{name: "天池实验室"}]},
                      {name: "开发者平台", url: "product", content: [{name: "Apache RocketMQ"},{name: "Apache Dubbo（孵化）"},{name: " Apache Weex（孵化）"},{name: "PouchContainer"},{name: "OpenMessaging"},{name: "Dragonfly"}]}
                    ]
              }
            ]
          }
        },
        created: function () {
          this.getWindowSize();
        },
        mounted: function() {
          this.getWindowSize();
        },
        methods: {
          getWindowSize: function () {
            let height_W = $(window).height();
            let height = height_W - 80;
            $('.icon-content').height(height);
            $('.li-content').height(height);
          },
          goto: function (url) {
            this.$router.push({name: url})
          },
          login: function(){
            this.$router.push({path: 'login'});
          },
          hoverHidden: function () {
            $("#header-url").addClass('li-content-h');
            setTimeout(function () {
              $("#header-url").removeClass('li-content-h');
            },500)
          },
          testMyVue: function () {
            console.log(document.childNodes);
            console.log(document.URL);
            console.log(document.domain);
            console.log(document.referrer);
            document.cookie = "username=John Smith; expires=Thu";
            console.log(document.cookie);

          },
          outLogin: function () {
            this.$store.dispatch("setLoginInfo",'');
            this.$store.dispatch("setLoginState",false);
            this.LocalStorage.clearItem();
            this.$router.push({name: 'login'});
          }
        },
        computed: {
          ...mapGetters({
            loginInfo:'getLoginInfo',
            isLogin:'isLogin'
          }),
        },
        components: {
          "comp-header-a" : comp_header_A,
          "sub-header": subheader
        }
    }
</script>

<style scoped>

  .vheader{
    display: flex;
    flex-direction: column;
    height: 85px;
  }

  .vheader-title{
    display: flex;
    justify-content: space-between;
    background-color: rgba(43, 60, 70, 0.95);
    border-bottom: 1px solid grey;
    top: 0;
  }

  .vheader-enter{
    display: flex;
    width: 200px;
  }

  .vheader-edit{
    display: flex;
    text-align: right;
  }


  .vheader-enter > div{
    padding: 0 5px;
    margin: 5px 5px 0 5px;
    color: white;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
  }

  .vheader-edit span{
    cursor: pointer;
    padding: 0 20px;
    color: white;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
  }

  .vheader-edit span:hover{
    color: #2ffff5;
  }

  .icon-size{
    font-size: 27px;
    color: #ffffff;
  }

  .icon-size:hover{
    color: #2ffff5;
  }
  .a{
    width: 55px;
    border-right: 1px solid grey;
    display:inline-block;
    padding-left: 5px;
  }

  .icon-content{
    border-top: 1px solid grey;
    position:absolute;
    width: 200px;
    display:none;
    left: 0;
    top: 60px;
    background-color: rgba(44, 62, 80, 0.99);
    z-index: 100;
  }

  .a:hover .icon-content{
    display:flex;
    flex-direction: column;
  }

  .a:hover .icon-size{
    color: #2ffff5;
  }

  .subIcon{
    margin-top: 10px;
  }

  .subIcon > li{
    padding: 5px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border-bottom: 1px solid #dedede;
    color: #ababab;
  }

  .li-content{
    position:absolute;
    width: 750px;
    display:none;
    top: 0;
    left: 200px;
    background-color: rgb(45, 66, 81);
    border-left: 4px solid #515151;
    z-index: 110;
  }

  li:hover{
    cursor:pointer;
    color: #111242;
    font-weight: bold;
    background: -webkit-linear-gradient(left,rgba(255,255,255,0), rgba(255,255,255,.75),rgba(255,255,255,0));
  }

  li:hover .li-content{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: space-between;
  }

  .li-content-h{
    display: none !important
  }

  .vheader-item{
    font-size: 20px;
  }

</style>
