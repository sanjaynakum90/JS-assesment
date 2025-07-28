

const form = document.getElementById("countryForm");
const input = document.getElementById("countryInput");
const card = document.getElementById("coronaCard");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const country = input.value.trim();
    if (!country) return;

    try {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
        const data = await res.json();

        card.innerHTML = `
    <div class="card text-dark bg-white shadow-lg">
        <div class="card-header bg-primary text-white text-center">
            <h4>${data.country} <img src="${data.countryInfo.flag}" width="30" class="ms-2 rounded shadow-sm" alt="Flag" /></h4>
        </div>
        <div class="card-body">
            <div class="row text-center">
                ${generateStat("Total Cases", data.cases, "danger")}
                ${generateStat("Recovered", data.recovered, "success")}
                ${generateStat("Deaths", data.deaths, "dark")}
                ${generateStat("Active", data.active, "warning text-dark")}
            </div>
        </div>
    </div>
    `;
    } catch (error) {
        card.innerHTML = `<p class="text-danger">Data not found or API error. Please try another country.</p>`;
    }
});

function generateStat(label, value, badgeClass) {
    return `
    <div class="col-md-6 mb-3">
        <div class="bg-light border rounded p-3 shadow-sm">
            <h6 class="text-muted">${label}</h6>
            <span class="badge bg-${badgeClass} fs-5">${value.toLocaleString()}</span>
        </div>
    </div>
    `;
}