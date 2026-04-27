// js/properties.js - Complete Real Estate Data

// Apartment Listings (Monthly Rentals)
const apartments = [
    {
        id: 'APT_STUDIO_NRB_001',
        name: 'Modern Studio Apartment',
        bedrooms: 0,
        price: 80000,  // KES 80,000 per month
        location: 'Nairobi',
        description: 'Cozy studio in Westlands with modern finishes',
        index: 0
    },
    {
        id: 'APT_1BED_NRB_002',
        name: 'Luxury 1 Bedroom Apartment',
        bedrooms: 1,
        price: 150000,  // KES 150,000 per month
        location: 'Nairobi',
        description: 'Spacious 1 bedroom with city views',
        index: 1
    },
    {
        id: 'APT_2BED_NRB_003',
        name: 'Executive 2 Bedroom Apartment',
        bedrooms: 2,
        price: 250000,  // KES 250,000 per month
        location: 'Nairobi',
        description: 'Modern 2 bedroom with pool access',
        index: 2
    },
    {
        id: 'APT_3BED_NRB_004',
        name: 'Penthouse 3 Bedroom Suite',
        bedrooms: 3,
        price: 400000,  // KES 400,000 per month
        location: 'Nairobi',
        description: 'Luxury penthouse with rooftop terrace',
        index: 3
    }
];

// Land/Plots Listings (For Sale)
const landPlots = [
    // Nairobi Properties ($3000 to $20000 range in USD, converted to KES)
    {
        id: 'LAND_NRB_001',
        name: 'Prime Residential Plot - Karen',
        price: 3000 * 130,  // $3000 = KES 390,000
        location: 'Nairobi',
        size: '1/8 acre (50x100 ft)',
        description: 'Secure gated community, ready for construction',
        index: 0,
        price_usd: 3000
    },
    {
        id: 'LAND_NRB_002',
        name: 'Commercial Plot - Upper Hill',
        price: 10000 * 130,  // $10,000 = KES 1,300,000
        location: 'Nairobi',
        size: '1/4 acre',
        description: 'Prime commercial zone, high ROI potential',
        index: 1,
        price_usd: 10000
    },
    {
        id: 'LAND_NRB_003',
        name: 'Luxury Estate Plot - Runda',
        price: 15000 * 130,  // $15,000 = KES 1,950,000
        location: 'Nairobi',
        size: '1/2 acre',
        description: 'Upscale neighborhood, 24/7 security',
        index: 2,
        price_usd: 15000
    },
    {
        id: 'LAND_NRB_004',
        name: 'Development Land - Kilimani',
        price: 20000 * 130,  // $20,000 = KES 2,600,000
        location: 'Nairobi',
        size: '1 acre',
        description: 'Perfect for apartment development',
        index: 3,
        price_usd: 20000
    },
    
    // Eldoret Properties ($1000 to $10000 range)
    {
        id: 'LAND_ELD_001',
        name: 'Affordable Plot - Elgon View',
        price: 1000 * 130,  // $1,000 = KES 130,000
        location: 'Eldoret',
        size: '1/8 acre',
        description: 'Fast-growing area, near Eldoret town',
        index: 4,
        price_usd: 1000
    },
    {
        id: 'LAND_ELD_002',
        name: 'Family Plot - Kapseret',
        price: 3500 * 130,  // $3,500 = KES 455,000
        location: 'Eldoret',
        size: '1/4 acre',
        description: 'Quiet neighborhood, utilities available',
        index: 5,
        price_usd: 3500
    },
    {
        id: 'LAND_ELD_003',
        name: 'Investment Land - Pioneer',
        price: 6000 * 130,  // $6,000 = KES 780,000
        location: 'Eldoret',
        size: '1/2 acre',
        description: 'Near upcoming mall development',
        index: 6,
        price_usd: 6000
    },
    {
        id: 'LAND_ELD_004',
        name: 'Prime Agricultural Land',
        price: 10000 * 130,  // $10,000 = KES 1,300,000
        location: 'Eldoret',
        size: '2 acres',
        description: 'Agricultural zone, water available',
        index: 7,
        price_usd: 10000
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { apartments, landPlots };
}