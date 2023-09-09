import { range } from './utils';
import './index.css';
function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((rowumx) => (
        <div key={rowumx} className="row">
          {' '}
          {range(numCols).map((colum) => (
            <div key={colum} className="cell">
              {' '}
            </div>
          ))}{' '}
        </div>
      ))}
    </div>
  );
}

