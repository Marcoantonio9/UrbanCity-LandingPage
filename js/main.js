let exibindoMenu = document.querySelector('#btn-nav')
    exibindoMenu.addEventListener('click', () =>{
        document.querySelector('#nav-itens').classList.toggle('exibir-menu')
})

let exibirItems = document.querySelector('#btn-items')
    exibirItems.addEventListener('click', (e) => {
        let tt = document.querySelector('.item4')
        document.querySelector('.item4').classList.toggle('exibir-imgs')

        document.querySelector('.item5').classList.toggle('exibir-imgs')

        document.querySelector('.item6').classList.toggle('exibir-imgs')

        
        if(document.querySelector('#btn-items').innerHTML == 'Ver Mais'){

            document.querySelector('#btn-items').innerHTML = 'Ocultar'
        }else{
            document.querySelector('#btn-items').innerHTML = 'Ver Mais'
        }

        e.preventDefault()
})
