import { useState } from 'react';
import './App.css';
import { List } from './components/List';

export default function App() {
    const [value, setValue] = useState([])

    return (
        <List value={value} setValue={setValue} />
    )
}
