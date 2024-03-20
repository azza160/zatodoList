/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { listContext } from "../App"
import Card from "./card"
import { data } from "autoprefixer"
import ImgEmpty from "./imgEmpty"


const CardContainer = ({opsi}) => {

    const {list} = useContext(listContext) 
        let cards ;
        if(opsi === 'all'){
            cards = list.map((e,i) => {
                return (<Card key={i} nama={e.nama} status={e.status} kategori={e.kategori} id={e.id}/>)
            })
        }
        else if(opsi === 'complete'){
            let dataList = list.filter(e => e.status === 'complete') ;
            if(dataList.length > 0){              
                cards = list.map((e,i) => {
                    if(e.status === 'complete'){
                        return (<Card key={i} nama={e.nama} status={e.status} kategori={e.kategori} id={e.id}/>)
                    }
                })
            }else{
               return (<ImgEmpty>list complete is empty</ImgEmpty>)
            }
        }
        else{
            let dataList = list.filter(e => e.status === 'uncomplete') ;
            if(dataList.length > 0){              
                cards = list.map((e,i) => {
                    if(e.status === 'uncomplete'){
                        return (<Card key={i} nama={e.nama} status={e.status} kategori={e.kategori} id={e.id}/>)
                    }
                })   
            }else{
                return (<ImgEmpty>list uncomplete is empty</ImgEmpty>)
            }
        
        }


    return (
        <div className="w-full flex flex-wrap gap-2 gap-y-5 mt-[30px] justify-center">
            {cards}
        </div>
    )
}

export default CardContainer