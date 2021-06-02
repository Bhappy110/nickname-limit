var nickname = document.getElementById("nickname");
var caption = document.getElementById("caption");
var limit = 8;
var submit = document.getElementById("submit");
caption.textContent = 0 + "/" + limit;


nickname.addEventListener("input", function(){

	var nickLength = nickname.value.length;
	caption.textContent = nickLength + "/" + limit;

	if (nickLength > limit || nickLength == 0) {
		caption.style.color = "rgb(225,15,47)";
	}else{
		caption.style.color = "rgb(23,227,13)";
	}

})

submit.onclick = function(){

	var nickLength = nickname.value.length;

	if (nickLength > limit) {

		alert('nickname harus 8 character');

	}else if(nickLength == 0){

		alert('tolong isi nickname');

	}else{
		alert('nickname telah disimpan');
	}

}