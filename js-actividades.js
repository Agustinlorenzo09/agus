let factura = 0;
let final = 0;
let carrito = "";
let seguirComprando = "";
document.write(`<br>`)
document.write(` factura ` + `<br>`);
document.write(`<br>`)
let comienzo = prompt(`desea comprar tela?`);
for(let compra = 0; compra < 99; compra++){
   if (comienzo.trim().toUpperCase() == `SI`){
      let tela = prompt(`que tela estabas buscando?`);
      switch(tela){
         case (`flow` || `FLOW` ):
            let valor1= 1000
            let color1 = prompt(`¿color?`);
            let metros1 = parseInt(prompt (`metros?`));
            buy(valor1, metros1);
            document.write(` `+ metros1 + ` metros de ` + tela + ` ` + color1 +  ` precio ` + carrito + `<br>`);
            seguirComprando = prompt(`quiere seguir comprando?`)
            factura = carrito + factura
            if (seguirComprando.trim().toUpperCase() == `SI`){
               continue
            }
            break
            case (`zoom` || `ZOOM`):
            let valor2= 2000
            let color2 = prompt(`¿color?`);
            let metros2 = parseInt(prompt (`metros?`));
            buy(valor2, metros2);
            document.write(` `+ metros2 + ` metros de ` + tela + ` ` + color2 +  ` precio ` + carrito + `<br>`);
            seguirComprando = prompt(`quiere seguir comprando?`);
            factura = carrito + factura
            if (seguirComprando.trim().toUpperCase() == `SI`){
               continue
            }
            break
            case (`sann` || `SANN`):
            let valor3= 3000
            let color3 = prompt(`¿color?`);
            let metros3 = parseInt(prompt (`metros?`));
            buy(valor3, metros3);
            document.write(` `+ metros3 + ` metros de ` + tela + ` ` + color3 +  ` precio ` + carrito + `<br>`);
            seguirComprando = prompt(`quiere seguir comprando?`)
            factura = carrito + factura
            if (seguirComprando.trim().toUpperCase() == `SI`){
               continue
            }
            break
            case (`porsche` || `PORSCHE`):
            let valor4= 4000
            let color4 = prompt(`¿color?`);
            let metros4 = parseInt(prompt (`metros?`));
            buy(valor4, metros4);
            document.write(` `+ metros4 + ` metros de ` + tela + ` ` + color4 +  ` precio ` + carrito + `<br>`);
            seguirComprando = prompt(`quiere seguir comprando?`)
            factura = carrito + factura
            if (seguirComprando.trim().toUpperCase() == `SI`){
               continue
            }

            break
      }
      document.write(`final a pagar:        ` + factura);
   }
   break
}
function buy (valor, metros){
   carrito = valor * metros
}


