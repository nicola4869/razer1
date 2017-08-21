/**
 * Created by bjwsl-001 on 2017/7/13.
 */
/****index.html****/
//顶层的下拉菜单
//查找class为product,leading的li
var lis=document.querySelectorAll(
    ".product,.leading"
);
//为每个li绑定鼠标进入和鼠标移出事件
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
        //this->当前的li
        //找到当前li下最后一个元素显示block
        this.lastElementChild
            .style.display="block";
        this.firstElementChild
            .className="hover";
    };
    lis[i].onmouseout=function(){
        //找到当前li下最后一个元素显示其隐藏
        this.lastElementChild
            .style.display="";
        this.firstElementChild
            .className="";

    }
}
//查找id为S_img的div
var div=
    document.getElementById("S_img");
//定义任务函数
function task(){
    //找到id为S_img下的class为show的img
    var img=div.querySelector(
        ".show"
    );
    //清除img的class
    img.className="";
    //如果img的下一个兄弟不是null
    //设置img的下一个兄弟的class为show
    if(img.nextElementSibling!=null)
        img.nextElementSibling
            .className="show";
    else
    //设置class为img的div下的第一个子元素的class为CN-show
        div.firstElementChild
            .className="show"
}
//启动定时器
var timer=setInterval(task,2500);
//为div绑定鼠标进入事件
div.onmouseover=function(){
    //停止定时器
    clearInterval(timer);
    timer=null;
//为div绑定鼠标移出事件
    div.onmouseout=function(){
        timer=setInterval(task,2500);
    }
};


//Razer_store.html
//1.移入移出的时的菜单弹出
var dropList = document.getElementsByClassName("drop_list");
console.log(dropList);
for(var i=0;i<dropList.length;i++){
  dropList[i].onmouseover = function(){
    //console.log(this.lastElementChild);
    this.lastElementChild.style.display = "block";
    this.style.borderLeft = "2px solid #00ff00"
  };
  dropList[i].onmouseout = function(){
    //console.log(this.lastElementChild);
    this.lastElementChild.style.display = "";
    this.style.borderLeft = "";
  };
}

//2.图片轮播
//广告图片数组
var c_imgs=[
  "img/1480577037689656643.jpg",
  "img/1480577239324040261.jpg",
  "img/1482117124558108056.jpg"
];
//DOM内容加载后执行
$(()=>{
  var $ulImgs=$("#categlory_imgs");
  var $ulIndex=$("#categlory_index");
  //每个li的宽度
  var LIWIDTH=parseFloat($("#categlory_slider").css("width"));
  //设置ul的总宽度，容下所有li，c_imgs.length+1是由于后面追加了第一张图片
  $ulImgs.css("width",LIWIDTH*(c_imgs.length+1));
  //将c_imgs中的图片动态生成为li>img
  var strImg='<li><img src="'+c_imgs.join('"></li><li><img src="')+'"></li>';
  //再重复追家第一张图片
  //strImg+=`<li><img src="${c_imgs[0]}"></li>`;
  $ulImgs.html(strImg);
  //根据c_imgs中图片的个数动态生成索引li
  for(var i=1,str="";i<=c_imgs.length;i++){
    str+="<li>"+i+"</li>";
  }
  //设置默认第一个li为hover
  $ulIndex.html(str)
      .children(":first")
      .addClass("hover");
  //自动轮播
  var speed=1000;//每次轮播的时间
  var wait=3000;//每次轮播之间等待的时间
  var timer=null;//保存一次性定时器的序号
  var i=0;//保存当前显示的图片的下标
  function move(){
    timer=setTimeout(()=>{
      i++;
      //让$ulImgs的left在speed时间内，移动到-i*LIWIDTH处
      $ulImgs.animate({left:-i*LIWIDTH},speed,
          //声明函数防止i越界
          ()=>{
            if(i==c_imgs.length){
              i=0;
              $ulImgs.css("left","")
            }
            //将$ulIndex中的第i个li设置为hover,清除其兄弟的hover
            $ulIndex.children(":eq("+i+")")
                .addClass("hover")
                .siblings()
                .removeClass("hover");
            //在移动后，再次回调move启动下次
            if(canMove)
              move()
          }
      );
    },wait)
  }
  move();//启动第一次
  //标记变量，用来标记是否启用下次move函数
  var canMove=true;
  //为id为categlory_slider的div添加鼠标进入和移出事件
  $("#categlory_slider").hover(
      ()=>{
        //停止一次性定时器
        clearTimeout(timer);
        canMove=false;
      },
      ()=>{
        canMove=true;
        move();
      }
  );
  //当鼠标进入index中的li时，滚动到指定的图片
  $ulIndex.on(
      "mouseover","li:not(.hover)",e=>{
        //获得当前li的下标
        i=$ulIndex.children().index(e.target);
        //先清空动画队列，再启动本次动画
        $ulImgs.stop(true).animate(
            {left:-i*LIWIDTH},speed,
            ()=>{
              //将$ulIndex中的第i个li设置为hover,清除其兄弟的hover
              $ulIndex.children(":eq("+i+")")
                  .addClass("hover")
                  .siblings()
                  .removeClass("hover");
            }
        )
      }
  )
});

