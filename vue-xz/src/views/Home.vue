<template>
  <div class="container px-2">
    <div>
      <mt-swipe :auto="4000"  style="height:200px">
        <mt-swipe-item v-for="(item,i) in imgList" :key="i">
          <img :src="`${baseURL}/${item.img}`" width="100%" height="100%">
        </mt-swipe-item>        
      </mt-swipe>
    </div>
    <h5 class="text-left p-1">商品推荐</h5>
    <div class="row p-3 d-flex flex-warp justify-content-between">
        <div v-for="(item,i) of recommendedList"
        :key="i"
        style="width:30%;border-radius:5px"
        class="border m-1 p-1">
        
        <!-- 商品图片 -->
        <div>
          <img :src="`${baseURL}/${item.pic}`" class="w-100" />
        </div>
        <!-- 商品名称 -->
        <div>{{item.titile}}</div>
        <!-- 商品价格 -->
        <div class="font-weight-bold">￥{{item.price}}</div>
        <!-- 加入购物车 -->
        <div>
        <mt-button>加入购物车</mt-button>
        </div>
        </div>  
    </div>
    
    <h5 class="text-left p-2">新品上架</h5>
       <div class="row p-3 d-flex flex-warp justify-content-between">
        <div v-for="(item,i) of recommendedList"
        :key="i"
        style="width:30%;border-radius:5px"
        class="border m-1 p-1">
        
        <!-- 商品图片 -->
        <div>
          <img :src="`${baseURL}/${item.pic}`" class="w-100" />
        </div>
        <!-- 商品名称 -->
        <div>{{item.titile}}</div>
        <!-- 商品价格 -->
        <div class="font-weight-bold">￥{{item.price}}</div>
        <!-- 加入购物车 -->
        <div>
        <mt-button>加入购物车</mt-button>
        </div>
        </div>  
    </div>

   
    <router-link to="/messagelist" >订单</router-link>
  </div>
</template>

<script>

import {getCarouselList,getRecommendedList} from "@/assets/js/apis/index.js" //导入接口
import {baseURL} from "@/assets/js/apis/product.js" //导入接口

export default {  
  data(){
    return {
        imgList:[],
        baseURL:baseURL,
        recommendedList:[],
    }
  },  
  created(){
    this.loadCarouselList();
    this.loadRecommendList();
  },
  methods:{
    async loadCarouselList(){
      let result= await getCarouselList();
      // console.log(result);
      this.imgList = result;
    },
    async loadRecommendList(){
      let result= await getRecommendedList();
      console.log(result);
     this.recommendedList=result;
    }
  },

  components:{
  },
 
};
</script>
<style scoped>
</style>