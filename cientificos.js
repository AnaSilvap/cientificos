let html=""
urlsImg=["https://cdn.britannica.com/49/147449-050-8B0F9C5F/Alessandro-Volta-two-inventions-electrophorus-battery.jpg","https://museovirtual.csic.es/salas/luz/img/Sir_Isaac_Newton_(1643-1727).jpg","https://www.bbvaopenmind.com/wp-content/uploads/2021/03/BBVA-OpenMind-Materia-El-Darwin-m%C3%A1s-incomprendido-Venimos-del-mono-2.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/1200px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg","https://historia.nationalgeographic.com.es/medio/2019/07/02/marie-curie_92a91b69_1375x2000.jpg"]
nombres=["Alessandro Volta","Isaac Newton","Charles Darwin","Galileo Galilei","Marie Curie"]
for (let i =0; i<5 ;i++) {
    html=html + `<div class="cientifico"><img src="${ urlsImg[i]}" width="430" height="500"/><p>${nombres[i]}</p></div>`
    
}
contenedor=document.querySelector("#contenedor")
contenedor.innerHTML=html
