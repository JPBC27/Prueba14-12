// function doGet() {
//     var template = HtmlService.createTemplateFromFile('registro');
//     var output = template.evaluate();
//     var htmlOutput = HtmlService.createHtmlOutput(output);   
//     htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');   
//     return htmlOutput;
// }


// function doGet() {
//   var template = HtmlService.createTemplateFromFile('login');
//   var output = template.evaluate();
//   var htmlOutput = HtmlService.createHtmlOutput(output);
//   htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
//   return htmlOutput;
// }


function doGet(e) {
  if(e.parameter.page){
    var pageName = e.parameter.page.trim().toLowerCase();
    if (pageName !== "login"){
      var template = HtmlService.createTemplateFromFile(pageName);
      template.url = getPageUrl();
      var output = template.evaluate();
      var htmlOutput = HtmlService.createHtmlOutput(output);   
     htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');   
      return htmlOutput;
    }else{
      return homePage();
    }
  }else{
    return homePage();
  }
}


function homePage(){
  var pages = ['index' , 'registro'];
var urls = pages.map(function(name){
 return getPageUrl(name);
});
var template = HtmlService.createTemplateFromFile("login");
template.test = urls;
var output = template.evaluate();
var htmlOutput = HtmlService.createHtmlOutput(output);   
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');   

return htmlOutput;
}


function getPageUrl(name){
  if (name){
    var url = ScriptApp.getService().getUrl();
    return url + "?page=" + name;
  }else{
    return ScriptApp.getService().getUrl();
  }
}


//============
    
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
    /*else if(correo.toString()=="" || nombre.toString()=="" || apellido.toString()=="" || contrasenia=="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"){
        obj={status: "404", error: 'error'}
    }*/
    else{
        obj={status: "200"}
        ws.appendRow([correo,contrasenia,`'${nombre}`,`'${apellido}`]);
 
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

  function test() 
  {
   return ScriptApp.getService().getUrl(); 
  }




