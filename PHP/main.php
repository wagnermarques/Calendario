<?php

    include 'Connection.php';
    $conn = Database::connect();
    $sql = 'SELECT * FROM alunos';
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $alunos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    $conn = null;
    foreach ($alunos as $aluno) {
        echo $aluno['nome'] . ' ijiji<br>';
    }