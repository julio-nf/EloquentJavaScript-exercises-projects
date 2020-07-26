let chessboard = "";
let size = 8;
for (let counter = 0; counter < size; counter++) {
    if (counter % 2 == 0) {
        for (let counter2 = 0; counter2 < size; counter2++) {
            if (counter2 % 2 == 0) {
                chessboard += " "
            } else {
                chessboard += "#"
            }
        }
    } else {
        for (let counter2 = 0; counter2 < size; counter2++) {
            if (counter2 % 2 == 0) {
                chessboard += "#"
            } else {
                chessboard += " "
            }
        }
    }
    chessboard += "\n"
}

console.log(chessboard);