// js/analytics.js - Advanced Analytics Utilities

window.dataLayer = window.dataLayer || [];

// Enhanced SHA-256 hashing with Google's normalization rules
window.hashEmailForEnhancedConversions = async function(email) {
    // Step 1: Normalize email (lowercase + trim)
    let normalized = email.toLowerCase().trim();
    
    // Step 2: Apply Gmail/Googlemail-specific rules
    const [localPart, domain] = normalized.split('@');
    if (domain === 'gmail.com' || domain === 'googlemail.com') {
        // Remove ALL periods from local part
        let cleanLocal = localPart.replace(/\./g, '');
        // Remove everything after '+' (including the '+')
        cleanLocal = cleanLocal.split('+')[0];
        normalized = `${cleanLocal}@gmail.com`;
    }
    
    // Step 3: SHA-256 hashing
    const encoder = new TextEncoder();
    const data = encoder.encode(normalized);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    console.log('Enhanced Conversions Hash Debug:');
    console.log(`  Original: ${email}`);
    console.log(`  Normalized: ${normalized}`);
    console.log(`  SHA-256: ${hashHex}`);
    console.log(`  Length: ${hashHex.length} chars (${hashHex.length === 64 ? '✓ Valid' : '✗ Invalid'})`);
    
    return hashHex;
};

// Generate unique transaction ID with prefix
window.generateTransactionId = function(prefix = 'RE') {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 8).toUpperCase();
    return `${prefix}_${timestamp}_${random}`;
};

// Debug function to monitor all dataLayer pushes
window.enableDataLayerDebug = function() {
    const originalPush = window.dataLayer.push;
    window.dataLayer.push = function(...args) {
        console.group('🔔 dataLayer Event Detected');
        console.log('Event Object:', JSON.stringify(args[0], null, 2));
        
        // Special logging for Enhanced Conversions
        if (args[0].enhanced_conversions) {
            console.log('✨ Enhanced Conversions Data Present');
            console.log('  Hashed Email:', args[0].enhanced_conversions.email);
        }
        
        // Special logging for ecommerce events
        if (args[0].ecommerce) {
            console.log('🛍️ Ecommerce Data:');
            if (args[0].ecommerce.transaction_id) {
                console.log('  Transaction ID:', args[0].ecommerce.transaction_id);
                console.log('  Value: KES', args[0].ecommerce.value);
            }
            if (args[0].ecommerce.items) {
                console.log('  Items:', args[0].ecommerce.items.length);
            }
        }
        
        console.groupEnd();
        return originalPush.apply(this, args);
    };
    console.log('✅ dataLayer debugging enabled');
};

// Auto-enable debug in development
if (window.location.hostname === 'localhost' || 
    window.location.hostname.includes('github.io') ||
    window.location.search.includes('debug=true')) {
    window.enableDataLayerDebug();
}

// Track page views automatically
window.trackPageView = function() {
    window.dataLayer.push({
        'event': 'page_view',
        'page': {
            'title': document.title,
            'url': window.location.href,
            'path': window.location.pathname
        }
    });
};

// Add to js/analytics.js
function validateKenyanPhone(phone) {
    // Remove any non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's a valid Kenyan number (10 digits starting with 07 or 01, or 12 digits with 254)
    const kenyanPattern = /^(?:254|0)[17]\d{8}$/;
    return kenyanPattern.test(cleaned);
}

function formatPhoneForHashing(phone) {
    let cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
        cleaned = '254' + cleaned.substring(1);
    }
    if (!cleaned.startsWith('254')) {
        cleaned = '254' + cleaned;
    }
    return cleaned;
}

window.validateKenyanPhone = validateKenyanPhone;
window.formatPhoneForHashing = formatPhoneForHashing;

// Execute on page load
document.addEventListener('DOMContentLoaded', () => {
    window.trackPageView();
});