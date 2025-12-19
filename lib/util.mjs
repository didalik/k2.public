document.addEventListener("keydown", handleKeyboardEvent) // {{{1

function handleKeyboardEvent (e) { // {{{1
  if (e.ctrlKey && e.key == 'c') {
    put('You pressed Ctrl-C.')
  }
}

function put (line) { // {{{1
  document.body.firstElementChild.textContent += `${line}\n`
}

export { put, } // {{{1

