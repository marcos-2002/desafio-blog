export default function TextArea({name, text, id, placeholder, onChange, className}) {
    return (
        <div className={className}>
            <label>{text}:</label> <br />
            <textarea name={name} id={id} rows={15} cols={70} placeholder={placeholder} onChange={onChange}></textarea>
        </div>
    )
}