function Input({id, text, type, name, placeholder, value, onChange, className}){
    return (
        <div className={className}>
            <label htmlFor={name}>{text}: </label> <br />
            <input 
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default Input