const { StopWatch } = require('./util');
const GA = require("./ga");

//                    N , Pop, SR, MR, ReGen, CR
// best practice: GA(200, 500, 30, 60, 10000, 75); 4775ms
// fast practice: GA(200, 500, 10, 50, 10000, 75); 2659ms
// N-Queen O(n^n) | O(n!) == NP-Complex
StopWatch.start();
// ------------------------------------------------------
//               N , Pop, SR, MR, ReGen, CR
var ga = new GA(200, 500, 10, 50, 10000, 75);

// N:       Number of Queens in the N×N Chess Board
// Pop:     Population size
// SR:      Selection probability %
// MR:      Mutation probability %
// ReGen:   Regeneration limitation
// CR:      Max Chromosomes Convergence Rate % 

var result = ga.Start();
console.log("\nResult:", JSON.stringify(result));
console.log("\nGeneration:", ga.RegenerationCounter)
// ------------------------------------------------------
StopWatch.stop();