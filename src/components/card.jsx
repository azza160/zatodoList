/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useContext, useState } from "react";
import { getKategori } from "../function/function";
import SettingCard from "./settingCard";
import { listContext } from "../App";



const Card = ({nama,kategori,status,id}) => {

    let icon = getKategori(kategori) ;
    
    /* state untuk mengelola ke activan component settingcard */
    const [activeCard,setActiveCard] = useState(false) ;
    const handleActiveCard = () => {
        setActiveCard(!activeCard) ;
    }

    /* state untuk mengelola kectivan overlay 2 */
    const {handleActiveOverlay2} = useContext(listContext) ;
   
    return (
        <>
            <div className="py-4 w-full sm:w-[290px] md:w-[360px] lg:w-[500px] xl:w-[48%] shadow rounded px-5 flex items-center dark:text-slate-300 text-slate-800 gap-4 relative dark:bg-[#151b24] bg-whitecontainer">
                {icon}
                <div className="flex justify-between items-center gap-3 w-full">
                    <p>{nama}</p>
                    <i className="fa-solid fa-gear bg-blue-500 text-white px-2 py-2 rounded cursor-pointer hover:scale-110 active:scale-105 duration-200" onClick={() => {
                        handleActiveCard() ;
                        handleActiveOverlay2() ;
                    }}></i>
                </div>
                {
                    status === 'complete' ? (
                        <span className="text-slate-200 absolute bg-green-600 text-center rounded-2xl -top-[11px] right-3 w-[100px]">complete</span>
                    ) :
                    (
                        <span className="absolute text-slate-200 bg-red-600 text-center rounded-2xl -top-[11px] right-3 w-[100px]">uncomplete</span>
                    )
                } 
            </div>
            {
                activeCard && (<SettingCard id={id} handleActiveCard={handleActiveCard}/>)
            }     
        </>
    )
}

export default Card