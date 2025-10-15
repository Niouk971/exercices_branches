export const List = ({ value, setValue }) => {

    const addList = (e) => {
        e.preventDefault()
        const safeInputCopy = [...value]
        safeInputCopy.push(e.target[0].value)
        setValue(safeInputCopy)
        // console.log(e.target[0].value)
        e.target.reset()
    }

    const deleteList = (e, id) => {
        e.preventDefault()
        const safeInputCopy = [...value]
        safeInputCopy.splice(id, 1)
        setValue(safeInputCopy)
    }

    return (
        <>
            <form onSubmit={(e) => addList(e)}>
                <progress id="file" max="100" value="70">70 %</progress>
                <input />
                <button type='submit'>Ajouter</button>
            </form>
            <ul>
                {
                    [...value].map((elem, id) => {
                        console.log([...value])
                        return (
                            <li key={id}>
                                <input type="checkbox" key={id} />
                                <p>{elem}</p>
                                <button onClick={(e) => deleteList(e, id)}>❌</button>
                            </li>
                        )
                    }).reverse()
                }
            </ul>
        </>
    )
}