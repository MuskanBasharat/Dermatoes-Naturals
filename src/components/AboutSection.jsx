import './AboutSection.css'
function AboutSection() {
  return (
    <section  className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Dermatoes Naturals</h2>
        <div className='intro-text'>
        <p> Welcome to <strong>Dermatoes Naturals</strong>, your premier destination for innovative, effective, and naturally inspired skincare solutions. </p>
            
              </div>
        <div className="about-content">
          <div className="about-image">
            <img src="https://github.com/MuskanBasharat/DermatoesNaturals/blob/main/images/main.png?raw=true" alt="About Dermatoes Naturals" />
          </div>
          <div className="about-text">
             <p> Founded by <strong>Dr. Saqlain Basharat Ali, Pharm.D</strong>, our visionary Founder and CEO, our brand is built on a foundation of expertise,
              innovation, and a commitment to quality. Under
              <strong>Dr. Saqlain Basharat Ali’s</strong> leadership, <strong>Dermatoes Naturals</strong> has emerged as a trusted name in the skincare industry, 
              offering a range of products that cater to diverse skin types and concerns. </p>
               <p> Our formulations are carefully crafted to harness the power of nature, combined with cutting-edge science, to deliver exceptional results.
                 At <strong>Dermatoes Naturals</strong>, we believe in empowering individuals to 
               unlock their natural glow and confidence. </p>
                <p> Our products are designed to be more than just skincare – they're a ritual of self-care, a celebration of individuality, and a commitment to healthy,
                   radiant skin. From soothing moisturizers to 
                  brightening serums, our range is tailored to address specific skin concerns, ensuring that everyone can find their perfect match. </p>
                 <p> What sets <strong>Dermatoes Naturals</strong> apart is our unwavering dedication to quality, safety, and efficacy. Every product that bears the 
                 <strong>Dermatoes Naturals</strong> name is backed by rigorous testing, ensuring that it meets the highest standards of performance and safety. </p>
                  <p> Our team of experts works tirelessly to innovate and improve, always pushing the boundaries of what's possible in skincare. At <strong>Dermatoes Naturals</strong>, 
                  we're not just about products – we're about people. We're about helping you achieve the skin you've always dreamed of, and the confidence that comes with it. </p> 
            <p> Join us on a journey to radiant, healthy skin, and discover the <strong>Dermatoes Naturals</strong> difference. </p>
          {/*  <div className="founder-signature">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzb2dq7WGe2ClEsjfc8L-yWGZyo_k6VzG6w&s" alt="Dr. Anjali Kapoor" />
              <p>Dr. Saqlain Ali<br />Founder & CEO</p>
            </div> */}
     
          </div>
        </div>
        <div>
                <a href="https://wa.me/923026673345?text=Hey%20Dermatoes%20Naturals%20I%20want%20a%20Consultation" target="_blank" 
        rel="noopener noreferrer"> <button className='vibrate-btn'>Free Consultation</button></a>
         <a href="https://wa.me/923026673345?text=Hey%20Dermatoes%20Naturals%20I%20want%20to%20customize%20an%20order" target="_blank" 
        rel="noopener noreferrer"> <button className='vibrate-btn' id="custom-order-button">Customized Order</button></a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;