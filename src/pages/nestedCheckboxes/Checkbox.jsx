import React from 'react'

const Checkbox = ({ data, checkedData, setCheckedData, handleChange }) => {

  return (
    <div>
      {
        data.map((node) => (
          <div className='flex flex-col ml-5' key={node.id}>
            <label key={node.id} className='flex gap-1'>
              <input type="checkbox" checked={checkedData[node.id] || false} 
              onChange={(e) => handleChange(node.id,e.target.checked)}/>
              {node.label}
            </label>
            {
              node.children && node.children.length > 0 &&
              <Checkbox data={node.children} checkedData={checkedData} setCheckedData={setCheckedData} handleChange={handleChange} />
            }
          </div>
        ))
      }
    </div>
  )
}

export default Checkbox