import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaRegHeart, FaShare, FaWhatsapp } from 'react-icons/fa';
import productsData from '../data/products.json';
import OrderFormModal from './OrderFormModal'; // ✅ import your modal
import './ProductDetailPage.css';

function ProductDetailPage({ addToCart, wishlist, setWishlist, setNotification }) {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false); // ✅ modal state

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(productId));
    setProduct(foundProduct);
    if (foundProduct) {
      const firstImage = foundProduct.images 
        ? foundProduct.images[0] 
        : foundProduct.image;
      setSelectedImage(firstImage);
    }
  }, [productId]);

  const handleShare = () => {
    const currentUrl = window.location.href;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
    window.open(whatsappURL, "_blank");
  };

  // ✅ called when form is submitted in modal
  const handleWhatsAppOrder = (formData) => {
    if (!product) return;

    const phoneNumber = "923026673345"; // ✅ no +
    const currentUrl = window.location.href;

    const message =
      `*Hey Dermatoes Naturals* \n\n` +
      `*New Order Details* \n\n` +
      `*Product:* ${product.name}\n` +
      `*Quantity:* ${quantity}\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Address:* ${formData.address}\n` +
      `*Phone:* ${formData.phone}\n\n` +
      `Delivery Charges: Rs.300\n\n`+
      `Link: ${currentUrl}\n\n` +
      `Please confirm my order.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowOrderModal(false); // ✅ close modal after submit
  };

  const toggleWishlist = () => {
    if (!product) return;
    const isWishlisted = wishlist.includes(product.id);
    setWishlist(prev => 
      prev.includes(product.id) 
        ? prev.filter(id => id !== product.id) 
        : [...prev, product.id]
    );
    setNotification({
      message: isWishlisted 
        ? `${product.name} removed from wishlist` 
        : `${product.name} saved to wishlist`,
      type: isWishlisted ? 'info' : 'success'
    });
  };

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <p>The product you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </div>
    );
  }

  const imageVariants = product.images 
    ? product.images 
    : product.image2 
      ? [product.image, product.image2] 
      : [product.image];

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail-grid">
          {/* --- Gallery --- */}
          <div className="product-gallery-section">
            <div className={`main-image ${product.isSquare ? 'square-image' : ''}`} style={{ background: product.background || '#fff' }}>
              <img 
                src={selectedImage} 
                alt={product.name} 
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500?text=Image+Not+Available';
                }}
              />
            </div>
            <div className="thumbnail-row">
              {imageVariants.map((img, index) => (
                img && (
                  <div 
                    key={index} 
                    className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} variant ${index + 1}`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )
              ))}
            </div>
          </div>

          {/* --- Info Section --- */}
          <div className="product-info-section">
            <div className="product-header">
              <h1>{product.name}</h1>
              <div className="product-subheader">
                <span className="category-badge" style={{ background: product.background || '#fff' }}>{product.category[0]}</span>
                <span className="subcategory-badge" style={{ background: product.background || '#fff' }}>{product.subCategory}</span>
              </div>
            </div>

            <div className="product-metas">
              <div className="price-section">
                <span className="current-price">Rs. {product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <div className="price-comparison">
                    <span className="original-price">Rs. {product.oldPrice.toLocaleString()}</span>
                    <span className="discount-badge">
                      {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>
              <div className="product-intro">
                <p>{product.shortDescription}</p>
              </div>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <div className="action-buttons">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => {
                    addToCart({
                      ...product,
                      quantity,
                      image: selectedImage
                    });
                  }}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                
                <button 
                  className="whatsapp-order-btn"
                  onClick={() => setShowOrderModal(true)} // ✅ open modal
                >
                  <FaWhatsapp /> Order via WhatsApp
                </button>
              </div>
            </div>

            <div className="wishlist-share">
              <button 
                className="wishlist-btn"
                onClick={toggleWishlist}
              >
                {isWishlisted ? (
                  <><FaHeart className="filled" /> Saved</>
                ) : (
                  <><FaRegHeart /> Save for later</>
                )}
              </button>
              <button className="share-btn" onClick={handleShare}>
                <FaShare /> Share
              </button>
            </div>
          </div>

          {/* --- Details --- */}
          <div className="product-details-section">
            <div className="section">
              <h2>Product Description</h2>
              <p>{product.longDescription}</p>
            </div>
            <div className="section">
              <h2>Key Ingredients</h2>
              <ul className="ingredients-list">
                {product.keyIngredients?.split(', ').map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="section">
              <h2>How To Use</h2>
              <p>{product.usage}</p>
            </div>
            <div className="section">
              <h2>Ingredients</h2>
              <p>{product.ingredients}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal appears when state is true */}
      {showOrderModal && (
        <OrderFormModal 
          onClose={() => setShowOrderModal(false)} 
          onSubmit={handleWhatsAppOrder} 
        />
      )}
    </div>
  );
}

export default ProductDetailPage;
