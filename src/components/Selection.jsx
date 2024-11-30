import React,{useState} from "react";
import DropDown from "./DropDown"
const Selection = () => {
    const [isOpen,SetIsOpen] = useState(false);
    const [isSelectedOption,SetisSelectedOption] = useState("name")
    const toggleDropdown = () => {
        SetIsOpen(!isOpen)
    }

    return (
        <div className="border border-gray-400 align-center mx-9">
        <div className="flex justify-around">
            <div className="flex m-2">
                <label className="text-gray-400">select city</label>
                <input className="border border-gray-300 rounded mx-2 " type="text" placeholder="Indore,M.P" />
                <button className="text-white bg-blue-700 rounded p-1">Find Company</button>
            </div>
            <div className="flex justify-between align-center m-2">
                <button className="text-white bg-blue-700 rounded p-1" > + Add Company</button>
               <button onClick={toggleDropdown} className="text-white bg-blue-700 rounded p-1 mx-2" > {isSelectedOption}{isOpen && <DropDown />}</button>
            </div>
        </div>
        </div>
    )
}
export default Selection;