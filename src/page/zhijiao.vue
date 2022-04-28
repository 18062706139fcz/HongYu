<template>
    <div id="mContainer">
       <div @click="$router.push('/main');selectedBlock='main'"  :class="{ 'selectedColorMain': selectedBlock=='main'&&colorMode=='main','selectedColor': selectedBlock=='main'}" :style="navFontColor">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div id="boxContainer">
        <div id="you">你是谁？</div>
        <div id="two1" @click="$router.push('/zhiyuanzhe')">志愿者</div>
        <div id="two2" @click="$router.push('/school')">学校</div>
        </div>
    </div> 
</template>

<script>

</script>

<style>
* {
    margin:0px;
    padding:0px;
}
#mContainer{
    position:flex;
    width:100%;
    height:300px;
    min-height: 1000px;
    line-height:12px;   

    background-repeat: no-repeat;
    background-size: cover;
}
#boxContainer {
    position:absolute;
    background-image: url('../assets/zhijiaobgc.jpg');
    height:400px;
    width:500px;
    left:30%;
    top:20%;
    background-repeat: no-repeat;
    background-size: cover;
}
.el-icon-arrow-left{
    position:fixed;
    top:100px;
    left:30px;
}
#you {
    position:relative;
    background-color:transparent;
    height:100px;
    width:300px;
    margin-left:100px;
    margin-top:90px;
    text-align:center;
    color:blue;
    line-height:100px;
    font-size:3em;
}
#two1 {
    position:relative;
    background-color:transparent;
    height:60px;
    width:120px;
    margin-left:0px;
    margin-top:50px;
    text-align:center;
    color:blue;
    line-height:60px;
    font-size:2em;
    display:inline-block;
    border: black solid;
    background-color: #fff;
}
#two2 {
    position:relative;
    background-color:transparent;
    height:60px;
    width:120px;
    margin-left:80px;
    margin-top:50px;
    text-align:center;
    color:blue;
    line-height:60px;
    font-size:2em;
    display:inline-block;
    border: black solid;
    background-color: #fff;
}
</style>