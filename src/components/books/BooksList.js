import { Link, useOutletContext } from "react-router-dom";
import "./BooksList.css";
export function BooksList() {
    const [books,setBooks] = useOutletContext();
    console.log(books);
    

    return (
        <>
            <br></br>
            <div className="container-newbook"> <Link to ={`/books/newbook`}>Add new book</Link></div>
            <br></br>
            <hr></hr>
            <div className="Books">
            <table className="BooksTable">
                    <thead>
                        <tr>
                            <th>Titles</th>
                            <th>Pages</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((b) => (
                            <tr>
                                <td><Link to={`/books/${b.id}`}>{b.title}</Link></td>
                                <td>{b.pages}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>       </>
    );
}