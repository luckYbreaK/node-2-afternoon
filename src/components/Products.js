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
        return(
            <h1>Product Page!</h1>
        );
    }
}

export default Products;