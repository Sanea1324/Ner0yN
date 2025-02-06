        let messages = ["Să ai o zi minunată,plină de căldură și emoție.", "De ziua îndrăgostiților, îți doresc o zi plină de iubire, zâmbete și momente speciale alături de cei dragi.", "Fie ca fiecare clipă să fie un motiv de fericire și fiecare iubire să devină mai puternică cu fiecare zi."];
        let index = 0;

function showGreeting(event) {
    event.stopPropagation(); // Чтобы клик не сменил текст сразу
    document.getElementById("link").style.display = "none";
    document.getElementById("greeting").style.display = "block";
}

function changeText() {
    if (document.getElementById("greeting").style.display === "block") {
        index = (index + 1) % messages.length;
        document.getElementById("greeting").innerText = messages[index];
    }
}
