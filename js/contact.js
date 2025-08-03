document.addEventListener("DOMContentLoaded", () => {
  // Contact form handling
  const contactForm = document.getElementById("contactForm")
  const formSuccess = document.getElementById("formSuccess")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const name = formData.get("name")
      const email = formData.get("email")
      const subject = formData.get("subject")
      const message = formData.get("message")
      const newsletter = formData.get("newsletter")

      // Simulate form submission
      setTimeout(() => {
        // Hide form and show success message
        contactForm.style.display = "none"
        formSuccess.style.display = "block"

        // Reset form after showing success
        setTimeout(() => {
          contactForm.style.display = "block"
          formSuccess.style.display = "none"
          contactForm.reset()
        }, 3000)
      }, 1000)
    })
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faq) => {
        faq.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })
})
