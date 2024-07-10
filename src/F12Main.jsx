const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
};

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
};

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page Lists</h1>
      <table style={{ borderCollapse: "collapse", border: "1px solid #ddd" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>
              <a href="/OjCarpetCartPage">/OjCarpetCartPage</a>
            </td>
            <td style={tableCellStyle}>
              <a href="/OjCarpetCartPage">OJ Carpet Cart page</a>
            </td>
          </tr>
          <tr>
            <td style={tableCellStyle}>
              <a href="/OjCarpetCheckoutPage">/OjCarpetCheckoutPage</a>
            </td>
            <td style={tableCellStyle}>
              <a href="/OjCarpetCheckoutPage">OJ Carpet Checkout page</a>
            </td>
          </tr>
          <tr>
            <td style={tableCellStyle}>
              <a href="/OjCarpetHomePage">/OjCarpetHomePage</a>
            </td>
            <td style={tableCellStyle}>
              <a href="/OjCarpetHomePage">OJ Carpet Home page</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
