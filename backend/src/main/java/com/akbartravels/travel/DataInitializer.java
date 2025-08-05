package com.akbartravels.travel;

import com.akbartravels.travel.model.*;
import com.akbartravels.travel.repository.*;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Component
public class DataInitializer implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final DestinationRepository destinationRepository;
    private final TravelPackageRepository travelPackageRepository;
    private final CustomerStoryRepository customerStoryRepository;
    private final ExpertProfileRepository expertProfileRepository;
    private final FAQRepository faqRepository;


    public DataInitializer(UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           DestinationRepository destinationRepository,
                           TravelPackageRepository travelPackageRepository,
                           CustomerStoryRepository customerStoryRepository,
                           ExpertProfileRepository expertProfileRepository,
                           FAQRepository faqRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.destinationRepository = destinationRepository;
        this.travelPackageRepository = travelPackageRepository;
        this.customerStoryRepository = customerStoryRepository;
        this.expertProfileRepository = expertProfileRepository;
        this.faqRepository = faqRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        // --- 1. Initialize Users ---
        System.out.println("--- Initializing Users ---");
        if (userRepository != null && passwordEncoder != null) {
            if (userRepository.findByEmail("admin@travel.com").isEmpty()) {
                User adminUser = new User();
                adminUser.setEmail("admin@travel.com");
                adminUser.setPassword(passwordEncoder.encode("password"));
                adminUser.setRole(Role.ADMIN);
                adminUser.setName("Admin User");
                userRepository.save(adminUser);
                System.out.println("Admin user created.");
            }

            if (userRepository.findByEmail("agent1@travel.com").isEmpty()) {
                User agentUser = new User();
                agentUser.setEmail("agent1@travel.com");
                agentUser.setPassword(passwordEncoder.encode("password"));
                agentUser.setRole(Role.AGENT);
                agentUser.setName("Agent One");
                userRepository.save(agentUser);
                System.out.println("Agent user created.");
            }

            if (userRepository.findByEmail("sales1@travel.com").isEmpty()) {
                User salesUser = new User();
                salesUser.setEmail("sales1@travel.com");
                salesUser.setPassword(passwordEncoder.encode("password"));
                salesUser.setRole(Role.SALES);
                salesUser.setName("Sales Representative");
                userRepository.save(salesUser);
                System.out.println("Sales user created.");
            }
        } else {
            System.err.println("Warning: UserRepository or PasswordEncoder not available. Skipping user initialization.");
        }


        // --- 2. Initialize Destinations ---
        System.out.println("--- Initializing Destinations ---");
        if (destinationRepository.count() == 0) {
            Destination dubai = new Destination(null, "Dubai", "Experience the opulence and modern marvels of Dubai.", "/images/dubai.jpg");
            System.out.println("Saving Destination: " + dubai.getName() + ", Image URL: " + dubai.getImageUrl());

            Destination maldives = new Destination(null, "Maldives", "Relax in the pristine beaches and turquoise waters of Maldives.", "/images/maldives-beach.jpg");
            System.out.println("Saving Destination: " + maldives.getName() + ", Image URL: " + maldives.getImageUrl());

            Destination bali = new Destination(null, "Bali", "Discover the spiritual and natural beauty of Bali.", "/images/south-asia east.jpg");
            System.out.println("Saving Destination: " + bali.getName() + ", Image URL: " + bali.getImageUrl());

            List<Destination> destinations = Arrays.asList(dubai, maldives, bali);
            destinationRepository.saveAll(destinations);
            System.out.println("Destinations created.");
        }

        // --- 3. Initialize Travel Packages ---
        System.out.println("--- Initializing Travel Packages ---");
        if (travelPackageRepository.count() == 0) {
            Optional<Destination> dubaiOpt = destinationRepository.findByName("Dubai");
            Optional<Destination> maldivesOpt = destinationRepository.findByName("Maldives");
            Optional<Destination> baliOpt = destinationRepository.findByName("Bali");

            if (dubaiOpt.isPresent() && maldivesOpt.isPresent() && baliOpt.isPresent()) {
                Destination dubai = dubaiOpt.get();
                Destination maldives = maldivesOpt.get();
                Destination bali = baliOpt.get();

                TravelPackage dubaiLuxury = new TravelPackage(null, "Dubai Luxury Getaway", "A 7-day luxurious trip to Dubai including city tours and desert safari.", 1500.00, 7, "/images/burj-khalifa-2212978_1920.jpg", dubai);
                System.out.println("Saving Package: " + dubaiLuxury.getName() + ", Image URL: " + dubaiLuxury.getImageUrl());

                TravelPackage dubaiCityLights = new TravelPackage(null, "Dubai City Lights", "A short 4-day tour focusing on Dubai's iconic landmarks and nightlife.", 800.00, 4, "/images/downtown-4045036_1920.jpg", dubai);
                System.out.println("Saving Package: " + dubaiCityLights.getName() + ", Image URL: " + dubaiCityLights.getImageUrl());

                TravelPackage dubaiDesertSafari = new TravelPackage(null, "Dubai Desert Safari", "Experience thrilling dune bashing, camel rides, and a traditional desert camp.", 450.00, 2, "/images/camel-4959997_1920.jpg", dubai);
                System.out.println("Saving Package: " + dubaiDesertSafari.getName() + ", Image URL: " + dubaiDesertSafari.getImageUrl());

                TravelPackage dubaiWaterAdventures = new TravelPackage(null, "Dubai Aquatic Adventures", "Exciting water activities including yacht cruises, water parks, and beach relaxation.", 700.00, 3, "/images/boat-7767575_1920.jpg", dubai);
                System.out.println("Saving Package: " + dubaiWaterAdventures.getName() + ", Image URL: " + dubaiWaterAdventures.getImageUrl());

                TravelPackage dubaiIconicViews = new TravelPackage(null, "Dubai Iconic Views Tour", "Visit the most photographed landmarks of Dubai including the Dubai Frame and JBR.", 250.00, 1, "/images/ferris-wheel-4792152_1920.jpg", dubai);
                System.out.println("Saving Package: " + dubaiIconicViews.getName() + ", Image URL: " + dubaiIconicViews.getImageUrl());

                TravelPackage maldivesHoneymoon = new TravelPackage(null, "Maldives Honeymoon", "An unforgettable 5-day honeymoon retreat in an overwater bungalow.", 2500.00, 5, "/images/maldives-beach.jpg", maldives);
                System.out.println("Saving Package: " + maldivesHoneymoon.getName() + ", Image URL: " + maldivesHoneymoon.getImageUrl());

                TravelPackage baliAdventure = new TravelPackage(null, "Bali Adventure Tour", "Explore volcanoes, rice terraces, and temples on this 10-day adventure.", 1200.00, 10, "/images/south-asia east.jpg", bali);
                System.out.println("Saving Package: " + baliAdventure.getName() + ", Image URL: " + baliAdventure.getImageUrl());

                List<TravelPackage> packages = Arrays.asList(dubaiLuxury, dubaiCityLights, dubaiDesertSafari, dubaiWaterAdventures, dubaiIconicViews, maldivesHoneymoon, baliAdventure);
                travelPackageRepository.saveAll(packages);
                System.out.println("Travel packages created.");
            } else {
                System.err.println("Warning: Could not link travel packages to destinations. One or more destinations not found.");
            }
        }

        // --- 4. Initialize Customer Stories ---
        System.out.println("--- Initializing Customer Stories ---");
        if (customerStoryRepository != null && customerStoryRepository.count() == 0) {
            CustomerStory priyaStory = new CustomerStory(null, "Priya Sharma", "My Dream Dubai Trip", "Akbar Travels made my Dubai trip a dream come true! From the seamless bookings to the incredible desert safari, every detail was perfect. Highly recommend!", "/images/emotion-6524546_1920.jpg");
            System.out.println("Saving Customer Story for: " + priyaStory.getCustomerName() + ", Image URL: " + priyaStory.getImageUrl());

            CustomerStory rahulStory = new CustomerStory(null, "Rahul Singh", "Maldives Bliss", "The Maldives package was exceptional. The resort was stunning, and the service was impeccable. Thank you for an unforgettable honeymoon!", "/images/ok-2385794_1920.jpg");
            System.out.println("Saving Customer Story for: " + rahulStory.getCustomerName() + ", Image URL: " + rahulStory.getImageUrl());

            List<CustomerStory> stories = Arrays.asList(priyaStory, rahulStory);
            customerStoryRepository.saveAll(stories);
            System.out.println("Customer stories created.");
        } else if (customerStoryRepository == null) {
            System.err.println("Warning: CustomerStoryRepository not available. Skipping customer story initialization.");
        }


        // --- 5. Initialize Expert Profiles ---
        System.out.println("--- Initializing Expert Profiles ---");
        if (expertProfileRepository != null && expertProfileRepository.count() == 0) {
            ExpertProfile anjali = new ExpertProfile(null, "Anjali Desai", "Middle East Travel", "/images/woman-1866081_1920.jpg");
            System.out.println("Saving Expert Profile for: " + anjali.getName() + ", Image URL: " + anjali.getImageUrl());

            ExpertProfile sanjay = new ExpertProfile(null, "Sanjay Verma", "Luxury & Honeymoon Packages", "/images/ai-generated-9562243_1920.jpg");
            System.out.println("Saving Expert Profile for: " + sanjay.getName() + ", Image URL: " + sanjay.getImageUrl());

            List<ExpertProfile> experts = Arrays.asList(anjali, sanjay);
            expertProfileRepository.saveAll(experts);
            System.out.println("Expert profiles created.");
        } else if (expertProfileRepository == null) {
            System.err.println("Warning: ExpertProfileRepository not available. Skipping expert profile initialization.");
        }

        // --- 6. Initialize FAQs ---
        System.out.println("--- Initializing FAQs ---");
        if (faqRepository.count() == 0) {
            FAQ faq1 = new FAQ(null, "How do I book a package?", "You can book a package directly on our website by selecting your desired package and filling out the booking form, or by contacting our sales team.");
            System.out.println("Saving FAQ: " + faq1.getQuestion());

            FAQ faq2 = new FAQ(null, "What is your cancellation policy?", "Our cancellation policy varies by package. Please refer to the specific package details or contact us for more information.");
            System.out.println("Saving FAQ: " + faq2.getQuestion());

            FAQ faq3 = new FAQ(null, "Do you offer custom travel itineraries?", "Yes, we offer personalized custom itineraries tailored to your preferences. Please contact our experts for a consultation.");
            System.out.println("Saving FAQ: " + faq3.getQuestion());

            List<FAQ> faqs = Arrays.asList(faq1, faq2, faq3);
            faqRepository.saveAll(faqs);
            System.out.println("FAQs created.");
        }
    }
}