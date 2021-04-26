<template>
    <div class="checkdiv">
        <div class="table1">
            <div class="context" style="width: 100%">
                <span style="margin-left: 15px;height: 60px">{{name}}</span>
            </div>
            <div class="picture1">
                 <img src= "https://testwlapp.jiahua.com/images/status.png" alt="" v-show="photo" style="width:50px;height:50px;margin-left:5px;margin-top: 5px" >
            </div>
        </div>
        <div class="table2">
            <button style="height: 50px;width:30px;background:#D7E0FF;">
                <img src="https://testwlapp.jiahua.com/images/right-caret.png" alt="cfc536e42e3c6f5a4ed5ea7145ce9d3c.png" border="0" style="height:20px;width:10px;margin-top: 20px;margin-left: 10px"/>
            </button>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Check',
    props: ['name','photo'],
  }
</script>
<style lang="less">
    .checkdiv{
        height:60px;
        margin-right: 20px;
        margin-left: 20px;
    }
    .table1{
        height:60px;
        /*width:220px;*/
        width:88%;
        background: #E8EFFF ;
        display: flex;
        /*flex-direction: row;*/
        align-items: center;
        /*justify-content: center;*/
        float:left;
        border-radius: 4px;
        font-size: 14px;
        color:#000000;
    }
    .table2{
        height:60px;
        width:30px;
        float:left;
        background: #D7E0FF;
        border-radius: 0 4px 4px 0;
    }
    .picture1{
        height:60px;
        margin-right: 0;
        width: 65px;
    }

</style>
