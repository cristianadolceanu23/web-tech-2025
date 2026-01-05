let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
let router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const array = [
  { id: 1, name: "Ionuț", age: 25 },
  { id: 2, name: "Alex", age: 18 },
  { id: 3, name: "Mihai", age: 13 },
  { id: 4, name: "Marcel", age: 12 },
  { id: 5, name: "Marius", age: 22 },
];

router.route("/getList").get((req, res) => {
  res.json(array);
});

router.route("/postList").post((req, res) => {
  let el = req.body;
  el.id = array.length + 1;
  array.push(el);

  res.json(el);
});
router.route("/user/:id").get((req, res) => {
  //implementați un nou endpoint în server care să primească id-ul unei resurse și să răspundă cu resursa respectivă.

  // preiau id-ul trimis in URL si il transform in numar intreg
  let id_cautat = parseInt(req.params.id);

  // caut in lista obiectul care are acest id
  let element_gasit = array.find((element) => element.id === id_cautat);

  // verific daca am reusit sa gasesc elementul
  if (element_gasit) {
    // trimit inapoi clientului resursa gasita
    res.json(element_gasit);
  } else {
    // nu am gasit nimic, asa ca setez statusul 404 si returnez un mesaj
    res.status(404).json({ message: "Nu am gasit resursa cautata" });
  }
});
let port = 8000;
app.listen(port);
console.log("Api is running");
