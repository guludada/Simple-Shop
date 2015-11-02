/**
 * 
 */
var blockGap = 20;
var bannerHeight = 410;

function shoppingMallHomeLayoutHandler() {
	generateItemBlocks();
}

function generateItemBlocks() {
	
	var rowsAndColumnsNum = calculateRowsAndColumns();
	var columnsNum = rowsAndColumnsNum["columnsNum"];
	
	var shop_products_div = document.getElementById('shop_products');
	//计算已经存在的商品block的数量
	var existBlocksNum = $("div[name='itemBlock']").size();	
	
	for(var i = 1; i <= 18; i++) {
		
		//计算新添加的商品所在的行列位置		 
		var rowLocation =  (existBlocksNum + i) % columnsNum == 0?(existBlocksNum + i) / columnsNum:parseInt((existBlocksNum + i) / columnsNum)+1;
		var columnLocation = (existBlocksNum + i) % columnsNum == 0?columnsNum:(existBlocksNum + i) % columnsNum;
						
		var itemBlock = document.createElement("div");
		itemBlock.setAttribute("class","itemBlock");
		itemBlock.setAttribute("name","itemBlock");
		itemBlock.setAttribute("id","itemBlock_"+(existBlocksNum+i));
		itemBlock.style.top = bannerHeight + (rowLocation - 1) * (320 + blockGap) + "px";
		itemBlock.style.left = (columnLocation - 1) * (320 + blockGap) + blockGap + "px";
		itemBlock = generateItemBlockElements(itemBlock,i);
		shop_products_div.appendChild(itemBlock);
		//$(".shop_products").append('<div class="items_block_1_1 itemBlock" name="itemBlock"></div>');
	}
}

function calculateRowsAndColumns() {
	
	var productsNum = acquireItems();
	var windowWidth = document.body.clientWidth;
	var windowHeight = document.body.clientHeight;
	
	//calculate how many items in one row
	var columnsNum = parseInt((windowWidth - 20)/320);
	if(columnsNum == 0) {columnsNum = 1;}
	
	//calculate how many rows
	var rowsNum = productsNum % columnsNum == 0?productsNum / columnsNum:parseInt((productsNum / columnsNum))+1;
	
	return {"rowsNum":rowsNum,"columnsNum":columnsNum};
}

function acquireItems() {
	
	//计算已经存在的商品block的数量
	var existBlocksNum = $("div[name='itemBlock']").size();	
	var productsNum = 20 + existBlocksNum;
	return productsNum;
}

function generateItemBlockElements(itemBlockObj,dataObj) {
	var itemImg = document.createElement("img");
	itemImg.src = "resources/images/item_preview.jpg";
	itemImg.setAttribute("class","item_img");
	itemBlockObj.appendChild(itemImg);
	
	var likeBtn = document.createElement("img");
	likeBtn.src = "resources/images/likeBtn.png";
	likeBtn.setAttribute("class","like_btn");
	itemBlockObj.appendChild(likeBtn);
	
	var buyBtn = document.createElement("img");
	buyBtn.src = "resources/images/buyButton.png";
	buyBtn.setAttribute("class","buy_btn");
	itemBlockObj.appendChild(buyBtn);
	
	var itemName = document.createElement("p");
	itemName.innerHTML = "英国花茶";
	itemName.setAttribute("class","item_name");
	itemBlockObj.appendChild(itemName);
	
	var itemPrice = document.createElement("p");
	itemPrice.innerHTML = "￥26.00"+dataObj;
	itemPrice.setAttribute("class","item_price");	
	itemBlockObj.appendChild(itemPrice);
	
	return itemBlockObj;
}

//窗口发生变化时重新定位商城中的商品块位置
var timeoutCodeBlock;
window.onresize = function(){
	clearTimeout(timeoutCodeBlock);
	timeoutCodeBlock = setTimeout(function(){
		reSetPosition();
	},100)
};
//document.onscroll = function(){
//		clearTimeout(timeoutCodeBlock);
//		timeoutCodeBlock = setTimeout(
//						function(){
//							alert(document.body.scrollTop);
//						},100)
//	};


function reSetPosition(){
	
	var rowsAndColumnsNum = calculateRowsAndColumns();
	var columnsNum = rowsAndColumnsNum["columnsNum"];
	var shop_products_div = document.getElementById('shop_products');
	
	//计算已经存在的商品block的数量
	var existBlocksNum = $("div[name='itemBlock']").size();
	for(var i = 1; i <= existBlocksNum; i++) {		
		//计算商品所在的行列位置		 
		var rowLocation =  i % columnsNum == 0? i/columnsNum:parseInt(i/columnsNum)+1;
		var columnLocation = i % columnsNum == 0?columnsNum:i%columnsNum;
//		var itemBlock = document.getElementById('itemBlock_'+i);
		$("#itemBlock_"+i).animate({
			top:bannerHeight + (rowLocation - 1) * (320 + blockGap) + "px",
			left:(columnLocation - 1) * (320 + blockGap) + blockGap + "px"
		});		
//		itemBlock.style.top = bannerHeight + (rowLocation - 1) * (320 + blockGap) + "px";
//		itemBlock.style.left = (columnLocation - 1) * (320 + blockGap) + blockGap + "px";	
	}	
}
