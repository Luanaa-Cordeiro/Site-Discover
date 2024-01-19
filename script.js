function ToogleMode(){
    const html = document.documentElement


   html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./Assets/eu_oculos.png")
    } else{
        img.setAttribute("src", "./Assets/image 1.png")
    }

    //html.classList.toggle("light")
}