<script>

document.getElementById("vaccination_form").addEventListener("submit", function(event)
{
    event.preventDefault();

    let patient = document.getElementById("patient").value;
    let vaccine = document.getElementById("vaccine").value;
    let date = document.getElementById("date").value;
    let dose = document.getElementById("dose").value;

    let table = document.getElementById("vaccination_records");

    let row = table.insertRow();

    row.insertCell(0).textContent = patient;
    row.insertCell(1).textContent = vaccine;
    row.insertCell(2).textContent = date;
    row.insertCell(3).textContent = dose;

    document.getElementById("thank_you").textContent =
        "Thank you for logging the medical record.";

    document.getElementById("vaccination_form").reset();
});

</script>

