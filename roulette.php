<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>games.nl</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/roulette.css">
</head>

<?php
require_once('header.php');
?>

<body>
    <div class="roulette-table">
        <div class="betting-area">
            <?php
            for ($i = 0; $i <= 36; $i++) {
                $color = ($i % 2 == 0) ? 'black' : 'red'; // Wissel tussen rood en zwart
                // Voeg de groene klasse toe aan de 0
                $betClass = ($i == 0) ? 'bet green' : 'bet ' . $color;
                echo '<div class="' . $betClass . '">' . $i . '</div>';
            }
            ?>
        </div>
        <div class="betting-buttons">
            <button id="odd">Odd</button>
            <button id="even">Even</button>
            <button id="black">Black</button>
            <button id="red">Red</button>
        </div>
    </div>
</body>

</html>