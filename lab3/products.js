const products =[
    {id :1 , name:"laptop" , qty: 10, price: 50000},
    {id :2 , name:"phone" , qty: 20, price: 20000}

]

let nextId =3;

export const getAllProducts = () => {
    return products;
}
export const addProducts = (item) =>{
     item.id = nextId;
     nextId++;
        products.push(item);
        return item;
};


export const deleteProduct = (pid) => {
      const item =products.findIndex((prd) => prd.id === pid);
        if(item == -1){
            return false;
        }
        products.splice(item, 1)
        console.log("product remaning:", products);

        return true;
    };
// export { getAllProducts };
// craete a upadte any product given pid
// call this function into prg6.js and verify uts working echo api ....

export const updateProduct  =(pid , updateItem) =>{
    const index= products.findIndex((prd) => prd.id === pid);

    if(index == -1){
        return false;
    }
    updateItem.id = pid ;
    // Object.assign(products[item],updateItem);
    products[index]=updateItem;
    return updateItem ;

};

export const getProductById =(pid) => {
    const index= products.findIndex((prd) => prd.id === pid);

    if(index == -1){
        return false;
    }
   
    return products[index] ;
}