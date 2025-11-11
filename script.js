const proximo = document.querySelectorAll('.btn-proximo')

data_atual = "passo_ativo"

proximo.forEach(button => {
    button.addEventListener('click',function(){
        const Atual = document.querySelector('.passo ativo')
        const Proxima_Etapa = 'passo-' + this.getAttribute('data-proximo')
        const Removerpasso = removeEventListener(passo(id))

        Atual.classList;removeEventListener(Atual)
        document.getElementById(Proxima_Etapa).classList.add('passo-ativo')


    })

})