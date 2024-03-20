/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import { listContext } from "../App"
import { motion } from "framer-motion";


const FormAdd = () => {

    const {isActive,handleActive,list,setList,tambahList} = useContext(listContext) ;
    
    /* state untuk mengelola data yang akan ditambahkan ke list */
    const [newData,setNewData] = useState({nama:'',kategori:'',status:'uncomplete'}) ;
    const handleOnchange = (e) => {
        setNewData(prev => {
            return {...prev,[e.target.id]:e.target.value} 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault() ;

        if(newData.nama !== "" && newData.kategori !== ""){
            if(list.length > 0){
                let id = list.length - 1;
                id = parseInt(list[id].id) ;
                let idForNewList = id + 1 ;
                idForNewList = idForNewList.toString() ;
                tambahList({id:idForNewList,...newData}) ;
                setNewData({nama:'',kategori:'',status:'uncomplete'}) ;
                handleActive() ;
                alert('data berhasil ditambahkan ke dalam list') ;
            }else{
                tambahList({id:"1",...newData}) ;
                setNewData({nama:'',kategori:'',status:'uncomplete'}) ;
                handleActive() ;
                alert('data berhasil ditambahkan ke dalam list') ;
            }
        }else{
            alert('kedua input an tidak boleh kosong') ;
        }

    }
   

    return (
        
            <>
                {
                    isActive && (
                        <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center text-slate-800 dark:text-white z-[100] overflow-auto">
                        <motion.div
                        initial={{scale:0}}
                        animate={{scale:1}}
                        transition={{duration:0.1}} 
                        className="w-[95%] mx-auto sm:w-[450px] py-7 px-4 shadow-lg rounded-md border border-slate-700 relative overflow-auto duration-300 dark:bg-bgDarkAdd bg-whitecontainer">
                            <h1 className="dark:text-blue-500 text-blue-600 capitalize text-3xl font-bold mb-1">form tambah list</h1>
                            <p className="dark:text-slate-500 text-slate-800 font-medium mb-5">
                                masukan data list pada form dibawah
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="nama" className="block mb-2">nama pekerjaan</label>
                                    <input type="text" className="dark:text-white text-slate-800 w-full rounded bg-slate-300 dark:bg-slate-600 py-2.5 px-3 text-sm placeholder:text-slate-700 dark:placeholder:text-slate-400" placeholder="masukan pekerjaan anda..." id="nama" value={newData.nama} onChange={handleOnchange}></input>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nama" className="block mb-2">kategori pekerjaan</label>
                                    <select className="dark:text-slate-300 text-slate-800 w-full rounded  dark:bg-slate-600 bg-slate-300 py-2.5 px-3 text-sm" value={newData.kategori} id="kategori" onChange={handleOnchange}> 
                                        <option></option>
                                        <option className="">Pekerjaan Rumah</option>
                                        <option>Task Pribadi</option>
                                        <option>Hiburan</option>
                                        <option>makan & minum</option>
                                        <option>opsi lainnya</option>
                                    </select>
                                </div>
                                <button type="submit" className="text-white w-full rounded bg-slate-600 py-2.5 px-3 mt-1.5" id="myButton">tambah list</button>
                            </form>
                            <i className="fa-solid fa-x absolute top-2 right-2 w-[30px] h-[30px] bg-red-600 dark:bg-red-800 inline-flex justify-center items-center rounded-md cursor-pointer text-white dark:text-slate-900" onClick={handleActive}></i>
                        </motion.div>
                    </div>
                    ) 
                }
            </>
    )
}

export default FormAdd