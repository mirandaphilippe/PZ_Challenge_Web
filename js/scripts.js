$(document).ready(function(){

	$.ajax({
		//Foi carregado o arquivo assets-jsonp.json
	    url: 'http://pbmedia.pepblast.com/pz_challenge/assets-jsonp.json',
	    dataType: 'JSONP',
	    jsonpCallback: 'JSONP_CALLBACK',
	    type: 'GET',
	    success: function (data) {
	    	asyncData(data);
		},
		error:function(){
			alert('Houve um erro na conexão com o arquivo;');
		}
	});

});


//---Função é carregada de forma Assíncrona --//
function asyncData(json) {

	var url = json.assetsLocation + "/";
	var videoData = json['objects'];
	//---- Para cada vídeo no JSON gera um elemento card ----//
	$(videoData).each(function(a){
		var card = "<li class='card'>"+
					  "<img id='card-img' src='" + url + this.im + "' alt='"+ this.name +"'>"+
					  "<span class='card-name'>"+this.name+"</span>"+
					"</li>";

		$('#cards').append(card);
	});
	//------------Para cada elemento Card gera um videoPlayer ----//

	$('.card').each(function(i){
		
		this.addEventListener("click", function(){
			video = new VideoPlayer(videoData[i],url);
			modal();

		});
		
		
	});
	function modal(){
		$('.modal-container').toggle(200);
		$('.modal-container .modal').toggle(210);

	}
	$('#close').on('click',function(){
		modal(); 
		aud.pause();
		vid.pause();
	});
};