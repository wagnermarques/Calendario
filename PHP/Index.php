
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Style/Index.css">
    <link rel="stylesheet" href="/Style/calendario.css">
    <link rel="stylesheet" href="/Style/Nav.css">
    <title>Index</title>
</head>
<body>
    <nav>
        <?php include("./Includes/Nav.php"); ?>
    </nav>
    <div>
        <?php include("./calendario.php");?>
    </div>
    <?php include("main.php"); ?>
    <script src="../JavaScript/calendario.js"></script> <!-- Corrigido para src -->
</body>
</html>
