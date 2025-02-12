//Heading 이라는 컴포넌트를 만들고 Hello, World 컴포넌트를 통합하기 
import Heading from "./components/Heading";

export default function App() {
  return (
    <div>
     <Heading type = "h1">Hello</Heading>
     <Heading type = "h2">World</Heading>
    </div>
  );
}


//App 컴포넌트를 Hello 컴포넌트와 World컴포넌트로 쪼개기기
import Hello from "./Hello.js"; //.js를 붙이지 않아도 확장자를 읽을 수 있음 
import World from "./World.js";

export default function App() {
  return (
    <div>
      <Hello></Hello>
     <World></World> //단축하여 쓸 수도 있음 <World /> 이유는 안에 아무내용이 없어서

    </div>
  );
}


//value를 state로 만들기
//Increase 버튼 함수 만들기
//Reset 버튼 함수 만들기
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(0); //초기값 0

  return (
    <div>
      <h1>value: {value}</h1>
      <button
        onClick={() => {
          console.log('Increase value', value);
          setValue (value + 1);
        }}
        >
          Increase value
      </button>
      <button onClick={() => {
        setValue(0);
      }} 
      >
        Reset value
        </button>
    </div>

  );
}