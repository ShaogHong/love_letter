// JavaScript Document
var i = 0;
window.onload = function () {
	var iNO = document.getElementById("NO"); var iOK = document.getElementById("OK"); var iTEXT = document.getElementById("iTEXT"); iNO.onclick = function () {
		i++; if (i == 1) {
			iTEXT.innerHTML = "~ 我不抽烟 ~";
		} else if (i == 2) { iTEXT.innerHTML = "~ 医生说我酒精过敏 ~"; } else if (i == 3) { iTEXT.innerHTML = "~ 我会做饭 ~"; } else if (i == 4) { iTEXT.innerHTML = "~ 家务我全干 ~"; } else if (i == 5) {
			iTEXT.innerHTML = "~ 不藏私房钱 ~";
		} else if (i == 6) { iTEXT.innerHTML = "~ 情绪稳定 ~"; }
		else if (i == 7) { iTEXT.innerHTML = "~ 身边少有女性朋友 ~"; }
		else if (i == 8) { iTEXT.innerHTML = "~ 我很认真  ~"; }
		else if (i == 9) { iTEXT.innerHTML = "~ 还要再点嘛 ~"; }
		else if (i == 10) { iTEXT.innerHTML = "~真的还要再点嘛🥲~ "; } else if (i == 11) {
			iTEXT.innerHTML = "~ 好吧,打扰了😭 ~";
			i = 0;
		}

	}
	iOK.onclick = function () {

		iTEXT.innerHTML = "同意了😌💕🎉🌹✨🥰😍";
	}


}
