export default function TextArea({name, text, id, placeholder, onChange}) {
    return (
        <div>
            <label>{text}</label>
            <textarea name={name} id={id} rows={15} cols={70} placeholder={placeholder}></textarea>
        </div>
    )
}