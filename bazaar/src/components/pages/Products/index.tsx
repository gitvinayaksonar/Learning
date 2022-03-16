import ProductsCategoryList from "../../ProductsCategoryList";
import ProductsList from "../../ProductsList";
import './products.css';

export const Products = () => {    
    return (
        <>           
            <div className = {`productsPage container`}>
                <div className="row">
                    <div className = {`col-sm-2`}>
                        <ProductsCategoryList />
                    </div>
                    <div className = {`col-sm-10`}>
                        <ProductsList />
                    </div>
                </div>  
            </div>            
        </>        
    )
};