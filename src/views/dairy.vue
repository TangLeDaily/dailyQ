<!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>-->
<template>

    <body>
    <!--  Back -->
      <div :style="bg" style="position: fixed;right: 0rem;top:0rem;z-index: -10">
      </div>
    <!--  HEAD -->

      <nav  style="background-color: white ; padding: 0rem">
        <div id="MenuA" style="width:80%;z-index: 2;top: 0.1rem;right:10%;background-color: rgba(255,255,255,0.9); overflow: hidden; position: fixed; opacity:0.9 ">
          <span style="float:left;padding-top:0px;margin-left:0rem">
             <el-button icon="el-icon-caret-left" @click="showleft" ></el-button>
          </span>
          <span  style="padding-top:1rem;top:1rem;margin-top:50%" >
                DailySpace
          </span>
          <span style="float:right;padding-top:0px;margin-right:1%">
              <el-button icon="el-icon-caret-right" @click="showright"></el-button>
          </span>
        </div>
      </nav>
    <!--  BODY -->
      <div>
        <el-container>
          <el-header height="2rem" style="padding-left: 0rem">
            <home-header></home-header>
          </el-header>
          <el-main>
            <neirong></neirong>
          </el-main>
        </el-container>
      </div>
    <!--  TAIL -->
      <nav  style="background-color: white ; padding: 0rem">
        <div id="MenuB" style="width:100%;z-index: 2;bottom: 0.1rem;background-color: rgba(255,255,255,0.9); overflow: hidden; opacity:0.9 ">
            <span style="float:left;padding-top:0px;margin-left:0rem">
               <el-button icon="el-icon-caret-left" @click="showleft" ></el-button>
            </span>
          <span  style="padding-top:1rem;top:1rem;margin-top:50%" >
                  DailySpace
            </span>
          <span style="float:right;padding-top:0px;margin-right:1%">
                <el-button icon="el-icon-caret-right" @click="showright"></el-button>
            </span>
        </div>
      </nav>
    </body>

</template>

<!--<script src="src/publicscript/jquery-3.5.1.min.js"></script>-->
<script >
import $ from 'jquery'
import backGroundImg from '../assets/background.jpg';
import neirong from '../components/HelloWorld';

export default {
  name: 'dairy',
  components: {
    neirong
  },
  data(){
    return{
      getup:false,
      backGroundImg,
      bg:{
        background:`url(${backGroundImg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',height:'100%',width:'100%',
        opacity:'50%'
      }
    }
  },
  methods:{
    showleft(){
    },
    showright(){
    },
    readFile(filePath) {
      // 创建一个新的xhr对象
      let xhr = null
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
      } else {
        // eslint-disable-next-line
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }
      const okStatus = document.location.protocol === 'file' ? 0 : 200
      xhr.open('GET', filePath, false)
      xhr.overrideMimeType('assets/text/;charset=utf-8')
      xhr.send(null)
      return xhr.status === okStatus ? xhr.responseText : null
    }
  },
}
var topValue=getScrollTop();
var upfade;
//var downfade;
// var up = false;
document.onscroll=function(){
  var scrollTop = getScrollTop();
  console.log(scrollTop-topValue)
  if(scrollTop<topValue){
    $("#MenuA").fadeIn("fast");
    clearTimeout(upfade)
    upfade = setTimeout(function (){
      $("#MenuA").fadeOut("fast")
    }, 2000)
  }
  else{
    clearTimeout(upfade)
    upfade = setTimeout(function (){
      $("#MenuA").fadeOut("fast")
    }, 2000)
  }
  setTimeout(function(){topValue=scrollTop;},0);
};
function getScrollTop()
{
  var scrollTop=0;
  if(document.documentElement&&document.documentElement.scrollTop)
  {
    scrollTop=document.documentElement.scrollTop;
  }
  else if(document.body)
  {
    scrollTop=document.body.scrollTop;
  }
  return scrollTop;
}


</script>

<style scoped>
.changeIMG  .el-image{
    border-radius: 50%;
}
.index {
  filter:alpha(Opacity=85);
  -moz-opacity:0.85;
  opacity: 0.85;
}
.rMenu{
  position: fixed;
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
.fan {
  position: absolute;
  display: block;
  animation: run-right-right 3s 0.4s 1 linear, run-right-top 3s 0.4s 1 cubic-bezier(.66,.1,1,.41);
  animation: run-right-right 3s 0.4s 1 linear, run-right-top 3s 0.4s 1 ease-out;
  animation-fill-mode: forwards;
  background: red;
  transform-origin: left;
  transition: 1s cubic-bezier(.79,.34,.47,.92);
}
</style>