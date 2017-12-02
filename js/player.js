var vid = document.getElementById("v");
var aud = document.getElementById("a");


class VideoPlayer {

	constructor (data,url) {

		this.aud = aud;
		this.name = data.name;
		this.videoTrack = data.bg;
		this.audioTrack = data.sg;
		this.textContent = data.txts;
		var text = this.textContent;
		

		// -- Define a URL do vídeo --//
		vid.src = url + this.videoTrack;
		aud.src = url + this.audioTrack;

		
		aud.onpause = function() {
			vid.pause();
		};
		aud.onplay = function() {
			vid.play();
		};
		console.log(this)
		
			
		
		//--- Mostra os textos no vídeo --- //
		function addSubl() {
			var title = text[0];
			var text = text[1];
			var thisTime = Math.round(this.currentTime);


			if(thisTime === Math.round(title.time)){
				$('#t').text(title.txt)
							.show();
				setTimeout(function(){
					$('#t').text("")
						.hide();
				},5000)
			}
			if(thisTime === Math.round(text.time)){
				$('#t').text(text.txt)
							.show()
				setTimeout(function(){
					$('#t').text("")
						.hide();
				},5000)
			}
			  
		}
		if(this.textContent != undefined) {
				aud.addEventListener("timeupdate",addSubl);
		} else if (this.textContent == undefined) {
			aud.removeEventListener("timeupdate", addSubl);
		}
	};
}