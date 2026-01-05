const apiUrl = "http://localhost:8000/api/";

async function get(url) {
  return (await axios.get(url)).data;
}

async function post(url, body) {
  return (
    await axios.post(url, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
    })
  ).data;
}

async function loadTable() {
  let data = await get(apiUrl + "getList");
  let tableDiv = document.getElementById("tableData");

  if (!data || !tableDiv) {
    return;
  }
  let myTable = document.getElementById("myTable");
  if (myTable) myTable.remove(); // Am adaugat parantezele () care lipseau in exemplul tau

  let myHtmlCode = [];
  myHtmlCode.push("<table id='myTable' border='1'>");
  myHtmlCode.push("<thead>");
  myHtmlCode.push(
    "<tr> <th hidden> Id </th> <th> Name </th> <th> Age </th> </tr>"
  );
  myHtmlCode.push("</thead>");
  myHtmlCode.push("<tbody>");

  for (let item of data)
    myHtmlCode.push(`<tr> <td hidden> 
    ${item.id} </td> <td> ${item.name} </td> <td> ${item.age} </td> </tr>`);

  myHtmlCode.push("</tbody>");
  myHtmlCode.push("</table>");

  tableDiv.innerHTML = myHtmlCode.join("");
}

async function sendData() {
  let name = document.getElementById("inputName").value;
  let age = document.getElementById("inputAge").value;

  if (!name || !age) {
    alert("You must enter a name and a age");
    return;
  }

  await post(apiUrl + "postList", { name: name, age: age });
  await loadTable();
}

// --- FUNCTIA NOUA PENTRU CAUTARE ---

async function getDataById() {
  let id = document.getElementById("inputSearchId").value;
  let resultDiv = document.getElementById("searchResult");

  if (!id) {
    alert("Te rog introdu un ID pentru cautare");
    return;
  }

  try {
    // Presupunem ca ruta pe server este /api/get/{id}
    // Daca serverul tau difera, modifica aici string-ul URL
    let item = await get(apiUrl + "get/" + id);

    if (item) {
      // Afisam rezultatul frumos
      resultDiv.innerHTML = `
                <p style="border: 1px solid green; padding: 10px; display: inline-block;">
                    <b>Rezultat găsit:</b> <br>
                    Nume: ${item.name} <br>
                    Vârstă: ${item.age}
                </p>
            `;
    } else {
      resultDiv.innerHTML = "<p>Nu am găsit date pentru acest ID.</p>";
    }
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = `<p style="color: red;">Eroare: ID-ul ${id} nu a fost găsit sau serverul nu răspunde.</p>`;
  }
}

// Pornim tabelul la incarcare
loadTable();
