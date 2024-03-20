/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { listContext } from "../App";


const SettingCard = ({id,handleActiveCard}) => {
    
    const {handleActiveOverlay2,list,editList,hapusData} = useContext(listContext) ;
    let showData = list.filter(e => e.id === id)[0] ;
    
    /* state untuk mengelola ke activan component hapus dan edit */
    const [active,setIsActive] = useState({stat:false,page:''}) ;
    const handleActive = (e) => {
        setIsActive({...active,stat:!active.stat,page:e.target.id})
    } 
    
    /* state untuk mengelola data yang akan diubah */
    const [editDataValue,setEditDataValue] = useState({...showData}) ;
    const handleChange = (e) => {
        setEditDataValue({...editDataValue,[e.target.id]:e.target.value})
    }
    const handleReset = () => {
        setEditDataValue({...showData}) ;
    }
    const handleSubmit = (e) => {
        e.preventDefault() ;
        if(editDataValue.nama !== "" && editDataValue.kategori !== "" && editDataValue.status !== ""){
            editList(editDataValue) ;
            handleReset() ;
            setIsActive({...active,stat:false,page:''}) ;
            handleActiveCard() ;
            handleActiveOverlay2() ;
            alert('data berhasil diubah') ;
        }
    }
    
    /* function untuk menghapus data */
    const deleteData = () => {
        hapusData(id) ;
        setIsActive({...active,stat:false,page:''}) ;
        handleActiveCard() ;
        handleActiveOverlay2() ;
        alert('data berhasil dihapus') ;        
    }

    return(
            <>
                <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center text-white z-[100] overflow-auto">
                    <motion.div
                    initial={{scale:0}}
                    animate={{scale:1}}
                    transition={{duration:0.1}} 
                    className="w-[95%] mx-auto sm:w-[450px] py-7 px-4 shadow-lg rounded-md border border-slate-700 relative overflow-auto duration-300 dark:bg-[#151b24] bg-whitecontainer " id="formAdd">
                        {
                            !active.stat ? (
                                <>
                                    <i className="fa-solid fa-x absolute top-2 right-2 w-[30px] h-[30px] bg-red-600 dark:bg-red-800 inline-flex justify-center items-center rounded-md cursor-pointer hover:scale-110 active:scale-105 duration-200" onClick={() => {
                                        handleActiveCard() ;
                                        handleActiveOverlay2() ;
                                    }}></i>
                                    <h2 className="text-blue-500 capitalize text-4xl font-bold mb-3 mt-7">list name</h2>
                                    <p id="name-list" className="text-xl mb-5 dark:text-slate-200 text-slate-800">"{editDataValue.nama}"</p>
                                    <div className="border-t-[1.5px] border-slate-700 pt-5 flex justify-center items-center gap-3">
                                        <i className="fa-solid fa-pencil bg-blue-400 dark:bg-blue-500 w-[50px] h-[50px] inline-flex justify-center items-center rounded text-2xl cursor-pointer dark:text-slate-200 text-slate-800" id="edit" onClick={handleActive}></i>
                                        <i className="fa-solid fa-trash bg-blue-400 dark:bg-blue-500 w-[50px] h-[50px] inline-flex justify-center items-center rounded text-2xl cursor-pointer dark:text-slate-200 text-slate-800" id="hapus" onClick={handleActive}></i>
                                    </div>
                                </>
                            ) :
                            active.page == 'edit' ? (
                                <>
                                    <i className="fa-solid fa-arrow-left absolute top-2 right-2 w-[30px] h-[30px] bg-red-600 dark:bg-red-800 inline-flex justify-center items-center rounded-md cursor-pointer hover:scale-110 active:scale-105 duration-200" onClick={() => {
                                        setIsActive({...active,stat:false,page:''}) ;
                                        handleReset() ;
                                    }}></i>
                                    <h2 className="text-blue-500 capitalize text-2xl font-bold mb-1 mt-7">Edit data list</h2>
                                    <p className="dark:text-slate-500 text-slate-800 font-medium mb-5">
                                        edit data list pada form dibawah
                                    </p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="nama" className="block mb-2 text-sm text-slate-800 dark:text-slate-200">nama pekerjaan</label>
                                            <input type="text" className="dark:text-white text-slate-800  w-full rounded bg-slate-300 dark:bg-slate-600 py-2.5 px-3 text-sm" placeholder="masukan pekerjaan anda..." id="nama" value={editDataValue.nama} onChange={handleChange}></input>
                                        </div>
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="nama" className="block text-sm text-slate-800 dark:text-slate-200">kategori pekerjaan</label>
                                                <span className="text-sm text-slate-800 dark:text-slate-200">kategori : <span id="name-list">"{editDataValue.kategori}"</span></span>
                                            </div>
                                            <select className="text-slate-800 dark:text-slate-300 w-full rounded bg-slate-300  dark:bg-slate-600 py-2.5 px-3 text-sm" value={editDataValue.kategori} id="kategori" onChange={handleChange}> 
                                                <option></option>
                                                <option className="">Pekerjaan Rumah</option>
                                                <option>Task Pribadi</option>
                                                <option>Hiburan</option>
                                                <option>makan & minum</option>
                                                <option>opsi lainnya</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <label htmlFor="nama" className="block text-sm text-slate-800 dark:text-slate-200">status pekerjaan</label>
                                                <span className="text-sm text-slate-800 dark:text-slate-300">status : <span id="name-list">"{editDataValue.status}"</span></span>
                                            </div>
                                            <select className="dark:text-slate-300 text-slate-800 w-full rounded  bg-slate-300  dark:bg-slate-600 py-2.5 px-3 text-sm" value={editDataValue.status} id="status" onChange={handleChange}> 
                                                <option></option>
                                                <option className="">complete</option>
                                                <option>uncomplete</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="text-white w-full rounded bg-slate-600 py-2.5 px-3 mt-1.5" id="myButton">edit list</button>
                                    </form>
                                </>
                            ) :
                            (   
                                <>
                                    <i className="fa-solid fa-arrow-left absolute top-2 right-2 w-[30px] h-[30px] bg-red-800 inline-flex justify-center items-center rounded-md cursor-pointer hover:scale-110 active:scale-105 duration-200" onClick={() => {
                                        setIsActive({...active,stat:false,page:''}) ;
                                        handleReset() ;
                                    }}></i>
                                    <h2 className="text-blue-500 capitalize text-2xl font-bold mb-1 mt-7">Menghapus data list</h2>
                                    <p className="dark:text-slate-500 text-slate-800 font-medium mb-5">
                                        apakah anda yakin untuk menghapus list ini?
                                    </p>
                                    <div className="border-t-[1.5px] border-slate-700 pt-5 flex justify-center items-center gap-3">
                                        <button className="bg-red-800 text-slate-50 w-[100px] text-center py-2 rounded hover:scale-110 active:scale-105 duration-200" onClick={deleteData}>hapus</button>
                                        <button className="text-slate-50 w-[100px] text-center py-2 rounded hover:scale-110 active:scale-105 duration-200" id="myButton" onClick={() => {
                                            setIsActive({...active,stat:false,page:''}) ;
                                        }}>batal</button>
                                    </div>
                                </>
                            )
                        }
                    </motion.div>
                </div>                   
            </>

    )
}

export default SettingCard