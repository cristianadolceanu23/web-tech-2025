import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks, deleteBook } from "../actions";

// Importuri PrimeReact
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";

function App() {
  const dispatch = useDispatch();
  const { bookList } = useSelector((state) => state.book);

  // State-uri existente
  const [page, setPage] = useState(0);
  const [pageSize] = useState(5);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");

  // State nou pentru vizibilitatea Dialogului
  const [showChart, setShowChart] = useState(false);

  // Configurare date pentru Pie Chart
  // Vom afisa titlul cartii ca eticheta si numarul de pagini ca valoare
  const chartData = {
    labels: bookList.map((book) => book.title || book.name),
    datasets: [
      {
        data: bookList.map((book) => book.numberOfPages || 1), // Default 1 daca nu exista pages
        backgroundColor: [
          "#42A5F5",
          "#66BB6A",
          "#FFA726",
          "#26C6DA",
          "#7E57C2",
          "#FF7043",
        ],
        hoverBackgroundColor: [
          "#64B5F6",
          "#81C784",
          "#FFB74D",
          "#4DD0E1",
          "#9575CD",
          "#FF8A65",
        ],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  useEffect(() => {
    dispatch(getBooks("", page, pageSize, sortField, sortOrder));
  }, [dispatch, page, pageSize, sortField, sortOrder]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id, "", page, pageSize, sortField, sortOrder));
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "ASC" ? "DESC" : "ASC");
    } else {
      setSortField(field);
      setSortOrder("ASC");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Book Manager</h3>

        {/* Buton pentru deschiderea Dialogului cu Grafice */}
        <Button
          label="View Statistics"
          icon="pi pi-chart-pie"
          onClick={() => setShowChart(true)}
        />
      </div>

      {/* Dialogul care contine Pie Chart-ul */}
      <Dialog
        header="Pages Distribution (Pie Chart)"
        visible={showChart}
        style={{ width: "50vw" }}
        onHide={() => setShowChart(false)}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Chart
            type="pie"
            data={chartData}
            options={chartOptions}
            style={{ position: "relative", width: "50%" }}
          />
        </div>
      </Dialog>

      {/* Controale Sortare */}
      <div
        style={{
          marginBottom: "15px",
          marginTop: "15px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => handleSort("title")}>
          Sort by Title{" "}
          {sortField === "title" ? (sortOrder === "ASC" ? "▲" : "▼") : ""}
        </button>
        <button onClick={() => handleSort("numberOfPages")}>
          Sort by Pages{" "}
          {sortField === "numberOfPages"
            ? sortOrder === "ASC"
              ? "▲"
              : "▼"
            : ""}
        </button>
      </div>

      {/* Lista Carti */}
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
