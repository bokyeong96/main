import { useRef } from 'react'; //useRef 특정 dom요소를 가져오는것

function UncontrolledTextInput() {
  const inputRef = useRef(); //직접 dom요소에 접근했기 때문에, 리랜더링이 일어나지 않는다.

  return (
    <>
      <input ref={inputRef} type="text" />
      <button
         onClick={() => {
           console.log(inputRef.current.value);
         }}
         >
            Get value
         </button>
    </>
  );
}

export default UncontrolledTextInput;