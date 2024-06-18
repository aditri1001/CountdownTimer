// const endDate = "15 May 2023 5:00 PM";
const endDate = prompt("Write End Goal (Day Month Year Hour:Minute AM/PM):", document.getElementById("endDate").innerText);

document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return 0;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
}

clock();

setInterval(
    () => {
        clock();
    },
    1000
)