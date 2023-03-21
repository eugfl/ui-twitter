import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Olha, faz sentido',
        'Parabéns pelo progresso!'
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()

        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }
    
    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className='status'>
            <Header title="Tweet" />

            <Tweet content={`Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: 
        
            ✅ npm start: De 32s para 400ms(sim, demorava 30s) 
            ✅ npm build: De 120s para 22s
        
            Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥`} />
            
            <Separator />

            <form onSubmit={createNewAnswer} className='answer-tweet-form'>
                <label htmlFor='tweet'>
                    <img src="https://github.com/eugfl.png" alt="Gabriel Figueiredo" />
                    <textarea
                        id='tweet'
                        placeholder="Tweet your answer"
                        value={newAnswer}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {
                            setNewAnswer(event.target.value)
                        }}
                    />
                </label>
                <button type='submit'>
                    <PaperPlaneRight/>
                    <span>Answer</span>
                </button>
            </form>

            

            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}

        </main>
    )
}