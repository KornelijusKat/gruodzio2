import { useGlobalContext } from "../../context/context"
const Buttons = () =>{
    const [isLoading,page, nbPages, handlePage] = useGlobalContext()
    return(
        <div className="btn-container">
                <button disabled={isLoading} onClick={()=>{handlePage('dec')}}>Prev</button>
                
                <p>1 of 3</p>
                <button disabled={isLoading} onClick={()=>{handlePage('dec')}}>Next</button>
        </div>
       
    )
}
export default Buttons