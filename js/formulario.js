$(document).ready(function(){

	$("#form_separte").validate({

		rules:
		{
			nombres:{
				required:true
			},
			email:{
				required:true,
				email:true
			}
		},
		
		messages:
		{
			nombres: "Ingresa tus nombres completos",
			email: "Ingresa una dirección de correo válida"
		},

		submitHandler: submitForm

	});

	function submitForm()
	{
		var data = $("#form_separte").serialize();

		$.ajax({

			type:'POST',
			url: 'envia.php',
			data: data,
			beforeSend: function()
			{
				$('#error').fadeOut();
				$('#btnSubmit').html('Cargando...');
			},

			success: function(data)
			{

				// validaciones de envio email

			}

		});

		return false;
	}

});