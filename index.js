document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.clear();

  const codigo = document.getElementById("code").value;

  const bibliotecas = [];
  const varibales = [];
  const funciones = [];
  const operaciones = [];
  const escaneoF = [];
  const condicionales = [];
  const condicionalElse = [];
  const condicionalElseIf = [];
  const condicionalFor = [];
  const condicionalWhile = [];
  const funcionStrelen = [];
  const inicarVariables = [];
  const punteros = [];
  const doWhile = [];
  const llavesCerradas = [];

  var regexInclude = /\s*#include\s<\w+\.h>$/;
  var intMain = "int main() {";
  var retorno = /^\s*(return 0;)$/;
  var regexVariables = /^\s*(int|char|float)\s+\w+(\s*,\s*\w+)*\s*;$/;
  var regexPrintf = /\bprintf\s*\(".*"(?:\s*,\s*.*)?\);\s*/;
  var regexOpreciones = /^\s*\w+\s*=\s*\w+(\s*[-+*\/]\s*\w+)*\s*;$/;
  var regexScanf =
    /scanf\s*\(\s*("%[^\"]*"\s*,?\s*&?[^\s,]+)?(\s*,?\s*&?[^\s,]+)*\s*\)\s*;/;
  var regexIf = /\bif\s*\([^{}]*\)\s*{[^{}]*((?!\bif\b)[^{}]*)/;
  var regexElse = /\belse\s*{/;
  var regexEleseIf =
    /\belse\s+if\s*\([^{}]*\)\s*{[^{}]*((?!\b(else\s+if|else)\b)[^{}]*)/;
  var regexFor =
    /\bfor\s*\([^{};]*;[^{};]*;[^{}]*\)\s*{[^{}]*((?!\bfor\b)[^{}]*)/;
  var regexWhile = /\bwhile\s*\([^{}]*\)\s*{[^{}]*((?!\bwhile\b)[^{}]*||\;)/;
  var regexStrelen = /\bstrlen\s*\(\s*"[^"]*"\s*\);/;
  var regexIniciarVariables =
    /\b(?:char|int|float|double|long|short)\s+\w+\s*\[[^\]]*\]\s*=\s*"[^"]*";/;
  var regexPunteros = /\b(?:char|int|float|double|long|short)\s*\*+\s*\w+\s*;/;
  var regexDoWhile = /\bdo\s*{[^{}]*}\s*while\s*\([^{}]*\);/;
  var regexLlaveCerrada = /\s*(\})$/;

  const palabras = codigo.split(/\n+/);

  palabras.forEach((palabra) => {
    if (regexInclude.test(palabra.toLowerCase())) {
      bibliotecas.push(palabra);
    } else if (intMain === palabra.toLowerCase()) {
      console.log("Funcion principal: " + palabra.toLowerCase());
    } else if (regexVariables.test(palabra.toLowerCase())) {
      varibales.push(palabra);
    } else if (regexPrintf.test(palabra.toLowerCase())) {
      funciones.push(palabra);
    } else if (regexOpreciones.test(palabra.toLowerCase())) {
      operaciones.push(palabra);
    } else if (retorno.test(palabra.toLowerCase())) {
      console.log("Retorno:" + palabra.toLowerCase());
    } else if (regexScanf.test(palabra.toLowerCase())) {
      escaneoF.push(palabra);
    } else if (regexIf.test(palabra.toLowerCase())) {
      condicionales.push(palabra);
    } else if (regexElse.test(palabra.toLowerCase())) {
      condicionalElse.push(palabra);
    } else if (regexEleseIf.test(palabra.toLowerCase())) {
      condicionalElseIf.push(palabra);
    } else if (regexFor.test(palabra.toLowerCase())) {
      condicionalFor.push(palabra);
    } else if (regexWhile.test(palabra.toLowerCase())) {
      condicionalWhile.push(palabra);
    } else if (regexStrelen.test(palabra.toLowerCase())) {
      funcionStrelen.push(palabra);
    } else if (regexIniciarVariables.test(palabra.toLowerCase())) {
      inicarVariables.push(palabra);
    } else if (regexPunteros.test(palabra.toLowerCase())) {
      punteros.push(palabra);
    } else if (regexDoWhile.test(palabra.toLowerCase())) {
      doWhile.push(palabra);
    } else if (regexLlaveCerrada.test(palabra.toLowerCase())) {
      llavesCerradas.push(palabra);
    }
  });
  console.log("Bibliotecas encontradas: " + bibliotecas);
  console.log("Variables encontradas: " + varibales);
  console.log("Printf encontradas: " + funciones);
  console.log("Operaciones encontradas: " + operaciones);
  console.log("Scanf encontradas: " + escaneoF);
  console.log("Condicionales encontradas: " + condicionales);
  console.log("Else encontradas: " + condicionalElse);
  console.log("Else if encontradas: " + condicionalElseIf);
  console.log("For encontradas: " + condicionalFor);
  console.log("While encontradas: " + condicionalWhile);
  console.log("Strenlen encontradas: " + funcionStrelen);
  console.log("Declaración de variables encontradas: " + inicarVariables);
  console.log("Declaración de punteros encontrados: " + punteros);
  console.log("Do while encontrados: " + doWhile);
  console.log("Llaves cerradas encontrados: " + llavesCerradas);
});
