// Product data
const productData = {
  "gentle-cleanser": {
    title: "Gentle Cleanser",
    price: "$32.00",
    image: "images/2.jpg",
    category: "cleansers",
    description:
      "A mild, sulfate-free cleanser that removes impurities without stripping your skin of its natural oils. Perfect for daily use on all skin types.",
    ingredients: ["Aloe Vera Extract", "Chamomile", "Glycerin", "Coconut-derived Surfactants"],
    benefits: [
      "Removes makeup and impurities",
      "Maintains skin's natural pH balance",
      "Soothes and calms irritated skin",
      "Suitable for sensitive skin",
    ],
    usage:
      "Apply to damp skin, gently massage in circular motions, then rinse with lukewarm water. Use morning and evening.",
  },
  "exfoliating-cleanser": {
    title: "Exfoliating Cleanser",
    price: "$36.00",
    image: "images/8.jpg",
    category: "cleansers",
    description:
      "A gentle exfoliating cleanser with natural fruit enzymes that removes dead skin cells and reveals brighter, smoother skin.",
    ingredients: ["Papaya Enzyme", "Jojoba Beads", "Vitamin E", "Green Tea Extract"],
    benefits: ["Gently exfoliates dead skin cells", "Brightens complexion", "Unclogs pores", "Improves skin texture"],
    usage: "Use 2-3 times per week. Apply to damp skin, massage gently for 30 seconds, then rinse thoroughly.",
  },
  "hydrating-serum": {
    title: "Hydrating Serum",
    price: "$45.00",
    image: "images/1.jpg",
    category: "serums",
    description:
      "An intensive hydrating serum with hyaluronic acid that provides deep moisture and plumps the skin for a youthful appearance.",
    ingredients: ["Hyaluronic Acid", "Vitamin B5", "Niacinamide", "Rose Water"],
    benefits: [
      "Provides intense hydration",
      "Plumps and firms skin",
      "Reduces appearance of fine lines",
      "Suitable for all skin types",
    ],
    usage: "Apply 2-3 drops to clean skin morning and evening. Follow with moisturizer.",
  },

  /*
  "vitamin-c-serum": {
    title: "Vitamin C Serum",
    price: "$48.00",
    image: "images/9.jpg",
    category: "serums",
    description:
      "A potent antioxidant serum with stabilized Vitamin C that brightens skin tone and protects against environmental damage.",
    ingredients: ["Vitamin C (L-Ascorbic Acid)", "Vitamin E", "Ferulic Acid", "Botanical Extracts"],
    benefits: [
      "Brightens and evens skin tone",
      "Reduces dark spots",
      "Protects against free radicals",
      "Stimulates collagen production",
    ],
    usage: "Apply in the morning to clean skin. Always follow with sunscreen during the day.",
  },
  "anti-aging-serum": {
    title: "Anti-Aging Serum",
    price: "$52.00",
    image: "images/10.jpg",
    category: "serums",
    description:
      "A powerful anti-aging serum with retinol and peptides that reduces fine lines and improves skin elasticity.",
    ingredients: ["Retinol", "Peptides", "Squalane", "Bakuchiol"],
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin elasticity",
      "Evens skin texture",
      "Promotes cell renewal",
    ],
    usage:
      "Use in the evening only. Start with 2-3 times per week and gradually increase. Always use sunscreen during the day.",
  },

  */

  "daily-moisturizer": {
    title: "Daily Moisturizer",
    price: "$38.00",
    image: "images/11.jpg",
    category: "moisturizers",
    description: "A lightweight, non-greasy moisturizer that provides all-day hydration without clogging pores.",
    ingredients: ["Ceramides", "Shea Butter", "Glycerin", "Antioxidant Complex"],
    benefits: [
      "Provides long-lasting hydration",
      "Strengthens skin barrier",
      "Non-comedogenic formula",
      "Suitable for daily use",
    ],
    usage: "Apply to clean skin morning and evening. Can be used under makeup.",
  },

  /*
  "night-cream": {
    title: "Rejuvenating Night Cream",
    price: "$58.00",
    image: "images/3.jpg",
    category: "moisturizers",
    description: "A rich, nourishing night cream that works while you sleep to repair and regenerate your skin.",
    ingredients: ["Retinyl Palmitate", "Collagen Peptides", "Argan Oil", "Lavender Extract"],
    benefits: [
      "Repairs skin overnight",
      "Reduces signs of aging",
      "Deeply nourishes and moisturizes",
      "Promotes skin regeneration",
    ],
    usage: "Apply generously to clean skin before bedtime. Massage gently until absorbed.",
  },
  "hydrating-mask": {
    title: "Hydrating Mask",
    price: "$42.00",
    image: "images/12.jpg",
    category: "masks",
    description: "An intensive hydrating mask that provides an instant moisture boost for dry, dehydrated skin.",
    ingredients: ["Hyaluronic Acid", "Aloe Vera", "Honey Extract", "Cucumber Extract"],
    benefits: [
      "Provides intense hydration",
      "Soothes and calms skin",
      "Reduces redness",
      "Leaves skin soft and supple",
    ],
    usage:
      "Apply a thick layer to clean skin. Leave on for 15-20 minutes, then rinse with lukewarm water. Use 1-2 times per week.",
  },
  "clay-mask": {
    title: "Purifying Clay Mask",
    price: "$40.00",
    image: "images/13.jpg",
    category: "masks",
    description: "A deep-cleansing clay mask that draws out impurities and excess oil for clearer, more refined skin.",
    ingredients: ["Bentonite Clay", "Kaolin Clay", "Tea Tree Oil", "Charcoal"],
    benefits: ["Deep cleanses pores", "Removes excess oil", "Reduces blackheads", "Refines skin texture"],
    usage:
      "Apply an even layer to clean skin, avoiding eye area. Leave on for 10-15 minutes until dry, then rinse with warm water. Use 1-2 times per week.",
  },
  */
}

