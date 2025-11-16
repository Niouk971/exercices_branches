import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
    // const numbers = [number, setNumber] = useState([1, 'deux', 3, 'quatre', 5]);

    const [value, setValue] = useState("N'a aucun sens 🙃");

    const handleClick = () => {
        setValue('A du sens 🙂');
    }

    const makeSense = ['js', 'css', 'cookies'];
    const makeNoSens = ['react', 'useEffect'];


    return (
        <>
            <div>
                <button onClick={() => handleClick()}>{value}</button>
                {makeSense.map((element, id) => (
                    <div key={id}>
                        <h1>{element}</h1>
                    </div>
                ))}
            </div>

        </>
    )
}
