function doGet() {
    var template = HtmlService.createTemplateFromFile('registro');
    var output = template.evaluate();
    var htmlOutput = HtmlService.createHtmlOutput(output);   
    htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');   
    return htmlOutput;
}
    
function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function registrar(nombre, apellido, correo, contrasenia){
    var id = "1UHpnj6UErcsd0-6VZ3J7g6wcWCv1ACt-KLrxnowOmAc";
    var SS = SpreadsheetApp.openById(id);
    var ws = SS.getSheetByName("usuarios");
    var obj = {};
  
    if(repetido(correo)=='false'){
        obj={status: "404", error: 'unknown' }
    }
    else{
        obj={status: "200"}
        ws.appendRow([correo,`'${contrasenia}`,`'${nombre}`,`'${apellido}`]);
 
    }
  
    return obj;
}

function repetido(x){
    var id = "1UHpnj6UErcsd0-6VZ3J7g6wcWCv1ACt-KLrxnowOmAc";
    var ss = SpreadsheetApp.openById(id);
    var colcta = ss.getSheetByName("usuarios");
    var ctaDates = colcta.getDataRange().getValues();
    var a='';
    for (var fila = 1; fila < ctaDates.length; fila++) {
      var correo= ctaDates[fila][0];
      
      if(x.toString()=== correo.toString()){
        a='false';
        break;
      }
  
    }
    return a;
  
  }