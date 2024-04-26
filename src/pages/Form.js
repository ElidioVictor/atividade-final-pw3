import Select from '../components/Select';
import Input from '../components/Input';
import styles from './form.module.css'
import { useState, useEffect } from 'react';

function Turma(){

    const  [siglaTurma, setSiglaTurma] = useState([]);

    const [nomeTurma, setNomeTurma] = useState({})

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

    function handlerChangeTurma(e){

        setNomeTurma({... nomeTurma, [e.target.name] : e.target.value})
        //console.log(nomeTurma)

    }

    function handlerChangeSigla(e){

        setSiglaTurma({... nomeTurma, siglaTurma:{
            id: e.target.value,
            siglaTurma : e.target.options[e.target.selectedIndex].text
        }})
        
    }

        
    function createTurma(nomeTurma){
        fetch('http://localhost:5000/nomeTurma',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },

            body: JSON.stringify(nomeTurma)
        })
        .then(
            (resp)=>resp.json())
        .then(
            (data) =>{console.log(data)
            })
        .catch(
            (error) =>{console.log(error)
            
            })    
    }

    function submit(e){
        e.preventDefault()
        createTurma(nomeTurma)
    }

    return(

        <div>
            <h1>Formulario de Turma</h1>
            <form className={styles.form} onSubmit={submit}>
                <Input
                    handlerOnChange={handlerChangeTurma}
                    type='text'
                    name='nome'
                    placeholder='digite o nome da sua turma'
                    text='digite o nome da sua turma'
                />

                <Select
                    name='sigla_id'
                    text='selecione sua turma'
                    options={siglaTurma}
                    handlerOnChange={handlerChangeSigla}
                />

                <input type='submit' value='cadastrar'/>

            </form>
        </div>

    )

}

export default Turma;