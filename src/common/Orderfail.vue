<template>
<div class="ordfail">
    <div class="failimg">
        <span class="failspan">预约失败</span>
    </div>
    <div class="failmid">
        <span class="midspan">该时段已约满，请重新选择</span>
    </div>
    <wx-button class="conbtn" @click="Cofrim">确定</wx-button>
</div>
</template>
<script>

export default {
    name:'Orderfail',
    data(){
        return { 
        }
    },
    methods:{
        Cofrim(){
            this.$emit('tap',false)
        }
    }
}

</script>
<style>
.ordfail{
    position: fixed;
    background-color: #FFFFFF;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 240px;
}
.failimg{
    height: 75px;
    width: 335px;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://lmsqas.whchem.com/myscm/web2/img_wechat/tips.png) no-repeat;
}
.failspan{
    text-align: center;
    font-size: 22px;
    color: #FFFFFF;
    font-weight: bold;
    line-height: 75px;
}
.failmid{
    width: 335px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.midspan{
    margin: 40px auto;
    font-size: 18px;
    color: #181818;
}
.conbtn{
    height: 38px;
    width: 80px;
    float: right;
    margin: 0 20px 20px 0;
    background-color: #1B5EC8;
    box-shadow: 0 1px 4px 0 rgba(11, 50, 114, 0.40);
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    line-height: 38px;
    color: #FFFFFF;
}
</style>
