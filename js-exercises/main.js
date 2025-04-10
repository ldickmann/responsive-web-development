/* Olá Mundo
 *
 * Função para interação do usuário - Exibirá a mensagem ao clicar no botão
 */
function exibirMensagem() {
  document.getElementById("mensagem").textContent = "Olá, Mundo!";
}

/* Soma de dois inteiros
 *
 * Função para interação do usuário - Exibirá a soma ao clicar no botão
 */
function somarInteiros() {
  const a = 25;
  const b = 4;
  const soma = a + b;
  document.getElementById(
    "resultado-soma"
  ).textContent = `A soma de ${a} + ${b} é ${soma}`;
}

/* Alteração por ID
 *
 * Função para interação do usuário - Alterará o texto e a cor do elemento com ID "por-id"
 */
function alterarTextoPorId() {
  const elemento = document.getElementById("por-id");
  elemento.textContent = "Texto alterado por ID";
  elemento.classList.add("color-primary");
}

/* Alteração por Name
 *
 * Função para interação do usuário - Alterará o texto e a cor do elemento com Name "por-name"
 */
function alterarTextoPorName() {
  const elementos = document.getElementsByName("por-name");
  if (elementos.length > 0) {
    elementos[0].textContent = "Texto alterado por Name";
    elementos[0].classList.add("color-secondary");
  }
}

/* Alteração por Class
 *
 * Função para interação do usuário - Alterará o texto e a cor do elemento com Class "por-classe"
 */
function alterarTextoPorClass() {
  const elementos = document.getElementsByClassName("por-classe");
  if (elementos.length > 0) {
    elementos[0].textContent = "Texto alterado por Class";
    elementos[0].classList.add("color-tertiary");
  }
}
