<?php
	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Content-Type");

	include('conecta.php');	
	$rs = $con->query("SELECT * FROM produtos");

	$produtos = array();

	class Produto{
		public $idProduto;
		public $nomeProduto;
		public $valorProduto;		
	} 
	
	while ( $row = $rs->fetch(PDO::FETCH_OBJ) ) {
		$produto = new Produto();
		$produto->idProduto = $row->idProduto;
		$produto->nomeProduto = $row->produto;
		$produto->valorProduto = $row->valor;

		array_push($produtos, $produto);
	}

	//echo var_dump($produtos);
	echo json_encode($produtos)

?>