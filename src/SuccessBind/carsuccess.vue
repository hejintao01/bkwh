<template>
<div>
    <div class="suc">
        <ul>
            <li class="imgbox">
                <img src="https://lmsqas.whchem.com/myscm/web2/img_wechat/successbind.png" >
                <span class="stips">绑定成功</span>
            </li>
        </ul>
    </div>
    <div class="sbottom">
        <wx-button class="ssubmit" @click="goto"> 返&#12288回</wx-button>
    </div>
</div>
    
</template>

<script>
export default {
    name : 'Carrs',
    data(){
        return {
        }
    },
    created(){
 
        window.addEventListener('wxload', () => {
			console.log('page2 wxload')
			wx.setNavigationBarTitle({
      			title: '绑定成功'  //修改title
			})
		})
    },
    methods:{
        goto(){
            window.open('/CarrierOrder')
        }
    }
}
</script>

<style>
.suc{
    margin-top: 120px;
    width: 100%;
}
ul{
    margin: 0;
    padding: 0;
}
.suc ul{
    margin: 0 auto;
}
.imgbox {
    margin:  0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.suc ul li img{
    flex:1;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: pink;
}
.stips{
    margin: 40px auto;
    flex:1;
    font-size: 24px;
    color: #181818;
}
.sbottom{
    width: 330px;
    height: 46px;
    margin: 60px auto;
    border-radius: 4px;
}
.ssubmit{
    height: 46px;
    color: #FFFFFF;
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    background-color: #13489D;
}
</style>