function escapeTags( str ) {
  return String( str )
           .replace( /&/g, '&amp;' )
           .replace( /"/g, '&quot;' )
           .replace( /'/g, '&#39;' )
           .replace( /</g, '&lt;' )
           .replace( />/g, '&gt;' );
}


$(document).ready(function(){


//$('#actUpload').click(function() {
	
//$.get("ajax/caller.php", { nome: "Mario", cognome: "Rossi" }, function(risposta) {
//  $("#risultato").html(risposta);
//});


//});

$("#modcampagna").click(function() {	


										
								$.ajax({
  							url: "ajax/LoadDatiCampagna.php",
  							data: { idcamp: $( "#selectcamp" ).val(), op: "m" },
  							type: "GET",
  							dataType: 'json',
  							context: document.body
							}).done(function(risp) {
  								//alert(risp);
  							
  								$("#fcid").val(risp[0].id);
  								$("#fcnome").val(risp[0].nome);
  								$("#fccampi").val(risp[0].campi_csv);
								$("#fcstato").val(risp[0].chiusa);  								

							//	for(var i in risp) {
        					//	document.write(risp[i].nome + '<br>' + risp[i].campi_csv);
    						//	}  								
  								

							});

  								$('#addmodcampagna').show();						
								$('#boxtitlecamp').html($(this).html());								
								

});

$("#nuovacampagna").click(function() {	

								$("#fcid").val('');
  								$("#fcnome").val('');
  								$("#fccampi").val('');
  								$("#fcstato").val('0');
  								
  									$('#addmodcampagna').show();
									$('#boxtitlecamp').html($(this).html());  		


});

$(".close, #btnAnnulla").click(function() {	
	$('#addmodcampagna').hide();
});

$("#btnSalva").click(function() {	

							//alert($('$fcid').val());

									$.ajax({
  							url: "ajax/InsUpdateDatiCampagna.php",
  							data: $('#formaddmodcampagna').serialize(),
  							type: "GET",
  							context: document.body
							}).done(function(risp) {
								
  								$('#addmodcampagna').hide();
							});  	

	
});


$("#selectcamp").click(function() {	
	$('#datatable').html("");
	$('#datatitle').html("");
	$('#datacodsede').html("");
});


$("[name='itemsede']").click(function() {	
	//alert($(this).attr('id'));
	
	$('#datatitle').html("<img src='../img/loader.gif' width='32' height='32' alt='Elaborazione...' />");

//alert('pausa');
								$.ajax({
  							url: "ajax/LoadDatiSede.php",
  							data: { csede: $(this).attr('id'), idcamp: $( "#selectcamp" ).val() },
  							type: "GET",
  							context: document.body
							}).done(function(risp) {
  								//msgBox.innerHTML = "Ok "+risposta;
  								datatable.innerHTML = risp;
  								msgBox.innerHTML = "";
							});  	
	
							$('#datatitle').html($('#selectcamp option:selected').text()+" - "+$(this).html());
							$('#datacodsede').html($(this).attr('id'));	
	
});

/*
$("#btnUploadSinglePDF").click(function() {	
	//alert($(this).attr('cf'));
	//alert($("input[name='fcf']:checked").attr('cf'));
	
//	$('#datatitle').html("<img src='../img/loader.gif' width='32' height='32' alt='Elaborazione...' />");

//alert('pausa');


  var btn = document.getElementById('btnUploadSinglePDF'),
      progressBar = document.getElementById('progressBarT'),
      progressOuter = document.getElementById('progressOuterT'),
      msgBox = document.getElementById('msgBoxT');

  var uploaderpdf = new ss.SimpleUpload({
        button: btn,
        url: 'ajax/file_upload_pdf.php',
        name: 'uploadfilepdf',
        allowedExtensions: ['pdf'],
        multipart: true,
        hoverClass: 'hover',
        focusClass: 'focus',
        responseType: 'json',
        startXHR: function() {
            progressOuter.style.display = 'block'; // make progress bar visible
            this.setProgressBar( progressBar );
        },
        onSubmit: function() {
            msgBox.innerHTML = ''; // empty the message box
            btn.innerHTML = 'Caricamento...'; // change button text to "Uploading..."
          },
        onComplete: function( filename, response ) {
            btn.innerHTML = 'Carica file PDF';
            progressOuter.style.display = 'none'; // hide progress bar when upload is completed

            if ( !response ) {
                msgBox.innerHTML = 'Carica file PDF';
                return;
            }

            if ( response.success === true ) {
                msgBox.innerHTML = '<strong>' + escapeTags( filename ) + '</strong>' + ", <img src='../img/loader.gif' width='32' height='32' alt='Elaborazione...' />";
					//alert($('#datacodsede').html() + " " + $( "#selectcamp" ).val());
					$.ajax({
  						url: "ajax/ImportDatiSede.php",
  						data: { csede: $('#datacodsede').html(), file: escapeTags( filename ), idcamp: $( "#selectcamp" ).val() },
  						type: "GET",
  						context: document.body
						}).done(function(risposta) {
  							msgBox.innerHTML = "<img src='../img/loader.gif' width='32' height='32' alt='Elaborazione...' />";
  							
							$.ajax({
  							url: "ajax/LoadDatiSede.php",
  							data: { csede: $('#datacodsede').html(), idcamp: $( "#selectcamp" ).val() },
  							type: "GET",
  							context: document.body
							}).done(function(risp) {
  								//msgBox.innerHTML = "Ok "+risposta;
  								datatable.innerHTML = risp;
  								msgBox.innerHTML = "";
							});     							
  							
						});               
                

            } else {
                if ( response.msg )  {
                    msgBox.innerHTML = escapeTags( response.msg );

                } else {
                    msgBox.innerHTML = 'Errore in fase di caricamento.';
                }
            }
          },
        onError: function() {
            progressOuter.style.display = 'none';
            msgBox.innerHTML = 'Impossibile caricare il file';
          }
	});




	
});
*/

});