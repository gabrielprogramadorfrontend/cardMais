let accordionPersonalizado = function () {
    let botaoAcao = document.querySelectorAll(".botaoLista")
    let contador = 0



    botaoAcao.forEach(element => {
        element.addEventListener("click", function (event) {

            let botaoClicado = event.target

            let elementoPaiBotaoClicado = botaoClicado.parentElement

            let textoAparecer = elementoPaiBotaoClicado.parentElement.querySelector(".esconderTexto")


            let verificacaoClasseAparecer = textoAparecer.classList.contains("aparecer")

            if (verificacaoClasseAparecer) {
                textoAparecer.classList.remove("aparecer")

            } else {
                textoAparecer.classList.add("aparecer")

            }

            contador++

        })
    })
}

accordionPersonalizado();


let menuMob = function () {

    let checkMenu = document.getElementById("checkbox-menu")
    let menuMobile = document.querySelector(".navmobile")
   

    let iconeMenuMobile = document.querySelector(".buttonhamb");

    iconeMenuMobile.addEventListener("click", (event) => {
        if (checkMenu.checked) {
            
            menuMobile.classList.remove("mobilenone")
            menuMobile.classList.add("mobile_aparecer")

        } else {
           
            menuMobile.classList.remove("mobile_aparecer")
            menuMobile.classList.add("mobilenone")
        }
    })


}

menuMob();