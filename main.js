    // Mobile Menu Toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          document.getElementById('mobile-menu').classList.add('hidden');
        }
      });
    });

    // Form Modal Functions
    function openDemoForm() {
      document.getElementById('demoForm').classList.remove('hidden');
    }

    function closeDemoForm() {
      document.getElementById('demoForm').classList.add('hidden');
    }

    function openJoinForm() {
      document.getElementById('joinForm').classList.remove('hidden');
    }

    function closeJoinForm() {
      document.getElementById('joinForm').classList.add('hidden');
    }

    function openPricingForm(plan) {
      document.getElementById('selected-plan').textContent = plan;
      document.getElementById('pricingForm').classList.remove('hidden');
    }

    function closePricingForm() {
      document.getElementById('pricingForm').classList.add('hidden');
    }

    function openBookClassForm() {
      document.getElementById('bookClassForm').classList.remove('hidden');
    }

    function closeBookClassForm() {
      document.getElementById('bookClassForm').classList.add('hidden');
    }

    // Toggle Content Function
    function toggleContent(contentId) {
      const content = document.getElementById(contentId);
      const icon = document.getElementById(contentId.replace('content', 'icon'));
      
      content.classList.toggle('active');
      
      if (content.classList.contains('active')) {
        icon.className = 'ri-arrow-up-s-line toggle-icon text-xl';
      } else {
        icon.className = 'ri-arrow-down-s-line toggle-icon text-xl';
      }
    }

    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
      if(e.target.classList.contains('fixed')) {
        e.target.classList.add('hidden');
      }
    });

    // Explore Program Carousel
    let currentExploreIndex = 0;
    const exploreCards = document.querySelectorAll('.explore__card');
    const explorePrev = document.querySelector('.explore-prev');
    const exploreNext = document.querySelector('.explore-next');
    
    function updateExploreDisplay() {
      exploreCards.forEach((card, index) => {
        if (window.innerWidth < 768) {
          // Mobile view - show one card at a time
          card.style.display = index === currentExploreIndex ? 'block' : 'none';
        } else if (window.innerWidth < 1024) {
          // Tablet view - show two cards at a time
          card.style.display = (index === currentExploreIndex || index === currentExploreIndex + 1) ? 'block' : 'none';
        } else {
          // Desktop view - show all cards
          card.style.display = 'block';
        }
      });
    }
    
    explorePrev.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        currentExploreIndex = (currentExploreIndex - 1 + exploreCards.length) % exploreCards.length;
      } else if (window.innerWidth < 1024) {
        currentExploreIndex = (currentExploreIndex - 2 + exploreCards.length) % exploreCards.length;
      }
      updateExploreDisplay();
    });
    
    exploreNext.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        currentExploreIndex = (currentExploreIndex + 1) % exploreCards.length;
      } else if (window.innerWidth < 1024) {
        currentExploreIndex = (currentExploreIndex + 2) % exploreCards.length;
      }
      updateExploreDisplay();
    });
    
    // Initialize display
    updateExploreDisplay();
    
    // Update on window resize
    window.addEventListener('resize', updateExploreDisplay);

    // Review Carousel
    const reviews = [
      {
        name: "KARTHI K",
        role: "Fullstack Developer",
        text: "What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals.",
        rating: 4.5
      },
      {
        name: "JANE DOE",
        role: "Fitness Instructor",
        text: "I've been a member for over a year and the results are incredible. The community support and professional guidance make all the difference.",
        rating: 5
      },
      {
        name: "MIKE SMITH",
        role: "Business Owner",
        text: "The facilities are top-notch and the trainers really know their stuff. I've achieved my fitness goals faster than I ever thought possible.",
        rating: 4
      }
    ];
    
    let currentReviewIndex = 0;
    const reviewContent = document.querySelector('.review__content');
    const reviewRating = document.querySelector('.review__rating');
    const reviewMember = document.querySelector('.review__member');
    const reviewPrev = document.querySelector('.review__nav span:first-child');
    const reviewNext = document.querySelector('.review__nav span:last-child');
    
    function updateReview() {
      const review = reviews[currentReviewIndex];
      
      // Update review text
      reviewContent.querySelector('p').textContent = review.text;
      
      // Update rating
      let ratingHTML = '';
      const fullStars = Math.floor(review.rating);
      const hasHalfStar = review.rating % 1 !== 0;
      
      for (let i = 0; i < fullStars; i++) {
        ratingHTML += '<span class="text-[var(--secondary-color)] text-xl"><i class="ri-star-fill"></i></span>';
      }
      
      if (hasHalfStar) {
        ratingHTML += '<span class="text-[var(--secondary-color)] text-xl"><i class="ri-star-half-fill"></i></span>';
      }
      
      const emptyStars = 5 - Math.ceil(review.rating);
      for (let i = 0; i < emptyStars; i++) {
        ratingHTML += '<span class="text-[var(--secondary-color)] text-xl"><i class="ri-star-line"></i></span>';
      }
      
      reviewRating.innerHTML = ratingHTML;
      
      // Update member info
      reviewMember.querySelector('h4').textContent = review.name;
      reviewMember.querySelector('p').textContent = review.role;
    }
    
    reviewPrev.addEventListener('click', function() {
      currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
      updateReview();
    });
    
    reviewNext.addEventListener('click', function() {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      updateReview();
    });
    
    // Initialize first review
    updateReview();