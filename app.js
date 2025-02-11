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