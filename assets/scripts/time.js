(function(){
	
	var tempo      = new Date();
	
	var domHora    = document.querySelector("#hora"); 
	var domMinuto  = document.querySelector("#minuto");
	var domSegundo = document.querySelector("#segundo");

	tempo.setHours(0);
	tempo.setMinutes(0);
	tempo.setSeconds(0);
	console.log(domMinuto);
	domSegundo.textContent = tempo.getSeconds();
	domHora.textContent    = tempo.getHours();
	domMinuto.textContent  = tempo.getMinutes();

	var segundo = 0;
	
	setInterval(function(){
		//incremento para os segundos
		
		segundo ++;
		//setando o segundo do objeto
		tempo.setSeconds(segundo);
		console.log(segundo);
		domSegundo.textContent = tempo.getSeconds();
		domHora.textContent    = tempo.getHours()
		domMinuto.textContent  = tempo.getMinutes()
		
		console.log(domSegundo);
		if (segundo === 60) {
			segundo = 0;
		}

	}, 1000);

})();