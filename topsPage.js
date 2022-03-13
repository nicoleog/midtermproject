var pics = new Array();
var clothingName = new Array();
var prices = new Array();
var clothingObjects = new Array();
for(i = 0; i < 12; i++){
    pics[i] = "topsPics/tops" + i + ".jpg"
}

clothingName[0] = "Diagonal button short sleeve";
clothingName[1] = "Diagonal button short sleeve";
clothingName[2] = "Diagonal button short sleeve";
clothingName[3] = "Spaghetti strap top";
clothingName[4] = "Satin corset with wide straps and tie";
clothingName[5] = "Satin corset with wide straps and tie";
clothingName[6] = "Faux leather corset-style top";
clothingName[7] = "Faux leather corset-style top";
clothingName[8] = "Faux leather corset-style top";
clothingName[9] = "Crossed top with straps";
clothingName[10] = "Crossed top with straps";
clothingName[11] = "Rustic fabric long bell sleeve floral print blouse";

prices[0] = 25;
prices[1] = 25;
prices[2] = 25;
prices[3] = 35
prices[4] =30
prices[5] = 30
prices[6] = 30
prices[7] = 25
prices[8] = 18
prices[9] = 18
prices[10] = 36
prices[11] = 36



for(i = 0; i < 12; i++){
    let clothingObject = {
        description: clothingName[i],
        picture: pics[i],
        price: prices[i]
    };
    clothingObjects.push(clothingObject);
}


console.log(clothingObjects);
const displayClothes = (picInfo) => {
    // console.log(pics);
    const htmlString = clothingObjects.map((picInfo) => {
            return `
            <li class="pics">
                <img src= ${picInfo.picture} onerror="if(this.src != 'No-Image-Available2.jpeg') this.src = 'No-Image-Available2.jpeg';" >
                <div class = "descriptionWrapper">
                <p class = "description">${picInfo.description}</p>
                <p class = "description">$${picInfo.price}</p>
                </div>
                </img>
            </li>`;
        })
        .join('');
        
            clothesList.innerHTML = htmlString;
    
    
};

displayClothes();