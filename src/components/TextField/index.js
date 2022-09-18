import './TextField.css'

const TextField = (props) => {
    const onTyping = (e) => {
        props.onAlter(e.target.value)
    }
    return (
        <div className="text-field">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                value={props.value}
                onChange={onTyping} 
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                required={props.required}
                />
        </div>
    )
}

export default TextField;