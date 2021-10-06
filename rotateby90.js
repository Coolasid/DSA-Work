function rotateBy90(R, matrix) {
    for (var i = 0; i < Math.floor(R / 2); i++) {
        var str = "";
        for (var j = i; j < R - i - 1; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][R - 1 - i];
            matrix[j][R - 1 - i] = matrix[R - 1 - i][R - 1 - j];
            matrix[R - 1 - i][R - 1 - j] = matrix[R - 1 - j][i];
            matrix[R - 1 - j][i] = temp;
        }
    }
    
    for( var r = 0; r< R; r++){
        var out = "";
            for( var c = 0; c < R ; c++ ){
                out = out + matrix[r][c] + " ";
            }
            console.log(out)
    }
    
}

var matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];

rotateBy90(5, matrix);