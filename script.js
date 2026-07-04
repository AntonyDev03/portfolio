const testoNome = "> Angelantonio de Virgilio";

const testoRuolo = "> Sviluppatore Web & Software";

const testoSlogan = "> Trasformo idee in esperienze digitali";

const freccia = document.querySelector(".freccia-scroll");
const destinazione = document.querySelector("#about");

freccia.addEventListener('click', function(e) {
    e.preventDefault();

    const targetPosition = destinazione.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;

    const duration = 1500;
    let start = null;

    function scorrimento(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;

        const progress = Math.min(timeElapsed / duration, 1);

        const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(scorrimento);
        }
    }
    requestAnimationFrame(scorrimento);
})

let i = 0;
let j = 0;
let k = 0;

function scriviNome() {
    if (i < testoNome.length) {
        document.getElementById("nome").innerHTML += testoNome.charAt(i);
        i++;
        setTimeout(scriviNome, 100);
    }

    else {
        scriviRuolo();
    }

}

function scriviRuolo() {
    if (j < testoRuolo.length) {
        document.getElementById("ruolo").innerHTML += testoRuolo.charAt(j);
        j++;
        setTimeout(scriviRuolo, 100);
    }

    else {
        scriviSlogan();
    }

}

function scriviSlogan() {
    if (k < testoSlogan.length) {
        document.getElementById("slogan").innerHTML = testoSlogan.substring(0, k + 1) + '<span class="cursore_">_</span>';
        k++;
        setTimeout(scriviSlogan, 100);
    }
}

scriviNome();



