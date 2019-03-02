$(document).ready(function () {

    // Characters

    var xeno = {

        name: "Xenomorph",
        portrait: "./assets/images/xenomorph.jpg",
        portraitDefeat: "./assets/images/xenomorph-defeated.jpg",
        health: 120,
        attackPower: 3,
        counterAttackPower: 10,

    }

    var vader = {

        name: "Darth Vader",
        portrait: "./assets/images/vader.jpg",
        portraitDefeat: "./assets/images/vader-defeated.jpg",
        health: 100,
        attackPower: 4,
        counterAttackPower: 12,


    }

    var pred = {

        name: "Predator",
        portrait: "./assets/images/predator.jpg",
        portraitDefeat: "./assets/images/predator-defeated.jpg",
        health: 80,
        attackPower: 6,
        counterAttackPower: 15,

    }

    var term = {

        name: "Terminator",
        portrait: "./assets/images/terminator.jpg",
        portraitDefeat: "./assets/images/terminator-defeated.jpg",
        health: 140,
        attackPower: 2,
        counterAttackPower: 10,

    }

    var player = {}

    var defender = {}

    var playerIsSelected = false;

    var defenderIsSelected = false;

    var killCount = 0;




    function reset() {

        xeno.health = 120;
        xeno.counterAttackPower = 10;
        vader.health = 100;
        vader.counterAttackPower = 12;
        pred.health = 80;
        pred.counterAttackPower = 15;
        term.health = 140;
        term.counterAttackPower = 10;

        player = {}

        defender = {}

        playerIsSelected = false;

        defenderIsSelected = false;

        killCount = 0;


        $("#xenomorph").removeClass("d-none");
        $("#vader").removeClass("d-none");
        $("#predator").removeClass("d-none");
        $("#terminator").removeClass("d-none");
        $("#player").addClass("d-none");
        $("#playerCard").removeClass("bg-dark");
        $("#defender").addClass("d-none");

        $(".char-select").removeClass("bg-secondary")

        $(".xhp").text(xeno.health);
        $(".vhp").text(vader.health);
        $(".php").text(pred.health);
        $(".thp").text(term.health);
        $("#task").text("Select Your Character");
        console.log("reset");

        $("#fightButton").removeClass("d-none");
        $("#fightButton").removeClass("btn-light");
        $("#resetButton").addClass("d-none");

        $("#fightInfo1").html("");
        $("#fightInfo2").html("");

    }

    reset();

    function displayPlayer() {

        $("#player").removeClass("d-none");
        $("#playerName").html(player.name)
        $("#playerImage").attr("src", player.portrait);
        $("#playerHealth").html(player.health);

        console.log(player);
        playerIsSelected = true;
        console.log(playerIsSelected);
        $("#task").text("Select a Defender");

    }

    function displayDefender() {

        $("#defender").removeClass("d-none");
        $("#defenderCard").removeClass("bg-dark");
        $("#defenderName").html(defender.name)
        $("#defenderImage").attr("src", defender.portrait);
        $("#defenderHealth").html(defender.health);
        $("#fightButton").addClass("btn-light");

        console.log(defender);
        defenderIsSelected = true;
        console.log(defenderIsSelected);
        $(".char-select").addClass("bg-secondary");
        $("#task").text("Battle!!!");
    }

    // Choose Player






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

        if (playerIsSelected === true && defenderIsSelected === true && player.health > 0) {


            defender.health -= player.counterAttackPower;
            $("#defenderHealth").html(defender.health);
            $("#fightInfo1").html("You attacked " + defender.name + " for " + player.counterAttackPower + " damage.")
            console.log("defender health: " + defender.health);


            player.counterAttackPower += player.attackPower;
            console.log("player power: " + player.counterAttackPower);

            if (defender.health > 0) {
                player.health -= defender.counterAttackPower;
                $("#playerHealth").html(player.health);
                $("#fightInfo2").html(defender.name + " attacked you for " + defender.counterAttackPower + " damage.")
                console.log("player health: " + player.health);

                // Lose Conditions

                if (player.health <= 0) {
                    $("#task").text("Defeat!");
                    $("#fightInfo2").html(defender.name + " destroyed you!");
                    $("#playerCard").addClass("bg-dark");
                    $("#playerImage").attr("src", player.portraitDefeat);
                    $("#fightButton").addClass("d-none");
                    $("#resetButton").removeClass("d-none")

                }

            } else {

                defenderIsSelected = false;

                killCount++;
                console.log("kills: " + killCount);

                // win round conditions
                if (killCount < 3) {

                    $("#fightInfo2").html("You defeated " + defender.name + "!")
                    $("#defenderCard").addClass("bg-dark");
                    $("#defenderImage").attr("src", defender.portraitDefeat);
                    $(".char-select").removeClass("bg-secondary");
                    $("#task").text("Select a Defender");
                    $("#fightButton").removeClass("btn-light");


                    // win game conditions
                } else {

                    $("#defenderCard").addClass("bg-dark");
                    $("#defenderImage").attr("src", defender.portraitDefeat);
                    $("#task").text("Victory!");
                    $("#fightInfo2").html("You eliminated them all!");
                    $("#fightButton").addClass("d-none");
                    $("#resetButton").removeClass("d-none")

                }

            }

        } else {
            console.log("need to select player and defender")
        }

    });

    $("#resetButton").on("click", function () {

        reset();
    })
});