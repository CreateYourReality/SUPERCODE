
fetch('https://picsum.photos/v2/list')
.then((res) => res.json())
//.then((data) => console.log(data))
.then((product) => {
    console.log(product);
    product.forEach(prod => {
        let newFigure = document.createElement("figure");
        let img = prod.download_url;
        let autor = prod.author;

        let newImg = document.createElement("img");
        newImg.setAttribute("src",img);
        newImg.setAttribute("alt","alttext");
        newFigure.appendChild(newImg);

        let newFigcaption = document.createElement("figcaption");
        newFigcaption.textContent = autor;
        newFigure.appendChild(newFigcaption);

        document.body.appendChild(newFigure);
    });
})