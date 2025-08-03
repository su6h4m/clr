// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-menu a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
      })
    })
  }

  // Testimonial Slider
  const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-testimonial")
  const nextBtn = document.querySelector(".next-testimonial")
  let currentSlide = 0

  function showSlide(index) {
    testimonialSlides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    if (testimonialSlides[index]) {
      testimonialSlides[index].classList.add("active")
    }
    if (dots[index]) {
      dots[index].classList.add("active")
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
    showSlide(currentSlide)
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide)
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide)
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto-play testimonials
  if (testimonialSlides.length > 0) {
    setInterval(nextSlide, 5000)
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
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

  // Add scroll effect to header
  let lastScrollTop = 0
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".product-card, .benefit-item, .value-item, .team-member, .certification-item",
  )
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Purchase button handling
  const purchaseButtons = document.querySelectorAll(".purchase-btn")
  purchaseButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault()
      const platform = this.getAttribute("data-platform")
      const productTitle = document.getElementById("modalTitle").textContent

      switch (platform) {
        case "amazon":
          // Replace with actual Amazon product URLs
          window.open("https://amazon.in/s?k=" + encodeURIComponent(productTitle + " ClearlyU"), "_blank")
          break
        case "flipkart":
          // Replace with actual Flipkart product URLs
          window.open(
            "https://flipkart.com/search?q=" + encodeURIComponent(productTitle + " ClearlyU"),
            "_blank",
          )
          break
        case "whatsapp":
          const message = `Hi! I'm interested in purchasing ${productTitle} from ClearlyU. Could you please provide more details?`
          const whatsappNumber = "919876543210" // Replace with your actual WhatsApp Business number
          window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
          break
      }
    })
  })
})
