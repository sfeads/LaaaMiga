let principal = document.getElementById('cont-princ');

menu = new Array();

menu[0] = ['galeria/baguettes.png'],
menu[1] = ['galeria/cuernos.png'],
menu[2] = ['galeria/cupcake.png'],
menu[3] = ['galeria/pan_molde.png'],
menu[4] = ['galeria/pastel.png'],
menu[5] = ['galeria/tartas.png'];



if(principal){
for(i=0;i<menu.length;i++){
    let creaDiv = document.createElement('div');
    let creimg = document.createElement('img');

    creaDiv.setAttribute('class','foto');

    creimg.setAttribute('src',menu[i][0])
    principal.appendChild(creaDiv);
    principal.appendChild(creimg)
}
}