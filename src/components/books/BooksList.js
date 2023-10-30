import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./BooksList.css";
export function BooksList() {
    const [books, setBooks] = useOutletContext();
    const navigate = useNavigate();

    console.log(books);
    const removeBookById = (id) => {
        // const newBooks=books.filter(book=>book.id!==id);
        // setBooks(newBooks);
        // setBooks((books) => {
        //     return books.filter(book => book.id !== id)
        // })

        setBooks(books => books.filter(book => book.id !== id));
    }

    return (
        <>
            <br></br>
            <div className="container-newbook"> <Link to={`/books/newbook`}>Add new book</Link></div>
            <br></br>
            <hr></hr>
            <div className="Books">
                <table className="BooksTable">
                    <thead>
                        <tr>
                            <th>Titles</th>
                            <th>Pages</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((b) => (
                            <tr key={b.id}>
                                <td><Link to={`/books/${b.id}`}>{b.title}</Link></td>
                                <td>{b.pages}</td>
                                <td><button onClick={() => removeBookById(b.id)}>Delete</button>  </td>
                                <td><button onClick={() => navigate(`edit/${b.id}`)}>Edit</button>  </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}