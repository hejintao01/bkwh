<template>
    <div class="ThirdSelect">
        <div v-for="(item,index) in array" :key="item.id" @click="chooseClick(index)" class="select-div">
            <img v-if="item.isChoose" src="https://testwlapp.jiahua.com/images/Active.png" alt="" border="0" class="select-img" style="width:20px;height:20px;"/>
            <img v-else src="https://testwlapp.jiahua.com/images/Inactive.png" alt="" border="0" class="select-img" style="width:20px;height:20px;"/>
            <span class="select-span">{{item.value1}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ThirdSelect',
    data() {
      return {
        n: 3,
        arr: [
          { id: 1, isChoose: true ? this.value == "EO" : false , value1: 'EO' },
          { id: 2, isChoose: true ? this.value == "PO" : false , value1: 'PO' },
        ]
      }
    },
    props:{
      	value: {
			    type: String,
			    default: ""
		  }
    },
      computed: {
      array() { 
          this.arr.forEach(el=>{
            if(el.id==1){
              el.isChoose = true?this.value=="EO":false
            }else{
              el.isChoose = true?this.value=="PO":false
            }
          })
          return this.arr
      }
    },
    watch:{
		  array:{ //深度监听，可监听到对象、数组的变化
      handler (newV, oldV) {
        // do something, 可使用this
        console.log(newV,oldV)
      },
      deep:true
     }
    },
    methods:{
      chooseClick(index)
      {
        for (let i = 0; i < this.arr.length; i++) {
          if (index == i) {
            this.arr[index].isChoose = true;
            // this.n = index;
          } else {
            this.arr[i].isChoose = false;
          }
        }
        if(this.arr[0].id==1&&this.arr[0].isChoose==true){
          this.$emit('getValue', this.arr[0].value1)
        }
        if(this.arr[1].id==2&&this.arr[1].isChoose==true){
          this.$emit('getValue', this.arr[1].value1)
        }
      }
    },
  }
</script>

<style lang="less">
    .ThirdSelect{
        image-orientation: initial;
    }
	.select-div{
		display: inline-block;
    	width: 50px;
    	position: relative;
		margin-right: 5px ;
	}
	.select-img{
		width: 20px;
    	height: 20px;
    	position: absolute;
    	top: 0;
    	left: 0;
    	bottom: 0;
    	margin: auto;
	}
	.select-span{
		padding-left: 25px;
	}
</style>
