## 2-6 (구구단만들기
         - 구구단 2~9단을 출력
         - 단, 5단은 제외
         - 홀수 단은 다른 색으로 표시
         - 구구단은 오른쪽으로 나열
)

import ReactDOM from 'react-dom';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
  <div style={{ display: 'flex' }}>  //오른쪽을 나열 할 수 있는이유유
    {num.map(
      (n) =>
        n >= 2 &&
        n !== 5 && (
          <div
            style={{
              padding: 10,
              color: n % 2 ? 'blue' : 'black'
            }} //짝수는 검정, 홀수는 파랑으로 출력
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




