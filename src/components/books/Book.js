import { useParams,useOutletContext } from "react-router-dom";

export function Book() {
    const { id } = useParams();
    const [books, setBooks] = useOutletContext();
    console.log(books);
    const book = books.find(b => b.id === parseInt(id));
    console.log(book);
    if (book === undefined) {
        return(
            <p> Not find book by id={id}</p>
        )
    } else {

        return (
            <div className="card-book">
                <h4>Title: {book.title}</h4>
                <p> Count pages: {book.pages}</p>

            </div>
        );
    }
}