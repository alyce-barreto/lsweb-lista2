const funcionarios = [];

const nomeInput = document.getElementById("nome");
const salarioInput = document.getElementById("salario");
const adicionarButton = document.getElementById("adicionar");
const listaSalarios = document.getElementById("listaSalarios");
const maiorSalarioElement = document.getElementById("maiorSalario");
const totalSalariosElement = document.getElementById("totalSalarios");

adicionarButton.addEventListener("click", () => {
    const nome = nomeInput.value;
    const salario = parseFloat(salarioInput.value);
    const funcionario = { nome, salario };

    funcionarios.push(funcionario);
    nomeInput.value = "";
    salarioInput.value = "";

    const listItem = document.createElement("li");
    listItem.textContent = `${nome}: R$ ${salario.toFixed(2)}`;
    listaSalarios.appendChild(listItem);

    const maiorSalario = funcionarios.reduce((max, funcionario) => {
        return funcionario.salario > max ? funcionario.salario : max;
    }, 0);
    const totalSalarios = funcionarios.reduce((soma, funcionario) => {
        return soma + funcionario.salario;
    }, 0);

    maiorSalarioElement.textContent = `Maior salário: R$${maiorSalario.toFixed(2)}`;
    totalSalariosElement.textContent = `Total de salários: R$${totalSalarios.toFixed(2)}`;
});
