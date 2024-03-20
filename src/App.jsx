/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import InfoTask from "./components/InfoTask"
import Header from "./components/header"
import ListContainer from "./components/ListContainer"
import { useEffect, useState } from "react"
import ButtonAdd from "./components/ButtonAdd"
import FormAdd from "./components/formAdd"
import Overlay from "./components/overlay"
import { createContext } from "react"
import Overlay2 from "./components/overlay2"


export const listContext = createContext() ;

const App = () => {

    {/* state untuk mengelola list */}
    const [list,setList] = useState([]) ;

    {/* mengambil data dari api */}
    useEffect(() => {
      const response = localStorage.getItem('list') ;
      if(response){
        setList(JSON.parse(response))
      }
    },[])

    /* function untuk menambah data pada list */
    const tambahList = (newData) => {
      setList(prev => {
        let newPrev = [...prev,newData] ;
        localStorage.setItem('list',JSON.stringify(newPrev)) ;
      return newPrev ;
      }) ; 
    }

    /* function untuk mengedit data pada list */
    const editList = (newData) => {
      let index ;
      list.forEach((e,i) => {
        if(e.id == newData.id){
          index = i ;
        }
      })
      setList(prev => {
        let newPrev = [...prev] ;
        newPrev[index] = newData ;
        localStorage.setItem('list',JSON.stringify(newPrev)) ;
        return newPrev ;
      })
    }

    /* function hapus data */
    const hapusData = (id) => {
      setList(prev => {
        let newPrev = [...prev] ;
        newPrev = newPrev.filter(e => e.id !== id) ;
        localStorage.setItem('list',JSON.stringify(newPrev)) ;
      return newPrev ;
      })
    }

    {/* state untuk mengelola keactivan component form tambah */}
    const [isActive,setIsActive] = useState(false) ;
    const handleActive = () => {setIsActive(!isActive)} ;

    /* state untuk mengelola keactivan component overlay2 */
    const [activeOverlay2,setActiveOverlay2] = useState(false) ;
    const handleActiveOverlay2 = () => {
      setActiveOverlay2(!activeOverlay2) ;
    }

    /* state untuk mengelola dark mode dan light mode */
    const [theme,setTheme] = useState(
      localStorage.getItem('theme') ?
        localStorage.getItem('theme') :
        'dark'
    )

    const element = document.documentElement ;
    useEffect(() => {
      if(theme === 'dark'){
        localStorage.setItem('theme','dark') ;
        element.classList.remove('bg-slate-100')
        element.classList.add('dark','bg-bgBody') ;
      }else{
        localStorage.setItem('theme','light') ;
        element.classList.remove('dark','bg-bgBody') ;
        element.classList.add('bg-slate-100') ;
      }
    },[theme])


    return (
      <div className="w-full h-full">
        <div className="max-w-[1024px] mx-auto px-5 lg:px-0 mb-[50px]">
          <listContext.Provider value={{isActive,handleActive,list,tambahList,activeOverlay2,handleActiveOverlay2,editList,hapusData,theme,setTheme}}>
            <Header />
            <InfoTask />
            <ListContainer list={list}/>
            <ButtonAdd />
            <FormAdd />
            <Overlay />
            <Overlay2 />
          </listContext.Provider>
        </div>
      </div>
    )
}

export default App 