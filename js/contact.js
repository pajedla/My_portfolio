document.getElementById('feedback-form').addEventListener('submit', function(evt){
		  var http = new XMLHttpRequest(), f = this;
		  evt.preventDefault();
		  http.open("POST", "Cs.php", true);
		  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
		  http.onreadystatechange = function() {
		    if (http.readyState == 4 && http.status == 200) {
		      alert(http.responseText + ', Отправленно');    
		      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
		      f.messageFF.value='';
		    }
		  }
		  http.onerror = function() {
		    alert('Не отправилось :(');
		  }
		}, false);