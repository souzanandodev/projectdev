function toggleMode(){
  const html = document.documentElement

  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }
  else{
    html.classList.add('light')
  }
  */
  /*a condição acima, pode ser usado da mesma forma que o codigo abaixo*/
  html.classList.toggle('light') /*o toggle tem a função parecida que a condição acima*/

  /*Substituição de imagem*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
