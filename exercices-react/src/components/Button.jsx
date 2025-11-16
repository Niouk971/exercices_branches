export const Button = ({ name, setName, id }) => {
    
    return (
        
        <button onClick={() => setName(name.filter((_, index) => index !== id))}>x</button>

    );

}