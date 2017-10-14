//candidate object
var makeCandidate = function(name, partyColor)
{
	var candidate = {};
		candidate.name = name;
		candidate.partyColor = partyColor;
		candidate.electionResults = null;
		candidate.totalVotes = function()
		{
			this.totalVotes = 0;
			for (var i = 0; i < this.electionResults.length; i++)
			{
				this.totalVotes = this.totalVotes + this.electionResults[i];
			};
		};
	return candidate;
};

//assign party colors
var candidate1 = makeCandidate("Amy", [132, 17, 11]);
var candidate2 = makeCandidate("Betty", [245, 141, 136]);

//initial election results
candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//recount adjustments
candidate1.electionResults[4]=17;
candidate2.electionResults[4]=38;
candidate1.electionResults[9]=1;
candidate2.electionResults[9]=28;
candidate1.electionResults[43]=11;
candidate2.electionResults[43]=27;

//setStateResults
var setStateResults = function(state) {
	//set state winner
	theStates[state].winner = null;
	if (candidate1.electionResults[state] < candidate2.electionResults[state]) {
		theStates[state].winner = candidate2;
	} else if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
		theStates[state].winner = candidate1;
	};
	//set state color
	var stateWinner = theStates[state].winner;
	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.partyColor;
	} else {
		theStates[state].rgbColor = [11, 32, 57];
	};
};

//tally
candidate1.totalVotes();
candidate2.totalVotes();

//declarea a winner
var winner;
if (candidate1.totalVotes > candidate2.totalVotes)
{
	winner = candidate1.name;
}
else if (candidate1.totalVotes < candidate2.totalVotes)
{
	winner = candidate2.name;
}
else { winner = " no one!  It's a tie" };

//display results
console.log(candidate1.name + " gets " + candidate1.totalVotes + " votes!");
console.log(candidate2.name + " gets " + candidate2.totalVotes + " votes!");
console.log("And the winner is..." + winner + "!!!");
console.log(candidate1.name + "'s color is " + candidate1.partyColor + ".");
console.log(candidate2.name + "'s color is " + candidate2.partyColor + ".");