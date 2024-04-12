import styles from './Input.module.css'

function Input({type, text, name, placeholder, handlerOnChange, value}){
    return(
        <div>

            <label htmlFor={name}>{text}</label>

            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handlerOnChange}
                value={value}
            />
            
        </div>
    );
};

export default Input;