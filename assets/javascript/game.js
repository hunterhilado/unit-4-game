$(document).ready(function() {
  
    //the random computer choice 
    var compChoice;
    //users total score
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystalNum1;
	var crystalNum2;
	var crystalNum3;
	var crystalNum4;

    //function is defined as randcrystal to be a local function for the below functions
	function randCrystal() {
        //math.floor functionality to have the variables = a random number
		compChoice = Math.floor(Math.random() * 112) + 18;
		crystalNum1 = Math.floor(Math.random() * 12);
		crystalNum2 = Math.floor(Math.random() * 12);
		crystalNum3 = Math.floor(Math.random() * 12);
		crystalNum4 = Math.floor(Math.random() * 12);
	}

    //new game function to start over and restart functions, similar to the example used in jquery-calculator
	function newGame() {
        //random crystal value is () or randomly chosen from above 
        randCrystal();
        //total score starts at 0
        totalScore = 0;
        //updates the text for comp choice and total user score
		$("#compNumb").text(compChoice);
        $("#totalScore").text(totalScore);
        //uses .attr to return the attributes of the selected crystal elements on the html(#crystal1) and the javascript(crystalNum1)
        //the data-crystalvalue is set equal to the randomly generated math number. It is attributed to both the data and actual var defined 
		$("#crystal1").attr("data-crystalvalue", crystalNum1);
		$("#crystal2").attr("data-crystalvalue", crystalNum2);
		$("#crystal3").attr("data-crystalvalue", crystalNum3);
		$("#crystal4").attr("data-crystalvalue", crystalNum4);
		$("#wins").text(wins);
        $("#losses").text(losses);
	}

	
	newGame();

	//function to add the crystal values together
	$(".crystalimg").on("click", function() {
		if (totalScore >= compChoice) {
			return;
		}
        //variable is created for the crystal value and is given to each crystal randomly 
        var crystalValue = $(this).attr("data-crystalvalue");
        //uses the parseInt function to string an argument and returns a number 
        var crystalValue = parseInt(crystalValue);
        //tried var totalScore but it said the += was missing an ","? so deleted the var
		totalScore += crystalValue;
		$("#totalScore").text(totalScore);

		if (totalScore === compChoice) {
			youWin();
		} else if (totalScore > compChoice) {
			youLose();
		}
	});
    
    //added button to click to restart the game
	$(".btn").on("click", function() {
		newGame();
    });
    
    //endgame function and text alert once you win/lose
    function youWin() {
		$("#restartBtn").text("Success!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#restartBtn").text(":(");
		losses++;
		$("#losses").text(losses);
	}

});




















