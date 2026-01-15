import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, deleteBook } from "../actions";

function App() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.book);

  // State pentru paginare
  const [page, setPage] = useState(0);
  const [pageSize] = useState(5);

  // State nou pentru sortare
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");

  useEffect(() => {
    // Trimitem acum si parametrii de sortare catre actiune
    dispatch(getBooks("", page, pageSize, sortField, sortOrder));
  }, [dispatch, page, pageSize, sortField, sortOrder]);

  const handleDelete = (id) => {
    // Trebuie sa trimitem starea curenta a sortarii si cand stergem,
    // pentru a reincarca lista in aceeasi stare
    dispatch(deleteBook(id, "", page, pageSize, sortField, sortOrder));
  };

  // Functie pentru a gestiona click-ul pe butoanele de sortare
  const handleSort = (field) => {
    if (sortField === field) {
      // Daca suntem deja pe acest camp, inversam ordinea
      setSortOrder(sortOrder === "ASC" ? "DESC" : "ASC");
    } else {
      // Daca e un camp nou, il setam si incepem cu ASC
      setSortField(field);
      setSortOrder("ASC");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Book Manager</h3>

      {/* Controale pentru Sortare */}
      <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
        <button onClick={() => handleSort("title")}>
          Sort by Title{" "}
          {sortField === "title" ? (sortOrder === "ASC" ? "▲" : "▼") : ""}
        </button>

        {/* Butonul cerut pentru sortare dupa numarul de pagini */}
        <button onClick={() => handleSort("numberOfPages")}>
          Sort by Pages{" "}
          {sortField === "numberOfPages"
            ? sortOrder === "ASC"
              ? "▲"
              : "▼"
            : ""}
        </button>
      </div>

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
            <span style={{ width: "100px" }}>{book.numberOfPages} pages</span>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Paginare */}
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
          disabled={bookList.length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
