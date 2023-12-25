import React from 'react';
import { shorten } from '../../helper/Functions';
import { Link } from 'react-router-dom';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='product' className='w-32 h-32'/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Detail</Link>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;