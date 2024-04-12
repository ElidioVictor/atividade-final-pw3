import Select from '../components/Select';
import Input from '../components/Input';
import styles from './form.module.css'
import { useState, useEffect } from 'react';

function Turma(){

    const  [siglaTurma, setSiglaTurma] = useState([]);

    useEffect(()=>{
        fetch(
            'http://localhost:5000/siglaTurma',
            {
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
            }
        ).then(
            (res)=>
                res.json()
            
        ).then(
            (data) =>{
                setSiglaTurma(data);
                console.log(data);
            }
        )
        .catch(
            (error) =>{
                console.log(error);
            }
        )
    }, []);

    return(

        <div>
            <h1>Formulario de Turma</h1>
            <form className={styles.form}>
                <Input
                    type='text'
                    name='nome'
                    placeholder='digite o nome da sua turma'
                    text='digite o nome da sua turma'
                />

                <Select
                    name='turma_id'
                    text='selecione sua turma'
                    options={siglaTurma}
                />

            </form>
        </div>

    )

}

export default Turma;