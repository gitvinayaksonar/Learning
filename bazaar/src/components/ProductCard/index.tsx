import { Product } from '../../types/product';
import './productCard.css';

interface ProductCardProps {
    product : Product
}
function ProductCard(props : ProductCardProps) {    
    const productObj = props.product;    
    
    const clickHandler = (productName : string = 'product') => {
        alert(`In Cart : ${productName}`)
    }

    return (
        <div className = { `productCard` } >
            <p className = 'productCard__productHeading'> {productObj.name} </p>
            <img src = {productObj.imageURL} alt = 'pic' className = 'productCard__image' />
            <p className = 'productCard__productDetails'>{productObj.description}</p>
            <div className = 'productCard__mrpBuyNowContainer'>
                <p className = 'productCard__mrp'> {`MRP Rs.${productObj.price}`} </p>
                <div onClick = {() => clickHandler(productObj.name)}>
                    <p className = 'productCard__buyNow'> Buy Now </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;

