<?php
    // 注册页面
    // 设置响应头
    header("Content-Type:application/json;charset=utf-8");
    // 获取uname upwd uemail
    @$uname = $_REQUEST['uname']or die('{"code":401,"msg":"用户名不能为空"}');
    @$upwd = $_REQUEST['upwd']or die('{"code":402,"msg":"密码不能为空"}');
    @$uemail = $_REQUEST['uemail']or die('{"code":403,"msg":"邮箱不能为空"}');
    // 获取接连，设置编码
    require('init.php');
    // 创建sql语句
    $sql = "INSERT INTO razer_user VALUES(NULL,'$uname','$upwd','$uemail')";
    $result = mysqli_query($conn,$sql);
    if($result === true){
        echo '{"code":101,"msg":"注册成功"}';
    }else{
        $output = ["code"=>405,"msg"=>"注册失败"];
        echo json_encode($output);
    }
?>