import React, {useState, useCallback} from 'react'
import List from './list.js'

export default function App(){
  const [number, setNumber] = useState(1)
  const [dark, setDark]=useState(false)

  const getItems = () =>{
    return [number, number+1, number+2]
  }

  /*
  const getItems = useCallback(() =>{
    return [number, number+1, number+2]
  }, [number])
*/
  const theme={
    backgroundColor: dark? '#A14FF0':'#7D3C98',
    color: dark? '#3E8E41':'#F2A900'
  }

  return (
    <div style={theme}>
  <input 
  type="number"
  value={number}
  onChange={e=>setNumber(parseInt(e.target.value))}
  />
  <button onClick={()=> setDark(prevDark=>!prevDark)}>
Render
  </button>
  <List getItems={getItems}/>
  </div>
  )
}