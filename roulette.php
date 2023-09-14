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
                $color = ($i % 2 == 0) ? 'red' : 'black'; // Wissel tussen rood en zwart
                // Voeg de selecteerbare klasse toe aan elk getal
                $betClass = ($i == 0) ? 'bet green' : 'bet selectable ' . $color;
                echo '<div class="' . $betClass . '" data-value="' . $i . '">' . $i . '</div>';
            }
            ?>
        </div>
        <div class="betting-buttons">
            <button class="selectable" data-type="odd">Odd</button>
            <button class="selectable" data-type="even">Even</button>
            <button class="selectable" data-type="black">Black</button>
            <button class="selectable" data-type="red">Red</button>
        </div>
    </div>
    <script src="roulette.js"></script>
</body>

</html>