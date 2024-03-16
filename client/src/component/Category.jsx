import React from 'react'
import { categories } from '../Data'
import { Link } from 'react-router-dom'
const Category = () => {
    return (
        <div className='categories'>
            <h1>Explore Top Categories</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam omnis doloribus provident quod velit rerum odio ad, eius maiores porro quidem ducimus iusto incidunt qui atque commodi aliquid expedita. Autem ut similique quis ea non qui beatae quo iusto consectetur maxime cumque ipsam vitae, adipisci dolor! Obcaecati quisquam repellat ut?
            </p>
            <div className="categories_list d-flex gap-4">
                {categories?.slice(1, 7).map((Category, index) => (
                    <Link to="" key={index}>
                        <div className='category'>
                            <img src={Category.img} alt={Category.label} style={{height:"200px",width:"200px"}} />
                            <div className="overlay"></div>
                            <div className="category_text">
                                <div className="category_text_icon">{Category.icon}</div>
                                <p>{Category.label}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Category