import { Button } from './Button';

export const SeeName = ({ name, setName }) => {

    return (

        name.map((pers, id) => (
            <div key={id}>
                <h1>{pers}</h1>
                <Button name={name} setName={setName} id={id}/>
            </div>
        ))
    );
}
