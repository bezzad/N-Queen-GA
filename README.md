# N-Queen by Genetic Algorithm
Solve N-Queen problem by Genetic Algorithm (GA) in JavaScript.

## How to execute
1. First install [node.js](https://nodejs.org/en/)

2. Set your GA parameters at [index.js](https://github.com/bezzad/N-Queen-GA/blob/master/index.js):
```
//               N , Pop, SR, MR, ReGen, CR
var ga = new GA(200, 500, 10, 50, 10000, 75);

// N:       Number of Queens in the N×N Chess Board
// Pop:     Population size
// SR:      Selection probability %
// MR:      Mutation probability %
// ReGen:   Regeneration limitation
// CR:      Max Chromosomes Convergence Rate % 
```

3. Go to root folder and run below code in `Bash` or `CMD` and press Enter: <br>
    ```
    $ node index.js
    ```

>**Note**   
 This project independent from any libraries. So don't need to run `npm install`.
 
<br/><br/>
The GA executed and printed an answer like this:
```
Starting GA ...
generation 100, elite fitness is 2
GA ended due to the best chromosome found :)

Result: {"len":200,"genome":[112,192,199,167,105,183,38,148,85,107,126,78,116,72,160,142,155,162,74,41,49,10,177,137,4,128,80,140,123,59,181,24,120,169,110,13,197,98,81,62,125,96,91,163,90,84,79,75,132,196,9,19,102,67,164,63,48,69,45,193,36,70,46,134,95,130,106,44,157,150,170,119,117,184,1,154,86,17,180,113,30,43,188,143,7,28,173,20,26,194,56,32,175,76,190,153,178,159,2,191,115,187,83,97,64,58,35,89,39,100,5,168,165,131,152,23,189,0,3,182,186,37,141,195,18,172,6,29,21,136,77,8,149,12,60,47,14,73,138,27,114,93,33,179,99,82,103,65,55,176,146,156,34,122,144,118,61,71,133,57,127,147,51,88,108,22,42,16,171,68,11,166,185,129,94,124,174,109,151,101,50,135,121,111,52,54,92,145,158,104,161,139,31,53,66,87,198,25,40,15],"fitness":0}

Generation: 123
duration: 3073 ms
```


