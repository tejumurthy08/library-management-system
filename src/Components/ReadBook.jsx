
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {
    let [books,setbooks]=useState([])
    let params=useParams()
    useEffect(()=>{
        let fetchdata=  async() =>{
            let response= await fetch(`http://localhost:4001/books/${params.id}`)
            let data= await response.json();
            setbooks(data)

        }
        fetchdata()
    },[])
    return ( 
        <div className="redbook">
            <h1>{books.title}</h1>
            <p>{books.shaotDescription}</p>

        </div>
     );
}
 
export default ReadBook;