//store_log.html
//1.下拉菜单
$("#allProduct>a").mouseenter(e=>{
    $(".cart_menu").css({
        height:411,
        opacity:1
    })
});
$("#allProduct").mouseleave(e=>{
    $(".cart_menu").css({
        height:0,
        opacity:0
    })
});

//登录操作
$("#log_btn").click(e=>{
  var n = $("#uname").val();
  var p = $("#upwd").val();
  console.log(n+p);
  $.ajax({
    type:"POST",
    url:"data/login.php",
    data:{uname:n,upwd:p},
    error:function(data){ //404 500
      console.log(data+4); //json格式不正确
    },
    success:function(data){
      console.log(data+3);
      //5:判断登录成功
      if(data.code==1){
        alert("登陆成功,3S后自动跳转到首页");
        setTimeout(function(){
          location.href="homepage.html";
        },3000)
      }
    }
  });
});

//注册操作
$("#reg_btn").click(e=>{
  var n = $("#uname").val();
  var p = $("#upwd").val();
  var m = $("#uemail").val();
  $.ajax({
    type:"POST",
    url:"data/register.php",
    data:{uname:n,upwd:p,uemail:m},
    error:function(data){
      console.log(data+4);
    },
    success:function(data){
      console.log(data);
      if(data.code==101){
        alert(data.msg);
        location.href = 'store_razerzoon.html';
      }else{
        alert(data.msg);
      }
    }
  })
});
//顶层的下拉菜单
//查找class为product,leading的li
var lis=document.querySelectorAll(
    ".product"
);
//为每个li绑定鼠标进入和鼠标移出事件
for(var i=0;i<lis.length;i++){
  lis[i].onmouseover=function(){
    //this->当前的li
    //找到当前li下最后一个元素显示block
    this.lastElementChild
        .style.display="block";
    this.firstElementChild
        .className="hover";
  };
  lis[i].onmouseout=function(){
    //找到当前li下最后一个元素显示其隐藏
    this.lastElementChild
        .style.display="";
    this.firstElementChild
        .className="";
  }
}
var lis1=document.querySelectorAll('.product-menu>li>a');
//console.log(lis1);
for(var i=0;i<lis1.length;i++) {
  lis1[i].onmouseover = function () {
    this.parentElement
        .lastElementChild
        .style.display = "block";
    this.parentElement
        .lastElementChild
        .style.className = "hover";

  };
  lis1[i].onmouseout = function () {
    //找到当前li下最后一个元素显示其隐藏
    this.parentElement
        .lastElementChild
        .style.display = "";
    this.parentElement
        .lastElementChild
        .style.className = "";

  };
}
/*全部商品分类的下拉菜单*/
$("#allProduct").mouseenter(e=>{
  $("#cart_menu").css({
    opacity:1,
    height:400,
    zIndex:50
  })
})
.mouseleave(e=>{
    $("#cart_menu").css({
      opacity:0,
      height:0,
      zIndex:0
    })
  });

