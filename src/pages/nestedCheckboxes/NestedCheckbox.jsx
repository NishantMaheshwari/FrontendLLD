import React, { useState } from 'react'
import data from '../../data/checkbox';
import Checkbox from './Checkbox';
import { TbRuler } from 'react-icons/tb';

const NestedCheckbox = () => {
  const [checkedData, setCheckedData] = useState({});

  function traverse(root, targetId, isChecked, newCheckedData, isDescendant) {
    if (root.id === targetId || isDescendant) {
      newCheckedData[root.id] = isChecked;
    }
    if (root.children && root.children.length > 0) {
      root.children.forEach((child) => {
        traverse(child, targetId, isChecked, newCheckedData, root.id === targetId || isDescendant);
      })
    }
    if (root.children && root.children.length > 0) {
      const allChildrenChecked = root.children.every((child) => newCheckedData[child.id])
      if (allChildrenChecked) newCheckedData[root.id] = true;
      else if (root.id != targetId) newCheckedData[root.id] = false;
    }
  }

  function handleChange(targetId, isChecked) {
    const newCheckedData = { ...checkedData };
    data.forEach((root) => {
      traverse(root, targetId, isChecked, newCheckedData, false);
    })
    setCheckedData(newCheckedData)
  }

  return (
    <div className='w-full flex mt-20 px-5'>
      <Checkbox data={data} checkedData={checkedData} setCheckedData={setCheckedData} handleChange={handleChange} />
    </div>
  )
}

export default NestedCheckbox