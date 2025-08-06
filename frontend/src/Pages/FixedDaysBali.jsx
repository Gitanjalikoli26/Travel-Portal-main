import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FixedDaysBali.css'; // Ensure this CSS file exists and is correctly styled

// --- Reusable Components (No changes needed, assuming they are defined correctly) ---

const DestinationCard = ({ image, title, price, to, type }) => {
    return (
        <div className="destination-card">
            <img src={image} alt={title} className="destination-card-image" />
            <div className="destination-card-content">
                {type && <span className="destination-card-type">{type}</span>}
                <h3>{title}</h3>
                {price && <p className="destination-card-price">{price}</p>}
                {to && (
                    <Link to={to} className="destination-card-button">
                        Book Now
                    </Link>
                )}
            </div>
        </div>
    );
};

const PackageCard = ({ image, title, description, price, to }) => {
    return (
        <div className="package-card">
            <img src={image} alt={title} className="package-card-image" />
            <div className="package-card-content">
                <h3>{title}</h3>
                {description && <p>{description}</p>}
                {price && <p className="package-card-price">{price}</p>}
                <Link to={to} className="package-card-button">
                    View Details
                </Link>
            </div>
        </div>
    );
};

const PackageListItem = ({ image, title, nights, itinerary, rating, price, to, buttonText = "Customize" }) => {
    return (
        <div className="package-list-item">
            <div className="package-list-item-image-container">
                <img src={image} alt={title} className="package-list-item-image" />
            </div>
            <div className="package-list-item-details">
                <h3>{title}</h3>
                <div className="rating-stars">
                    {'⭐'.repeat(Math.floor(rating))}
                    {'☆'.repeat(5 - Math.floor(rating))}
                </div>
                <p><strong>Nights:</strong> {nights}</p>
                <p><strong>Itinerary:</strong> {itinerary}</p>
            </div>
            <div className="package-list-item-actions">
                <p className="package-list-item-price">{price}</p>
                <Link to={to} className="package-list-item-button">
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                {question}
                <span className={`faq-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
            </button>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};


const FixedDaysBali = () => {
    console.log("✅ FixedDaysBali rendered");

    // --- Updated Data for Bali ---
    const trendingDestinations = [
        {
            id: 1,
            // image: "/bali-temple.jpg", // Placeholder for a Bali temple image
            image: "/public/bali-rice-terraces.jpg", // Example: Assuming you have a Bali image
            title: "DESTINATION GUIDE FOR BALI",
            price: null,
            to: "/bali-destination-guide",
            type: "GUIDE",
        },
        {
            id: 2,
            // image: "/bali-beach-club.jpg", // Placeholder for a Bali beach club/leisure image
            image: "/public/bali-beach-sunset.jpg", // Example: Assuming you have a Bali image
            title: "Ubud & Seminyak Leisure Tour",
            price: "at IDR 800,000",
            to: "/ubud-seminyak-tour",
            type: "LEISURE",
        },
        {
            id: 3,
            // image: "/bali-rice-terraces.jpg", // Placeholder for Bali nature/explore
            image: "/public/bali-waterfall.jpg", // Example: Assuming you have a Bali image
            title: "Explore Bali's Natural Wonders",
            price: null,
            to: "/explore-bali-nature",
            type: "EXPLORE",
        },
        {
            id: 4,
            // image: "/monkey-forest.jpg", // Placeholder for Monkey Forest
            image: "/public/bali-monkey-forest.jpg", // Example: Assuming you have a Bali image
            title: "Ubud Monkey Forest Visit",
            price: "Tickets from IDR 80,000",
            to: "/monkey-forest",
            type: "WILDLIFE",
        },
        {
            id: 5,
            // image: "/waterbom-bali.jpg", // Placeholder for Waterbom Bali
            image: "/public/bali-waterpark.jpg", // Example: Assuming you have a Bali image
            title: "Waterbom Bali Aquapark",
            price: "From IDR 500,000",
            to: "/waterbom-bali",
            type: "WATERPARK",
        },
        {
            id: 6,
            // image: "/bali-cooking-class.jpg", // Placeholder for unique Bali experience
            image: "/public/bali-cooking-class.jpg", // Example: Assuming you have a Bali image
            title: "Balinese Cooking Class",
            price: "From IDR 350,000",
            to: "/bali-cooking-class",
            type: "EXPERIENCE",
        },
    ];

    const recommendedPackagesGrid = [
        {
            id: 1,
            // image: "/bali-getaway.jpg", // Placeholder
            image: "/public/bali-villa.jpg", // Example: Assuming you have a Bali image
            title: "6 Days | 5 Nights Bali Escape",
            description: "Discover the spiritual and natural beauty of Bali.",
            price: "Starting from ₹40,000",
            to: "/packages/bali-escape",
        },
        {
            id: 2,
            // image: "/bali-adventure.jpg", // Placeholder
            image: "/public/bali-rafting.jpg", // Example: Assuming you have a Bali image
            title: "Bali Adventure & Culture Package",
            description: "White water rafting, volcano treks, and temple visits.",
            price: "Starting from ₹48,000",
            to: "/packages/bali-adventure",
        },
        {
            id: 3,
            // image: "/bali-luxury.jpg", // Placeholder
            image: "/public/bali-luxury-resort.jpg", // Example: Assuming you have a Bali image
            title: "Luxury Bali Honeymoon",
            description: "Indulge in exclusive resorts and serene experiences.",
            price: "Starting from ₹75,000",
            to: "/packages/bali-luxury",
        },
    ];

    const recommendedPackagesList = [
        {
            id: 101,
            // image: "/bali-sunset.jpg",
            image: "/public/bali-temple-gate.jpg",
            title: "5N Bali Budget Friendly",
            nights: "5 Nights",
            itinerary: "DPS Airport to Seminyak Hotel | Ubud Tour | Beach relaxing",
            rating: 4,
            price: "USD 550",
            to: "/packages/bali-budget-friendly",
        },
        {
            id: 102,
            // image: "/bali-rice-terraces-small.jpg",
            image: "/public/bali-rice-terraces.jpg",
            title: "7N Bali Cultural Immersion",
            nights: "7 Nights",
            itinerary: "Ubud Stay | Temple Tour | Rice Terraces | Cooking Class",
            rating: 5,
            price: "USD 920",
            to: "/packages/bali-cultural",
        },
        {
            id: 103,
            // image: "/bali-waterfall-small.jpg",
            image: "/public/bali-waterfall.jpg",
            title: "6N Best of Bali & Gili Islands",
            nights: "6 Nights",
            itinerary: "Beach relaxation | Island hopping | Snorkeling",
            rating: 5,
            price: "USD 1100",
            to: "/packages/best-of-bali-gili",
        },
        {
            id: 104,
            // image: "/bali-temple-small.jpg",
            image: "/public/bali-beach-sunset.jpg",
            title: "4N Bali Highlights",
            nights: "4 Nights",
            itinerary: "Tanah Lot Temple | Kuta Beach | Waterbom Bali",
            rating: 4,
            price: "USD 620",
            to: "/packages/bali-highlights",
        },
    ];

    const expertProfile = {
        image: "/ai-generated-9562243_1920.jpg", // Keep generic expert image
        name: "Aisha Sharma", // New expert name for Bali
        title: "Bali Expert",
        phone: "+919876543210", // Updated phone
        email: "bali.expert@akbartravelsonline.com", // Updated email
    };

    // --- Experience Showcase Images - Replaced Dubai specific with generic/Bali if available ---
    const experienceShowcaseImages = [
        "/public/bali-experience.jpg",   // Placeholder specific Bali image
        "/maldives.jpg",           // Your specific Maldives image
        "/south-asia east.jpg"     // Your specific South-east Asia image
    ];


    // --- State for Experience Showcase Carousel ---
    const [currentExperienceImageIndex, setCurrentExperienceImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentExperienceImageIndex((prevIndex) =>
                (prevIndex + 1) % experienceShowcaseImages.length
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [experienceShowcaseImages.length]); // Re-run if the number of images changes

    // --- Function to determine the text based on the current image index ---
    const getExperienceText = () => {
        switch (currentExperienceImageIndex) {
            case 0:
                return (
                    <h2 className="experience-heading">
                        Give your Customers the <span className="highlight">Best Experience</span> in
                        <ul>
                            <li>✅ Bali</li>
                        </ul>
                    </h2>
                );
            case 1:
                return (
                    <h2 className="experience-heading">
                        Give your Customers the <span className="highlight">Best Experience</span> in
                        <ul>
                            <li>✅ Maldives</li>
                        </ul>
                    </h2>
                );
            case 2:
                return (
                    <h2 className="experience-heading">
                        Give your Customers the <span className="highlight">Best Experience</span> in
                        <ul>
                            <li>✅ South-east Asia</li>
                        </ul>
                    </h2>
                );
            default:
                return (
                    <h2 className="experience-heading">
                        Give your Customers the <span className="highlight">Best Experience</span> in
                        <ul>
                            <li>✅ Bali</li>
                            <li>✅ Maldives</li>
                            <li>✅ South-east Asia</li>
                        </ul>
                    </h2>
                );
        }
    };


    const customerStories = [
        {
            id: 1,
            image: "/Screenshot (167).jpg", // Re-using generic customer images
            rating: 5,
            text: "Our trip to Bali was absolutely magical! Everything was perfectly organized from start to finish. Highly recommend.",
        },
        {
            id: 2,
            image: "/Screenshot (168).jpg",
            rating: 4,
            text: "The Balinese cultural experiences were delightful throughout. The rice terraces and temples were unforgettable!",
        },
        {
            id: 3,
            image: "/Screenshot (169).jpg",
            rating: 5,
            text: "Amazing service! Everything was seamless. From airport pickup to hotel, every detail was perfect. Thank you for our Bali adventure!",
        },
        {
            id: 4,
            image: "/Screenshot (170).jpg",
            rating: 4,
            text: "Bali exceeded our expectations, and this trip was a big part of it. We have amazing memories now.",
        },
        {
            id: 5,
            image: "/Screenshot (171).jpg",
            rating: 5,
            text: "Couldn't ask for a better experience. The team was so helpful and the itinerary for Bali was just perfect!",
        },
    ];

    const faqs = [
        {
            id: 1,
            question: "What all things are included in Bali Temple Tour?",
            answer: "The Bali Temple Tour typically includes visits to iconic temples such as Tanah Lot, Uluwatu, Besakih Temple, and Tirta Empul, often with scenic stops at rice paddies or coffee plantations.",
        },
        {
            id: 2,
            question: "Is a visa required for Bali (Indonesia) for Indian citizens?",
            answer: "Indian citizens generally receive a Visa on Arrival (VoA) for tourism purposes in Indonesia, including Bali, for a stay of up to 30 days. Please check the latest requirements before travel.",
        },
        {
            id: 3,
            question: "Which airlines do you provide for Bali travel from India?",
            answer: "We partner with major airlines for routes to Bali including Batik Air, Malaysia Airlines, Singapore Airlines, Thai Airways, and various other international carriers, depending on availability and preference.",
        },
        {
            id: 4,
            question: "Do you provide customized itineraries for groups in Bali?",
            answer: "Yes, we specialize in creating customized itineraries for groups of all sizes visiting Bali. Please contact our team with your specific requirements, and we will tailor a package for you.",
        },
    ];

    // Updated Gallery Images with Bali-specific placeholders
    const galleryImages = [
        "/public/bali-beach.jpg", // Placeholder
        "/public/bali-rice-terraces.jpg", // Placeholder
        "/public/bali-temple.jpg", // Placeholder
        "/public/bali-waterfall.jpg", // Placeholder
        "/public/bali-cooking-class.jpg", // Placeholder
        "/public/bali-market.jpg", // Placeholder
        "/public/bali-elephant.jpg", // Placeholder
        "/public/bali-villa-interior.jpg", // Placeholder
        "/public/bali-surfing.jpg", // Placeholder
        "/public/bali-yoga.jpg", // Placeholder
        "/Screenshot (175).jpg", // Re-using generic images if desired
        "/Screenshot (176).jpg", // Re-using generic images if desired
    ];

    // ==========================================================
    // IMAGE CAROUSEL LOGIC - Updated with new images
    // ==========================================================
    const bannerImages = [
        '/public/bali-banner-1.jpg', // Placeholder for Bali banner image 1
        '/public/bali-banner-2.jpg', // Placeholder for Bali banner image 2
        '/public/bali-banner-3.jpg', // Placeholder for Bali banner image 3
        '/public/bali-banner-4.jpg', // Placeholder for Bali banner image 4
        '/public/bali-banner-5.jpg', // Placeholder for Bali banner image 5
    ];


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                (prevIndex + 1) % bannerImages.length
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, [bannerImages.length]);

    // ==========================================================
    // SEARCH BAR LOGIC (no changes)
    // ==========================================================
    const [searchDate, setSearchDate] = useState('2025-01-21');
    const [nights, setNights] = useState('');
    const [company, setCompany] = useState('');
    const [adultsChildren, setAdultsChildren] = useState('');
    const [roomGuests, setRoomGuests] = useState('1 Room, 2 Guests');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search parameters submitted:", {
            searchDate,
            nights,
            company,
            adultsChildren,
            roomGuests,
        });
        alert(`Searching for packages:
        Date: ${searchDate}
        Nights: ${nights}
        Company: ${company}
        Adults & Children: ${adultsChildren}
        Rooms & Guests: ${roomGuests}`);
    };

    return (
        <div className="bali-page">
            {/* ========================================================================
                Top Navigation Bar Section (White) - REVISED FOR MINIMAL CONTENT
                This should ONLY contain your logo and possibly other global nav links
                if they are unique to this page, NOT login forms.
                ========================================================================
            */}
            <section className="top-navbar-section">
                <div className="container top-navbar-content">
                    <div className="navbar-logo">
                        {/* Ensure 'akbartravels-logo.png' is in your public folder */}
                        <img src="/akbartravels-logo.png" alt="Akbar Travels Online" />
                    </div>
                    {/* REMOVED DUPLICATE LOGIN/SIGNUP ELEMENTS HERE */}
                    {/* If you have other GLOBAL links that should appear here, add them */}
                    <div className="navbar-links">
                        {/* Example: <Link to="/about">About Us</Link> */}
                        {/* Example: <Link to="/contact">Contact</Link> */}
                    </div>
                </div>
            </section>

            {/* ========================================================================
                Main Banner: Trusted DMC for Bali (This remains blue) - Updated image here
                ========================================================================
            */}
            <section className="dmc-hero-banner">
                <div className="container dmc-banner-content">
                    <div className="dmc-banner-text">
                        <h1>Trusted DMC for <br />Bali</h1>
                        <ul>
                            <li>✅ Best on-ground Service with Own Local Team</li>
                            <li>✅ Simple Payment & TCS Process</li>
                            <li>✅ Faster Booking Confirmation</li>
                        </ul>
                    </div>
                    <div className="dmc-banner-image-container">
                        <img
                            src={bannerImages[currentImageIndex]} // This will rotate through your bannerImages array
                            alt="Bali Landscape"
                            className="dmc-banner-image"
                        />
                        <div className="dmc-experiences-info">
                            <p className="experiences-count">20,000+</p>
                            <p className="experiences-text">Experiences</p>
                            <Link to="/experiences" className="view-more-button">View More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trending in Bali Section - UPDATED IMAGES */}
            <section className="trending-section container">
                <h2 className="section-title">Trending in Bali</h2>
                <div className="trending-cards-container">
                    {trendingDestinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            image={destination.image}
                            title={destination.title}
                            price={destination.price}
                            to={destination.to}
                            type={destination.type}
                        />
                    ))}
                </div>
            </section>

            {/* Our Top Recommended Packages Section (Grid View) */}
            <section className="recommended-packages-section container">
                <h2 className="section-title">Our Top Recommended Packages</h2>
                <div className="recommended-packages-grid">
                    {recommendedPackagesGrid.map((pkg) => (
                        <PackageCard
                            key={pkg.id}
                            image={pkg.image}
                            title={pkg.title}
                            description={pkg.description}
                            price={pkg.price}
                            to={pkg.to}
                            type={pkg.type}
                        />
                    ))}
                </div>
            </section>

            {/* New Section: Package List (with functional search bar) */}
            <section className="package-list-section container">
                <form onSubmit={handleSearchSubmit} className="package-list-search-bar">
                    <input
                        type="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="No of Nights"
                        value={nights}
                        onChange={(e) => setNights(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="The Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Adults & Children"
                        value={adultsChildren}
                        onChange={(e) => setAdultsChildren(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="1 Room, 2 Guests"
                        value={roomGuests}
                        onChange={(e) => setRoomGuests(e.target.value)}
                    />
                    <button type="submit" className="search-package-button">Search</button>
                </form>
                <div className="package-list-items-container">
                    {recommendedPackagesList.map((item) => (
                        <PackageListItem
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            nights={item.nights}
                            itinerary={item.itinerary}
                            rating={item.rating}
                            price={item.price}
                            to={item.to}
                        />
                    ))}
                </div>
            </section>

            {/* Existing CTA */}
            <section className="bali-cta">
                <h2>Ready to explore Bali?</h2>
                <Link to="/book-now" className="cta-button">Book Now</Link>
            </section>

            {/* New Section: Expert Profile & OnTrip Live Banner */}
            <section className="expert-ontrip-section container">
                <div className="expert-profile-card">
                    <img src={expertProfile.image} alt={expertProfile.name} className="expert-image" />
                    <div className="expert-details">
                        <p className="expert-welcome">Welcome to</p>
                        <p className="expert-name"><strong>{expertProfile.name}</strong></p>
                        <p className="expert-title">{expertProfile.title}</p>
                        <p className="expert-contact">
                            <a href={`tel:${expertProfile.phone}`}>{expertProfile.phone}</a>
                        </p>
                        <p className="expert-contact">
                            <a href={`mailto:${expertProfile.email}`}>{expertProfile.email}</a>
                        </p>
                    </div>
                </div>
                <div className="ontrip-banner">
                    <div className="ontrip-content">
                        <h2>All New OnTrip is Live!</h2>
                        <p>Seamless & Stress-Free Travel, Made Possible</p>
                        <Link to="/ontrip" className="ontrip-button">Check Now</Link>
                    </div>
                    <div className="ontrip-graphic">
                        <span role="img" aria-label="smiley face" className="smiley-face">🙂</span>
                    </div>
                </div>
            </section>

            {/* Experience Showcase Section - MODIFIED TO BE A CAROUSEL with TEXT OVERLAY */}
            <section className="experience-showcase-section container">
                <div className="experience-images-carousel-container">
                    {experienceShowcaseImages.length > 0 && (
                        <img
                            src={experienceShowcaseImages[currentExperienceImageIndex]}
                            alt={`Experience ${currentExperienceImageIndex + 1}`}
                            className="experience-showcase-single-image"
                        />
                    )}
                    <div className="experience-text-overlay"> {/* Overlay for text */}
                        {getExperienceText()} {/* Now getExperienceText returns the h2 */}
                    </div>
                </div>
            </section>

            {/* Customer Stories Section */}
            <section className="customer-stories-section container">
                <h2 className="section-title">Customer Stories</h2>
                <div className="customer-stories-carousel">
                    {customerStories.map((story) => (
                        <div key={story.id} className="customer-story-card">
                            <img src={story.image} alt="Customer" className="customer-story-image" />
                            <div className="customer-story-overlay">
                                <span className="play-button">▶</span> {/* Play button icon */}
                            </div>
                            <div className="customer-story-content">
                                <div className="customer-rating">
                                    {'⭐'.repeat(story.rating)}
                                    {'☆'.repeat(5 - story.rating)}
                                </div>
                                <p>{story.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Your Agency - Your App! Banner Section */}
            <section className="agency-app-banner-section">
                <div className="container agency-app-content">
                    <div className="agency-app-text">
                        <h2>Your Agency - Your App!</h2>
                        <p>for ensuring best <span className="highlight">OnTrip</span> Experience</p>
                        <span role="img" aria-label="airplane" className="airplane-icon">✈️</span>
                    </div>
                    <div className="agency-app-graphic">
                        <img src="/Screenshot (180).png" alt="App on Phone" className="phone-graphic" />
                        <p className="graphic-text">Vidhi Travels</p>
                        <img src="/Screenshot (181).jpg" alt="Lady" className="lady-graphic" />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section container">
                <h2 className="section-title">FAQ</h2>
                <div className="faq-list">
                    {faqs.map((faq) => (
                        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>

            {/* Gallery Section - UPDATED IMAGES */}
            <section className="gallery-section container">
                <h2 className="section-title">Gallery</h2>
                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
                    ))}
                </div>
            </section>

            {/* Footer Section - Assuming a simple one for now */}
            <footer className="bali-footer">
                <div className="container footer-content">
                    <p>&copy; 2025 Akbar Travels Online. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FixedDaysBali;