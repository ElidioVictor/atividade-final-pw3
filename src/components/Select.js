import styles from './Select.module.css'

function Select({name, text, options, handlerOnChange,}){
    return(
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={name} onChange={handlerOnChange}>

                {
                    options.map((option)=>(
                        <option value={option.id} key={option.id}>
                            {option.sigla}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default Select;