function doGet() {
  var template = HtmlService.createTemplateFromFile('login');
  var output = template.evaluate();
  var htmlOutput = HtmlService.createHtmlOutput(output);
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return htmlOutput;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


// function getuser(username, password) {

//     var id = "1UHpnj6UErcsd0-6VZ3J7g6wcWCv1ACt-KLrxnowOmAc";
//   var ss = SpreadsheetApp.openById(id);
//   var hojaUsuarios = ss.getSheetByName("usuarios");
//   var datos = hojaUsuarios.getDataRange().getValues();
//   var obj = {}
//   var array = []
//   //========================



//   for (var fila = 1; fila < datos.length; fila++) {
//     var correo = datos[fila][0];
//     var contraseña = datos[fila][1];
//      var nombreUser = datos[fila][2];
//      var apellidoUser = datos[fila][3];

//     const valor1 ='1234@gmail.com'
//     const valor2 ='qwerty'

//     if (correo === valor1 &&  contraseña === valor2 ) {
//         obj={status: "200", nombrecompleto: `${nombreUser} ${apellidoUser}` }
//     }

//     if(correo === valor1 &&  contraseña !== valor2) {
//         obj={status: "404", error: 'contraseña incorrecta' }
//     }

//      if(correo !== valor1 &&  contraseña === valor2) {
//         obj={status: "404", error: 'correo incorrecto' }
//     }
//     if (correo !== valor1 &&  contraseña !== valor2){
//        obj={status: "404", error: 'usuario no registrado' }
//     }



// //     if (val.toString() === dni.toString()) {

// //         var nombree = datos[fila][1]


// //         obj={dni:dni,nombre:nombree}
// //   }
// }
// console.log(obj);

// }

function getuser(email, password) {

  var id = "1UHpnj6UErcsd0-6VZ3J7g6wcWCv1ACt-KLrxnowOmAc";
  var ss = SpreadsheetApp.openById(id);
  var hojaUsuarios = ss.getSheetByName("usuarios");
  var datos = hojaUsuarios.getDataRange().getValues();
  datos.shift();
  var obj = {}
  var datoe = ''
    const valor1 = 'zcrotch7@census.gov'
    const valor2 = 'aM5netCN4'
  //========================
  // for (var fila = 1; fila < datos.length; fila++) {
  //   var correo = datos[fila][0];
  //   var contraseña = datos[fila][1];
  //   var nombreUser = datos[fila][2];
  //   var apellidoUser = datos[fila][3];

  
  //   if (valor1 == correo) {
  //     if (valor1 === correo && valor2 === contraseña) {
  //       obj = { status: "200", nombrecompleto: `${nombreUser} ${apellidoUser}` }
  //     }

  //     if (valor1 === correo && valor2 !== contraseña) {

  //       obj = { status: "404", error: 'credential' }
  //     }
  //   }

  //   if (valor1 != correo) {
  //     obj = { status: "404", error: 'unknown' }
  //   }
  // }

  //con foreach
   datos.forEach ((dato) => {
     if(dato[0]===email && dato[1]===password){

       obj = { status: "200", nombrecompleto: `${dato[2]} ${dato[3]}` }
   
     }

     if (dato[0]===email && dato[1]!== password){
       obj = { status: "401" }
      }

     if (Object.entries(obj).length === 0){
       obj = { status: "404" }
     }    

  })
   
 
return obj
}