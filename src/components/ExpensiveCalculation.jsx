import React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

const ExpensiveCalculation = () => {
    const [value1,setvalue1]=useState(0)
    const [value2,setvalue2]=useState(0)
    const expensivevalue=useMemo(()=>{
        console.log('performing')
        let result=0;
        for(let i=0;i<10000000;i++){
            result+=value1*value2
        }
        return result;
    },[value1,value2]);//dependances
    return (
        <div>
            <h2>calcul</h2>
            <div>
                <label>value1:</label>
                <input type='number' value={value1} onChange={e=>setvalue1(parseInt(e.target.value))} ></input>
            </div>
            <div>
                <label>value2:</label>
                <input type='number' value={value2} onChange={e=>setvalue2(parseInt(e.target.value))} ></input>
            </div>
            <div>
                Result:{expensivevalue}
            </div>
        </div>
    );
}

export default ExpensiveCalculation;