document.addEventListener("DOMContentLoaded", () => {
  // Category filtering
  const categoryBtns = document.querySelectorAll(".category-btn")
  const productCards = document.querySelectorAll(".product-card")
  const productDetailsSection = document.getElementById("productDetailsSection")
  const similarProductsSection = document.getElementById("similarProductsSection")
  const productsSection = document.querySelector(".products-section")

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Update active button
      categoryBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      // Filter products
      productCards.forEach((card) => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, 100)
        } else {
          card.style.opacity = "0"
          card.style.transform = "translateY(20px)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      })

      // Hide product details when filtering
      hideProductDetails()
    })
  })

  // Product details functionality - make entire card clickable
  const productCardElements = document.querySelectorAll(".product-card")

  productCardElements.forEach((card) => {
    // Remove the view details button
    const viewDetailsBtn = card.querySelector(".product-details")
    if (viewDetailsBtn) {
      viewDetailsBtn.style.display = "none"
    }

    // Make the entire card clickable
    card.style.cursor = "pointer"
    card.addEventListener("click", function (e) {
      e.preventDefault()
      const productId =
        this.getAttribute("data-product") || this.querySelector(".product-details")?.getAttribute("data-product")

      if (!productId) {
        // Extract product ID from the card content if not directly available
        const title = this.querySelector("h3")?.textContent.toLowerCase().replace(/\s+/g, "-")
        const productIds = {
          "gentle-cleanser": "gentle-cleanser",
          "exfoliating-cleanser": "exfoliating-cleanser",
          "hydrating-serum": "hydrating-serum",
          "vitamin-c-serum": "vitamin-c-serum",
          "anti-aging-serum": "anti-aging-serum",
          "daily-moisturizer": "daily-moisturizer",
          "rejuvenating-night-cream": "night-cream",
          "hydrating-mask": "hydrating-mask",
          "purifying-clay-mask": "clay-mask",
        }
        const matchedId = productIds[title]
        if (matchedId) {
          const product = productData[matchedId]
          if (product) {
            showProductDetails(product, matchedId)
          }
        }
      } else {
        const product = productData[productId]
        if (product) {
          showProductDetails(product, productId)
        }
      }
    })
  })

  // Close details functionality
  const closeDetailsBtn = document.getElementById("closeDetails")
  if (closeDetailsBtn) {
    closeDetailsBtn.addEventListener("click", hideProductDetails)
  }

  function showProductDetails(product, productId) {
    // Update product details content
    document.getElementById("detailsTitle").textContent = product.title
    document.getElementById("detailsPrice").textContent = product.price
    document.getElementById("detailsDescription").textContent = product.description
    document.getElementById("detailsUsage").textContent = product.usage
    document.getElementById("detailsImage").src = product.image

    // Update ingredients list
    const ingredientsList = document.getElementById("detailsIngredients")
    ingredientsList.innerHTML = ""
    product.ingredients.forEach((ingredient) => {
      const li = document.createElement("li")
      li.textContent = ingredient
      ingredientsList.appendChild(li)
    })

    // Update benefits list
    const benefitsList = document.getElementById("detailsBenefits")
    benefitsList.innerHTML = ""
    product.benefits.forEach((benefit) => {
      const li = document.createElement("li")
      li.textContent = benefit
      benefitsList.appendChild(li)
    })

    // Show product details section
    productDetailsSection.style.display = "block"

    // Hide products grid
    productsSection.style.display = "none"

    // Show similar products
    showSimilarProducts(product.category, productId)

    // Scroll to product details
    productDetailsSection.scrollIntoView({ behavior: "smooth", block: "start" })

    // Add event listeners to purchase buttons
    const purchaseButtons = productDetailsSection.querySelectorAll(".purchase-btn")
    purchaseButtons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault()
        const platform = this.getAttribute("data-platform")
        const productTitle = product.title

        switch (platform) {
          case "amazon":
            window.open("https://amazon.in/s?k=" + encodeURIComponent(productTitle + " ClearlyU"), "_blank")
            break
          case "flipkart":
            window.open(
              "https://flipkart.com/search?q=" + encodeURIComponent(productTitle + " ClearlyU"),
              "_blank",
            )
            break
          case "whatsapp":
            const message = `Hi! I'm interested in purchasing ${productTitle} from ClearlyU. Could you please provide more details about pricing and availability?`
            const whatsappNumber = "+918572065876"
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
            break
        }
      })
    })
  }

  function hideProductDetails() {
    productDetailsSection.style.display = "none"
    similarProductsSection.style.display = "none"
    productsSection.style.display = "block"

    // Scroll back to products
    productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  function showSimilarProducts(category, currentProductId) {
    const similarProductsGrid = document.getElementById("similarProductsGrid")
    similarProductsGrid.innerHTML = ""

    // Get products from the same category, excluding the current product
    const similarProducts = Object.entries(productData)
      .filter(([id, product]) => product.category === category && id !== currentProductId)
      .slice(0, 3) // Show maximum 3 similar products

    // If we don't have enough products from the same category, add some from other categories
    if (similarProducts.length < 3) {
      const otherProducts = Object.entries(productData)
        .filter(([id, product]) => product.category !== category && id !== currentProductId)
        .slice(0, 3 - similarProducts.length)

      similarProducts.push(...otherProducts)
    }

    similarProducts.forEach(([id, product]) => {
      const productCard = document.createElement("div")
      productCard.className = "similar-product-card"
      productCard.innerHTML = `
        <div class="similar-product-image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <h4>${product.title}</h4>
        <p>${product.description.substring(0, 80)}...</p>
        <span class="price">${product.price}</span>
        <a href="#" class="btn-small similar-product-details" data-product="${id}">View Details</a>
      `
      similarProductsGrid.appendChild(productCard)
    })

    // Add event listeners to similar product buttons
    const similarProductBtns = similarProductsGrid.querySelectorAll(".similar-product-details")
    similarProductBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault()
        const productId = this.getAttribute("data-product")
        const product = productData[productId]
        if (product) {
          showProductDetails(product, productId)
        }
      })
    })

    // Show similar products section
    similarProductsSection.style.display = "block"
  }
})
