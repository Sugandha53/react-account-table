import { useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";
import AccountForm from "./components/AccountForm";

function App() {
  
  const accountsData = useSelector((state) => state.accounts.data);

  
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const rowsPerPage = 10;

  
  const filteredData = accountsData.filter((acc) => {
    const term = searchTerm.toLowerCase();

    return (
      acc.name.toLowerCase().includes(term) ||
      acc.email.toLowerCase().includes(term) ||
      acc.phone.includes(term) ||
      acc.website.toLowerCase().includes(term) ||
      acc.industry.toLowerCase().includes(term) ||
      acc.remark.toLowerCase().includes(term) ||
      acc.status.toLowerCase() === term
    );
  });

  
  const sortedData = [...filteredData];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getArrow = (key) =>
    sortConfig.key === key
      ? sortConfig.direction === "asc"
        ? " ▲"
        : " ▼"
      : "";

  
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(
    indexOfFirstRow,
    indexOfLastRow
  );

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sortedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Accounts");
    XLSX.writeFile(workbook, "Account_Table.xlsx");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Account Table</h1>
      <p>React Intern Assignment</p>

     
      <AccountForm />

      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Search accounts..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{
            padding: "8px",
            width: "250px",
            maxWidth: "100%",
          }}
        />

        <button
          onClick={downloadExcel}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Download Excel
        </button>
      </div>

      
      <div style={{ overflowX: "auto" }}>
        <table border="1" width="100%" cellPadding="8">
          <thead>
            <tr>
              <th onClick={() => requestSort("name")}>
                Name{getArrow("name")}
              </th>
              <th onClick={() => requestSort("email")}>
                Email{getArrow("email")}
              </th>
              <th onClick={() => requestSort("phone")}>
                Phone{getArrow("phone")}
              </th>
              <th onClick={() => requestSort("website")}>
                Website{getArrow("website")}
              </th>
              <th onClick={() => requestSort("industry")}>
                Industry{getArrow("industry")}
              </th>
              <th onClick={() => requestSort("status")}>
                Status{getArrow("status")}
              </th>
              <th onClick={() => requestSort("remark")}>
                Remark{getArrow("remark")}
              </th>
            </tr>
          </thead>

          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((acc) => (
                <tr key={acc.id}>
                  <td>{acc.name}</td>
                  <td>{acc.email}</td>
                  <td>{acc.phone}</td>
                  <td>{acc.website}</td>
                  <td>{acc.industry}</td>
                  <td>{acc.status}</td>
                  <td>{acc.remark}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
      <div style={{ marginTop: "10px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;








