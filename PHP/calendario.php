<div id="calendario"></div>

<!-- Modal para editar o dia -->
<div class="modal-overlay" id="modal-overlay"></div>
<div id="modal">
    <label>Tipo de Dia:</label>
    <select id="tipo-dia">
        <option value="letivo">Letivo</option>
        <option value="nao-letivo">Não Letivo</option>
        <option value="atribuicao">Atribuição de Aulas</option>
        <option value="reuniao-nao-letivo">Reunião Pedagógica - Não Letivo</option>
        <option value="reuniao-letivo">Reunião Pedagógica - Letivo</option>
        <option value="conselho-letivo">Conselho de Classe - Letivo</option>
        <option value="outras-reunioes">Outras Reuniões - Não Letivo</option>
    </select>
    <label>Descrição:</label>
    <input type="text" id="descricao-dia" placeholder="Descrição do dia">
    <div id="mensagem-erro" style="color: red; text-decoration: underline;"></div>
    <button id="salvar-dia">Salvar</button>
</div>

<script src="/JavaScript/calendario.js"></script>
