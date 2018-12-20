<template>
  <div class="Pos">
	  <el-row>
		  <el-col :span="7" id="sideHeight">
		  	<el-tabs v-model="activeName">
			    <el-tab-pane label="点餐" name="first">
			    	<el-table :data="tableData" border style="width: 100%">
					    <el-table-column prop="goodsName" label="商品名称" width="">
					    </el-table-column>
					    <el-table-column prop="count" label="数量" width="60">
					    </el-table-column>
					    <el-table-column prop="price" label="金额" width="">
					    </el-table-column>
					    <el-table-column fixed="right" label="操作" width="100">
					      <template slot-scope="scope">
					        <el-button type="text" size="small" @click="deleteGoods(scope.row)">删除</el-button>
					        <el-button type="text" size="small" @click="addToOrder(scope.row)">增加</el-button>
					      </template>
					    </el-table-column>
					  </el-table>
			    </el-tab-pane>
			    <el-tab-pane label="挂单" name="second">
			    	<el-table style="width: 100%">
				      <el-table-column prop="date" label="日期" width=""></el-table-column>
				      <el-table-column prop="name" label="姓名" width=""></el-table-column>
				      <el-table-column prop="address" label="地址" width=""></el-table-column>
				    </el-table>
			    </el-tab-pane>
			    <el-tab-pane label="外卖" name="third">
			    	<el-table style="width: 100%">
				      <el-table-column prop="date" label="日期" width=""></el-table-column>
				      <el-table-column prop="name" label="姓名" width=""></el-table-column>
				      <el-table-column prop="address" label="地址" width=""></el-table-column>
				    </el-table>
			    </el-tab-pane>
			  </el-tabs>
			  <el-row class="order-btn">
			  	<el-col :span="12">
				  	<small>数量总计：</small>{{totalCount}}份
				  </el-col>
				  <el-col :span="12">
				  	<small>总价：</small>￥{{totalMoney}}元
				  </el-col>
			  </el-row>
			  <el-row class="order-btn">
			  	<el-col :span="8">
				  	<el-button type="success" @click="payMoney">买单</el-button>
				  </el-col>
				  <el-col :span="8">
					  <el-button type="primary">挂单</el-button>
				  </el-col>
				  <el-col :span="8">
					  <el-button type="danger" @click="deleteAll">清空</el-button>
				  </el-col>
			  </el-row>
			  
		  </el-col>
		  <el-col :span="17">
		  	<div class="often-goods">
			    <div class="title">常用商品</div>
			    <div class="often-goods-list">
			        <ul>
			            <li v-for="goods in oftenGoods" @click="addToOrder(goods)">
			                <span>{{goods.goodsName}}</span>
			                <span class="o-price">￥{{goods.price}}元</span>
			            </li>
			        </ul>
			    </div>
				</div>
				<div class="goods-type">
			    <el-tabs>
			        <el-tab-pane label="汉堡">
			            <ul class='cookList'>
								    <li v-for="cooks in type0Goods" @click="addToOrder(cooks)">

								        <span class="foodName">{{cooks.goodsName}}</span>
								        <span class="foodPrice">￥{{cooks.price}}元</span>
								    </li>
								</ul>
			        </el-tab-pane>
			        <el-tab-pane label="小食">
								<ul class='cookList'>
								    <li v-for="cooks in type1Goods" @click="addToOrder(cooks)">

								        <span class="foodName">{{cooks.goodsName}}</span>
								        <span class="foodPrice">￥{{cooks.price}}元</span>
								    </li>
								</ul>
			        </el-tab-pane>
			        <el-tab-pane label="饮料">
			            <ul class='cookList'>
								    <li v-for="cooks in type2Goods" @click="addToOrder(cooks)">

								        <span class="foodName">{{cooks.goodsName}}</span>
								        <span class="foodPrice">￥{{cooks.price}}元</span>
								    </li>
									</ul>
			        </el-tab-pane>
			        <el-tab-pane label="套餐">
			            <ul class='cookList'>
								    <li v-for="cooks in type3Goods" @click="addToOrder(cooks)">

								        <span class="foodName">{{cooks.goodsName}}</span>
								        <span class="foodPrice">￥{{cooks.price}}元</span>
								    </li>
									</ul>
			        </el-tab-pane>
			    </el-tabs>
			</div>
		  </el-col>
		</el-row>
		
  </div>
