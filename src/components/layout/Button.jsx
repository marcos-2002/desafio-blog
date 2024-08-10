function Button({className, children, id, email, blogs, onClick}){

    function handleOnClick(){
        onClick(id, email, blogs)
    }

    return <button onClick={handleOnClick} className={className}>{children}</button>
}

export default Button