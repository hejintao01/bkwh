<template>
<div class="rtop">
    <div class="choose">
        <ul>
            <li class="role">
                <img  src="https://lmsqas.whchem.com/myscm/web2/img_wechat/driver.png" alt="司机" @click="Godriver()">
                <span class="content">司机</span>
            </li>
            <li class="role">
                <img src="https://lmsqas.whchem.com/myscm/web2/img_wechat/carrier.png" alt="承运商" @click="GoCarrier()">
                <span class="content">承运商</span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name : 'RoleSelection',
    data(){
        return{
        }
    },
    created(){
        window.addEventListener('wxload', () => {
			wx.setNavigationBarTitle({
      			title: '角色选择'  //修改title
			})
		})
    },
    methods:{

        Godriver(){
            window.open('/DriverBind')
        },
        GoCarrier(){
            window.open('/CarrierBind')
        }
    }
}
</script>

<style>
.rtop{
    margin: 0;
    padding: 0;
}
.choose{
    margin-top: 160px;
    width: 100%;
}
ul{
    margin: 0;
    padding: 0;
}
.choose ul{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.role {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.choose ul li img{
    flex:1;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
}
.content{
    flex:1;
    margin-top: 40px;
    font-size: 22px;
    color: #1a1a1a;
    font-weight: bold;
}
</style>