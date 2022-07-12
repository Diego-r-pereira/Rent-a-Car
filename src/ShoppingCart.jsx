import React, {Component} from "react";
import Product from "./Prooduct";

export default class ShoppingCart extends Component{

    state = {
        products:[
            {
                id: 1,
                productName: "iPhone",
                price: 8900,
                quantity: 0
                // photo: "https://picsum.photos/id/1014/60"
            },
            {
                id: 2,
                productName: "Sony Camera",
                price: 4500,
                quantity: 0
                // photo: "https://picsum.photos/id/1010/60"
            },
            {
                id: 3,
                productName: "Samsung QLED TV",
                price: 7745,
                quantity: 0
                // photo: "https://picsum.photos/id/1011/60"
            },
            {
                id: 4,
                productName: "iPad Pro",
                price: 12400,
                quantity: 0
                // photo: "https://picsum.photos/id/1012/60"
            },
            {
                id: 5,
                productName: "Xbox",
                price: 7780,
                quantity: 0
                // photo: "https://picsum.photos/id/1013/60"
            },
            {
                id: 6,
                productName: "Dell Monitor",
                price: 880,
                quantity: 0
                // photo: "https://picsum.photos/id/1013/60"
            }
        ]
    }

    render() {
        return (
            <div className="container-fluid">
                <h4>  Shopping Cart </h4>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return(
                            <Product
                                key={prod.id}
                                // id={prod.id}
                                // productName={prod.productName}
                                // price={prod.price}
                                product={prod}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            >
                            <button className="btn btn-primary">Buy Now</button>
                            </Product>
                    )
                    })}
                </div>
            </div>
        )
    }
//    Render ends Here

    // Executes when the user clicks on + button
    handleIncrement = (product, maxValue) => {
        // console.log("HandleIncrement", product)

        // Get index of the selected product
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)

        if (allProducts[index].quantity < maxValue){

            // console.log(This is the parent so please push everything hehehe)
            allProducts[index].quantity ++

            // Update the state of current component (parent component)
            this.setState({products: allProducts})
        }
    }

    // Executes when the user clicks on + button
    handleDecrement = (product, minValue) =>{
        // console.log("HandleIncrement", product)

        // Get index of the selected product
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)

        if (allProducts[index].quantity > minValue){

            // console.log(index)
            allProducts[index].quantity --

            // Update the state of current component (parent component)
            this.setState({products: allProducts})
        }
    }

    // Executes when the user lcicks on Delete (X) button in the Product component.
    handleDelete = (product) =>{
        // Get index of the selected product
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)

        if (window.confirm("Are you sure to delete?")){

            // Delete product based on index
            allProducts.splice(index, 1)

            // Update the state of current component (parent component)
            this.setState({products: allProducts})
        }

    }
}