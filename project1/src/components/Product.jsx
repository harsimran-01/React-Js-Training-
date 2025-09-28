function Product({product_detail}){
    const{id,item,item_unit,item_price}=product_detail

    return(
        <div className="container">
            {/* <h1>Product Details</h1> */}
            <p>Product Id : {id}</p>
            <p>Product Name : {item}</p>
            <p>Product Unit : {item_unit}</p>
            <p>Product Price : ${item_price}</p>
            <p>Subtotal : ${item_unit*item_price}</p>
            <hr />
        </div>
    )

}

export default Product