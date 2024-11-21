<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'calendario';
    private $username = 'wagner';
    private $password = '';
    private $conn;

    public static function connect() {
        
        if ($this->conn != null){
            return $this->conn;
        }

        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }

        return $this->conn;
    }
}
?>