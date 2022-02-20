// making an api call and calling the data.
// `https://api.unsplash.com/search/photos?client_id=AiQlSGiTzeS99GAz-HO_tXd1IdkiCaU8WUM0u1JijGY&query=${input}`

async function apiCall(url){

    try {
        
        let response = await fetch(url);

        let data = await response.json();

        return data;

    } 
    catch (error) {
        console.log("error");
    }
};

function appendPictures(data, parent){

    data.forEach((element) => {
        
        console.log(data);

        let div = document.createElement("div");
        div.setAttribute("id", "imgdiv")

        let image = document.createElement("img");
        image.src = element.urls.regular;
        image.setAttribute("id", "picid");

        let ptag = document.createElement("p");
        ptag.textContent = element.description;

        div.append(image, ptag);

        parent.append(div);

    });
}

export {apiCall, appendPictures};

// resume at 1hour 17 min