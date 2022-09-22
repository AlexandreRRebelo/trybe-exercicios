const custo= 10;
const venda= 30;
const imposto=0.2;
let custoverdadeiro;
custoverdadeiro = custo*imposto+custo;
let lucro= venda-custoverdadeiro;
let pedido=-10;
let lucro_no_pedido;
lucro_no_pedido = pedido*lucro;
console.log(lucro_no_pedido);
if (pedido <0){
    console.log("Erro de pedido");
}

