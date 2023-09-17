<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>games.nl</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/guessthenumber.css">
</head>

<body>
    <?php
    require_once('header.php');
    ?>
    <div class="hond">

        <div class="border_guessthenumber">
            <div class="container">
                <h1>vul je getal in 0-100</h1>
                <input id="inputgetal" type="number">
                <button id="click">doe een gok!</button>
            </div>
        </div>
    </div>

    <?php
    require_once('footer.php');
    ?>

    <script src="guessthenumber.js"></script>
</body>

</html>