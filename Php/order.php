<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../Css/holiday.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="../JS/holiday.js"></script>
    <title>JS</title>
</head>
<body onload="start();">
	 <div id="main">
        <span id="ham" onclick="openNav();">Menu  &#9776; &nbsp;</span>
        <div id="calendar"></div>
    </div>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav();">&times;</a>
        <a href="../Html/holiday.html#slider">Photos</a>
        <a href="../Html/holiday.html#Input">Trips</a>
        <a href="../Html/holiday.html#city">Weather</a>
        <a href="../Html/holiday.html#descNewYork">Orders</a>
        <div id="txt"></div>
    </div>
    <div class="order">
    	<?php

    		$servername = "localhost";
    		$username = "root";
    		$password = "";
    		$db = "trip";

    		$city = $_POST['city'];
    		$persons = $_POST['persons'];
    		$choice = $_POST['choice'];
    		$transport = $_POST['transport'];
    		$price = $_POST['price'];

    		try {
    			$conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    			$sql = "INSERT INTO orders (id, city, inclusives, transport, persons, price) VALUES (null, '$city', '$choice', '$transport', '$persons', '$price')";
    			$conn->exec($sql);
    			echo "<h2>Your trip has been booked !!</h2>";
    			echo "<table>";
    			echo "<tr><td>Your destenation: </td><td>". $city. "</td>";
    			echo "<tr><td>Number of persons: </td><td>". $persons. "</td>";
    			echo "<tr><td>Your inclusives: </td><td>". $choice. "</td>";
    			echo "<tr><td>Your transport: </td><td>". $transport. "</td>";
    			echo "<tr><td>Total price: </td><td>". $price. " &#x20AC;</td>";
    			echo "</table>";
    		} catch (PDOException $e) {
    			echo $sql . "<br>" . $e->getMessage();
    		}

    		$conn = null;

    	?>
    </div>
</body>
</html>
