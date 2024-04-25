import React, {useState} from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    onSave: PropTypes.func
};

function Input(props: typeof Input.propTypes) {

    const [wert,setItem] = useState("");
    const [items, setItems] = useState([] as string[])

    const doSave = () => {
        console.log(wert);
        const newItems =[...items, wert] // syncroner Aufruf
        setItems(newItems);  // Asynchron
        console.log(newItems);
       // props.onSave(items)
    }

    return (
        <div>
            <div className="form-group">
            <label className="form-label" htmlFor="input">Input</label>
            <input className="form-control" id="input" type={"text"} onChange={(evt)=> {
                setItem(evt.target.value);
            }} />
            <input className="form-control" type={"text"} value={wert}/>
                <button onClick={()=>{
                    console.log("klicked");
                    doSave();
                }}>Store</button>

            </div>
            <ul>
                {items.map((value,index)=>
                <li key={index}>{value}</li>)}
            </ul>
        </div>
    );
}

export default Input;