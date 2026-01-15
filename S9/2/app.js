import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, deleteBook } from "../actions";

function App() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.book);

  // Stare pentru paginare
  const [page, setPage] = useState(0);
  const [pageSize] = useState(5); // Setam o dimensiune a paginii (ex: 5 elemente)

  useEffect(() => {
    // Trimitem pagina si pageSize-ul catre actiune
    dispatch(getBooks("", page, pageSize, "", ""));
  }, [dispatch, page, pageSize]); // Se ruleaza cand se schimba pagina

  const handleDelete = (id) => {
    // Cand stergem, vrem sa ramanem pe pagina curenta
    dispatch(deleteBook(id, "", page, pageSize, "", ""));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Book Manager</h3>

      <div className="book-list">
        {bookList.map((book) => (
          <div
            key={book.id}
            style={{
              display: "flex",
              gap: "10px",
              margin: "10px 0",
              borderBottom: "1px solid #eee",
              padding: "5px",
            }}
          >
            <span style={{ flex: 1 }}>{book.title || book.name}</span>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Controale pentru Paginare */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => setPage((old) => Math.max(0, old - 1))}
          disabled={page === 0}
        >
          Previous
        </button>

        <span>Page {page + 1}</span>

        <button
          onClick={() => setPage((old) => old + 1)}
          // Dezactivam Next daca nu mai sunt carti pe pagina curenta (optional, in functie de API)
          disabled={bookList.length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
