console.log('INTRO')

document.addEventListener("keydown", handleKeyboardEvent) // {{{1

function handleKeyboardEvent (e) { // {{{1
  if (e.ctrlKey && e.key == 'c') {
    log('You pressed Ctrl-C.')
  }
}

function log (line) { // {{{1
  document.body.firstElementChild.textContent += `${line}\n`
}
