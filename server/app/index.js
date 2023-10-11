import prepareData from './prepareData.js';
import baseAnalysis from './baseAnalysis.js'
import updateBoard from './updateBoard.js';
import lineAnalysis from './lineAnalysis.js';

var sampleBoard = 
[
    [0, 0, 0, 5, 0, 0, 2, 0, 1],
    [8, 0, 0, 0, 0, 6, 0, 0, 5],
    [0, 0, 5, 2, 0, 7, 0, 8, 0],

    [0, 1, 7, 9, 6, 0, 8, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 8, 0, 7, 4, 6, 1, 0],

    [0, 8, 0, 4, 0, 5, 3, 0, 0],
    [7, 0, 0, 6, 0, 0, 0, 0, 9],
    [5, 0, 4, 0, 0, 9, 0, 0, 0]
];

var result = [
    [0,0,0, 5,0,0, 2,0,1],
    [8,0,0, 1,0,6, 0,0,5],
    [1,0,5, 2,0,7, 0,8,0],

    [3,1,7, 9,6,2, 8,5,4],
    [0,0,0, 8,5,1, 0,0,0],
    [9,5,8, 3,7,4, 6,1,2],

    [0,8,9, 4,1,5, 3,0,0],
    [7,0,1, 6,0,0, 5,4,9],
    [5,0,4, 7,0,9, 1,0,0]

  ]
//   [
//  //  4 6 3  5 9 8  2 7 1
    //  8 7 2  1 4 6  9 3 5
    //  1 9 5  2 3 7  4 8 6

    //  3 1 7  9 6 2  8 5 4
    //  2 4 6  8 5 1  7 9 3
    //  9 5 8  3 7 4  6 1 2

    //  6 8 9  4 1 5  3 2 7
    //  7 2 1  6 8 3  5 4 9
    //  5 3 4  7 2 9  1 6 8
// ]



    
var counter = 0;

function prepareContent (boardData) {
    // PREPARE A DATA OBJECT FOR EACH CELL
    const {MappMetaData} = prepareData(boardData);

    // Basic Analysis like 
    let analysedData = baseAnalysis(MappMetaData);

    // Analyse from the participating Row and Box
    let lineData = lineAnalysis({boardData, analysedData });


    // Check for updates and Render the Board
    const { board } = updateBoard(boardData, lineData); 
    sampleBoard = board;
}


function init() {

     prepareContent(sampleBoard);
    
   // console.log(sampleBoard);

    
    if(!isCompleted(sampleBoard)) {
        console.log("counter",counter)
        if(counter < 10) {
            counter ++;
            init();
            
        }
        
    }

    

}

function isCompleted (map) {
    var margedmap = map.flat(1);
    console.log('pending Cells', countValue(0, margedmap));
    if(margedmap.indexOf(0) === -1) {
        return true;
    } else {
        return false;
    }
}

function countValue(value, array) {
    let count =0;
    array.map((item, index) => {
        if(item === value) {
            count++;
        }
    });
    return count;
}



init();


