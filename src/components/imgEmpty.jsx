/* eslint-disable react/prop-types */
import logo from '../assets/logo.svg'

const ImgEmpty = ({children}) => {
    return (
        <div className='flex justify-center mx-auto mt-[70px] flex-col items-center gap-1 px-5 xsm:px-0'>
            <img src={logo} className='xsm:max-w-[450px]'></img>
            <h1 className='text-slate-400 text-2xl font-bold'>{children}</h1>
        </div>
    )
}

export default ImgEmpty 