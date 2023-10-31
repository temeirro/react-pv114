// import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

export function EditBook() {
    const { id } = useParams();
    const [books, setBooks] = useOutletContext();
    const book = books.find(b => b.id === parseInt(id));
    const navigate = useNavigate();
    console.log(books);
    const { register, handleSubmit } = useForm();
    const onSubmit = (updateBook) => {
        console.log(updateBook);
        updateBook.id=book.id;
        const updateBooks = books.map(book => {
            if (parseInt(updateBook.id) === book.id) return updateBook;
            return book;
        })

        setBooks(updateBooks);
        console.log(updateBooks);
        navigate('/books');
    };

    return (
        <>
            <div className="form-newbook">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-input">
                        {/* <label> Id:  </label> */}
                        {/* <input type="text" name="title" onChange={titleChange} required /> */}
                        {/* <input ref={titleRef} type="text" name="title" required /> */}
                        <input {...register("id")} type="number" name="id" value={book.id}  disabled   />
                    </div>
                    <div className="container-input">
                        <label> Title:  </label>
                        {/* <input type="text" name="title" onChange={titleChange} required /> */}
                        {/* <input ref={titleRef} type="text" name="title" required /> */}
                        <input {...register("title")} type="text" name="title" defaultValue={book.title} required />
                    </div>
                    <div className="container-input">
                        <label> Pages:  </label>
                        {/* <input type="number" name="pages" onChange={pagesChange} required /> */}
                        {/* <input ref={pagesRef} type="number" name="pages"required /> */}
                        <input {...register("pages")} type="number" name="pages" defaultValue={book.pages} required />
                    </div>
                    <div className="containar-button">
                        {/* <input type="submit" onClick={submit} value="Add Book"/> */}
                        <input type="submit" value="Update Book" />
                    </div>
                </form>
            </div>
        </>
    )
}
