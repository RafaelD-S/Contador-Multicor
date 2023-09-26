import { useState } from "react"
export default function Contador() {

    const [numero, setNumero] = useState(0)
    
let backgroundContador;
let backgroundMeio;

    const aumentar = () => {

        backgroundContador = document.querySelector(".contagem-background")
        backgroundMeio = document.querySelector("h1")

        if(numero < 10) {
            setNumero(numero + 1);

            // Eu fiz dessa forma porquê eu não consegui pensar em uma forma de colocar
            // algo que adcionasse, por exemplo, o valor 10 a porcentagem já que não era
            // apenas um número, e sim, uma string

            // Se souber do o que estou falando e poder trazer uma solução ficaria grato.
            // Caso a forma que eu fiz seja a "melhor", desconsidere.

            if(numero == 0) {backgroundContador.style.right = "90%"}
            if(numero == 1) {backgroundContador.style.right = "80%"}
            if(numero == 2) {backgroundContador.style.right = "70%"}
            if(numero == 3) {backgroundContador.style.right = "60%"}
            if(numero == 4) {backgroundContador.style.right = "50%"}
            if(numero == 5) {backgroundContador.style.right = "40%"}
            if(numero == 6) {backgroundContador.style.right = "30%"}
            if(numero == 7) {backgroundContador.style.right = "20%"}
            if(numero == 8) {backgroundContador.style.right = "10%"}
            if(numero == 9) {
                backgroundContador.style.right = "0%"
                backgroundMeio.style.animation = "color 1.2s infinite linear"
        }
        }
    }
    const diminuir = () => {

        backgroundContador = document.querySelector(".contagem-background")
        backgroundMeio = document.querySelector("h1")

        if(numero > 0) {
            setNumero(numero - 1);

            if(numero == 10) {
                backgroundContador.style.right = "10%";
                backgroundMeio.style.animation = "none"
            }
            if(numero == 9) {backgroundContador.style.right = "20%"}
            if(numero == 8) {backgroundContador.style.right = "30%"}
            if(numero == 7) {backgroundContador.style.right = "40%"}
            if(numero == 6) {backgroundContador.style.right = "50%"}
            if(numero == 5) {backgroundContador.style.right = "60%"}
            if(numero == 4) {backgroundContador.style.right = "70%"}
            if(numero == 3) {backgroundContador.style.right = "80%"}
            if(numero == 2) {backgroundContador.style.right = "90%"}
            if(numero == 1) {backgroundContador.style.right = "100%"}
        }
    }

    return(
    <>
        <div className="contagem-background">
        </div>
            <section>
                <div className="menos" onClick={diminuir}>
                    &lt;
                </div>
                <div className="numero">
                    <h1>
                        {numero}
                    </h1>
                </div>
                <div className="mais" onClick={aumentar}>
                    &gt;
                </div>
            </section>
    </>
    )
}