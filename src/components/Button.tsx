import {useState} from "react";

export function Button(){
    const [ counter, setCounter ] = useState(0);

    function incrementa(){
        setCounter(counter + 1 )
        console.log(counter);
    }
    return (
        <button onClick={incrementa}>
            {counter}
        </button>
    )
}