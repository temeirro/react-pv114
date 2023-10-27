import { Outlet } from "react-router-dom";

export function BooksLayout(){
    const books=[
        {id:1, title:"Harry Potter",pages:365},
        {id:2, title:"Кобзар",pages:256},
        {id:3, title:"ASP.NET C#",pages:568},
    ];
    //books/....
    return (
        <>
        <Outlet context={books}/>
        </>
    )
}