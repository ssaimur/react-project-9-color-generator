import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#dd00ff').all(10));
  


  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors) 
    } catch (error) {
      setError(true);   
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name="color" value={color}
          onChange={(e) => setColor(e.target.value)} 
          placeholder='#dd00ff'
          className={`${error? 'error': null}`} />
          <button type="submit" className='btn'>generate</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return (
            <SingleColor key={index} {...item} index={index} hexColor={item.hex} />
          )
        })}
      </section>
    </>
  );
}

export default App
