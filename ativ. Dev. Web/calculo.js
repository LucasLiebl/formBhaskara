function calcule() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;
    const delta = Math.sqrt((b ** 2) - 4 * a * c)
    const bhaskara1 = (-b + delta) / 2 * a
    const bhaskara2 = (-b - delta) / 2 * a

    let resultado;
    let x1;
    let x2;
    if (a === 0) {
        document.getElementById('resultado').innerHTML = "Não é Bhaskara"
    }
    else
        if (delta < 0)
            document.getElementById('resultado').innerHTML = `Não existe raizes`
        else
            if (delta === 0) {
                document.getElementById('resultado').innerHTML = `</br>Existe somente uma raíz.`
                document.getElementById('x1').innerHTML = `O X¹ é: ${bhaskara1}`
                document.getElementById('x2').innerHTML = `O X² é: ${bhaskara2}`
            }
            else {
                document.getElementById('resultado').innerHTML = "O resultado esta da maneira correta"
                document.getElementById('x1').innerHTML = `O X¹ é: ${bhaskara1}`
                document.getElementById('x2').innerHTML = `O X² é: ${bhaskara2}`
            }
}