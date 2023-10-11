function baseAnalysis (data) {

var analysedData = data;

function init() {
    findfixedMatchs(analysedData);
}

function findfixedMatchs(data)  {
    for(let x=0; x<data.length; x++) {
        let combainedArray = [];
        if(data[x].value === 0) {
            combainedArray = [...data[x]['vertical-line-data'], ...data[x]['horizontal-line-data'], ...data[x]['box-data'] ]
            combainedArray = combainedArray.filter((item, index) => {
               return  combainedArray.indexOf(item) === index;
            });
        }
        if(combainedArray && combainedArray.length > 1) {
            const misingNumbers = findMissingNumbers(combainedArray);
            data[x]['nonPossibleOptions'] = combainedArray;
            data[x]['missingNumbers'] = misingNumbers;
            if(misingNumbers && misingNumbers.length === 1) {
                data[x]['result'] = {
                    value : misingNumbers[0],
                    status: 'fixed'
                }

                console.log('Reslult Base', data[x]['result'], '||', data[x].id)
            }
        }
        
    }
    
}


function findMissingNumbers(combainedArray) {
    var missing = [];
    
    for (let i=1; i<=9; i++) {
        if(combainedArray.indexOf(i) === -1) {
            missing.push(i);
        }
    }

    return missing;
    
}


init();

return analysedData;

}

export default baseAnalysis;