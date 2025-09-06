import React, { useState } from 'react';
import './ProductFilters.css';

function ProductFilters({ activeFilter, setActiveFilter }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: 'Skin Care',
      id: 'skin care',
      subCategories: ['Serum', 'Sunscreen', 'Face Wash', 'Moisturizer', 'Toner', 'Cream', 'Scrub'],
    },
    {
      name: 'Body Care',
      id: 'body care',
      subCategories: ['Cream', 'Mist', 'Body Lotion', 'Body Wash', "Handwash"],
    },
    {
      name: 'Hair Care',
      id: 'hair care',
      subCategories: ['Shampoo','Hair Oil', 'Hair toner', "Hair Serum"],
    },
    {
      name: 'Offers',
      id: 'offers',
      subCategories: ['Best Seller', 'Sale'],
      isStickerBased: true
    },
  ];

  const handleCategoryClick = (category) => {
    if (activeCategory === category.name) {
      setActiveCategory(null);
      setActiveFilter({ type: 'all' });
    } else {
      setActiveCategory(category.name);
      setActiveFilter({ 
        type: 'category', 
        value: category.id 
      });
    }
  };

  const handleSubCategoryClick = (subCategory, category) => {
    if (category?.isStickerBased) {
      setActiveFilter({ 
        type: 'sticker', 
        value: subCategory 
      });
    } else {
      setActiveFilter({ 
        type: 'subcategory', 
        category: category.id,
        value: subCategory 
      });
    }
  };

  const isSubCategoryActive = (subCategory, category) => {
    if (!activeFilter) return false;
    
    if (category?.isStickerBased) {
      return activeFilter.type === 'sticker' && activeFilter.value === subCategory;
    }
    return activeFilter.type === 'subcategory' && 
           activeFilter.category === category.id && 
           activeFilter.value === subCategory;
  };

  const isCategoryActive = (categoryId) => {
    return activeFilter?.type === 'category' && activeFilter.value === categoryId;
  };

  const getCurrentCategory = () => {
    return categories.find(cat => cat.name === activeCategory);
  };

  return (
    <section className="product-filters" id='shop'>
      <div className="container">
        <h2 className="section-title">Products</h2>

        <div className="filters-wrapper">
          <div className="main-filters">
            <button
              className={`filter-button ${(!activeFilter || activeFilter.type === 'all') ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter({ type: 'all' });
                setActiveCategory(null);
              }}
            >
              All Products
            </button>

            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-button ${
                  isCategoryActive(category.id) ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {activeCategory && (
            <div className="sub-filters">
              {getCurrentCategory()?.subCategories.map((sub, index) => (
                <button
                  key={index}
                  className={`sub-filter-button ${
                    isSubCategoryActive(sub, getCurrentCategory()) ? 'active' : ''
                  }`}
                  onClick={() => handleSubCategoryClick(sub, getCurrentCategory())}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductFilters;