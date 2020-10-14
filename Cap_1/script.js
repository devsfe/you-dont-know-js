console.log('Exercicio 1');


//// MINHA SOLUÇÃO 
console.log('Minha Solução');

const txImposto = 0.05;
const pcTelefone = 110;
const pcAcessorio = 10;
const limiteGastos = 800;

var saldoBancario = 700;
var precoTotal = 0;

console.log('Vamos ver o preço total do seu Celular');

while(saldoBancario > 0) {
    saldoBancario = saldoBancario - pcTelefone;
    precoTotal = precoTotal + pcTelefone;

    if (saldoBancario < limiteGastos) {
        saldoBancario = saldoBancario - pcAcessorio;
        precoTotal = precoTotal + pcAcessorio;
    }

    console.log('Você comprou mais um celular e ficou com ' + saldoBancario ,' de saldo no Banco.');

}

if (saldoBancario <= 0) {
    console.log('Seu saldo ficou ' + saldoBancario, ' e Você não pode comprar tudo isso');
}


function formatarPreco() { // Arredondando preço para duas casas decimais e adicionando "$"
    return "$" + precoTotal.toFixed(2);
}

function calcularPrecoFinal(amt) { // Adicionando tx imposto para o preço total
    amt = amt + (amt * txImposto);

    return amt;
}

precoTotal = calcularPrecoFinal(precoTotal);

precoTotal = formatarPreco();

console.log("Incluindo as taxas o preço total da sua compra é " + precoTotal);



//// SOLUÇÃO GABARITO
console.log('Solução Gabarito');

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// continue comprando até não ter mais dinheiro
while (amount < bank_balance) {
	// compre um novo celular!
	amount = amount + PHONE_PRICE;

	// podemos comprar o acessório?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

// não esqueça a fatia do governo!
amount = amount + calculateTax( amount );

console.log(
	"Sua compra: " + formatAmount( amount )
);
// Sua compra: $334.76

// Você pode pagar a conta?
if (amount > bank_balance) {
	console.log(
		"Você não pode pagar a conta. :("
	);
}
// Você não pode pagar a conta. :(







