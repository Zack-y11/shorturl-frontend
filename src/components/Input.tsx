import React from "react";

interface InputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placerholder: string
}

const Input: React.FC<InputProps> = ({value, onChange, placerholder})=>{
    return <input value={value} onChange={onChange} placeholder={placerholder}/>
}

export default Input;