/**
 * Explore Bharat (Explore India)
 * Pure Vanilla JavaScript
 * Student-friendly, well-commented, beginner-level implementation.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ==========================================================================
     1. MOBILE NAVIGATION MENU
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile navigation when hamburger is clicked
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu automatically when any nav link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /* ==========================================================================
     2. DESTINATION DETAILS DATA & MODAL
     ========================================================================== */
  // Simple JavaScript object containing details for the 6 destinations
  const destinationData = {
    mumbai: {
      title: 'Mumbai, Maharashtra',
      tagline: 'The Financial Capital & City of Dreams',
      image: 'images/mumbai.jpg',
      description:
        'Mumbai is a vibrant metropolis celebrated for its rich history, colonial landmarks like the Gateway of India, Marine Drive scenic promenade, street food delicacies, and the world-famous Hindi cinema industry (Bollywood).',
      bestTime: 'October to March (Pleasant coastal breezes)',
      attractions: 'Gateway of India, Marine Drive, Elephanta Caves, Bandra-Worli Sea Link, Colaba Causeway.'
    },
    goa: {
      title: 'Goa',
      tagline: 'Sun, Sand, Heritage & Spice Plantations',
      image: 'images/goa.jpg',
      description:
        'Goa is renowned across the world for its golden sandy beaches along the Arabian Sea, Portuguese heritage architecture, UNESCO-listed Baroque churches, spice gardens, vibrant flea markets, and refreshing coastal cuisine.',
      bestTime: 'November to February (Cool sunny beach weather)',
      attractions: 'Baga & Anjuna Beaches, Basilica of Bom Jesus, Fort Aguada, Dudhsagar Falls, Spice Farms.'
    },
    manali: {
      title: 'Manali, Himachal Pradesh',
      tagline: 'Himalayan Adventure & Alpine Serenity',
      image: 'images/manali.jpg',
      description:
        'Nestled in the Beas River valley at an altitude of over 2,000 meters, Manali offers breathtaking snow-capped peaks, apple orchards, pinewood trails, river rafting, and scenic road trips to the majestic Rohtang Pass.',
      bestTime: 'October to June (Snow sports in winter, pleasant escape in summer)',
      attractions: 'Solang Valley, Rohtang Pass, Hadimba Devi Temple, Old Manali, Jogini Waterfall.'
    },
    kashmir: {
      title: 'Kashmir Valley',
      tagline: 'Paradise on Earth',
      image: 'images/kashmir.jpg',
      description:
        'Famous for its postcard-perfect scenery, Kashmir enchants travelers with wooden shikara boat rides on Dal Lake, blooming Nishat and Shalimar Mughal Gardens, alpine pine meadows in Pahalgam, and snow-filled peaks in Gulmarg.',
      bestTime: 'March to October (Blooming flowers and cool summer)',
      attractions: 'Dal Lake Shikaras, Gulmarg Gondola, Pahalgam Valley, Shalimar Bagh, Betaab Valley.'
    },
    jaipur: {
      title: 'Jaipur, Rajasthan',
      tagline: 'The Legendary Pink City of Royals',
      image: 'images/jaipur.jpg',
      description:
        'The royal capital of Rajasthan, Jaipur is home to grand fortified castles, pink terracotta palaces, royal observatories, and vibrant colorful bazaars brimming with traditional handicrafts, textiles, and jewelry.',
      bestTime: 'October to March (Pleasant winter days)',
      attractions: 'Amber Fort, Hawa Mahal (Palace of Winds), City Palace, Jantar Mantar, Nahargarh Fort.'
    },
    kerala: {
      title: 'Kerala',
      tagline: "God's Own Country",
      image: 'images/kerala.jpg',
      description:
        'Kerala is a serene coastal state in Southern India, famous for its emerald backwaters, traditional thatched houseboats, spice and tea-carpeted hills in Munnar, pristine palm beaches, and authentic Ayurvedic wellness therapies.',
      bestTime: 'September to March (Pleasant weather after monsoon)',
      attractions: 'Alleppey Backwaters, Munnar Tea Gardens, Periyar National Park, Kovalam Beach, Fort Kochi.'
    }
  };

  const destModal = document.getElementById('destModal');
  const destModalClose = document.getElementById('destModalClose');
  const destModalTitle = document.getElementById('destModalTitle');
  const destModalTagline = document.getElementById('destModalTagline');
  const destModalImg = document.getElementById('destModalImg');
  const destModalDesc = document.getElementById('destModalDesc');
  const destModalBestTime = document.getElementById('destModalBestTime');
  const destModalAttractions = document.getElementById('destModalAttractions');

  // Open destination modal on clicking "Learn More"
  const learnMoreBtns = document.querySelectorAll('.btn-learn-more');
  learnMoreBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const destKey = btn.getAttribute('data-dest');
      const data = destinationData[destKey];

      if (data && destModal) {
        destModalTitle.textContent = data.title;
        destModalTagline.textContent = data.tagline;
        destModalImg.src = data.image;
        destModalImg.alt = data.title;
        destModalDesc.textContent = data.description;
        destModalBestTime.textContent = data.bestTime;
        destModalAttractions.textContent = data.attractions;

        destModal.classList.add('show');
        destModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // Close destination modal
  function closeDestModal() {
    if (destModal) {
      destModal.classList.remove('show');
      destModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (destModalClose) {
    destModalClose.addEventListener('click', closeDestModal);
  }

  /* ==========================================================================
     3. POPULAR PACKAGES DETAILS DATA & MODAL
     ========================================================================== */
  const packageData = {
    goa: {
      title: 'Goa Coastal Retreat',
      duration: '4 Days / 3 Nights',
      image: 'images/pkg-goa.jpg',
      price: '₹12,499 / person',
      highlights: [
        'Day 1: Arrival, North Goa beach exploration (Baga & Calangute).',
        'Day 2: Historic Old Goa churches (Basilica of Bom Jesus) & Fort Aguada.',
        'Day 3: South Goa tour, Spice plantation lunch, and evening Mandovi sunset cruise.',
        'Day 4: Souvenir shopping in Panaji market and departure.'
      ]
    },
    kashmir: {
      title: 'Kashmir Alpine Paradise',
      duration: '5 Days / 4 Nights',
      image: 'images/pkg-kashmir.jpg',
      price: '₹18,999 / person',
      highlights: [
        'Day 1: Srinagar arrival, checking into a traditional Dal Lake houseboat & Shikara ride.',
        'Day 2: Mughal Gardens (Nishat & Shalimar Bagh) and Shankaracharya Temple.',
        'Day 3: Day excursion to Gulmarg with famous Gondola cable car ride.',
        'Day 4: Scenic drive to Pahalgam Valley of Shepherds & river walks.',
        'Day 5: Kashmiri saffron and walnut shopping before airport departure.'
      ]
    },
    rajasthan: {
      title: 'Royal Rajasthan Heritage',
      duration: '5 Days / 4 Nights',
      image: 'images/pkg-rajasthan.jpg',
      price: '₹16,499 / person',
      highlights: [
        'Day 1: Welcome in Jaipur, evening stroll around Johari and Bapu Bazaars.',
        'Day 2: Grand Amber Fort with elephant/jeep ride, City Palace & Hawa Mahal.',
        'Day 3: Day trip to historic forts of Nahargarh & Jaigarh overlooking the city.',
        'Day 4: Traditional Rajasthani cultural evening with folk dance and authentic dinner.',
        'Day 5: Visit Albert Hall Museum and depart with royal souvenirs.'
      ]
    }
  };

  const pkgModal = document.getElementById('pkgModal');
  const pkgModalClose = document.getElementById('pkgModalClose');
  const pkgModalGotItBtn = document.getElementById('pkgModalGotItBtn');
  const pkgModalTitle = document.getElementById('pkgModalTitle');
  const pkgModalDuration = document.getElementById('pkgModalDuration');
  const pkgModalImg = document.getElementById('pkgModalImg');
  const pkgModalList = document.getElementById('pkgModalList');
  const pkgModalPrice = document.getElementById('pkgModalPrice');

  // Open package modal on clicking "View Details"
  const viewPkgBtns = document.querySelectorAll('.btn-view-pkg');
  viewPkgBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const pkgKey = btn.getAttribute('data-pkg');
      const data = packageData[pkgKey];

      if (data && pkgModal) {
        pkgModalTitle.textContent = data.title;
        pkgModalDuration.textContent = data.duration;
        pkgModalImg.src = data.image;
        pkgModalImg.alt = data.title;
        pkgModalPrice.textContent = data.price;

        // Populate itinerary list
        pkgModalList.innerHTML = '';
        data.highlights.forEach(function (item) {
          const li = document.createElement('li');
          li.textContent = item;
          pkgModalList.appendChild(li);
        });

        pkgModal.classList.add('show');
        pkgModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // Close package modal
  function closePkgModal() {
    if (pkgModal) {
      pkgModal.classList.remove('show');
      pkgModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (pkgModalClose) pkgModalClose.addEventListener('click', closePkgModal);
  if (pkgModalGotItBtn) pkgModalGotItBtn.addEventListener('click', closePkgModal);

  /* ==========================================================================
     4. GALLERY LIGHTBOX POPUP
     ========================================================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Open clicked image in larger view
  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const imgElement = item.querySelector('.gallery-img');
      const captionText = item.getAttribute('data-caption') || imgElement.alt;

      if (lightboxModal && imgElement) {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = captionText;
        lightboxCaption.textContent = captionText;

        lightboxModal.classList.add('show');
        lightboxModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // Close lightbox modal
  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('show');
      lightboxModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  /* ==========================================================================
     5. MODAL BACKDROP CLICK & ESCAPE KEY HANDLING
     ========================================================================== */
  window.addEventListener('click', function (event) {
    if (event.target === destModal) closeDestModal();
    if (event.target === pkgModal) closePkgModal();
    if (event.target === lightboxModal) closeLightbox();
  });

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeDestModal();
      closePkgModal();
      closeLightbox();
    }
  });

  /* ==========================================================================
     6. CONTACT FORM VALIDATION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('contactSuccessMsg');

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const destInput = document.getElementById('contactDestination');
  const messageInput = document.getElementById('contactMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const destError = document.getElementById('destError');
  const messageError = document.getElementById('messageError');

  // Helper function to validate basic email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Clear all form error indicators
  function clearErrors() {
    [nameInput, emailInput, destInput, messageInput].forEach(function (input) {
      if (input) input.classList.remove('input-error');
    });
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (destError) destError.textContent = '';
    if (messageError) messageError.textContent = '';
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent standard page reload

      clearErrors();
      let isValid = true;

      // Validate Name
      const nameVal = nameInput.value.trim();
      if (nameVal === '') {
        nameError.textContent = 'Please enter your name.';
        nameInput.classList.add('input-error');
        isValid = false;
      } else if (nameVal.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long.';
        nameInput.classList.add('input-error');
        isValid = false;
      }

      // Validate Email
      const emailVal = emailInput.value.trim();
      if (emailVal === '') {
        emailError.textContent = 'Please enter your email address.';
        emailInput.classList.add('input-error');
        isValid = false;
      } else if (!isValidEmail(emailVal)) {
        emailError.textContent = 'Please enter a valid email address (e.g. name@example.com).';
        emailInput.classList.add('input-error');
        isValid = false;
      }

      // Validate Destination
      const destVal = destInput.value;
      if (destVal === '') {
        destError.textContent = 'Please select a destination of interest.';
        destInput.classList.add('input-error');
        isValid = false;
      }

      // Validate Message
      const messageVal = messageInput.value.trim();
      if (messageVal === '') {
        messageError.textContent = 'Please write a brief message.';
        messageInput.classList.add('input-error');
        isValid = false;
      } else if (messageVal.length < 8) {
        messageError.textContent = 'Message should be at least 8 characters.';
        messageInput.classList.add('input-error');
        isValid = false;
      }

      // If all inputs are valid, show confirmation message
      if (isValid) {
        if (successMsg) {
          successMsg.style.display = 'block';
          // Smoothly scroll to the success message so the user sees it
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset the form inputs
        contactForm.reset();
      }
    });
  }
});
