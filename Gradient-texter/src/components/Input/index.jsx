function Input ({className, type, placeholder, id, onCharge}) {
    return (<input type={type} placeholder={placeholder} className={className} id={id} onCharge={onCharge}/>)
}

export default Input;