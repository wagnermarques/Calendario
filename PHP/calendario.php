<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Style/Nav.css">
    <link rel="stylesheet" href="/Style/calendario.css"> <!-- Estilo do calendário -->
    <title>Calendário Escolar - 2024</title>
</head>
<body>
    <div class="calendario-container"> <!-- Container principal do calendário -->
        <div class="mes-nome-grid"> <!-- Grid para os nomes dos meses -->
            <div class="mes-nome" id="mes1">Janeiro</div>
            <div class="mes-nome" id="mes2">Fevereiro</div>
            <div class="mes-nome" id="mes3">Março</div>
            <div class="mes-nome" id="mes4">Abril</div>
            <div class="mes-nome" id="mes5">Maio</div>
            <div class="mes-nome" id="mes6">Junho</div>
            <div class="mes-nome" id="mes7">Julho</div>
            <div class="mes-nome" id="mes8">Agosto</div>
            <div class="mes-nome" id="mes9">Setembro</div>
            <div class="mes-nome" id="mes10">Outubro</div>
            <div class="mes-nome" id="mes11">Novembro</div>
            <div class="mes-nome" id="mes12">Dezembro</div>
        </div>
        <div id="calendario" class="calendario-grid"> <!-- Aqui será gerado o calendário -->
            <!-- O calendário será injetado aqui pelo JavaScript -->
        </div>
    </div>

    <script src="/JavaScript/calendario.js"></script> <!-- Script do calendário -->
</body>
</html>
