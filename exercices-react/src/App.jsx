import { useState } from 'react';
import './App.css';
import { SeeName } from './components/SeeName';

export default function App() {
    
    const names =  ["Thomas", "Tristan", "Lionel"];
    const [name, setName] = useState(names);

    return (
        <>
            <SeeName name={name} setName={setName} />
        </>
    );
}
