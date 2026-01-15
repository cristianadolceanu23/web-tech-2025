import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, deleteBook } from "../actions";

function App() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks("", 0, 10, "", ""));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id, "", 0, 10, "", ""));
  };

  return (
    <div>
      <h3>Book Manager</h3>
      <div className="book-list">
        {bookList.map((book) => (
          <div
            key={book.id}
            style={{ display: "flex", gap: "10px", margin: "10px 0" }}
          >
            <span>{book.title || book.name}</span>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
