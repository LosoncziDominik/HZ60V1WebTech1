document.getElementById("loadBtn").addEventListener("click", function() {
    fetch("HZ60V1_orarend.json")
        .then(response => response.json())
        .then(data => {
            let html = `<h2>${data.HZ60V1_orarend.cim}</h2>`;
            html += `<p>Telefon: ${data.HZ60V1_orarend.telefonszam.szam}</p>`;
            html += "<ul>";
            data.HZ60V1_orarend.kurzus.forEach(k => {
                html += `<li>${k.idopont.nap} ${k.idopont.tol}-${k.idopont.ig}: ${k.targy} (${k.oktato}) - ${k.helyszin}</li>`;
            });
            html += "</ul>";
            document.getElementById("terulet").innerHTML = html;
        });
});