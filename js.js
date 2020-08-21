console.log("connected");

let addNewItemBtn = document.createElement("BUTTON");
addNewItemBtn.id = "add-item";
addNewItemBtn.addEventListener("click", createItemDiv);
addNewItemBtn.innerHTML = "Add new item";
document.body.appendChild(addNewItemBtn);

function createItemDiv() {
    //alert("button works");
    
    let inputImage = "samsung-galaxy-note-4-1.jpg";
    let inputProduct = "Samsung Note 4";
    let inputDescription = `color: Black`;

    let inputPrice = 890;

    let itemDiv = document.createElement("div");

    itemDiv.innerHTML += `<div class="container">
    <h2>Samsung Note 4</h2>
    <div class="row">
        <div class="col-md-3">
            <div class="product-top">
                <img src=${inputImage} width="220px">
                <div class="overlay">
                    <button type="button" class="btn btn-secondary" title="Quick Shop"><i class="fa fa-eye"></i></button>
                    <button type="button" class="btn btn-secondary" title="Add to wishlist"><i class="fa fa-heart-o"></i></button>
                    <button type="button" class="btn btn-secondary" title="Add to cart"><i class="fa fa-shopping-cart"></i></button>
                </div>

                <div class="product-bottom text-center"></div>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <h4>${inputProduct}</h4>
                <h6>${inputDescription}</h6>
                <h4>${inputPrice} $</h4>
            </div>
        </div>
    </div>
    </div>`;
    document.body.appendChild(itemDiv);
    
}

