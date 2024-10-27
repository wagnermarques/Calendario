function gerarCalendario(ano) {
    const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let html = '';

    for (let mes = 1; mes <= 12; mes++) {
        const primeiraData = new Date(ano, mes - 1, 1);
        const ultimoDiaDoMes = new Date(ano, mes, 0).getDate();
        
        html += `<div class="calendario-mes">`; // Início do bloco do mês
        html += `<div class="mes-nome">${new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(primeiraData)}</div>`; // Nome do mês
        html += `<div class="header">${new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(primeiraData)}</div>`; // Header com o ano
        html += '<table>';
        html += '<tr>' + diasDaSemana.map(dia => `<th>${dia}</th>`).join('') + '</tr>';
        
        // Preenchendo as células vazias antes do primeiro dia do mês
        let diaDaSemana = primeiraData.getDay();
        html += '<tr>';
        for (let i = 0; i < diaDaSemana; i++) {
            html += '<td class="empty"></td>'; // Adiciona a classe empty
        }

        // Preenchendo os dias do mês
        for (let dia = 1; dia <= ultimoDiaDoMes; dia++) {
            if (diaDaSemana === 7) {
                html += '</tr><tr>'; // Nova linha se a semana estiver completa
                diaDaSemana = 0; // Reinicia o contador
            }
            html += `<td>${dia}</td>`;
            diaDaSemana++;
        }

        // Preenchendo as células vazias após o último dia do mês
        while (diaDaSemana < 7) {
            html += '<td class="empty"></td>'; // Adiciona a classe empty
            diaDaSemana++;
        }

        html += '</tr></table>';
        html += '</div>'; // Fim do bloco do mês
    }

    document.getElementById('calendario').innerHTML = html;
}

// Função chamada no carregamento da página
function init() {
    const ano = 2024; // Alterar conforme necessário
    gerarCalendario(ano);
}

// Chama a função init quando o documento é carregado
window.onload = init;
