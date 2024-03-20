import { useContext } from "react"
import { listContext } from "../App"

const Overlay2 = () => {

    const {activeOverlay2} = useContext(listContext) ;

     return (
        <>
            {
                activeOverlay2 && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90"></div>
            }
        </>
     )
 
}

export default Overlay2