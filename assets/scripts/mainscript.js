(function(){
	'use strict';
	//capturando todas as imagens
	const imagens             = document.querySelectorAll("img");
	//guarda o último click
	var ultimoClick           = undefined;
	//imagem padrao "preta"
	var imagemPreta = "preto";
	//conjunto de imagens
	var arrayImagensSrc       = [
		"activity", "airplay", 
		"alert-circle", "align-center",
		"alert-octagon", "alert-triangle",  
		"align-justify", "align-left",
		"activity", "airplay", 
		"alert-circle", "align-center",
		"alert-octagon", "alert-triangle",  
		"align-justify", "align-left"
	]
	//conta jogadas de dois em dois para testar acertos, depois zera
	var   quantidadeDeJogadasControle = 0;
	//total de jogadas	
	var   quantidadeDeJogadasContador = 0;
	//quantidade de acertos do jogador		
	var   pontos                      = 0;
	
	//adicionando evento de mostrar imagens aos elementos do dom
	imagens.forEach(function(elemento, posicao){
		
		elemento.addEventListener("click", mostrarImagem);
		
		//adicionando um número no id da imagem
		elemento.setAttribute("id", posicao);
	});
	//trocando a ordem das posições do src 'arrayImagensSrc'
	function embaralhasImagens(imgs){
		var quantidadeImg = imgs.length -1;
		
		var novaPosicao   = 0;
		
		for (var posicao = quantidadeImg; posicao > 0; posicao --){

			novaPosicao                  = Math.floor( Math.random() * posicao );
			var auxiliar                 = arrayImagensSrc[posicao];
			arrayImagensSrc[posicao]     = arrayImagensSrc[novaPosicao];
			arrayImagensSrc[novaPosicao] = auxiliar;

		}

	}
	embaralhasImagens(arrayImagensSrc);
	//checa acertos 
	function checarJogada(elemento){
		
			document.querySelector("#jogadas").textContent = quantidadeDeJogadasContador;
			if (elemento.getAttribute("src") === ultimoClick.getAttribute("src")){
				pontos ++;
				document.querySelector("#pontos").textContent = pontos;
				elemento.setAttribute("sit", "acerto");
				elemento.removeEventListener("click", mostrarImagem);
				
				ultimoClick.setAttribute("sit", "acerto")
				ultimoClick.removeEventListener("click", mostrarImagem);
				
				
			}else{					
				
				resetarImagem(500);
			
			}
			
			document.querySelector("#jogadas").textContent = quantidadeDeJogadasContador;
		
	}
	//coloca o fundo preto nas imagens que não tenham a sit (situação) === 'hit'
	function resetarImagem(tempo){
		setTimeout(function(){
			imagens.forEach(function(imagem, posicao){
				if (imagem.getAttribute("sit") !== "acerto"){
					imagem.setAttribute("src", setarImagem(imagemPreta,"jpg"));
				}
					
			});	
		}, tempo);	
	}	
	
	function setarImagem (img, tipo = "svg"){

		return "assets/imagens/"+img+"."+tipo; 

	}

	function mostrarImagem(){
		var id = this.getAttribute("id");
		this.setAttribute("src", setarImagem(arrayImagensSrc[id]));
		
			quantidadeDeJogadasControle++;
		
		if (quantidadeDeJogadasControle === 2){
			quantidadeDeJogadasControle = 0;
			if (this !== ultimoClick){		
				quantidadeDeJogadasContador ++;
				checarJogada(this);	
			}else{
				resetarImagem();
			
			}

			
			
		}else{
			ultimoClick = this;
		
		}
	}			
		
})();
