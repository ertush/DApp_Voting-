pragma solidity ^0.5.0;

contract Election {

    // Model candidate
    struct Candidate{
        uint Id;
        string name;
        uint voteCount;

    }

    //Read/Write Candidates
    mapping(uint => Candidate) public candidates;

    //keep track of candidates added
    uint public candidateCount;

    // Constructor
    constructor () public {
        //candidate = "Candidate 1";
        addCandidate("candidate_1");
        addCandidate("candidate_2");
    }

    //Add a candidate
    function addCandidate(string memory _name) private {
        candidateCount ++;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }

}