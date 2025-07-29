import { useState } from 'react'
import { accordionData } from '../../data/accordian'
import AccordionItem from './AccordionItem'

const Accordion = () => {
  const [showBody, setShowBody] = useState(Array.from({length: accordionData.length}).map(ele => false));  // can just give it the index value instead of an array, but that means at max only one accordian can stay open

  const handleDropdownClick = (position) => {
    const closeOthers = !showBody[position];
    setShowBody(showBody.map((isOpen,index) => {
      if(index===position) return !isOpen;
      if(closeOthers) return false;
      return isOpen;
    })) 
  }

  return (
    <div className='w-[50%] m-auto mt-5'>
      {
        accordionData.map((accordian, index) => (
          <AccordionItem heading={accordian.heading} body={accordian.body} key={index} index={index} showBody={showBody[index]} handleDropdownClick={handleDropdownClick}/>
        ))
      }
    </div>
  )
}

export default Accordion