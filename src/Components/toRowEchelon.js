import React from "react";

function toRowEchelon(matrix){
    let f = 0;
    const rowCount = matrix.length;
    const columnCount = matrix[0].length;

    for (let r = 0; r < rowCount; r++) {
    if (columnCount <= f) {
      return;
    }

    let i = r;

    while (matrix[i][f] === 0) {
      i++;

      if (rowCount === i) {
        i = r;
        f++;

        if (columnCount === f) {
          return;
        }
      }
    }

    const temp = matrix[i];
    matrix[i] = matrix[r];
    matrix[r] = temp;

    const lv = matrix[r][f];

    for (let j = 0; j < columnCount; j++) {
      matrix[r][j] /= lv;
    }

    for (let i = 0; i < rowCount; i++) {
      if (i !== r) {
        const lv = matrix[i][f];
        matrix[i][f] = 0;

        for (let j = f + 1; j < columnCount; j++) {
          matrix[i][j] -= lv * matrix[r][j];
        }
      }
    }

    f++;
  }
  
  return (
    <div className= "return_div">
      <div>
      <p className = "one_row_one">{+matrix[0][0].toFixed(2)}</p>
      <p className = "one_row_one">{+matrix[0][1].toFixed(2)}</p>
      <p className = "one_row_one">{+matrix[0][2].toFixed(2)}</p>
      </div>
      <br></br>
      <div>
      <p className = "one_row_two">{+matrix[1][0].toFixed(2)}</p>
      <p className = "one_row_two">{+matrix[1][1].toFixed(2)}</p>
      <p className = "one_row_two">{+matrix[1][2].toFixed(2)}</p>
      </div>
      
    </div>
  )
}




export default toRowEchelon;