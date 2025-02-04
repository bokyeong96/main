### 메모장 

- React 클라이언트 브라우저에서 화면을 렌더링

ex. 


* 실습2-6

import ReactDOM from 'react-dom';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
  <div style={{ display: 'flex' }}>
    {num.map(
      (n) =>
        n >= 2 &&
        n !== 5 && (
          <div
            style={{
              padding: 10,
              color: n % 2 ? 'blue' : 'black'
            }}
          >
            {num.map((m) => (
              <div>
                {n} x {m} = {n * m}
              </div>
            ))}
          </div>
        )
    )}
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);