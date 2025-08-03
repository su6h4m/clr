// Modern animations and interactions for the homepage
document.addEventListener("DOMContentLoaded", () => {
  // Animated counter for stats
  function animateCounter(element, target, duration = 2000) {
    const start = 0
    const increment = target / (duration / 16)
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toLocaleString() + " +"
    }, 16)
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")

        // Animate counters when stats section comes into view
        if (entry.target.classList.contains("stats-section")) {
          const statItems = entry.target.querySelectorAll(".stat-item")
          statItems.forEach((item, index) => {
            setTimeout(() => {
              const target = Number.parseInt(item.getAttribute("data-target"))
              const numberElement = item.querySelector(".stat-number")
              animateCounter(numberElement, target)
            }, index * 200)
          })
        }
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".section-title, .modern-card, .modern-benefit, .modern-testimonial, .stats-section, .parallax-section",
  )
  animateElements.forEach((el) => {
    observer.observe(el)
  })

  // Parallax effect for hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".hero-background, .parallax-image img")

    parallaxElements.forEach((element) => {
      const speed = 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })

    // Floating elements animation based on scroll
    const floatingElements = document.querySelectorAll(".floating-element")
    floatingElements.forEach((element, index) => {
      const speed = 0.3 + index * 0.1
      element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
    })
  })

  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector(".scroll-indicator")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const nextSection = document.querySelector(".stats-section")
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  // Enhanced product card interactions
  const productCards = document.querySelectorAll(".modern-card")
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const image = card.querySelector(".moving-image")
      const overlay = card.querySelector(".product-overlay")
      if (image) {
        image.style.transform = "scale(1.1) rotate(2deg)"
      }
      if (overlay) {
        overlay.style.opacity = "1"
      }
    })

    card.addEventListener("mouseleave", () => {
      const image = card.querySelector(".moving-image")
      const overlay = card.querySelector(".product-overlay")
      if (image) {
        image.style.transform = "scale(1) rotate(0deg)"
      }
      if (overlay) {
        overlay.style.opacity = "0"
      }
    })
  })

  // Rotating icons on hover
  const rotatingIcons = document.querySelectorAll(".rotating-icon")
  rotatingIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "rotateY(360deg) scale(1.1)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "rotateY(0deg) scale(1)"
    })
  })

  // Enhanced social icons
  const socialIcons = document.querySelectorAll(".social-icon")
  socialIcons.forEach((icon, index) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "translateY(-5px) scale(1.1)"
      icon.style.boxShadow = "0 10px 20px rgba(212, 175, 55, 0.3)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "translateY(0) scale(1)"
      icon.style.boxShadow = "none"
    })
  })

  // Testimonial image floating effect
  const floatingImages = document.querySelectorAll(".floating-image")
  floatingImages.forEach((image, index) => {
    setInterval(() => {
      const offset = Math.sin(Date.now() * 0.001 + index) * 5
      image.style.transform = `translateY(${offset}px)`
    }, 50)
  })

  // Modern button pulse effect
  const pulseButtons = document.querySelectorAll(".pulse-button")
  pulseButtons.forEach((button) => {
    setInterval(() => {
      button.classList.add("pulse")
      setTimeout(() => {
        button.classList.remove("pulse")
      }, 600)
    }, 3000)
  })

  // Text animation on load
  const animateTexts = document.querySelectorAll(".animate-text")
  animateTexts.forEach((text, index) => {
    setTimeout(() => {
      text.classList.add("text-revealed")
    }, index * 300)
  })

  const animateTextDelays = document.querySelectorAll(".animate-text-delay")
  animateTextDelays.forEach((text, index) => {
    setTimeout(
      () => {
        text.classList.add("text-revealed")
      },
      600 + index * 300,
    )
  })

  const animateButtons = document.querySelectorAll(".animate-button")
  animateButtons.forEach((button, index) => {
    setTimeout(
      () => {
        button.classList.add("button-revealed")
      },
      1200 + index * 300,
    )
  })
})
