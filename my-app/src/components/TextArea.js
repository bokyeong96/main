import { useState } from 'react';

function TextArea() {
    const [value, setvalue] = useState(''); 


    return (
        <textarea
           value={value}
           onChange={(e) => {
             setvalue(e.target.value);
           }}
           />
      );
    }

export default TextArea;

