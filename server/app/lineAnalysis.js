
function lineAnalysis (boardData) {
var board = boardData.boardData;
let mapdata = boardData.analysedData;

function init() {

    mapdata.forEach(element => {
        
        if(element['missingNumbers'] && element['missingNumbers'].length > 1){

            caliculateFromHorizantalLine(element, board) 
            
            caliculateFromParticipatingGrid(element, board);

        }
        
    
    });

    // console.log("Result caliculated for ", count);
}


function caliculateFromParticipatingGrid(element, board) {

}

function caliculateFromHorizantalLine(element, board) {
    for (let i = 0; i < board.length; i++) {
                
        if(i === (element['row-position']-1)) {
            
            for (let y = 0; y < board[i].length; y++) {

                if(board[i][y] === 0 ) {
                    var mapitem = getItemfromMap(`${i}-${y}`);
                    if(mapitem[0].id !== element.id) {
                        element['missingNumbers'].forEach((item) => {
                            if(!element[`${item}`]){
                                element[`${item}`] = [];
                            }; 
                            if(mapitem[0]['missingNumbers'].indexOf(item) === -1 ){
                                
                                element[`${item}`].push(true)
                            } else {
                                element[`${item}`].push(false)
                            }
                        });
                    }
                }
            }

            element = genratOutcomeObj(element)
            if(element.result) {
                // count++;
                console.log('Inline Reslult', element.result, '||', element.id)
            }
        }
        
        

    }
}

function genratOutcomeObj (element) {
    
    element['missingNumbers'] && element['missingNumbers'].forEach((item) => {
        if(element[`${item}`]) {
            const subitem = element[`${item}`];
            if(subitem.indexOf(false) === -1) {
                element['result'] = {
                    value : item,
                    status: 'fixed'
                }
            }
        }
        
    });
    return element;
}

function getItemfromMap (id) {
    
    return mapdata.filter((item , index) => {
        return item.uid === id;
    })
}

init();

return mapdata;

}
 export default lineAnalysis;