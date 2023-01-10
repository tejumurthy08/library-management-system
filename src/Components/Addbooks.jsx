import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBooks = () => {
    // title,catagories,authors,pageCount,shortDescription,longDecription,thumbnileUrl
    let [title,settitle]=useState([])
    let [catagories,setcatagories]=useState([])
    let [authors,setauthors]=useState([])
    let [pageCount,setpagecount]=useState([])
    let [shortDescription,setshordescription]=useState([])
    let [longDescription,setlongdescription]=useState([])
    let [thumbnileUrl,setthumbnail]=useState([])

    let navigate=useNavigate()

    let handelsubmit=(e)=>{
        e.preventDefault();
        let bookData={title,catagories,authors,pageCount,shortDescription,longDescription,thumbnileUrl}

        //post to server
        fetch('http://localhost:4001/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert(`book added Sucessfully`)
        navigate('admim/BookList')

    }
    return ( 
        <div className="addbooks">
            <h1>Add a Book</h1>
            <div className="form">
                <form action=""onSubmit={handelsubmit} >
                    <div className="tiele">
                        <input value={title} onChange={(e)=>settitle(e.target.value)} type="text"placeholder="title of the book" />
                    </div>
                    <div className="authors">
                    <input value={authors} onChange={(e)=>setauthors(e.target.value)} type="text"placeholder="authours of the book" />
                    </div>
                    <div className="catagories">
                    <input value={catagories} onChange={(e)=>setcatagories(e.target.value)} type="text"placeholder="catagories of the book" />
                    </div>
                    <div className="pagecount">
                    <input value={pageCount} onChange={(e)=>setpagecount(e.target.value)} type="number"placeholder="pagecount of the book" />
                    </div>
                    <div className="shortdescription">
                    <textarea value={shortDescription} onChange={(e)=>setshordescription(e.target.value)} className="form-control" placeholder="shortdescription" cols="50" rows="10"></textarea>
                    </div>
                    <div className="longdescription">
                    <textarea value={longDescription} onChange={(e)=>setlongdescription(e.target.value)} className="form-control" placeholder="longdescription" cols="50" rows="10"></textarea>
                    </div>
                    <div className="thumbnileurl">
                    <input value={thumbnileUrl} onChange={(e)=>setthumbnail(e.target.value)} type="text"placeholder="img of the book" />
                    </div>
                    <button className="btn" >Add Book</button>
                </form>
            </div>

        </div>
     );
}
 
export default AddBooks;