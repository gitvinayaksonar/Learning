import { useNavigate } from 'react-router-dom';
import { Category } from '../../../../types/categories';
import './category.css';

interface categoryCard {
    category: Category,
    index: number
}
function CategoryCard(props: categoryCard) {
    const navigate = useNavigate();
    const categoryObj = props.category;
    const order = props.index % 2 === 0 ? 0 : 1;

    const clickHandler = (catId : string) => {
        navigate(`/products?${catId}`)
    }
    
    return (
        <div className = 'categoryCardContainer container' >
            <div className="row">
                <div className= 'col-sm-8 col-md-6 categoryCardContainer__firstSection' style = {{ order : order}} >
                    <img src={categoryObj.imageUrl} alt='pic'  />
                </div>
                <div className={`col-sm-4 col-md-6 categoryCardContainer__secondSection`} >
                    <h5 className={`categoryCardContainer__cartHeading`} >{categoryObj.name}</h5>
                    <p className={`categoryCardContainer__cartPara`}>{categoryObj.description}</p>
                    <div className={`categoryCardContainer__exporeNow`} onClick = {() => clickHandler(categoryObj.id)}>                   
                            Explore {categoryObj.name}                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;

