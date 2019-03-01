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

    var playerIsSelected = false;



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
    }

    // Choose Player





    $("#xenomorph").on("click", function () {

        if (playerIsSelected === false) {

            player = xeno;
            $(this).addClass("d-none");
            displayPlayer();
            console.log(player);
            playerIsSelected = true;
            console.log(playerIsSelected)

        } else {
            console.log("Player already selected")
        }
    })

    $("#vader").on("click", function () {

        if (playerIsSelected === false) {

            player = vader;
            $(this).addClass("d-none");
            displayPlayer();
            console.log(player);
            playerIsSelected = true;

        } else {
            console.log("Player already selected")
        }
    })

    $("#predator").on("click", function () {

        if (playerIsSelected === false) {

            player = pred;
            $(this).addClass("d-none");
            displayPlayer();
            console.log(player);
            playerIsSelected = true;

        } else {
            console.log("Player already selected")
        }
    })

    $("#terminator").on("click", function () {

        if (playerIsSelected === false) {

            player = term;
            $(this).addClass("d-none");
            displayPlayer();
            console.log(player);
            playerIsSelected = true;

        } else {
            console.log("Player already selected")
        }
    })



});