


export const getKategori = (kategori) => {

    let icon ;

    if(kategori == 'Pekerjaan Rumah'){
        icon = (<i className="fa-solid fa-house text-4xl  dark:text-white text-slate-800 py-2 px-2 rounded-md hover:scale-110 active:scale-105 duration-200"></i>) ;   
    }
    else if(kategori == 'makan & minum'){
        icon = (<i className="fa-solid fa-bowl-food text-4xl  dark:text-white text-slate-800 py-2 px-2 rounded-md hover:scale-110 active:scale-105 duration-200"></i>) ; 
    }
    else if(kategori == 'Task Pribadi'){
        icon = (<i className="fa-solid fa-user text-4xl  dark:text-white text-slate-800 py-2 px-2 rounded-md hover:scale-110 active:scale-105 duration-200"></i>) ; 
    }
    else if(kategori == 'Hiburan'){
        icon = (<i className="fa-solid fa-gamepad text-4xl  dark:text-white text-slate-800 py-2 px-2 rounded-md hover:scale-110 active:scale-105 duration-200"></i>) ; 
    }
    else if(kategori == 'opsi lainnya'){
        icon = (<i className="fa-solid fa-rectangle-list text-4xl  dark:text-white text-slate-800 py-2 px-2 rounded-md hover:scale-110 active:scale-105 duration-200"></i>) ; 
    }

    return icon ;
}

export const countListComplete = (list) => {
        let jumlah  = 0;
        list.forEach(e => {
            if(e.status === 'complete'){
                jumlah += 1 ;
            }
        });
    return jumlah ;    
}

export const countListUnComplete = (list) => {
    let jumlah  = 0;
    list.forEach(e => {
        if(e.status === 'uncomplete'){
            jumlah += 1 ;
        }
    });
return jumlah ;    
}

