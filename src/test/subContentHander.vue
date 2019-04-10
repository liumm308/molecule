<template>
  <div class="content-header">
    <div class="content-header-scope">
      <el-row>
        <el-col :span="2" v-for="(popo,index) in popovers" :key="index">
          <el-popover
            placement="bottom-start"
            :width="popwidth"
            :offset="popo.offset"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <div class="content-header-item">
              <el-table :data="popo.gridData">
                <el-table-column width="150" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="300" property="address" label="地址"></el-table-column>
              </el-table>
            </div>
            <div class="content-header-name" slot="reference">
              {{popo.name}}
            </div>
          </el-popover>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "header-nav",
        data: function () {
          return{
            popwidth: 600,
            popovers: []
          };
        },
        mounted: function () {
          this.getPopovers();
        },
        methods: {
          getPopovers: function () {
            let _Win_width=$(window).width()-500;
            if(_Win_width>600){
              this.popwidth = _Win_width;
            }
            this.popovers = [
              {
                name: '产品',
                offset: 0,
                gridData: [{
                  date: '2016-05-02',
                  name: '王小猫',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小狗',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小猪',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }],
              },
              {
                name: '解决方案',
                offset: 0,
                gridData: [{
                  date: '2016-05-02',
                  name: '谢天南',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '夏侯惇',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '白皂',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-03',
                  name: '景田',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]
              },
              {
                name: '开发者',
                offset: 0,
                gridData: [{
                  date: '2016-05-02',
                  name: '张三丰',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '李二狗',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '丁不四',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-03',
                  name: '王小二',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]
              },
              {
                name: '支持与服务',
                offset: 0,
                gridData: [{
                  date: '2016-05-02',
                  name: '王宝林',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '卓不群',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '封不平',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-03',
                  name: '令狐冲',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]
              }
            ]
          }
        }
    }
</script>

<style scoped>

  .content-header{
    display: flex;
    flex-direction: column;
    background-color: rgba(43, 60, 70, 0.95);
    border-bottom: 1px solid grey;
  }

  .content-header-item{
    margin: 5px;
    width: 100%;
    height: 500px;
  }

  .content-header-name{
    height: 30px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 15px;
  }

  .content-header-name:hover{
    color: #40baff;
    font-weight: bold;
  }

  .content-header-scope{
    margin-right: 200px;
  }

</style>
