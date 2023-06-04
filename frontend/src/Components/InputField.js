import { useState } from 'react'
import './InputField.css'

const InputField = ({ children, type, showHide }) => {
  const [ inputType, setInputType ] = useState( type || 'text');

  const togglePasswordVisibility = () => {
    if (inputType === 'password') setInputType('text');
    if (inputType === 'text') setInputType('password');
  }

  return (
    <div className="field-item">
      <label>
        { children }
        <input type={inputType}/>
        { showHide && <button type="button" onClick={togglePasswordVisibility}>{inputType === 'password' ? 'Show' : 'Hide'}</button>}
      </label>
    </div>
  )
}

export default InputField