</template>

<script>
const STORAGE_KEY = 'pos-store'
let local = {
  save (value) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))  //value是一个对象，由于存储只能是字符串的值，需要将JSON转化成字符串的json形式，使用JSON.stringify方法
  },
  fetch () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  },
  delete(){
  	localStorage.removeItem(STORAGE_KEY)
  }
}
let localData = local.fetch();

import axios from 'axios';
export default {
  name: 'Pos',
  data () {
    return {
      activeName: 'first',
      tableData:localData,
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalCount:0,
      totalMoney:0,
    }
  },
  mounted(){
		let windowHeight = document.documentElement.clientHeight;
		document.getElementById("sideHeight").style.height = windowHeight + "px";
  },
  created(){
  	axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
  	.then((response)=>{
  		this.oftenGoods = response.data;
  	})
  	.catch((error)=>{
  		console.log(error)
  	})
  	axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
  	.then((response)=>{
  		this.type0Goods = response.data[0];
  		this.type1Goods = response.data[1];
  		this.type2Goods = response.data[2];
  		this.type3Goods = response.data[3];
  	})
  	.catch((error)=>{
  		console.log(error)
  	})
  	this.updateGoods();
  	
  },
  methods:{
	  addToOrder(goods){
			let isHave = false;
			//判断当前点击的商品是否已经存在于左边栏
			for (let i=0;i<this.tableData.length;i++) {
				if(this.tableData[i].goodsId === goods.goodsId){
					isHave = true;
				}
			}
			if(isHave){  //已经存在，数量+1，将当前已经存在的商品存到数组里，然后count值++
				let existArr = this.tableData.filter((item)=>{
					return item.goodsId === goods.goodsId
				})
				existArr[0].count++;
			}else{  //不存在就新增加进去(新增加的做法是新建一个对象，然后push到数据的数组里)
				let obj = {};
				obj.goodsId = goods.goodsId;
				obj.goodsName = goods.goodsName;
				obj.price = goods.price;
				obj.count = 1;
				this.tableData.push(obj);
			}
			this.updateGoods();
			local.save(this.tableData);
	  },
	  
	  updateGoods(){
	  	this.totalCount = 0;
			this.totalMoney = 0;
			this.tableData.forEach((item)=>{
				this.totalCount+=item.count;
				this.totalMoney+=item.count*item.price;
			})
	  },
	  deleteGoods(goods){
	  	this.tableData = this.tableData.filter((item)=>{  //形式上的表面上的减少，真正的减少本地存储在watch里面
	  		return item.goodsId != goods.goodsId
	  	})
	  	this.updateGoods();
			local.save(this.tableData);
	  },
	  deleteAll(){
	  	if(this.totalCount!=0){
	  		this.tableData = [];
	  		this.totalCount = 0;
	  		this.totalMoney = 0;
	  	}
	  	local.delete();
	  },
	  payMoney(){
	  	if(this.totalCount!=0){
	  		this.tableData = [];
	  		this.totalCount = 0;
	  		this.totalMoney = 0;
	  		this.$alert('买单成功', '恭喜', {
          confirmButtonText: '确定'
        }).then(()=>{
        	local.delete();
        })
	  		
	  	}else{
	  		this.$alert('买单失败','抱歉',{
	  			confirmButtonText: '确定'
	  		})
	  	}
	  }
  }
}
</script>

<style scoped>
	#sideHeight{
		border-right:1px solid #ccc ;
	}
 .order-btn{
 	margin-top: 10px;
 	text-align: center;
 }
 .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:9px;
   }
   .often-goods-list ul li{
      list-style: none;
      cursor: pointer;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
   .often-goods-list ul{
   	clear: both;
   	zoom: 1;
   	height: 200px;
   }
  .o-price{
      color:#58B7FF; 
   }
   .cookList li{
       list-style: none;
       width:23%;
       cursor: pointer;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
   }
   .cookList li span{
        display: block;
        float:left;
   }
   .cookList{
   	clear: both;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>
