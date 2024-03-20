import { CiViewList } from "react-icons/ci";
import { BsListCheck } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import { useContext } from "react";
import { listContext } from "../App";
import { countListComplete, countListUnComplete } from "../function/function";



const InfoTask = () => {

    const {list} = useContext(listContext) ;

    return(
        <div className="mt-[70px] flex items-center gap-5 flex-wrap justify-center">
            <div className="py-4 bg-gradient-to-r from-blue-800 to-teal-800 w-full xsm:w-[300px] text-slate-300 rounded-md px-5 flex items-center gap-5 duration-300 hover:scale-105 cursor-pointer">
                <div>
                    <CiViewList className="text-6xl"/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">All list</h1>
                    <p className="font-semibold text-lg text-slate-400">{list.length} task</p>
                </div>
            </div>

            <div className="py-4 bg-gradient-to-r from-blue-800 to-teal-800 w-full xsm:w-[300px] text-slate-300  rounded-md px-5 flex items-center gap-5 duration-300 hover:scale-105 cursor-pointer">
                <div>
                    <BsListCheck className="text-6xl"/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">List complete</h1>
                    <p className="font-semibold text-lg text-slate-400">{countListComplete(list)} task</p>
                        
                </div>             
            </div>


            <div className="py-4 bg-gradient-to-r from-blue-800 to-teal-800 w-full xsm:w-[300px] text-slate-300 rounded-md px-5 flex items-center gap-5 duration-300 hover:scale-105 cursor-pointer">
                <div>
                    <GoListUnordered className="text-6xl"/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">List uncomplete</h1>
                    <p className="font-semibold text-lg text-slate-400">{countListUnComplete(list)} task</p>
                </div>             
            </div>
        </div>
    )
}

export default InfoTask