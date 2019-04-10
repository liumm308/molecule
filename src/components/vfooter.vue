<template>
  <div class="vfooter">
    <div class="vfooter-b-item">
      <div class="vfooter-title">
        <div class="vfooter-title-contect">
          {{msg}}
        </div>
        <div class="vfooter-title-contect">
          {{contact.telephone}}
        </div>
        <div class="vfooter-title-contect">
          {{contact.email}}
        </div>
        <div class="vfooter-title-contect">
          {{contact.address}}
        </div>
      </div>
      <div class="vfooter-item">
        <div class="vfooter-title-contect">
          Other Sites
        </div>
      </div>
      <div class="vfooter-item">
        <div class="vfooter-title-contect">
          Produces
        </div>
      </div>
      <div class="vfooter-item">
        <div class="vfooter-title-contect">
          {{msg}}
        </div>
      </div>
    </div>
    <div class="vfooter-conf">
      <div class="vfooter-conf-sub">
        © <span>&nbsp;&nbsp;2009-2019 liumm308.com 版权所有 ICP证：陕B2-20080101</span>
      </div>
      <div class="vfooter-conf-sub">
        <i class="iconfont icon-tubiao_guohui"></i><span>&nbsp;&nbsp;浙公网安备 33010602009975号</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        contact: {
           telephone: ' telephone: 17802929742',
           email: 'email: xidian_liu@163.com',
           address: 'address: Xian CN'
        },
        msg: 'Contact us'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vfooter{
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.45);
}
.vfooter-title{
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 0 15px;
  color: #40baff;
  text-align: left;
}

.vfooter-b-item{
  display: flex;
  width: 100%;
  height: 200px;
}

.vfooter-conf{
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 100%;
  height: 100%;
}
.vfooter-conf-sub{
  padding-left: 10px;
  text-align: left;
  color: #40baff;
}

.vfooter-conf-sub span{
  color: #5c11ff;
}

.vfooter-title-contect{
  margin: 15px 0;
}
.vfooter-item{
  color: #FFFFFF;
  width: 26.666666%;
  padding: 0 15px;
}
</style>