/****keyboard.html****/
//查找id为cateContent的div
var cateCo=document.getElementsByClassName("categlory_list");
//查找class为categlory_top下的第一个a
var ca=document.querySelector(".categloryTop");
console.log(cateCo);
//为其绑定鼠标移入和移出事件
//ca.onmouseover=function(){
//  //鼠标移入时，display为block
//  cateCo.style.display="block";
//};
//cateCo.onmouseout=function(){
//  //鼠标移出时，display为none
//  cateCo.style.display="none";
//};
/**找到id为cate-box下所有直接子元素存为lis**/
var lis=document.querySelectorAll(
    "#cate-box>li"
);
//console.log(lis);
//遍历lis中的每个li
for(var i=0;i<lis.length;i++){
    //为当前的li绑定鼠标进入事件
    lis[i].onmouseover=function(){
        //设置当前li的最后一个元素显示
        this.lastElementChild
            .style.display="block";
        //设置当前li的第一个元素属性为hover
        this.firstElementChild
            .className="hover";
        //设置当前li的属性为grLeft;
        this.className="grLeft";
    };
    //为当前的li绑定鼠标移出事件
    lis[i].onmouseout=function(){
        //设置当前li的最后一个元素不显示
        this.lastElementChild
            .style.display="";
        //设置当前li的第一个元素属性为空
        this.firstElementChild
            .className="";
        //设置当前li的属性为""
        this.className="";
    }
}

/*
 *点击小图片切换大图片
 * 获取id为mImg的元素
 * 获取id为iconList的ulList
 * 为iconList下的img绑定单击事件，利用冒泡
 *   如果当前鼠标点击的目标的节点名是IMG
 *   设置当前图片的border为1px solid #00FF00
 *   其它图片的border设置为1px solid transparent?
 *   获取当前目标图片的src
 *   找到最后一个"."的位置i
 *   截取src点之前的地址，后面再拼接png,存入原来的src
 *   将src赋给mImg.src
 */
var mImg=document.getElementById("mImg");
var ulList=document.getElementById("iconList");
console.log(ulList);
ulList.onclick=function(e){
    if(e.target.nodeName=="IMG"){
        console.log(e.target.nodeName);
        e.target.style.border="1px solid #00FF00";
        var src=e.target.src;
        var i=src.lastIndexOf(".");
        src=src.slice(0,i)+".png";
        mImg.src=src;
    }
};

/*
 * 找到class分别为mask,superMask的元素
 * 设置MAX的固定大小
 * 设置位移max的大小
 * 为superMask元素绑定鼠标移入事件
 *   显示遮罩层block
 *   找到鼠标指针的位置
 *   设置mask的位移left,top并赋值
 *   设置最大位移为MAX=500-175
 *   如果top和left小于0，将其值设为0
 *   如果op和left大于MAX，将其值设为MAX
 * 为superMask元素绑定鼠标移出事件
 *   隐藏遮罩层
 */
var mSize=175;
var max=325;
var medDiv=document.getElementById("mediumDiv");
var mask=medDiv.getElementsByClassName("mask")[0];
var sMask=medDiv.getElementsByClassName("superMask")[0];
console.log(sMask)
sMask.onmouseover=function(e){
    mask.style.display="block";
    var X=e.offsetX,Y=e.offsetY;
    var left=X-mSize/2;
    var top=Y-mSize/2;
    if(top<0){
        top=0;
    }else if(left<0){
        left=0
    }else if(top>max){
        top=max;
    }else if(left>max){
        left=max;
    }
    mask.style.top=top+"px";
    mask.style.left=left+"px";
};
sMask.onmouseout=function(e){
    mask.style.display="";
};

//分享商品的弹出菜单
/*
 * 找到class为tt_share的a ts
 * 找到class为tt_list的ul tList
 * 为其绑定移入事件
 *     tlist的class为block
 * 为其绑定移出事件
 *     tlist的class为""
 */
var toggleMenu = function(id1,id2,hValue,opacityValue){
    if(!document.getElementById)return false;
    if(!document.getElementsByClassName)return false;
    var ttTittle = document.getElementById(id1);
    var ttList =document.getElementById(id2);
    ttTittle.onmouseover = function(){
        ttList.style.height= hValue+"px";
        ttList.style.opacity=opacityValue;
    };
    ttTittle.onmouseout = function(){
        ttList.style.height=0;
        ttList.style.opacity=0;
    }
};
toggleMenu("tt_share","tt_list",60,1);