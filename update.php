<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");
	include('conecta.php');

	$nomeProduto =  $_GET["nomeProduto"] ;
	$idProduto = $_GET["idProduto"];

	try{

	$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = "UPDATE produtos SET produto = '".$nomeProduto."' WHERE idProduto = ".$idProduto;
	
	$stmt = $con->prepare($sql);

	$stmt->execute();
	}catch(PDOException $ex){
		echo $sql."<br>".$ex->getMessage();
	}


?>