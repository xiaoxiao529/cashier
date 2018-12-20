<template>
  <div class="modal-example">
      <div class="modal">
        <div class="modal-header">
          <h4>{{title}}</h4>
        </div>
        <div class="modal-content">
          <div>
            在这里添加内容
          </div>
        </div>
        <div class="modal-footer">
          <input class="btn" type="button" :value="btnValue" @click="sendChildEvent" />
          <input class="btn" type="button" value="取消" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"Modal",
  data:function(){
  	return {
			
  	}
  },
  props:{
  	title:{
  		type:String,
  		default:"我是默认标题"
  	},
  	btnValue:{
  		type:String,
  		default:"我是默认按钮"
  	},
  	value:{
			type:Boolean,
			default:false
		}
  },
  methods:{
  	sendChildEvent(){
  		this.$emit("toParent");
  		this.$emit("input",true);
  	}
  }
}
</script>

<style scoped>
p,h4{
	margin:0;
}
.modal{
	margin: 100px auto;
	width: 500px;
	background-color: #fff;
	border: 1px solid rgba(0,0,0,.2);
	border-radius: 6px;
	box-shadow: 0 3px 9px rgba(0,0,0,.5);
	-position: absolute;
	left: 50%;
	top: 50%;
	-transform: translate(-50%,-50%);
	z-index: 111;
}
.modal-header {
	padding: 15px;
	border-bottom: 1px solid #e5e5e5;
}
.modal-content div {
	padding: 20px;
}
.modal-footer {
	padding: 15px;
	text-align: right;
	border-top: 1px solid #e5e5e5;
}
.btn {
	padding: 5px 15px;

}
.red{
	background: red;
}
</style>
