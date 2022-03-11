const productList = document.getElementById('product');

function renderCard(img,title,price){
    return `
    <div class="col-md-2 col-sm-4 col-6" >
    <div class="card card-product mb-3">
    <img src="./images/${img}" class="card-img-top" alt="..."  style="height:150px">
    <div class="card-body">
      <p class="card-text">${title}</p>
      <p class="times">${price}</p>
    </div>
    <div class="card-action d-flex justify-content-between">
    <a href="#" class="btn btn-danger">Mua</a>
    <a href="#" class="btn btn-primary">Chi Tiet</a>
    </div>
    </div>
    </div>
    `
}

function renderItems(){
    let content='';
    for(let i = 0 ;i<2;i++){
        content+=`<div class="row">`;
        listItems='';
        for(let j = 0 ; j<6 ;j++){
            let img = `img${temp==11?j+12:j+6}.jpg`;
            let title = `Product ${j}`;
            let price = `${Math.floor(Math.random()*1000)}$`
            listItems+=renderCard(img,title,price);
        }
        var temp = 11;

        content+= listItems;
        content+=`</div>`;
    }
    productList.innerHTML=content;
}

productList.addEventListener('load',renderItems());
