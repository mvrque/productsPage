//create a product class

class Product{
    constructor(id, name, price, info){
        this.id = id;
        this.name = name;
        this.price = price;
        this.info = info;
    }
}

//let newProduct = new Product('JCSAA121', 'Acme DISC', '1.00$', 'Size: 700MB')
console.log()


//UI handleing a list - adding product to a list and displaying a list

class UI{ 
    static addProductToAList(newProduct){
        let productList = [];
        productList.push(newProduct);
        console.log(productList ) 
    }
    
    
    static addProduct(el){
        console.log(el)
        if(el.classList.contains('add')){
            const pId = document.querySelector('#productId').textContent;
            const pName = document.querySelector('#productName').textContent;
            const pPrice = document.querySelector('#productPrice').textContent;
            const pInfo = document.querySelector('#productName').textContent;
            let newProduct = new Product(pId, pName, pPrice, pInfo );
            console.log(newProduct);
            UI.addProductToAList(newProduct);
        }
    }

    //displaying shopping bag

    //deleting a product from a shopping bag
}

//add a product 
document.querySelector('#productDescription').addEventListener('click', (el)=>{
    UI.addProduct(el.target)
})

