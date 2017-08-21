// 监听功能按钮
// 获取登录按钮
// 绑定点击事件
$("#bt-login").click(function(){
  // 获取用户输入的用户名和密码
  var u = $("#user_name").val();
  var p = $("#user_pwd").val();
  // 验证 用户名密码(利用h5特性直接在表单上验证)
  var reguname = /^[a-z0-9]{3,12}$/i;
  var regupwd = /^[a-z0-9]{3,8}$/i;
  if(!reguname.test(u)){
    alert("用户名不正确");
    return;
  }
  if(!regupwd.test(p)){
    alert("密码不正确");
    return;
  }
// 如果验证不能成功提示，终止程序
// 发送AJAX请求
$.ajax({
  type:"POST",
  url:"/login",
  data:{uname:u,upwd:p},
  success:function(data){
    if(data.code == 1){
      alert("登录成功！3s后跳转用户中心");
      // 将用户uid/uname保存 session会话
      sessionStorage['loginName']=u;
      sessionStorage['loginUid']=data.uid;
      // 自动跳转
      location.href = "../homepage.html";
    }else{
      alert("登录失败"+data.msg);
    }
  }
});
});