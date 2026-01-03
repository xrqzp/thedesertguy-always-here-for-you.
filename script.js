// DEBUG:
console.log("✅ script.js is loaded successfully!");
console.log("Running from:", window.location.href);


document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM is ready");
    

});

// DOM Elements
const quotesContainer = document.getElementById('quotes-container');
const randomQuoteBtn = document.getElementById('random-quote-btn');
const featuredQuoteEl = document.getElementById('featured-quote');
const dailyAffirmationEl = document.getElementById('daily-affirmation');
const refreshAffirmationBtn = document.getElementById('refresh-affirmation');
const twitterShareBtn = document.getElementById('twitter-share');
const copyQuoteBtn = document.getElementById('copy-quote');
const submitQuoteBtn = document.getElementById('submit-quote');
const quoteInput = document.getElementById('quote-input');
const quoteModal = document.getElementById('quote-modal');
const modalQuoteText = document.getElementById('modal-quote-text');
const modalQuoteAuthor = document.getElementById('modal-quote-author');
const closeModalBtn = document.querySelector('.close-modal');
const navLinks = document.querySelectorAll('.nav a');
const currentYearEl = document.getElementById('current-year');

// Quotes Database
const quotes = [
    { text: "If you're lost, I am always here to listen. Sometimes the desert wind carries secrets better than any ear.", author: "The Desert Guy" },
    { text: "Like a cactus in the vast desert, I stand strong, offering shade to weary travelers.", author: "The Desert Guy" },
    { text: "The stars in the desert sky remind us that even in the darkest nights, there is light waiting to be seen.", author: "The Desert Guy" },
    { text: "Your heart is not a lonely desert; it's an oasis waiting to be discovered by those who truly seek.", author: "The Desert Guy" },
    { text: "In the silence of the sands, you'll find the answers that the noise of the world has hidden from you.", author: "The Desert Guy" },
    { text: "Just as the desert blooms after rain, your spirit can blossom after hardship.", author: "The Desert Guy" },
    { text: "I may be just a voice in the vastness, but sometimes one listening heart is all a soul needs.", author: "The Desert Guy" },
    { text: "The desert teaches patience. The sun will rise again, and so will you.", author: "The Desert Guy" },
    { text: "Your struggles are like footprints in the sand—they show how far you've traveled, not how stuck you are.", author: "The Desert Guy" },
    { text: "Sometimes the most profound wisdom comes from the quietest places. Listen to your heart's desert whispers.", author: "The Desert Guy" },
    { text: "Even in the driest desert, there is water hidden beneath the surface. Even in your driest moments, there is hope within you.", author: "The Desert Guy" },
    { text: "Like a mirage that becomes real when you approach it, your dreams become possible when you move toward them.", author: "The Desert Guy" }
];

// Affirmations Database
const affirmations = [
    "You are stronger than you know, kinder than you realize, and more loved than you can imagine.",
    "Today, you are exactly where you need to be. Trust the journey.",
    "Your presence in this world matters more than you'll ever comprehend.",
    "You have survived 100% of your hardest days. You are resilient.",
    "Your feelings are valid, your experiences are real, and your voice deserves to be heard.",
    "You are not alone in this desert. I am here, and so are countless others who care.",
    "Even on your darkest days, you are a light to someone. Remember that.",
    "You are allowed to take up space. You are allowed to exist exactly as you are.",
    "Your heart is a vast desert sky—capable of holding infinite stars of hope.",
    "One step at a time, one breath at a time. That's how deserts are crossed and mountains are climbed."
];

// Initialize the page
function init() {
    // Set current year in footer
    currentYearEl.textContent = new Date().getFullYear();
    
    // Load initial quotes
    loadQuotes();
    
    // Set random featured quote
    setRandomFeaturedQuote();
    
    // Set random daily affirmation
    setRandomAffirmation();
    
    // Setup event listeners
    setupEventListeners();
}

// Load quotes into the grid
function loadQuotes() {
    quotesContainer.innerHTML = '';
    
    quotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <p>"${quote.text}"</p>
            <p class="quote-card-author">— ${quote.author}</p>
        `;
        
        // Add click event to show quote in modal
        quoteCard.addEventListener('click', () => {
            showQuoteInModal(quote);
        });
        
        quotesContainer.appendChild(quoteCard);
    });
}

// Set random featured quote
function setRandomFeaturedQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    featuredQuoteEl.textContent = quotes[randomIndex].text;
}

// Set random affirmation
function setRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    dailyAffirmationEl.textContent = affirmations[randomIndex];
}

// Show quote in modal
function showQuoteInModal(quote) {
    modalQuoteText.textContent = quote.text;
    modalQuoteAuthor.textContent = `— ${quote.author}`;
    quoteModal.style.display = 'flex';
}

// Setup all event listeners
function setupEventListeners() {
    // Random quote button
    randomQuoteBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        showQuoteInModal(quotes[randomIndex]);
    });
    
    // Refresh affirmation button
    refreshAffirmationBtn.addEventListener('click', setRandomAffirmation);
    
    // Twitter share button
    twitterShareBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        const tweetText = `"${quote.text}" — ${quote.author} #TheDesertGuy #HeartwarmingQuotes`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, '_blank');
    });
    
    // Copy quote button
    copyQuoteBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        const textToCopy = `"${quote.text}" — ${quote.author}`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            // Show a temporary notification
            const originalText = copyQuoteBtn.innerHTML;
            copyQuoteBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyQuoteBtn.style.backgroundColor = '#2E8B57';
            
            setTimeout(() => {
                copyQuoteBtn.innerHTML = originalText;
                copyQuoteBtn.style.backgroundColor = '';
            }, 2000);
        });
    });
    
    // Submit quote button
    submitQuoteBtn.addEventListener('click', () => {
        const userQuote = quoteInput.value.trim();
        
        if (userQuote.length < 10) {
            alert('Please write a quote of at least 10 characters.');
            return;
        }
        
        // In a real application, this would send the quote to a server
        // For now, we'll just show a thank you message
        alert('Thank you for sharing your heartwarming quote! While it won\'t be permanently added to the site in this demo, know that your words have been heard.');
        quoteInput.value = '';
        
        // Add a temporary visual confirmation
        submitQuoteBtn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
        submitQuoteBtn.style.backgroundColor = '#2E8B57';
        
        setTimeout(() => {
            submitQuoteBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit';
            submitQuoteBtn.style.backgroundColor = '';
        }, 2000);
    });
    
    // Close modal button
    closeModalBtn.addEventListener('click', () => {
        quoteModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === quoteModal) {
            quoteModal.style.display = 'none';
        }
    });
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get the target section
            const sectionId = link.getAttribute('data-section');
            
            // Scroll to section
            if (sectionId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const section = document.getElementById(`${sectionId}-section`);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape key closes modal
        if (e.key === 'Escape' && quoteModal.style.display === 'flex') {
            quoteModal.style.display = 'none';
        }
        
        // Space key gets a random quote
        if (e.key === ' ' && e.target === document.body) {
            e.preventDefault();
            const randomIndex = Math.floor(Math.random() * quotes.length);
            showQuoteInModal(quotes[randomIndex]);
        }
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

