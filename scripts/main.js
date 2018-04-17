$(document).ready(function(){
	$("form input[type=checkbox]").change(function(){
		$(this).siblings('.checkbox').toggleClass('checked');
	});
	$("form button").click(function(){
		$(this).parents("form").submit();
	});
	var messages, lang = $("html").attr("lang");

	if(lang == "ru"){
		messages = {
			'country': "Пожалуйста выберите страну",
			'email': "Пожалуйста введите email",
			'private-police': 'Пожалуйста подтвердите согласие на обработку персональных данных'
		}
	}
	else if(lang == 'en'){
		messages = {
			'country': "Please, select a country",
			'email': "Please, enter the email",
			'private-police': "Please, confirm your consent to the processing of personal data"
		}
	}
	else if(lang == "bg"){
		messages = {
			'country': "Моля, изберете държава",
			'email': "Моля, въведете email",
			'private-police': 'Моля, потвърдете съгласието си за обработката на лични данни'
		}
	}	
	else if(lang == "ro"){
		messages = {
			'country': "Vă rugăm, selectați  țara",
			'email': " Vă rugăm să introduceți email",
			'private-police': 'Vă rugăm să confirmați consimțământul pentru prelucrarea datelor cu caracter personal'
		}
	}
	else if(lang == "es"){
		messages = {
			'country': "Por favor, selecciona un país",
			'email': "Por favor, introduzca su dirección de correo electrónico",
			'private-police': 'Por favor, confirma tu consentimiento para el procesamiento de información personal'
		}
	}
	else if(lang == "it"){
		messages = {
			'country': "Seleziona un paese",
			'email': "Inserisci l'indirizzo e-mail  ",
			'private-police': 'Conferma il consenso al trattamento dei dati personali'
		}
	}
	else if(lang == "th"){
		messages = {
			'country': "กรุณาเลือกประเทศ",
			'email': "คุณได้รับอีเมล 1 ฉบับ",
			'private-police': 'กรุณายืนยันการยินยอมให้ดำเนินการภายใต้ข้อมูลส่วนบุคคลนี้'
		}
	}	
	else if(lang == 'vi'){
		messages = {
			'country': "Vui lòng chọn quốc gia",
			'email': "Vui lòng nhập email",
			'private-police': "Vui lòng xác nhận rằng bạn đồng ý việc xử lý thông tin cá nhân"
		}
	}
	$("#request-1").validate({
		'messages' : messages
	});		
	$("#request-2").validate({
		'messages' : messages
	});		
});