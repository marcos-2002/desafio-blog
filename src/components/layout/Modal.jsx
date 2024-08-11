function Modal({className, children, isOpen}){

    if(isOpen){
        return(
            <div className={className}>
                <div>{children}</div>
            </div>
        )
    }
}

export default Modal