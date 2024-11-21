<?php
class Database {
    private static $host = 'aulamysql.mysql.database.azure.com';
    private static $db_name = 'aulamysql';
    private static $username = 'wagner';
    private static $password = 'Admin123*';
    private static $conn;

    public static function connect() {
        
        if (self::$conn != null){
            return $this->conn;
        }

        try {
            self::$conn = new PDO('mysql:host=' . self::$host . ';dbname=' . self::$db_name, self::$username, self::$password);
            self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }
        return self::$conn;
    }
}
?>