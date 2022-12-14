function doGet() {
    var template = HtmlService.createTemplateFromFile('index');
    var output = template.evaluate();
    var htmlOutput = HtmlService.createHtmlOutput(output);   
    htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');   
    return htmlOutput;
}
    
function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}