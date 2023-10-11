

const prepareData = function (MySampleMapp) {

    var boxObj = {
        '1' : [],
        '2' : [],
        '3' : [],
        '4' : [],
        '5' : [],
        '6' : [],
        '7' : [],
        '8' : [],
        '9' : [],
    };

    var MappMetaData = [
    
    ];

    function init() {
        generateBoxes();
        generateMetaData();

    }

    function generateMetaData() {
        var counter = 1;

        for (var i = 0; i < MySampleMapp.length; i++) {
            for (let y = 0; y < MySampleMapp[i].length; y++) {
                MappMetaData.push(creatItemObj(i, y, counter));
                counter++
            }
            
            
        }
    }


    function creatItemObj(r, c, counter) {
        var obj = {
            'id': counter,
            'uid': `${r}-${c}`,
            'value': MySampleMapp[r][c],
            'row-position': r + 1,
            'column-position': c + 1,
            'box-number': getResidingBoxNum(r, c)

        }
        if (obj.value === 0) {
            obj['vertical-line-data'] = getVerticalLineData(r, c);
            obj['horizontal-line-data'] = getHorizontalLineData(r, c);
            obj['box-data'] = boxObj[obj["box-number"]];
        }
        return obj;
    }

    function getHorizontalLineData(row, column) {
        var rowPosition = row;
        // console.log("rowPosition", rowPosition);
        for (let i = 0; i < MySampleMapp.length; i++) {
            if (i === rowPosition) {
                return MySampleMapp[i];
            }
        }
    }

    function getVerticalLineData(row, column) {
        var columnPosition = column;
        var columnData = [];
        // console.log("columnPosition", columnPosition);
        for (let i = 0; i < MySampleMapp.length; i++) {
            for (let y = 0; y < MySampleMapp[i].length; y++) {
                if (y === columnPosition) {
                    columnData.push(MySampleMapp[i][y]);
                }
            }

        }
        return columnData;

    }

    function generateBoxes(box) {

        for (var i = 0; i < MySampleMapp.length; i++) {
            var myBoxes = [[], [], []]
            for (let y = 0; y < MySampleMapp[i].length; y++) {
                if (i < 3) {
                    if (y < 3) {
                        boxObj['1'].push(MySampleMapp[i][y]);
                    }
                    else if (y >= 3 && y <= 5) {
                        boxObj['2'].push(MySampleMapp[i][y]);
                    }
                    else if (y > 5) {
                        boxObj['3'].push(MySampleMapp[i][y]);
                    }

                }
                else if (i >= 3 && i <= 5) {
                    if (y < 3) {
                        boxObj['4'].push(MySampleMapp[i][y]);
                    }
                    else if (y >= 3 && y <= 5) {
                        boxObj['5'].push(MySampleMapp[i][y]);
                    }
                    else if (y > 5) {
                        boxObj['6'].push(MySampleMapp[i][y]);
                    }

                }
                else if (i > 5) {
                    if (y < 3) {
                        boxObj['7'].push(MySampleMapp[i][y]);
                    }
                    else if (y >= 3 && y <= 5) {
                        boxObj['8'].push(MySampleMapp[i][y]);
                    }
                    else if (y > 5) {
                        boxObj['9'].push(MySampleMapp[i][y]);
                    }
                }

            }
        }

    }

    function getResidingBoxNum(row, column) {
        if (row <= 2) {
            if (column <= 2) {
                return 1
            }
            else if (column > 2 && column <= 5) {
                return 2
            }
            else if (column > 5) {
                return 3
            }
            else {
                return -1;
            }
        } else if (row > 2 && row <= 5) {
            if (column <= 2) {
                return 4
            }
            else if (column > 2 && column <= 5) {
                return 5
            }
            else if (column > 5) {
                return 6
            }
            else {
                return -1;
            }

        } else if (row > 5) {
            if (column <= 2) {
                return 7
            }
            else if (column > 2 && column <= 5) {
                return 8
            }
            else if (column > 5) {
                return 9
            }
            else {
                return -1;
            }
        }
        else {
            return -1;
        }

    }

    init();
    return { MappMetaData, boxObj};
}

export default prepareData;