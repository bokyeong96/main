import { useState } from 'react'; 
import Select from './components/Select';
import TextInput from './components/TextInput';


const contryOptions = ["한국", "중국", "일본", "러시아", "미국"];

function App() {
  const [formValue, setFormValue] = useState ({
    name: "",
    contry: "",
    address: ""
  });

  return (
    <div className="App">
      <div className="form">
        <div className="form-item">
          <h1>1. 이름이 무엇인가요?</h1>
          <TextInput 
            value={formValue.name} 
            setValue={(value) =>{
              setFormValue((state) => ({
                ...state,
                name: value
            }));
          }}
           />
        </div>
        <div className="form-item">
          <h2>2. 사는 곳은 어딘가요?</h2>
          <Select 
          value={formValue.contry} 
          setValue={(value) => {
            setFormValue((state) => ({
              ...state,
              contry: value
            }));
          }}
          options={contryOptions}   
        />
        </div>
        {formValue.contry === "한국" && (
        <div className="form-item">
          <h1>2-1. 한국 어디에 사나요?</h1>
          <TextInput
          
          value={formValue.address} 
          setValue={(value) =>{
            setFormValue((state) => ({
              ...state,
              address: value
          }));
        }} 
       />
        </div>
      )}
        <div className="button-group">
          <button 
            onClick={() => {
              alert("저장되었습니다.");
              setFormValue({
               name: "",
               contry: "",
               address: ""
            });  //저장되고 초기화 시키기 
          }}
          disabled={!formValue.name || !formValue.contry } //disabled 옵션을 주는..둘 중 하나라도 공백이면 저장안됨 
          >
            저장
          </button>
        </div>
      </div>
    </div>







  )

}

export default App;
