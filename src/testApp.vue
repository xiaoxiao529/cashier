<template>
  <div id="app">
		<Modal title="我是父级传的标题" btn-value="我是父级传的按钮" @toParent="parentEvent" v-model="isBlue"></Modal>  <!--现在这个isBlue是双向绑定-->
	  	<p class="center" :class="{blue:isBlue}">1111</p>
	   <Modal v-show="isShow" @toParent="parentEvent2"></Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal"
export default {
  name: 'App',
  data:function(){
  	return {
  		isShow:true,
  		isBlue:false
  	}
  },
  components:{
		Modal
  },
  methods:{
  	parentEvent(){
  		alert(1);
  		//this.isBlue = true//不写在这个方法里
  	},
  	parentEvent2(){
  		this.isShow = false;
  	}
  }
}
</script>
	<!--点击子组件的按钮，把父组件的isBlue改为tru，但是由于props是单向数据流，子组件不允许改变父组件的值，必须交给父组件改变isBlue,所以就需要用到双向数据流，这里使用v-model双向绑定-->
<style>
.center{
	text-align: center;
}
.blue{
	background: blue;
}
</style>
