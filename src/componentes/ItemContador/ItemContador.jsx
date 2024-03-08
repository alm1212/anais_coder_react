import { useState } from "react";

// const ItemContador = (props) =>{
const ItemContador = ({initial=1, stock}) =>{

    const [count,  setCount] = useState(initial);

    const increment = () =>{
        console.log("increment");
        if (count < stock) {
            setCount( count => count + 1);
        }
    }

    const decrement = () =>{
        console.log("decrement");
        if (count > 1) {
            setCount( count => count - 1);
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement} style={{borderRadius: "10px"}}>Decrement</button>
            <button onClick={increment} style={{borderRadius: "10px", margin:"5px"}}>Increment</button>
        </div>
    )
}

export default ItemContador;