import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccordionItem = ({ heading, body, showBody, handleDropdownClick, index }) => {

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

      {showBody && (
        <div className="w-full bg-white px-4 py-3 text-gray-700">
          {body}
        </div>
      )}
    </div>

  )
}

export default AccordionItem