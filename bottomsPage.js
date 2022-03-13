var pics = new Array();
var clothingName = new Array();
var prices = new Array();
var clothingObjects = new Array();
for(i = 0; i < 12; i++){
    pics[i] = "bottomsPics/pant" + i + ".jpg"
}

clothingName[0] = "Wide-leg pleated pant";
clothingName[1] = "Loose flare pant";
clothingName[2] = "Waistband lowrise pant";
clothingName[3] = "Waistband lowrise pant";
clothingName[4] = "Darted pant";
clothingName[5] = "Cut Bermuda shorts";
clothingName[6] = "Floral print midi skirt";
clothingName[7] = "Tie-detail skirt";
clothingName[8] = "Gathered semi-long skirt";
clothingName[9] = "Satin semi-long skirt";
clothingName[10] = "Satin semi-long skirt";
clothingName[11] = "Rustic fabric floral print mini skirt";

prices[0] = 45
prices[1] =  45
prices[2] = 50
prices[3] = 55
prices[4] = 50
prices[5] = 60
prices[6] = 50
prices[7] = 45
prices[8] = 45
prices[9] = 65
prices[10] = 60
prices[11] = 60



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