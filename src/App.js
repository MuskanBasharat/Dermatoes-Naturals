import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductFilters from './components/ProductFilters';
import ProductsSection from './components/ProductsSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FloatingButtons from './components/FloatingButtons';
import CartSidebar from './components/CartSidebar';
import OrderFormModal from './components/OrderFormModal';
import ProductDetailPage from './components/ProductDetailPage';
import Notification from './components/Notification';
import productsData from './data/products.json';
import ScrollToTop from './components/ScrollToTop';
import './styles/main.css';

function MainContent() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState({ type: 'all' });
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [notification, setNotification] = useState(null);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const filterProducts = () => {
      if (!activeFilter || activeFilter.type === 'all') {
        return productsData;
      }

      switch (activeFilter.type) {
        case 'category':
          return productsData.filter(product => 
            product.category?.includes(activeFilter.value)
          );
        
        case 'subcategory':
          return productsData.filter(product => 
            product.category?.includes(activeFilter.category) && 
            product.subCategory?.includes(activeFilter.value)
          );
        
        case 'sticker':
          return productsData.filter(product => 
            product.sticker === activeFilter.value
          );
        
        default:
          return productsData;
      }
    };

    setFilteredProducts(filterProducts());
  }, [activeFilter]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      const notificationMsg = existingItem 
        ? `${product.name} quantity increased in cart`
        : `${product.name} added to cart`;
      
      setNotification({
        message: notificationMsg,
        type: 'success'
      });

      return existingItem
        ? prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleOrderSubmit = (formData) => {
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nOrder Details:\n${cartItems.map(item => 
      `${item.name} x ${item.quantity} - Rs.${item.price * item.quantity}`
    ).join('\n')}\n\nTotal: Rs.${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}`;
    
    const whatsappUrl = `https://wa.me/923026673345?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowOrderForm(false);
    setCartItems([]);
    setShowCart(false);
  };

  return (
    <>
      <main>
        <Routes>
          <Route path="/product-detail/:productId" element={
            <>
              <Header 
                cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
                onCartClick={() => setShowCart(true)} 
              />
              <ProductDetailPage 
                addToCart={addToCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
                setNotification={setNotification}
              />
              <ContactSection />
              <FloatingButtons />
            </>
          } />
          
          <Route path="/" element={
            <>
              <Header 
                cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
                onCartClick={() => setShowCart(true)} 
              />
              <HeroCarousel />
              <ProductFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
              <ProductsSection 
                products={filteredProducts}
                activeFilter={activeFilter}
                addToCart={addToCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
                setNotification={setNotification}
              />
              <Testimonials />
              <AboutSection />
              <ContactSection />
              <FloatingButtons />
            </>
          } />
        </Routes>
      </main>
      
      <CartSidebar 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
        cartItems={cartItems} 
        onUpdateQuantity={updateQuantity} 
        onRemoveItem={removeFromCart} 
        onOrderClick={() => {
          setShowCart(false);
          setShowOrderForm(true);
        }} 
      />
      
      {showOrderForm && (
        <OrderFormModal 
          onClose={() => setShowOrderForm(false)} 
          onSubmit={handleOrderSubmit} 
        />
      )}

      {notification && (
        <Notification 
          message={typeof notification === 'string' ? notification : notification.message} 
          onClose={() => setNotification(null)} 
        />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainContent />
    </Router>
  );
}

export default App;