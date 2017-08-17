$(function() {

	var form = $('#form_separte');

	var formMessages = $('#error');

	$(form).submit(function(e) {

		e.preventDefault();

		// Serializamos...
		var formData = $(form).serialize();

		// enviamos mediante AJAX
		$.ajax({

			type: 'POST',
			url: $(form).attr('action'),
			data: formData
			
		})
		.done(function(response) {

			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			$(formMessages).text(response);

			$('#nombres').val('');
			$('#email').val('');
		})
		.fail(function(data) {

			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			if (data.responseText !== '') {

				$(formMessages).text(data.responseText);

			} else {

				$(formMessages).text('Ocurrió un error con tu registro. Intenta nuevamente.');

			}

		});

	});

});
