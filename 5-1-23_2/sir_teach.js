const bikeobj = {
    name: "Bike",
    price: 1000,
    color: "red",
    size: "large",
    };

    function displayInfo(inputStr) {
    let tr = {};

    if (inputstr === "bike") {
    for (k in bikeObj) {
    tr = document.createElement("tr");

    const tdkey = document.createElement("td");
    const tdvalue = document.createElement("td");

    tdkey.textContent = k;
    tdvalue.textContent = bikeobj[k];

    tr.appendchild(tdkey);
    tr.appendchild(tdvalue);
    document.getElementById("idShowInfo").appendchild(tr);
    }
    }
    }   