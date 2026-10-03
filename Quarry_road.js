function logVaccination() {
    var patient = document.getElementById("patient").value;
    var vaccine = document.getElementById("vaccine").value;
    var date = document.getElementById("date").value;
    var dose = document.getElementById("dose").value;

        // Check if any information is missing
    if (patient == "" || vaccine == "" || date == "" || dose == "") {
        document.getElementById("thank_you").innerHTML =
            "Error: Please fill out all fields.";
        return;
    }

    var records = document.getElementById("vac_records");

    var row = records.insertRow();

    row.insertCell(0).innerHTML = patient;
    row.insertCell(1).innerHTML = vaccine;
    row.insertCell(2).innerHTML = date;
    row.insertCell(3).innerHTML = dose;

    document.getElementById("thank_you").innerHTML =
        "Thank you for logging the medical record.";

    document.getElementById("vac_form").reset();
}



