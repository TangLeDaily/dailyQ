<template>
  <nav style="background-color: white">
    <div style="width:100%;z-index: 2;top: 0;background-color: white; overflow: hidden">
        <span style="float:left;padding-top:0px;margin-left:1%">
           <el-button icon="el-icon-s-unfold" @click="showleft" ></el-button>
<!--          <el-button type="primary" icon="el-icon-edit"></el-button>-->
        </span>
        <span  style="float:left;padding-top:0.5rem;margin-left:1%">
            DailySpace
        </span>
        <span  style="float:left;padding:5px;color:white;margin-left:2%;width:15%">

        </span>
        <span style="float:right;padding-top:0px;margin-right:1%">
            <el-button icon="el-icon-s-unfold" ></el-button>
        </span>
    </div>
    <div v-if="showModal" @click="overRL" class="mask">
    </div>
    <div style="margin-top:0px;margin-left: 0px;background-color: blue" class="rMenu" :class="{active:leftShow}">
      <el-row :gutter="20">
        <el-col >
          <div>
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px">
              <el-menu-item index="1">
                <div >
                  <i class="el-icon-notebook-2"></i>
                </div>
              </el-menu-item>
              <el-menu-item index="2"><i class="el-icon-notebook-1"></i></el-menu-item>
              <el-menu-item index="3"><i class="el-icon-chat-line-round"></i></el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>

  </nav>

</template>

<script>
export default {
  name: "HomeHeader",
  data(){
    return{
      leftShow:false,
      showModal:false,
    }
  },
  methods:{
    showleft(){
      this.leftShow=true,
      this.showModal=true
    },
    overRL(){
      this.leftShow=false,
      this.showModal=false
    }
  },

}


</script>
<style type="text/css">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.mask {
  background-color:white; /*lightgray;*/
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.page{
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  position: fixed;
  left: 0;
  top: 0;
}
.content{
  margin: 20px;
  float: left;
}
.rMenu{
  width: 4rem;
  position: fixed;
  left: 0rem;
  top: 0;
  transform: translateX(-100vw);
  background: white;
  transition: transform 0.5s;
  z-index: 2
}
.active{
  transform: translateX(0vw);
  background: white;
}
.rMenuTop{
  text-align: left;
  margin: 10px;
  padding: 10px;
}
.rMenuContent{
  margin: 20px;
  width: 100px;
  background-color: #F0F8FF;
  border-radius: 10px;
  padding: 10px;
}

</style>
<style lang="stylus" scoped>
.header
  display: flex
  line-height: .01rem
  background: #00bcd4
  color: #fff
  top: 0rem
  .header-left
    width: -1rem
    float: left
  .header-input
    flex: 1
    height: .64rem
    line-height .64rem
    margin-left: .2rem
    margin-top: .12rem
    background: #ffffff
    border-radius: .1rem
    color: #ccc
  .header-right
    width: 1.24rem
    float: right
    text-align : center
</style>
