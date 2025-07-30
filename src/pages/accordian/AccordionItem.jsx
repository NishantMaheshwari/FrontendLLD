import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useRef } from "react";

const AccordionItem = ({ heading, body, showBody, handleDropdownClick, index }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-300">
      <div
        className="w-full bg-gray-100 flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-200"
        onClick={() => handleDropdownClick(index)}
      >
        <h3 className="font-semibold text-gray-800">{heading}</h3>
        <div className="text-gray-600">
          {showBody ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>
      </div>

      <div
        ref={contentRef}
        className="w-full bg-white px-4 box-border text-gray-700"
        style={{
          transition: "height 0.3s ease",
          overflow: "hidden",
          height: showBody ? contentRef.current.scrollHeight + "px" : "0px"
        }}
      >
        <div className="py-3">
          {body}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem