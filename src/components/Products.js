import React, {Component} from 'react';
import axios from 'axios';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            products : []
        }
        
    }

    componentDidMount() {
        axios.get("/api/products").then(res => {
            console.log(res.data);
            
            this.setState({
                products : res.data
            });
        });
    }

    render() {
        let mappedProducts = this.state.products.map( (product, i) => {
            return(
                <div key={i}>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            );
        })
        return(
            <div>
                <h1>Product Page!</h1>
                {mappedProducts}    
            </div>
        );
    }
}

export default Products;