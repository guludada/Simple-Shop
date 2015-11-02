<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<!-- 新 Bootstrap 核心 CSS 文件 -->
		<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<!-- 可选的Bootstrap主题文件（一般不用引入） -->
		<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
		<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
		<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
		<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
		<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		
		<!-- custom CSS file -->
		<link rel="stylesheet" href="resources/css/main/shop_header.css">
		<script src="resources/js/mall/home.js"></script>
	</head>
	<body>
		<div class="header">
			<div class="header_tool_menu_bar">
				<span class="header_tool_menu"></span>
				<img class="simple_shop_logo" alt="header_background" src="resources/images/simple_shop_logo_272x158.png">
				<p class="title_login_regi_block"> <span class="title_block">Simple Shop</span><br><span class="login_regi_block"><a class="login">登录&nbsp/&nbsp</a><a class="register">注册</a></span> </p>
			</div>
		    <img alt="header_background" class="header_background" src="resources/images/shop_header_background_1920x504.jpg"> 

			<div class="header_introduces">
				<p>
					<h1>Simple Shop</h1>
					&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp干净 简洁 易用 方便 快捷 专业
				</p>
			</div>
			<input type="text" class="header_search" placeholder="search">
		</div>
		<div class="shop_products" id="shop_products">
			<div class="items_block_1_1 itemBlock" name="itemBlock" id="itemBlock_1">
				<img class="item_img" alt="header_background" src="resources/images/item_preview.jpg">
				<img class="like_btn" alt="header_background" src="resources/images/likeBtn.png">				
				<p class="item_name"> 英国花茶 </p>
				<p class="item_price"> 26 </p>
			</div>
			<div class="items_block_1_2 itemBlock" name="itemBlock" id="itemBlock_2">
				<img class="item_img" alt="item_img" src="resources/images/item_preview.jpg">
				<img class="like_btn" alt="like_btn" src="resources/images/likeBtn.png">
				<img class="buy_btn" alt="buy_btn" src="resources/images/buyButton.png">					
				<p class="item_name"> 英国花茶 </p>
				<p class="item_price"> ￥26.00 </p>
			</div>					
		</div>
		<div class="footer">
		</div>	
		<script>
			$(document).ready(function() {
				shoppingMallHomeLayoutHandler();
			});
		</script>
	</body>
</html>
