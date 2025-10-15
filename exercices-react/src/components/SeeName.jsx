export const SeeName = ({ name, setName }) => {

    return (

        name.map((pers, id) => (
            <div key={id}>
                <h1>{pers}</h1>
                <button onClick={() => setName(name.filter((_, index) => index !== id))}>x</button>
            </div>
        ))
    );
}
