const root = document.querySelector("#root");

const pessoas = [
    { name: "Gordev", age: 30 },
    { name: "ElderinBr", age: 25 },
    { name: "sriyuu", age: 19 },
];

function createBody() {
    const newPessoas = pessoas.map(function (pessoa) {
     return `<tr>
            <td>${pessoa.name}</td>
            <td>${pessoa.age}</td>
        </tr>`;
   });

   return newPessoas;
 }

const tableBody = createBody();

const table = `<table>
    <tr>
        <td>Nome</td>
        <td>Idade</td>
    </tr>   
    ${tableBody.join("")}
</table> `;

root.insertAdjacentHTML("beforeend", table);