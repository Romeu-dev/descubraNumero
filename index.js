    const frm = document.querySelector("form");
    const respErros = document.querySelector("#outErros");
    const respChances = document.querySelector("#outChances");
    const respDica = document.querySelector("#outDica");

    const erros = []
    const sorteado = Math.floor(Math.random() * 100) + 1
    const CHANCE = 6

    frm.addEventListener("submit" , (e) => {
        e.preventDefault()
        const numero = Number(frm.inNumero.value)
        if (numero == sorteado) {
            respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
            frm.btSubmit.disabled = true
            frm.btNovo.className = "exibe"
        } else{
            if(erros.includes(numero)){   // se o numero ja esta no vetor(ja apostou)
                alert(`Você ja apostou o Número ${numero}. Tente outro...`)
            }else {
                erros.push(numero)
                const numErros = erros.length
                const numChances = CHANCE - numErros

                respErros.innerText =`${numErros} (${erros.join(" , ")})`
                respChances.innerText = numChances
                if( numChances == 0 ) {
                    alert("Suas chances acabaram...")
                    frm.btSubmit.disabled = true
                    frm.btNovo.className = "exibe"
                    respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}` 
                }else{
                    const dica = numero < sorteado ? "maior" : "Menor"
                    respDica.innerText = `Dica: Tente um Número ${dica} que ${numero}`
                }
            }
        }
            frm.btNovo.addEventListener("click" , () =>{
                location.reload()
            })


        frm.inNumero.value = ""
        frm.inNumero.focus()
    })
