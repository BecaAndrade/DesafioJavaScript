console.log("Ano novo está chegando");

let nome = "Mariah Carey";
let idade = 54;
let ano = 2023;

const anoNascimento = ano - idade;
console.log(anoNascimento);

let quartafeira = true;
console.log(quartafeira);
console.log(typeof quartafeira);

let _idade = 18;

if (idade >= 18) {
  console.log(
    "Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey"
  );
} else {
  console.log("Sinto muito, mas assistirá da tv Globo");
}

let niver = "Abril";

if (niver == "Junho" || niver == "Agosto" || niver == "Dezembro") {
  console.log("Uma ou mais opções estão corretas. O mês escolhido foi o mês");
} else {
  console.log(
    `Algo de errado não está certo, o mês digitado foi o mês ${niver}`
  );
}
