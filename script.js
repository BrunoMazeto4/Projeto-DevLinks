function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Outra maneira de se fazer o código para trocar o fundo
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }

  const image = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/photo.jpg")
  } else {
    image.setAttribute("src", "./assets/104329047.jpg")
  }
}
