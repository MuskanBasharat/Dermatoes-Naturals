import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import './ProductSection.css';

function ProductsSection({ 
  products = [], 
  activeFilter, 
  addToCart, 
  wishlist = [],
  setWishlist,
  setNotification
}) {
  
  const toggleWishlist = (productId, productName, e) => {
    e.stopPropagation();
    e.preventDefault();
    const isWishlisted = wishlist.includes(productId);
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
    setNotification({
      message: isWishlisted 
        ? `${productName} removed from wishlist` 
        : `${productName} saved to wishlist`,
      type: isWishlisted ? 'info' : 'success'
    });
  };

  const displayCategories = (product) => {
    if (Array.isArray(product.category)) {
      return product.category.join(', ');
    }
    return product.category || '';
  };

  const filterProducts = () => {
    if (!activeFilter || activeFilter.type === 'all') {
      return products;
    }

    switch (activeFilter.type) {
      case 'category':
        return products.filter(product => 
          product.category?.includes(activeFilter.value)
        );
      
      case 'subcategory':
        return products.filter(product => 
          product.category?.includes(activeFilter.category) && 
          product.subCategory?.includes(activeFilter.value)
        );
      
      case 'sticker':
        return products.filter(product => 
          product.sticker === activeFilter.value
        );
      
      default:
        return products;
    }
  };

  const filteredProducts = filterProducts();

  return (
    <section className="products-section">
      <div className="containers">
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} 
                   className={`product-card ${product.isSquare ? 'square-image' : ''}`}>
                <div className="product-badges">
                  {(product.sticker === 'Sale') && <span className="badge sale">SALE</span>}
                  {(product.sticker === "Best Seller") && <span className="badge bestseller">BESTSELLER</span>}
                  {(product.sticker === "New") && <span className="badge new">NEW</span>}
                </div>
      
                <Link 
                  to={`/product-detail/${product.id}`}
                  className="product-image" 
                  style={{ background: product.background || '#fff' }}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-overlay">
                    <span className="quick-view">Quick View</span>
                  </div>
                </Link>
                
                <div className="product-details">
                  <div className="product-meta">
                    <span className="product-category">{displayCategories(product)}</span>
                    <button 
                      className="wishlist-btn" 
                      onClick={(e) => toggleWishlist(product.id, product.name, e)}
                    >
                      {wishlist.includes(product.id) ? (
                        <FaHeart className="filled" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                  </div>
                  
                  <Link 
                    to={`/product-detail/${product.id}`}
                    className="product-name"
                  >
                    {product.name}
                  </Link>   
                  <div className="product-price">
                    {product.oldPrice && (
                      <span className="original-price">Rs.{product.oldPrice}</span>
                    )}
                    <span className="current-price">Rs.{product.price}</span>
                    {product.oldPrice && (
                      <span className="discount">
                        {Math.round((1 - product.price/product.oldPrice) * 100)}% OFF
                    </span>
                    )}
                  </div>
                  <button 
                    className="add-to-cart" 
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsSection;