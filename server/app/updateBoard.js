function updateBoard(updatedTable, data) {

    var mapdata = data;
    var board = updatedTable;

    function init() {
        var board = updateTableMap(updatedTable, mapdata);

    }

    function updateTableMap(updatedTable, data) {

        data.forEach(element => {
            if (element.result) {
                const r = element['row-position'];
                const c = element['column-position'];

                if (element.result.status === 'fixed') {
                    updatedTable[r - 1][c - 1] = element.result.value;
                    console.log(element.id, '  --- Updated');
                }

            }
        });

        return updatedTable;
    }




    init();

    return { board, mapdata };
}

export default updateBoard;