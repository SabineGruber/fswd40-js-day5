var employees = JSON.parse(data);
console.log(employees);

function createTable() {
  tr = 10;
  td = 6;

  body = document.body;
  table = document.createElement("table");
  tblBody = document.createElement("tbody");
  table.appendChild(tblBody);
  body.appendChild(table);
  tblBody.id = "body1";
  tblBody += document.getElementById("body1").innerHTML +=
    "<th>First Name</th><th>Last Name</th><th>Email</th><th>Job Title</th><th>Salary</th>";
  for (i = 0; i < 10; i++) {
    tblBody += document.getElementById("body1").innerHTML +=
      "<tr><td>" +
      employees[i].firstName +
      "</td>" +
      "<td>" +
      employees[i].lastName +
      "</td>" +
      "<td>" +
      employees[i].email +
      "</td>" +
      "<td>" +
      employees[i].jobTitle +
      "</td>" +
      "<td>" +
      employees[i].salary +
      "</td>" +
      "</tr>";
  }
}

createTable();

// _*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
// // TRYING TO ITERATE OVER AN EACH VALUE OF A KEY OF AN OBJECT
// _*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

//   array1 = [];
//   employees.forEach(function(e) {
//     keys = Object.keys(e);
//     for (k = 0; k < keys.length; k++) {
//       console.log(keys[k]);
//       array1.push(keys[k]);
//     }
//   });

//   for (var i = 0; i < tr; i++) {
//     var row = document.createElement("tr");

//     for (var j = 0; j < td; j++) {
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode(keys[j]);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }

//     tblBody.appendChild(row);
//   }
//   table.appendChild(tblBody);

//   body.appendChild(table);
// }
