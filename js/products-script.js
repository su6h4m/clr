// Product data
const products = [
  {
    id: 1,
    name: "Hydrating Serum",
    price: 39.99,
    rating: 4,
    reviews: 128,
    image: "/placeholder.svg?height=400&width=400&text=Hydrating+Serum",
    description: "Intense hydration for all skin types with hyaluronic acid and vitamin B5.",
    category: "serum",
    amazonLink: "https://www.amazon.com/dp/B08XYZ123",
    flipkartLink: "https://www.flipkart.com/hydrating-serum/p/itm123456",
  },
  {
    id: 2,
    name: "Vitamin C Brightening Cream",
    price: 45.99,
    rating: 5,
    reviews: 94,
    image: "/placeholder.svg?height=400&width=400&text=Vitamin+C+Cream",
    description: "Brightens and evens skin tone while protecting against environmental damage.",
    category: "cream",
    amazonLink: "https://www.amazon.com/dp/B08ABC456",
    flipkartLink: "https://www.flipkart.com/vitamin-c-cream/p/itm789012",
  },
  {
    id: 3,
    name: "Night Repair Cream",
    price: 49.99,
    rating: 4,
    reviews: 76,
    image: "/placeholder.svg?height=400&width=400&text=Night+Repair+Cream",
    description: "Repairs and rejuvenates your skin while you sleep with retinol and peptides.",
    category: "cream",
    amazonLink: "https://www.amazon.com/dp/B08DEF789",
    flipkartLink: "https://www.flipkart.com/night-repair-cream/p/itm345678",
  },
  {
    id: 4,
    name: "Gentle Foaming Cleanser",
    price: 24.99,
    rating: 5,
    reviews: 152,
    image: "/placeholder.svg?height=400&width=400&text=Gentle+Cleanser",
    description: "Cleanses without stripping the skin, suitable for all skin types including sensitive skin.",
    category: "cleanser",
    amazonLink: "https://www.amazon.com/dp/B08GHI012",
    flipkartLink: "https://www.flipkart.com/gentle-cleanser/p/itm901234",
  },
  {
    id: 5,
    name: "Exfoliating Mask",
    price: 34.99,
    rating: 4,
    reviews: 68,
    image: "/placeholder.svg?height=400&width=400&text=Exfoliating+Mask",
    description: "Reveals smoother, brighter skin with alpha and beta hydroxy acids.",
    category: "mask",
    amazonLink: "https://www.amazon.com/dp/B08JKL345",
    flipkartLink: "https://www.flipkart.com/exfoliating-mask/p/itm567890",
  },
  {
    id: 6,
    name: "Revitalizing Eye Cream",
    price: 42.99,
    rating: 4,
    reviews: 87,
    image: "/placeholder.svg?height=400&width=400&text=Eye+Cream",
    description: "Reduces dark circles and puffiness with caffeine and peptides.",
    category: "cream",
    amazonLink: "https://www.amazon.com/dp/B08MNO678",
    flipkartLink: "https://www.flipkart.com/eye-cream/p/itm123789",
  },
  {
    id: 7,
    name: "Purifying Clay Cleanser",
    price: 28.99,
    rating: 4,
    reviews: 103,
    image: "/placeholder.svg?height=400&width=400&text=Clay+Cleanser",
    description: "Deep cleansing clay formula that removes impurities and excess oil.",
    category: "cleanser",
    amazonLink: "https://www.amazon.com/dp/B08PQR901",
    flipkartLink: "https://www.flipkart.com/clay-cleanser/p/itm456123",
  },
  {
    id: 8,
    name: "Niacinamide Serum",
    price: 36.99,
    rating: 5,
    reviews: 145,
    image: "/placeholder.svg?height=400&width=400&text=Niacinamide+Serum",
    description: "Minimizes pores and controls oil production with 10% niacinamide.",
    category: "serum",
    amazonLink: "https://www.amazon.com/dp/B08STU234",
    flipkartLink: "https://www.flipkart.com/niacinamide-serum/p/itm789456",
  },
  {
    id: 9,
    name: "Hydrating Face Mask",
    price: 32.99,
    rating: 4,
    reviews: 91,
    image: "/placeholder.svg?height=400&width=400&text=Hydrating+Mask",
    description: "Intensive hydration mask with hyaluronic acid and aloe vera.",
    category: "mask",
    amazonLink: "https://www.amazon.com/dp/B08VWX567",
    flipkartLink: "https://www.flipkart.com/hydrating-mask/p/itm012345",
  },
]

// DOM elements
const productsGrid = document.getElementById("productsGrid")
const searchInput = document.getElementById("searchInput")
const filterButtons = document.querySelectorAll(".filter-btn")
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const mobileMenu = document.getElementById("mobileMenu")

// State
let currentFilter = "all"
let searchQuery = ""

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products)
  setupEventListeners()
})

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener("input", handleSearch)

  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilter)
  })

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", toggleMobileMenu)

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      mobileMenu.classList.remove("active")
    }
  })
}

// Render products
function renderProducts(productsToRender) {
  productsGrid.innerHTML = ""

  if (productsToRender.length === 0) {
    productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p style="font-size: 1.125rem; color: var(--gray-500);">No products found matching your criteria.</p>
            </div>
        `
    return
  }

  productsToRender.forEach((product, index) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)

    // Add fade-in animation with delay
    setTimeout(() => {
      productCard.classList.add("fade-in")
    }, index * 100)
  })
}

// Create product card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.style.opacity = "0"

  // Generate stars
  const starsHTML = generateStars(product.rating)

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-content">
            <div class="product-rating">
                <div class="stars">${starsHTML}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <a href="${product.amazonLink}" target="_blank" rel="noopener noreferrer" class="buy-btn amazon-btn">
                    <i class="fab fa-amazon"></i>
                    Amazon
                </a>
                <a href="${product.flipkartLink}" target="_blank" rel="noopener noreferrer" class="buy-btn flipkart-btn">
                    <i class="fas fa-shopping-cart"></i>
                    Flipkart
                </a>
            </div>
        </div>
    `

  return card
}

// Generate stars HTML
function generateStars(rating) {
  let starsHTML = ""
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += '<i class="fas fa-star star"></i>'
    } else {
      starsHTML += '<i class="fas fa-star star empty"></i>'
    }
  }
  return starsHTML
}

// Handle search
function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase()
  filterAndRenderProducts()
}

// Handle filter
function handleFilter(e) {
  // Update active filter button
  filterButtons.forEach((btn) => btn.classList.remove("active"))
  e.target.classList.add("active")

  currentFilter = e.target.dataset.category
  filterAndRenderProducts()
}

// Filter and render products
function filterAndRenderProducts() {
  let filteredProducts = products

  // Apply category filter
  if (currentFilter !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category === currentFilter)
  }

  // Apply search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) || product.description.toLowerCase().includes(searchQuery),
    )
  }

  renderProducts(filteredProducts)
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle("active")
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add loading animation for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })
  })
})

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in")
    }
  })
}, observerOptions)

// Observe product cards for animation
function observeProductCards() {
  const productCards = document.querySelectorAll(".product-card")
  productCards.forEach((card) => {
    observer.observe(card)
  })
}

// Call observe function after products are rendered
const originalRenderProducts = renderProducts
renderProducts = (productsToRender) => {
  originalRenderProducts(productsToRender)
  setTimeout(observeProductCards, 100)
}
