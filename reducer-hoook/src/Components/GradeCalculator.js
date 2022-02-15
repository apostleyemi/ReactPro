import React, {useReducer} from 'react'

const initialState='Enter a valid Score btween 100 and zero'

const reducer =(state, action)=>{
    

    if(action >69) 
    {        return state='A'
    }
     else if( action >=59 ) {
        return state='B'
    }
        
    else if( action >= 49) {
        return state='C'
    }
    else if( action >=0 ) {
        return state='F'
    }
    else{
        return initialState
    }



}


function GradeCalculator() {
    const [grade, dispatch] = useReducer(reducer,initialState)
   
    return (
      

        <div>
            <div> Grade -- : {grade}</div>
            <input type="number" onChange={(e)=>dispatch(e.target.value)} />
            
            <button onClick={()=>dispatch(80)}>80</button>
            <button onClick={()=>dispatch(65)}>65</button>
            <button onClick={()=>dispatch(55)}>55</button>
            
        </div>
    )
}

export default GradeCalculator
