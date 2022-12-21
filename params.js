

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


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