// Change Employee Details
let emp = document.getElementById("emp");
emp.innerText = "Insert Employee";

// Change Company Name
let company = document.getElementById("company");
company.innerText = "INSEC Technologies";

// Function
function changeData() {

    document.querySelector(".title").innerText =
        "Employee Dashboard Updated";

    document.getElementById("total").innerText = "150";

    alert("Dashboard Updated Successfully");
}

