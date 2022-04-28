<template>
<div id="mainContainer">
<!--轮播图-->
<div id="zoumadeng">
<el-carousel :interval="7500" trigger="click">
        <el-carousel-item v-for="(item, index) in carousels" :key="index">
          <img
            class="carouselImg"
            :src="carousels[index].url"
            :alt="carousels[index].title"
            :title="carousels[index].title"
            style="height:100%; width:100%;"
          />
        </el-carousel-item>
      </el-carousel>
</div>
<div id="classclassify">
<!--课程列表-->
课程分类
</div>
<div class="buttonContainer-div">
      <div class="sizhengclass-p">
        思政课程:
      </div>
      <div class="buttonNest-div">
        <button
          class="classifyButton-button pointer"
          v-for="(item, index) in sizhengCoursesClassify"
        >
          {{ item }}
        </button>
      </div>
    </div>
  <div class="buttonContainer2-div">
      <div class="classsizheng-p">
        课程思政:
      </div>
      <div class="buttonNest-div">
        <button
          class="classifyButton-button pointer"
          v-for="(item, index) in kechengsizhengClassify"
        >
          {{ item }}
        </button>
      </div>
    </div>
   <div class="classList-p">
      课程列表
    </div>

   <div class="classContainer-div ">
      <div class="classDiv-div1 pointer">
        <div class="faceImg-img" :style="background"></div>
        <div class="className-p">
          中国近代史
        </div>
        <div class="schoolName-p">
          北京大学
        </div>
        <div class="joins-p">
          114514人参加
        </div>
        <div class="into-p">
          北大名师精讲"中国近代史"
        </div>
      </div>
      <div class="classDiv-div2 pointer" @click="">
        <div class="faceImg-img" :style="background"></div>
        <div class="className-p">
          中国近代史
        </div>
        <div class="schoolName-p">
          北京大学
        </div>
        <div class="joins-p">
          114514人参加
        </div>
        <div class="into-p">
          北大名师精讲"中国近代史"
        </div>
      </div>
    
     
    </div>

</div>
</template>
<script>
export default {
  data() {
    return {
      carousels: [
        {
          url: require("../assets/cr1.jpg"),
          alt: "test",
          title: "test"
        },
        {
          url: require("../assets/cr2.jpg"),
          alt: "test1",
          title: "test1"
        }
      ],
      sizhengCoursesClassify: [
        "思想道德修养与法律基础",
        "中国近代史纲要",
        "马克思主义基本原理概述",
        "毛泽东思想和中国特色社会主义理论体系概论"
      ],
      kechengsizhengClassify: ["计算机", "外语", "理学", "艺术设计", "法学"],
      
    }
  }
}
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
  }
  #mainContainer {
    margin:auto;
    margin-top:85px;
    width:100%;
    display:flex;
    flex-flow:column;
    min-height:2000px;‘
    position:relative;
  }
  #zoumadeng {
    background-color:pink;
    width:70%;
    height:290px;
    margin-top:40px;
    position:absolute;
    left:15%;
  }
  #classclassify{
    position:absolute;
    margin-top:380px;
    left:15%;
    color: rgba(16, 16, 16, 100);
    font-size: 26px;
    font-family: SourceHanSansSC-light;
  }
  .buttonContainer-div{
    margin-top:428px;
    position:relative;
  }
  .sizhengclass-p{
    position:absolute;
    left:15%;
    color: rgba(16, 16, 16, 100);
    font-size: 20px;
  }
  .buttonNest-div {
    margin-top:28px;
    position:absolute;
    left:20%;
  
  }
  .classifyButton-button{
    border: none;
    height: 38px;
    margin-right: 20px;
    line-height: 20px;
    border-radius: 48px;
    background-color: rgba(255, 255, 255, 100);
    color: rgba(117, 117, 117, 100);
    font-size: 13px;
    font-family: Roboto;
  }
  .classList-p{
    position:absolute;
    margin-top:630px;
    left:15%;
    color: rgba(16, 16, 16, 100);
    font-size: 26px;
    font-family: SourceHanSansSC-light;
  }
  .buttonContainer2-div{
    margin-top:108px;
    position:relative;
  }
  .classsizheng-p{
     position:absolute;
    left:15%;
    color: rgba(16, 16, 16, 100);
    font-size: 20px;
  }
  .classContainer-div {
  position:absolute;
  left:20%;
  margin-top: 680px;

  display: flex;
  flex-flow: row;
}
.classDiv-div1 {
  width: 202px;
  height: 232px;
  display: flex;
  flex-flow: column;
  border-radius: 18px;
  background-color: #ffffff;
}
.faceImg-img {
  width: 202px;
  height: 115px;
  background-color: black;
  border-radius: 20px 20px 0px 0px;
  background: no-repeat center top;
  background-size: 100% 100%;
}
.className-p {
  margin-left: 8px;
  margin-top: 8px;
  font-size: 11px;
  line-height: 17px;
  color: rgba(16, 16, 16, 100);
  text-align: left;
}
.schoolName-p {
  margin-left: 8px;
  line-height: 12px;
  color: rgba(142, 142, 147, 100);
  font-size: 8px;
  text-align: left;
  font-family: Source HanSansSC-light;
}
.joins-p {
  margin-left: 8px;
  margin-top: 33px;
  line-height: 15px;
  color: rgba(199, 199, 204, 100);
  font-size: 10px;
  text-align: left;
  font-family: Source HanSansSC-light;
}
.into-p {
  margin-left: 8px;
  line-height: 15px;
  color: rgba(97, 97, 97, 100);
  font-size: 10px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.classDiv-div2 {
  margin-left: 20px;
  width: 202px;
  height: 232px;
  display: flex;
  flex-flow: column;
  border-radius: 18px;
  background-color: #ffffff;
}
.classDiv-div3 {
  margin-left: 20px;
  width: 202px;
  height: 232px;
  display: flex;
  flex-flow: column;
  border-radius: 18px;
  background-color: #ffffff;
}
.classDiv-div4 {
  margin-left: 20px;
  width: 202px;
  height: 232px;
  display: flex;
  flex-flow: column;
  border-radius: 18px;
  background-color: #ffffff;
}
</style>
