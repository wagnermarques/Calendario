document.addEventListener("DOMContentLoaded", function () {
    const calendarioContainer = document.getElementById("calendario");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const tipoDiaInput = document.getElementById("tipo-dia");
    const descricaoInput = document.getElementById("descricao-dia");
    const mensagemErro = document.getElementById("mensagem-erro");
    let diaSelecionado = null;
    const ano = 2025;

    // Exemplo de feriados (dia, mês, descrição)
    const feriados = [
        { dia: 1, mes: 0, descricao: "Ano Novo" }, // 1 de janeiro
        { dia: 20, mes: 1, descricao: "Carnaval" }, // 20 de fevereiro
        { dia: 21, mes: 1, descricao: "Carnaval" }, // 21 de fevereiro
        { dia: 7, mes: 4, descricao: "Páscoa" }, // 7 de abril
        { dia: 1, mes: 4, descricao: "Dia do Trabalho" }, // 1 de maio
        // Adicione mais feriados conforme necessário
    ];

    const diasNaoLetivos = []; // Array para armazenar os dias não letivos

    function renderizarCalendarioAnual() {
        for (let mes = 0; mes < 12; mes++) {
            const mesContainer = document.createElement("div");
            mesContainer.classList.add("mes-container");

            const nomeMes = document.createElement("div");
            nomeMes.classList.add("nomeMes");
            nomeMes.textContent = new Date(ano, mes).toLocaleString("default", { month: "long" });
            mesContainer.appendChild(nomeMes);

            const diasSemanas = document.createElement("div");
            diasSemanas.classList.add("DiasSemanas");
            ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].forEach(dia => {
                const diaSemana = document.createElement("div");
                diaSemana.textContent = dia;
                diasSemanas.appendChild(diaSemana);
            });
            mesContainer.appendChild(diasSemanas);

            const diasMesContainer = document.createElement("div");
            diasMesContainer.classList.add("DiasMes");
            mesContainer.appendChild(diasMesContainer);

            renderizarDiasDoMes(diasMesContainer, mes);

            const feriadoContainer = document.createElement("div");
            feriadoContainer.classList.add("Feriado");
            renderizarFeriados(feriadoContainer, mes); // Renderiza os feriados do mês
            mesContainer.appendChild(feriadoContainer);

            const diasNaoLetivosContainer = document.createElement("div");
            diasNaoLetivosContainer.classList.add("DiasNaoLetivos");
            renderizarDiasNaoLetivos(diasNaoLetivosContainer); // Renderiza os dias não letivos
            mesContainer.appendChild(diasNaoLetivosContainer);

            calendarioContainer.appendChild(mesContainer);
        }
    }

    function renderizarDiasDoMes(diasMesContainer, mes) {
        const primeiroDia = new Date(ano, mes, 1).getDay();
        const diasNoMes = new Date(ano, mes + 1, 0).getDate();
        
        for (let i = 0; i < primeiroDia; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("Dia");
            diasMesContainer.appendChild(emptyDiv);
        }

        for (let dia = 1; dia <= diasNoMes; dia++) {
            const diaDiv = document.createElement("div");
            diaDiv.classList.add("Dia");
            diaDiv.textContent = dia;
            diaDiv.addEventListener("click", () => abrirModal(diaDiv, mes));

            // Marca sábados e domingos como não letivos
            const data = new Date(ano, mes, dia);
            const diaSemana = data.getDay(); // 0: Dom, 1: Seg, ..., 6: Sáb
            if (diaSemana === 0 || diaSemana === 6) { // Domingo ou Sábado
                diaDiv.classList.add("nao-letivo");
                diasNaoLetivos.push({ dia, mes });
            }

            diasMesContainer.appendChild(diaDiv);
        }
    }

    function renderizarFeriados(feriadoContainer, mes) {
        feriados.forEach(feriado => {
            if (feriado.mes === mes) {
                const feriadoDiv = document.createElement("div");
                feriadoDiv.classList.add("Feriado");
                feriadoDiv.textContent = `${feriado.dia} - ${feriado.descricao}`;
                feriadoContainer.appendChild(feriadoDiv);
            }
        });
    }

    function renderizarDiasNaoLetivos(diasNaoLetivosContainer) {
        diasNaoLetivos.forEach(diaNaoLetivo => {
            const diaDiv = document.createElement("div");
            diaDiv.classList.add("Feriado");
            diaDiv.textContent = `${diaNaoLetivo.dia} - Não letivo`;
            diasNaoLetivosContainer.appendChild(diaDiv);
        });
    }

    function abrirModal(diaDiv, mes) {
        diaSelecionado = diaDiv;
        const diaSemana = new Date(ano, mes, diaDiv.textContent).getDay();

        if (diaSemana === 0 || diaSemana === 6) { // Se for Sábado ou Domingo
            tipoDiaInput.value = "nao-letivo";
            descricaoInput.value = ""; // Limpa a descrição para fins de letivo
        } else {
            tipoDiaInput.value = "letivo";
            descricaoInput.value = ""; // Limpa a descrição para fins de letivo
        }
        mensagemErro.textContent = "";
        modal.style.display = "block";
        modalOverlay.style.display = "block";
    }

    document.getElementById("salvar-dia").addEventListener("click", () => {
        const tipoDia = tipoDiaInput.value;
        const descricao = descricaoInput.value;

        diaSelecionado.className = "Dia " + tipoDia;
        diaSelecionado.setAttribute("title", descricao);

        // Se for letivo, adiciona à lista de dias não letivos, caso contrário, remove
        if (tipoDia === "nao-letivo") {
            diasNaoLetivos.push({
                dia: parseInt(diaSelecionado.textContent),
                mes: new Date(ano, parseInt(diaSelecionado.parentElement.parentElement.dataset.mes)).getMonth()
            });
        } else if (tipoDia === "letivo" && diaSelecionado.classList.contains("nao-letivo")) {
            // Remove da lista se o dia for alterado para letivo
            diasNaoLetivos = diasNaoLetivos.filter(dia => dia.dia !== parseInt(diaSelecionado.textContent) || dia.mes !== new Date(ano, parseInt(diaSelecionado.parentElement.parentElement.dataset.mes)).getMonth());
        }

        fecharModal();
    });

    function fecharModal() {
        modal.style.display = "none";
        modalOverlay.style.display = "none";
        tipoDiaInput.value = "letivo";
        descricaoInput.value = "";
        mensagemErro.textContent = "";
    }

    modalOverlay.addEventListener("click", fecharModal);
    renderizarCalendarioAnual();
});
