<?php  
$user = "root";
$pass = "";
$conn = new PDO("mysql:host=localhost;dbname=bdajax",$user,$pass);
$query= "SELECT * FROM perifericos";
$stmt = $conn->prepare($query);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
$resultEnJson = json_encode($result);
echo $resultEnJson;
?>