<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blackjack</title>

    <link rel="stylesheet" href="css/blackjack.css">
</head>

<body>
    <h1>Blackjack</h1>

    <div id="game">
        <div id="player-hand">
            <h2>Speler:</h2>
            <div id="player-cards"></div>
            <p id="player-score">Score: 0</p>
        </div>

        <div id="dealer-hand">
            <h2>Dealer:</h2>
            <div id="dealer-cards"></div>
            <p id="dealer-score">Score: 0</p>
        </div>

        <button id="deal-button">Delen</button>
        <button id="hit-button">Hit</button>
        <button id="stand-button">Stand</button>
    </div>

    <script src="blackjack.js"></script>
</body>

</html>