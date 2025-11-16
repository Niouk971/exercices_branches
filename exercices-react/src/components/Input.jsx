import { useState } from 'react';

export const Input = ({ value, setValue }) => {

    const [inputValue, setInputValue] = useState('');

    const addList = (e) => {
        e.preventDefault();
        const input = [...value, inputValue];
        setValue(input);
        setInputValue('');
    };

    return (
        <>
            <form onSubmit={addList}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit'>Ajouter</button>
            </form>
        </>
    );

}
