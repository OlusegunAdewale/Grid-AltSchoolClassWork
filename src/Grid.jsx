import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowIndex) => (
        <div key={`row-${rowIndex}`} className="grid-row">
          {range(numCols).map((colIndex) => (
            <div key={`col-${colIndex}`} className="grid-cell">
              {/* Render content for each cell here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
