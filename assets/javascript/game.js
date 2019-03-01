$(document).ready(function () {

    // Characters

    var xeno = {

        name: "Xenomorph",
        portrait: "./assets/images/xenomorph.jpg",
        health: 120,
        attackPower: 5,
        counterAttackPower: 10,

    }

    var vader = {

        name: "Darth Vader",
        portrait: "./assets/images/vader.jpg",
        health: 100,
        attackPower: 6,
        counterAttackPower: 12,


    }

    var pred = {

        name: "Predator",
        portrait: "./assets/images/predator.jpg",
        health: 80,
        attackPower: 10,
        counterAttackPower: 15,

    }

    var term = {

        name: "Terminator",
        portrait: "./assets/images/terminator.jpg",
        health: 140,
        attackPower: 4,
        counterAttackPower: 8,

    }

    var player = {}

    var defender = {}




    function reset() {
        $(".xhp").text(xeno.health);
        $(".vhp").text(vader.health);
        $(".php").text(pred.health);
        $(".thp").text(term.health);


    }

    reset();

    function displayPlayer() {

        $("#player").removeClass("d-none");
        $("#playerName").html(player.name)
        $("#playerImage").attr("src", player.portrait);
        $("#playerHealth").html(player.health);

        console.log(player);
        playerIsSelected = true;
        $("#task").text("Select a Defender");
    }

    function displayDefender() {

        $("#defender").removeClass("d-none");
        $("#defenderName").html(defender.name)
        $("#defenderImage").attr("src", defender.portrait);
        $("#defenderHealth").html(defender.health);

        console.log(defender);
        defenderIsSelected = true;
        console.log(defenderIsSelected);
        $(".char-select").addClass("bg-secondary");
        $("#task").text("Battle!!!");
    }

    // Choose Player

    var playerIsSelected = false;

    var defenderIsSelected = false;




    $("#xenomorph").on("click", function () {

        if (playerIsSelected === false && defenderIsSelected === false) {

            player = xeno;
            $(this).addClass("d-none");
            displayPlayer();

        } else if (playerIsSelected === true && defenderIsSelected === false) {

            defender = xeno;
            $(this).addClass("d-none");
            displayDefender();

        } else {

            console.log("player and defender selected")

        }


    })

    $("#vader").on("click", function () {

        if (playerIsSelected === false && defenderIsSelected === false) {

            player = vader;
            $(this).addClass("d-none");
            displayPlayer();

        } else if (playerIsSelected === true && defenderIsSelected === false) {

            defender = vader;
            $(this).addClass("d-none");
            displayDefender();

        } else {

            console.log("player and defender selected")

        }
    })

    $("#predator").on("click", function () {

        if (playerIsSelected === false && defenderIsSelected === false) {

            player = pred;
            $(this).addClass("d-none");
            displayPlayer();

        } else if (playerIsSelected === true && defenderIsSelected === false) {

            defender = pred;
            $(this).addClass("d-none");
            displayDefender();

        } else {

            console.log("player and defender selected")

        }
    })

    $("#terminator").on("click", function () {

        if (playerIsSelected === false && defenderIsSelected === false) {

            player = term;
            $(this).addClass("d-none");
            displayPlayer();


        } else if (playerIsSelected === true && defenderIsSelected === false) {

            defender = term;
            $(this).addClass("d-none");
            displayDefender();

        } else {

            console.log("player and defender selected")

        }
    })

    // Fighting

    $("#fightButton").on("click", function () {

        if (playerIsSelected === true && defenderIsSelected === true) {

            defender.health -= player.counterAttackPower;
            $("#defenderHealth").html(defender.health);
            console.log("defender health: " + defender.health);

            player.counterAttackPower += player.attackPower;
            console.log("player power: " + player.counterAttackPower);

            if (defender.health > 0) {
                player.health -= defender.counterAttackPower;
                $("#playerHealth").html(player.health);
                console.log("player health: " + player.health);
            }

        } else {
            console.log("need to select player and defender")
        }

    })



});