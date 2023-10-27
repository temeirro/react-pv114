import { Link, useOutletContext } from "react-router-dom";

export function BooksList() {
    const books = useOutletContext();
    console.log(books);

    return (
        <>
            <h2>Books List</h2>
            <ul>
                {
                    books.map((b) => (
                        <li key={b.id}>
                            {/* rendering:  <a href="/books/2"> </a> */}
                            <Link to={`/books/${b.id}`}> {b.title} ({b.pages}) </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}