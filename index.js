const calc = document.getElementById('button')
calc.onclick = function () {
  const x = document.getElementById('x')
  const y = document.getElementById('y')
  const sum = parseInt(x.value) + parseInt(y.value)
  document.getElementById('result').value = sum
}
