// Uppgift 1a1:
function buttonAction1() {
  //Kod här!
  const phrase = 'Hej användaren! Klockan är: ' + new Date().toLocaleTimeString()

  alert(phrase)
} // Slut!

let inputFromPrompt
// Uppgift 1a2 här:
function buttonAction2() {
  //Kode här
  inputFromPrompt = prompt('Mata in en sträng')

  alert(inputFromPrompt.toUpperCase())
} // Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  //Kode här!
  document.getElementById('result3').innerText = inputFromPrompt
} // Slut!

// Uppgift 1a4 här:
// function buttonAction4() {
//   //Kode här!
//   const date1 = Date.now()
// 
//   const btn = document.getElementsByName('button4')[0]
//   btn.setAttribute('disabled', 'disabled')
//   btn.dataset.previousText = btn.innerText
//   btn.innerText = 'VÄNTA...'
// 
//   setTimeout(function () {
//     alert('Tid som har förfallit: ' + (Date.now() - date1) + ' millisekunder.')
//     btn.removeAttribute('disabled')
//     btn.innerText = btn.dataset.previousText
//     btn.removeAttribute('data-previous-text')
//   }, 2000)
// } // Slut!

// Eller (Så som vi har fått det förklarat)
function buttonAction4() {
  const date1 = Date.now()

  const btn = document.getElementsByName('button4')[0]
  btn.onclick = function () {
    alert('Tid som har förfallit: ' + (Date.now() - date1) + ' millisekunder.')
    btn.onclick = buttonAction4
  }
} // Slut!

// Uppgift 1a5 här:
function buttonAction5() {
  //Kode här!
  const number1 = Number(document.getElementById('number1').value)
  const number2 = Number(document.getElementById('number2').value)

  let errors = []
  if (isNaN(number1) || number1 < 0 || number1 > 999) {
    errors.push('Inmatning 1 är felaktig!')
  }

  if (isNaN(number2) || number2 < 0 || number2 > 999) {
    errors.push('Inmatning 2 är felaktig!')
  }

  if (errors.length > 0) {
    document.getElementById('result5').innerText = errors.join(' ')
    return // Avsluta funktionen tidigt.
  }

  document.getElementById('result5').innerText =
    'Subtraktion: ' + number1 + ' - ' + number2 + ' = ' + (number1 - number2)
} // Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  //Kode här!
  const textInput = document.getElementById('textInput')

  const whiteSpacesCount = textInput.value.split(' ').length
  // Trim
  // const whiteSpacesCount = textInput.value.trim().split(' ').length

  document.getElementById('wordCount').innerText = whiteSpacesCount
} // Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  //Kode här!
  const input = prompt('Fyll in ett meddelande')

  let print = ''
  for (let index = 0; index < 10; index++) {
    print += input + '\n'
  }
  
  alert(print)

  // No for loop solution.
  // alert(Array(10).fill(input))
} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  //Kode här!
  const hiddenButton = document.getElementById('hiddenButton')

  if (hiddenButton.style.visibility === 'visible') {
    hiddenButton.style.visibility = 'hidden'
  } else hiddenButton.style.visibility = 'visible'
} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  //Kode här
  const input = document.getElementById('arrayInput').value
  const container = document.getElementById('tableContainer')

  let arrInput = input.split(',')

  // Bygg upp en array med arrays. Varje array i arrayen är en "table row".
  let tableArr = []
  for (let index = 0; index < arrInput.length; index++) {
    const element = arrInput[index]

    if ((index % 7) === 0) {
      tableArr.push([])
    }

    tableArr[tableArr.length - 1].push(element)
  }

  let html = ''
  for (let index = 0; index < tableArr.length; index++) {
    const arr = tableArr[index]
    
    html += '<tr>'
    html += arr.map(function (element) {
      return '<td>' + element + '</td>'
    }).join('')
    html += '</tr>'
  }
  
  container.innerHTML = '<table><tbody>' + html + '</tbody></table>'
} //Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
