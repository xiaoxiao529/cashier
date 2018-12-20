<template>
	
	<div class="left-nav">
		<ul>
			<li>
				<i class="icon iconfont icon-wodezichan"></i>
				<span>收银</span>
			</li>
			<li>
				<i class="icon iconfont icon-dianpu"></i>
				<span>店铺</span>
			</li>
			<li>
				<i class="icon iconfont icon-hanbao"></i>
				<span>商品</span>
			</li>
			<li>
				<i class="icon iconfont icon-huiyuanqia"></i>
				<span>会员</span>
			</li>
			<li>
				<i class="icon iconfont icon-tongji"></i>
				<span>统计</span>
			</li>
			<li>
				<i class="icon iconfont icon-tongji"></i>
				<span>设置</span>
			</li>
		</ul>
	</div>
	
</template>

<script>
export default{
	name:'',
	data(){
		return {
			
		}
	}
}
</script>

<style>
	.left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
    .left-nav li span{
    	text-align: center;
    	display: block;
    }
</style>