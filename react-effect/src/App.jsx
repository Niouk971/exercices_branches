import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

export default function App() {

    const [quotes, setQuotes] = useState([]);

    const loadData = async () => {
        const res = await fetch("https://dummyjson.com/quotes");
        const data = await res.json();
        setQuotes(data.quotes)
        console.log(quotes)
    };

    useEffect(() => {
        loadData()
    }, []);

    if (quotes.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>
                {quotes.map((element, id) => {
                    return (
                        <div key={id}>
                            <h2>{element.quote}</h2>
                            <p>{element.author}</p>
                        </div>
                    )
                })};
            </div>
        </>
    )
}

