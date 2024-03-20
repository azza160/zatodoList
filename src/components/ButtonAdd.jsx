import '../index.css'
import { useContext } from "react"
import { listContext } from "../App"

const ButtonAdd = () => {

    const {handleActive} = useContext(listContext) ;

    return (
        <i className='fa-solid fa-add text-white text-2xl font-semibold fixed bottom-[5%] right-5 w-[50px] h-[50px] inline-flex justify-center items-center rounded-md shadow-2xl duration-300 active:scale-105 hover:scale-110 cursor-pointer' id='addButton' onClick={handleActive}></i>
    )
}

export default ButtonAdd