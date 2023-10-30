import { useRef } from "react";
import { useOutletContext } from "react-router-dom";

export function NewBook() {
    const books = useOutletContext();
    console.log(books);
    let newBook={
        id:4,
        title:"",
        pages:0
    }
    //How to handle forms

    //====1. Using onChange event==
    const titleChange=(event)=>{
        console.log(event.target.value);
        newBook.title=event.target.value;
    }
    const pagesChange=(event)=>{
        console.log(event.target.value);
        newBook.pages=event.target.value;
    }
    //===2. ref binding to input
    let titleRef=useRef();
    let pagesRef=useRef();
    //for two variant
    const submit=(event)=>{
        event.preventDefault();
         //read ref data
        newBook.title=titleRef.current.value;
        newBook.pages=pagesRef.current.value;
        console.log(newBook);
     };
    
    return (
        <>
            <div className="form-newbook">
                <form>
                    <div className="container-input">
                        <label> Title:  </label>
                        {/* <input type="text" name="title" onChange={titleChange} required /> */}
                        <input ref={titleRef} type="text" name="title" onChange={titleChange} required />
                    </div>
                    <div className="container-input">
                        <label> Pages:  </label>
                        {/* <input type="number" name="pages" onChange={pagesChange} required /> */}
                        <input ref={pagesRef} type="number" name="pages" onChange={pagesChange} required />
                    </div>
                    <div className="containar-button">
                        <input type="submit" onClick={submit} value="Add Book"/>
                        {/* <input type="submit"  value="Add Book"/> */}
                    </div>
                </form>
            </div>
        </>
    )
}
