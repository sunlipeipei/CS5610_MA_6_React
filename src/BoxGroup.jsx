import Box from './Box'
import './BoxGroup.css'
import { useState } from 'react';

export default function BoxGroup() {

    let initialSelectState = [false, false, false, false];

    const [isSelectedState, setIsSelectedState] = useState(initialSelectState);
    const [count, setCount] = useState(0);
    

    
    function setIsSelected(index) {
        setIsSelectedState((prevValue)=>{
            const updatedSelection = [...prevValue];
            updatedSelection[index] = !prevValue[index];
            const newCount = updatedSelection.filter(Boolean).length;
            setCount(newCount);
            return updatedSelection;
        });
    }

    return (
        <div className='container'>
            <h1>Counter: {count}</h1>
            <div className='boxGroup'>
                {isSelectedState.map((selected, index)=> (
                    <Box 
                    key={index}
                    select={selected}
                    onClick={()=> setIsSelected(index)}/>
                ))}
            </div>
        </div>
    )
}