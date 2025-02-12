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


    Props란

    부모 컴포넌트에서 자식 컴포넌트로 내려주는 데이터

    ex. function App() {
          return (
            <div>
              <MyComponent value={'test'}/>
          );
        }

          function MyComponent(props) {
            return <div>{props.value}</div>;
    }


    Props.children
    컴포넌트 태그로 감싼 값이 props.children으로 전달됨
      ex. function App() {
            return (
              <div>
                <MyComponent>
              <h1>value</h1>
                </MyComponent>
              </div>
            );
          }
          function MyComponent(props) {
            return<div>{props.cildren}</div>
          }


    Props 활용 팁 !

    구조분해할당 구문을 잘 활용
    특정 Props에 기본 값을 줄 수 있다 
    Props는 읽기 전용이다.

    State란?
      컴포넌트 내부에서 사용되는 변수

      -State 값이 변하면 컴포넌트가 리렌더링 됨
      -렌더링 사이클에서 값이 보존됨
      -변하는 정보를 저장하는 곳
        리액트 컴포넌트 안에서 state가 바뀌면 리액트는 자동으로 화면을 다시 그려서 바뀐 내용을 보여줌
        마치 건물을 새로 짓는게 아니라, 필요한 부분만 싹 고쳐서 보여주는것!

      ex.function App() {
          const[Value, setValue] = useState(0);

          return (
            <div>{value}</div>
          );
      }


      클래스형 컴포넌트 (클래스 문법으로 구현한 컴포넌트)

      -useState와 같은 Hooks는 Reacr버전 16.8 부터 등장
      -즉, 그 전에는 함수형 컴포넌트에서 state를 사용할 수 없었고, 클래스형 컴포넌트만 state를 가질 수 있다
      -클래스의 멤버변수로 state정의
      -render라는 멤버함수에서 반환한 값(JSX)이 화면에 그려짐
      
      ex. export default class App extends Component{
        state = {
          value : 0
        }
      }

      (**함수형은 
      
       const [value, setValue] = useState(0); )


      Hooks는 왜 등장했을까?
      -초기에는 클래스형 컴포넌트가 기본이였음
      -하지만, 클래스형 컴포넌트의 몇 가지 문제로 인해 새로운 방식 고안(이해하기 어려움, 코드 재사용성 떨어짐 등)
      -지금은 Hooks가 완전히 기본형으로 사용됨(클래스형은 레거시로 볼 수 있음)
