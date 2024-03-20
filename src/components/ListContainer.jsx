/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { listContext } from '../App'
import CardContainer from './cardContainer';
import ImgEmpty from './imgEmpty';



const ListContainer = () => {

    const {list} = useContext(listContext) ;
    /* state untuk mengeola list yang akan tampil */
    const [opsi,setOpsi] = useState('all') ;
    const handleChange = (e) => {
        setOpsi(e.target.value) ;
    }

    return (
        <div>
            {
                list.length > 0 ? 
                    (
                        <div className='w-full mt-[70px]'>
                            <div className='flex justify-between items-center'>
                                <h2 className='dark:text-slate-200 text-slate-800 font-semibold text-3xl'>Our list</h2>
                                <select className='dark:bg-slate-300 bg-whitecontainer text-slate-800 py-3 px-5 font-semibold text-lg rounded-md' value={opsi} onChange={handleChange}>
                                    <option>all</option>
                                    <option>complete</option>
                                    <option>uncomplete</option>
                                </select>
                            </div>
                            <CardContainer opsi={opsi}/>
                        </div>
                    ) :
                    (
                        <ImgEmpty>list is empty</ImgEmpty>
                    )
            }
        </div>
    )
}

export default ListContainer