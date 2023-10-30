import { Outlet } from "react-router-dom";
import{useState} from "react";
export function BooksLayout(){
    const booksArray=[
        {id:1, title:"Harry Potter",pages:365},
        {id:2, title:"Кобзар",pages:256},
        {id:3, title:"ASP.NET C#",pages:568},
    ];
    const [books,setBooks]= useState(booksArray);

    //books/....
    return (
        <>
        <Outlet context={[books,setBooks]}/>
        </>
    )
}