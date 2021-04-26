<template>
    <div class="FirstSelect">
        <div v-for="(item,index) in array" :key="item.id" @click="chooseClick(index)" class="select-div">
            <img v-if="item.isChoose" src="https://testwlapp.jiahua.com/images/Active.png" alt="" border="0" class="select-img" style="width:20px;height:20px;"/>
            <img v-else src="https://testwlapp.jiahua.com/images/Inactive.png" alt="" border="0" class="select-img" style="width:20px;height:20px;"/>
            <span class="select-span">{{item.value}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'FirstSelect',
    data() {
      return {
        n: 3,
        arr: [
          { id: 1, isChoose: true ? this.value == '1' : false , value: '有',value1:1},
          { id: 2, isChoose: true ? this.value == '0' : false , value: '无',value1:0 },
        ]
      }
    },
    props:{
      	value: {
			    type: String,
			    default: ''
		    }
	  },
      computed: {
      array() { 
          this.arr.forEach(el=>{
            if(el.id==1){
              el.isChoose = true?this.value=="1":false
            }else{
              el.isChoose = true?this.value=="0":false
            }
          })
          return this.arr
      }
    },
    watch:{
		  array:{ //深度监听，可监听到对象、数组的变化
      handler (newV, oldV) {
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
    .FirstSelect{
        image-orientation: initial;
    }
</style>
