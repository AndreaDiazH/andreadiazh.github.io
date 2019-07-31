let clientInfo = document.querySelectorAll(".formBox"); 
sendMail.addEventListener('click', submitData);

function submitData (){
  validateInfo();
};

function validateInfo () {
  let info = true;
  for (let i = 0; i < clientInfo.length ; i++) {      
     if(clientInfo[i].value == ""){ 
         info = false;
         break;
     }
}
  if (!info) {
    Swal.fire({
      title: 'Llena todos los campos del mensaje, por favor',
      type: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#00ccc6'
    })

  } else {
    sendEmail();
    let frm = document.getElementById("contactFrm");
    frm.reset();
  };
 
}

/*function sendEmail () {
     //aquí va la funcion del correo//
    console.log("aquí hay un bichito trabajando para enviar un correo");
}*/

function showElement (barra) {
    barra.style.display = "block";
}

function hideElement (barra) {
    barra.style.display = "none";
}

function toggle (){
    let barraMenu = document.getElementById("toggleBar");
    if(window.getComputedStyle(barraMenu).display === 'block'){
        hideElement(barraMenu);
    } else {
        showElement(barraMenu);
    }
} 


function sendEmail() {
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mailto").value;
  let mensaje = document.getElementById("msj").value;
  let peticion = 'origen=' + mail + '&asunto=' + name + '&mensaje='+mensaje + '&miston=eNorSVVIzM3XUcjNTCxVBAAfCwRQ';
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (ajax.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
      if (ajax.status == 200) {
        let r = JSON.parse(ajax.responseText);
        if (r.error == "0") {
           Swal.fire({
            title: 'Correo enviado!',
            type: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00ccc6'
        });
           
        } else {
          alert("Error: " + r.errmsg);
        }
      } else if (ajax.status == 400) {
        alert('There was an error 400');
      /*} else {
        alert('Algo salio mal');*/
      }
    }
  };
  ajax.open("POST", "https://lab.fotoentrega.net/colombomail/mitotero.php", true);
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.send(encodeURI(peticion));
}

 
