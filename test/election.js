var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
	 var electionInstance;

	 it("Initializes with two candidates", function(){
	 	return Election.deployed().then(function (instance){ 
	 		return instance.candidateCount()
	 	}).then(count => {
	 		assert.equal(count, 2)
	 	});
	 
	 });

	 it("Initializes the candidates with the correct values", function(){
	 	return Election.deployed().then(function (instance) {
	 		electionInstance = instance
	 	});

	 	electionInstance.candidates(1).then(function (candidate) {
	 		assert.equal(candidate.Id, 1, "candidate assigned the correct Id");
	 		assert.equal(candidate.name, "candidate_1", "candidate assigned the correct name");
	 		assert.equal(candidate.voteCount, 0, "candidate has the correct value");
	 	});

	 	electionInstance.candidates(2).then(function (candidate) {
	 		assert.equal(candidate.Id, 2, "candidate assigned the correct Id");
	 		assert.equal(candidate.name, "candidate_2", "candidate assigned the correct name");
	 		assert.equal(candidate.voteCount, 0, "candidate has the correct value");
	 	});
	 })
});