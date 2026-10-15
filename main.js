const formulario = document.getElementById("form-desconto");

formulario.addEventListener("submit", function(e){
    e.preventDefault(); // Impede que a página recarregue

    // Pega o valor digitado pelo usuário e converte para número
    const total = parseFloat(document.getElementById("valor-compra").value);

    let valorDesconto = 0;
    let totalComDesconto = 0;

    // APLICANDO AS CONDIÇÕES AJUSTADAS:
    
    if (total <= 500) {
        // Se for menor ou igual a 500 (inclui a regra de menor que 100) -> Sem desconto
        valorDesconto = 0;
        totalComDesconto = total;
    } 
    else if (total <= 2006) {
        // Se for maior que 500 e menor ou igual a 2006 -> 5% de desconto
        valorDesconto = total * 0.05;
        totalComDesconto = total - valorDesconto;
    } 
    else {
        // Se for maior que 2006 -> 10% de desconto
        valorDesconto = total * 0.10;
        totalComDesconto = total - valorDesconto;
    }
     // Exibindo os resultados na tela
     const spanValorDesconto = document.getElementById("valor-desconto");
     const spanTotalComDesconto = document.getElementById("total-com-desconto");
     const divResultado = document.getElementById("resultado");
 
     // Formatando os valores para aparecer bonitinho na tela
     spanValorDesconto.textContent = `R$ ${valorDesconto.toFixed(2).replace('.', ',')}`;
     spanTotalComDesconto.textContent = `R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`;
 
     // Mostra a caixinha de resultado tirando a classe 'hidden'
     divResultado.classList.remove("hidden");
});