import { useContext } from 'react'
import {FaMoon,FaSun} from 'react-icons/fa'
import { listContext } from '../App'

const Header = () => {

    const {theme,setTheme} = useContext(listContext) ;

    return (
        <div className="flex items-center justify-between py-7 dark:text-slate-300 text-slate-900">
            <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-sky-600 to-teal-600 text-transparent bg-clip-text">Zaalist.</span>
            </h1>
            {
                theme === 'dark' ? 
                    (
                        <div className='w-[40px] h-[40px] rounded-full inline-flex justify-center items-center bg-whitecontainer dark:bg-[#1A2A37] shadow cursor-pointer hover:scale-125 duration-300 active:scale-105' onClick={() => {setTheme('light')}}>
                            <FaSun />
                        </div>
                    ) :
                    (
                        <div className='w-[40px] h-[40px] rounded-full inline-flex justify-center items-center bg-whitecontainer dark:bg-[#1A2A37] shadow cursor-pointer hover:scale-125 duration-300 active:scale-105' onClick={() => {setTheme('dark')}}>
                            <FaMoon />
                        </div>
                    )
            }

        </div>
    )
}

export default Header