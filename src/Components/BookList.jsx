import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/BookList.css'
// import ReadBook from "./ReadBook";

const BookList = () => {
  let [books, setbooks] = useState([])

  // let handleremove=(id,title)=>{
  //   setbooks(books.filter(e=>e.id!==id))
  //   alert(`${id}has been removed`)
  // }
  let navigate = useNavigate()
  let read = (id) => {
    navigate(`/admin/BookList/${id}`)
  }

  let handleremove = (id, title) => {
    fetch(`http://localhost:4001/books/${id}`, {
      method: 'DELETE'
    });
    alert(`${title} will be deleted permanentely`)
  }



  useEffect(() => {
    let fetchdata = async () => {
      let response = await fetch('http://localhost:4001/books')
      let data = await response.json();
      setbooks(data)
    }
    fetchdata()


  }, [])
  return (
    <div className="booklist">
      <h1>Book List</h1>
      <div className="books">
        {books.map(b => (
          <div className="head">
            <h1>Title:{b.title}</h1>
            <div className="body2">
              <div className="img">
                <img src={b.thumbnailUrl} alt="" />
              </div>
              <div className="body">
                <h4>Author:{b.authors.toString()}</h4>
                <h4>PageCount:{b.pageCount}</h4>
                <button onClick={() => read(b.id)}>Read more</button>
                <button onClick={() => handleremove(b.id, b.title)} >Delete</button>
              </div>
            </div>


          </div>

        ))}
      </div>


    </div>
  );
}

export default BookList;