### 메모장 

- React 클라이언트 브라우저에서 화면을 렌더링

* 2-2실습(JSX에서 자바스크립트 사용하기)
import ReactDOM from 'react-dom';

let text = 'Hello, world!';
const num = 15;
const obj = { key: 0, a: 1, b: 2 };
const arr = ['a', 'b', 'c'];
const imageUrl =
  'https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg';

const element = (
  <div>
    <h1>변수 넣기</h1>
    <ul>
      <li>{text}</li>
      <li>{text + 'test'}</li>
    </ul>
    <h1>숫자 및 계산식 넣기</h1>
    <ul>
      <li>{num}</li>
      <li>{num + 15}</li>
    </ul>
    <h1>Boolean, Nullish 값 넣기</h1>
    <ul>
      <li>{true}</li>
      <li>{false}</li>
      <li>{undefined}</li>
      <li>{null}</li>
    </ul>
    <h1>Object, Array 넣기</h1>
    <ul>
      {/* <li>{obj}</li> */}
      <li>{arr}</li>
    </ul>
    <h1>주석 넣기</h1>
    <ul>
      <li>{/* 주석입니다. */}</li>
    </ul>
    <h1>태그 속석에 넣기</h1>
    <ul>
      <li>
        <img src={imageUrl} alt="logo" />
      </li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);



* 2-3 실습(JSX 조건문)

import ReactDOM from 'react-dom';

const arr = [1, 2, 3];
const text = '';

const element = (
  <div>
    <h1>삼항연산자</h1>
    <ul>
      <li>
        {1 + 1 === 2
          ? '참입니다.'
          : '거짓입니다.'}
      </li>
    </ul>

    <h1>AND 연산자</h1>
    <ul>
      <li>{1 + 1 === 2 && 'AND 연산자1'}</li>
      <li>{arr.length && 'AND 연산자2'}</li>
    </ul>

    <h1>OR 연산자</h1>
    <ul>
      <li>{1 + 1 !== 2 || 'OR 연산자1'}</li>
      <li>{text || 'OR 연산자2'}</li>
    </ul>

    <h1>IF문 (즉시실행함수)</h1>
    <ul>
      <li>
        {(() => {
          if (1 + 1 === 2) return 'IF';
          else return 'ELSE';
        })()}
      </li>
      <li>
        {(() => {
          const data = '즉시실행함수';

          /* 어떤 연산이든 추가 가능 */
          /* 일반적으로는 이렇게 즉시실행함수가
         미리 위에서 가공하여 전달 */

          return data;
        })()}
      </li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);



* 2-4 실습(JSX 반복문)

import ReactDOM from 'react-dom';

const arr = ['1번', '2번', '3번'];

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(<h4>{arr[i]}</h4>);
  // = [<h4>1번</h4>, <h4>2번</h4>, <h4>3번</h4>]
}

const element = (
  <div>
    <h1>배열로 넣기</h1>
    <ul>
      <li>{arr}</li>
      <li>{arr2}</li>
    </ul>

    <hr />

    <h1>Array.map</h1>
    <ul>
      <li>
        {arr.map((item) => {
          return <h4>{item}</h4>;
        })}
      </li>
    </ul>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);



* 실습2-5 (JSX 스타일링)

import './index.css';

import ReactDOM from 'react-dom';

// 2. style 재활용
const roundBoxStyle = {
  position: 'absolute',
  top: 50,
  left: 50,
  width: '50%',
  height: '200px',
  padding: 20,
  background: 'rgba(162,216,235,0.6)',
  // 3. 속성은 camelCase
  borderRadius: 50
};

const element = (
  <div
    style={{
      // 1. Object로 css 작성
      position: 'relative',
      width: 400,
      height: 1000,
      background: '#f1f1f1'
    }}
  >
    <div style={roundBoxStyle}>Hello1</div>

    <div style={{ ...roundBoxStyle, top: 350 }}>
      {/* 4. className을 통한 스타일링 (CSS-in-JS) */}
      <div className="highlight">Hello2</div>
    </div>

    <div style={{ ...roundBoxStyle, top: 650 }}>
      {/* 5. 조건적 스타일 */}
      <div
        className={
          1 + 1 === 2 ? 'highlight' : ''    //앞에 내용이 참이면 highlight 적용, 거짓이면 false (공백)  또는 1 + 1 === 2 && 'highlight'
        }
      >
        Hello3
      </div>
    </div>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);



* 실습2-6 (구구단 만들기 조건: 구구단 2~9단을 출력, 5단은 제외, 홀수단은 다른색으로 표시, 구구단은 오른쪽으로 나열되도록록) 

import ReactDOM from 'react-dom';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const element = (
  <div style={{ display: 'flex' }}> //오른쪽으로 나열될 수 있는 이유 
    {num.map(
      (n) =>
        n >= 2 &&
        n !== 5 && (
          <div                      //단을 의미하는 부분
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



- 컴포넌트 

컴포넌트란? 스스로 상태를 관리하는 캡슐화된 코드 조각

  리액트는 컴포넌트 단위로 화면이 구성된다.

  하나의 JSX를 반환하는 함수
  (ex. 
  
  function App() {
         return (
           <div>
             <h1>Hello,</h1>
             <h2>world</h2>
            </div>
         );
       }
       ReactDOM.render(
        <App />,
        document.getElementById('root')
       );

 여기서는 App이 컴포넌트)


 컴포넌트 만들기

 지금까지 했던 JSX와의 차이가 뭘까?

 - 컴포넌트는 기본적으로 함수이기 때문에 자신만의 고유한 로직이 들어갈 수 있다.

- 스스로 상태를 가질 수 있다(상태가 변하면 알아서 반영)

import , export

- es6에서 모듈을 불러오고 내보내는 방법 

컴포넌트 생성 시, 주의사항

  컴포넌트 이름은 PascalCase(각 단어의 첫 문장은 대문자로) 로 지어야한다. 

  ex.
  -MyComponent
  -ArticlePage
  -UserProfile

  컴포넌트 생성 시, 주의사항

    컴포넌트는 의미단위로 쪼개서 파일을 분리한다. 

    최상위 컴포넌트 이름은 일반적으로 App이다.
    
    -index.js - entry point. 최종 컴포넌트를 DOM에 render(React.DOM.render)
    -App.js -모든 컴포넌트들의 root 컴포넌트 