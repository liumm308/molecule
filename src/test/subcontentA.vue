<template>
  <div class="home-contents-item">
    <table class="table">
      <tr class="table-title">热销产品</tr>
      <tr class="table-item"><td>FPGA云服务器</td><td>超级计算集群</td></tr>
      <tr class="table-item"><td>GPA云服务器</td><td>数据库云服务器</td></tr>
      <tr class="table-item"><td>块存储</td><td>对象存储</td></tr>
      <tr class="table-item"><td>虚拟路由器</td><td>负载均衡</td></tr>
      <tr class="table-item"><td>专有网络VPC</td><td>容器服务</td></tr>
      <tr class="table-item"><td>文件存储</td><td>高效计算节点</td></tr>
    </table>
    <table class="table">
      <tr class="table-title">热销产品</tr>
      <tr class="table-item"><td>FPGA云服务器</td><td>超级计算集群</td></tr>
      <tr class="table-item"><td>GPA云服务器</td><td>数据库云服务器</td></tr>
      <tr class="table-item"><td>块存储</td><td>对象存储</td></tr>
      <tr class="table-item"><td>虚拟路由器</td><td>负载均衡</td></tr>
      <tr class="table-item"><td>专有网络VPC</td><td>容器服务</td></tr>
      <tr class="table-item"><td>文件存储</td><td>高效计算节点</td></tr>
    </table>
    <table class="table">
      <tr class="table-title">热销产品</tr>
      <tr class="table-item"><td>FPGA云服务器</td><td>超级计算集群</td></tr>
      <tr class="table-item"><td>GPA云服务器</td><td>数据库云服务器</td></tr>
      <tr class="table-item"><td>块存储</td><td>对象存储</td></tr>
      <tr class="table-item"><td>虚拟路由器</td><td>负载均衡</td></tr>
      <tr class="table-item"><td>专有网络VPC</td><td>容器服务</td></tr>
      <tr class="table-item"><td>文件存储</td><td>高效计算节点</td></tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "",
        data: function () {
          return{

          }
        }
    }
</script>

<style scoped>

   .table{
     display: flex;
     flex-direction: column;
     align-content: flex-start;
     min-width: 300px;
     width: 15%;
     border-left: 1px solid grey;
     border-right: 1px solid grey;
     height: 210px;
   }

  .home-contents-item{
    display: flex;
    justify-content: center;
    width: 100%;
    background: rgba(44, 62, 80, 0.95);
    height: 240px;
    padding: 10px;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
  }

  .table-title{
    padding-top: 10px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .table-item{
    padding-left: 5px;
    font-size: 14px;
    color: white;
  }

  .table:hover{
    background-color: #384c5e;
  }

  .table> tr{
    color: white;
    font-size: 14px;
  }

  .table> tr:hover{
    color: #40baff;
  }

  .table> tr >td:hover{
    color: #7ca1ff;
  }


  .table>tr>td,
  .table>tr>th{
    color: #ffffff;
  }
</style>
