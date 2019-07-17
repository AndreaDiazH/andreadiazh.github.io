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
  };
}

function sendEmail () {
     //aquí va la funcion del correo//
    console.log("aquí hay un bichito trabajando para enviar un correo");
    Swal.fire({
        title: 'Correo enviado!',
        type: 'success',
        confirmButtonText: 'Ok',
      confirmButtonColor: '#00ccc6'
    })
   
}
 
