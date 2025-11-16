import { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { SeeName } from './components/SeeName';

export default function App() {

    const [name, setName] = useState([]);

    return (
        <>
            <Input value={name} setValue={setName} />
            <SeeName name={name} setName={setName} />
        </>
    );
}
