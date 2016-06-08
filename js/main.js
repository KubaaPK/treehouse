var togglenavBtn = document.getElementById('toggleNavBtn'),
		navigationList = document.querySelectorAll('.linkk');



toggleNavBtn.addEventListener('click', function(){

	for(var i = 0; i < navigationList.length; i++) {
		navigationList[i].classList.toggle('display');
	}

	
});
