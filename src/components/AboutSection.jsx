import './AboutSection.css'
function AboutSection() {
  return (
    <section  className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Dermatoes Naturals</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="https://github.com/MuskanBasharat/DermatoesNaturals/blob/main/images/main.png?raw=true" alt="About Dermatoes Naturals" />
          </div>
          <div className="about-text">
            <p>
              Dermatoes Naturals was founded in 2015 with a vision to provide natural, 
              chemical-free skincare and haircare solutions. Our products are crafted 
              with love and care, using only the finest natural ingredients.
            </p>
            <p>
              Our founder, Dr. Anjali Kapoor, a dermatologist with over 15 years of 
              experience, noticed the harmful effects of chemical-laden products on skin 
              and hair. This led her to create Dermatoes Naturals - a brand that combines 
              ancient Ayurvedic wisdom with modern scientific research.
            </p>
            <p>
              Today, we're proud to serve thousands of happy customers across India 
              with our range of 100% natural, cruelty-free products.
            </p>
            <div className="founder-signature">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzb2dq7WGe2ClEsjfc8L-yWGZyo_k6VzG6w&s" alt="Dr. Anjali Kapoor" />
              <p>Dr. Saqlain Ali<br />Founder & CEO</p>
            </div>
           <a href="https://wa.me/923026673345?text=Hey%20Dermatoes%20Naturals%20I%20want%20a%20Consultation" target="_blank" 
        rel="noopener noreferrer"> <button className='vibrate-btn'>Free Consultation</button></a>
         <a href="https://wa.me/923026673345?text=Hey%20Dermatoes%20Naturals%20I%20want%20to%20customize%20an%20order" target="_blank" 
        rel="noopener noreferrer"> <button className='vibrate-btn' id="custom-order-button">Customized Order</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;