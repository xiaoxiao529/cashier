<template>
	<div id="App">
		<left-nav></left-nav>
  	<div class="main">
  		<router-view></router-view>
  	</div>
	</div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  data:function(){
  	return {
  		
  	}
  },
  components:{
		leftNav
  },
  methods:{
  	
  }
}
</script>
<style>
.main{
	float: left;
	width: 95%;
	background: #EFF2F7;
	height: 100%;
	overflow: hidden;
}
</style>
