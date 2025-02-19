import { useState } from 'react';

function CheckBox() {
    const [value, setvalue] = useState(false);

    return (
      <input
         type="checkbox"
         value={value}
         onChange={(e) => {
            setvalue(e.target.checked); //checked 값은 분리형 값으로 true,false 값이 떨어짐
          }}
          />
    );
}

export default CheckBox;