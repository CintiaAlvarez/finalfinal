let dimension: number = Number(prompt("Ingrese la cantidad de productos"));
  
let dimensionArreglo: number = Number(prompt("Ingrese la cantidad de productos: "));
let nombreProductos :string[] = new Array(dimensionArreglo)
let precioUnitario: number[] = new Array(dimensionArreglo)
let cantidadProductos: number[] = new Array(dimensionArreglo)
let sumaTotal: number = 0;
let indice: number


  function compras1(nombreProductos: string[], dimension: number[]): any{
    let texto: string = " ";
    let indice: number
    for(indice = 0; indice < dimension; indice++){
      nombreProductos[indice] = prompt("ingrese el nombre de los productos");
      precioUnitario[indice] = Number( prompt("Ingrese el precio de" + nombreProductos[indice] + 
      " que desea comprar"));
      cantidadProductos[indice] = Number(prompt("Ingrese la cantidad de " + nombreProductos[indice] +
      " que desea comprar"));

      texto = `Compraste ${cantidadProductos[indice]} de ${nombreProductos[i]}`
      console.log(texto)
    } 
  } compras1(nombreProductos, cantidadProductos)

  function calcularSumaTotal = (precioUnitario: number[], dimensionArreglo: number[]):number =>{

let sumaTotal: number = 0;
let indice: number;

for (indice=0; indice < longitud; indice++){
 sumaTotal = sumaTotal + precioUnitario[indice])
 }
}