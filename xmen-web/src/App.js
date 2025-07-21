import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [wolverineImagesTriggered, setWolverineImagesTriggered] = useState(false);
  const [wolverineHighlightsTriggered, setWolverineHighlightsTriggered] = useState(false);
  const [wolverineStarTriggered, setWolverineStarTriggered] = useState(false);
  const [wolverineClawsStarted, setWolverineClawsStarted] = useState(false);
  const [cyclopsImagesTriggered, setCyclopsImagesTriggered] = useState(false);
  const [stormImagesTriggered, setStormImagesTriggered] = useState(false);
  const [stormStarTriggered, setStormStarTriggered] = useState(false);
  const [stormLightningStarted, setStormLightningStarted] = useState(false);
  const [psylockeImagesTriggered, setPsylockeImagesTriggered] = useState(false);
  const [psylockeSwordTriggered, setPsylockeSwordTriggered] = useState(false);
  const [psylockeStarTriggered, setPsylockeStarTriggered] = useState(false);
  const [psylockeSwordStarted, setPsylockeSwordStarted] = useState(false);
  const [gambitWhiteCardTriggered, setGambitWhiteCardTriggered] = useState(false);
  const [gambitOrangeCardTriggered, setGambitOrangeCardTriggered] = useState(false);
  const [gambitWhiteCardStarted, setGambitWhiteCardStarted] = useState(false);
  const [colossusPeachFaceTriggered, setColossusPeachFaceTriggered] = useState(false);
  const [colossusSilverFaceTriggered, setColossusSilverFaceTriggered] = useState(false);
  const [colossusStarTriggered, setColossusStarTriggered] = useState(false);
  const [colossusPeachFaceStarted, setColossusPeachFaceStarted] = useState(false);
  // Track which sections have been visited to prevent re-triggering
  const [visitedSections, setVisitedSections] = useState(new Set());
  const [activeSection, setActiveSection] = useState(0);
  const [navActiveSection, setNavActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  // Lock section index for color during navigation
  const [lockedSection, setLockedSection] = useState(null);

  // Function to scroll to a specific section
  const scrollToSection = (sectionIndex) => {
    setIsNavigating(true);
    setNavActiveSection(sectionIndex);
    setLockedSection(sectionIndex); // Lock color to target section
    // No need to set background color state; handled in render
    // Only trigger animations if section hasn't been visited before
    if (!visitedSections.has(sectionIndex)) {
      setVisitedSections(prev => new Set([...prev, sectionIndex]));
      if (sectionIndex === 0) { // Cyclops
        setCyclopsImagesTriggered(true);
      } else if (sectionIndex === 1) { // Wolverine
        setWolverineImagesTriggered(true);
        setWolverineClawsStarted(true);
        setTimeout(() => {
          setWolverineHighlightsTriggered(true);
          setWolverineStarTriggered(true);
        }, 1200);
      } else if (sectionIndex === 2) { // Storm
        setStormImagesTriggered(true);
        setStormLightningStarted(true);
        setTimeout(() => {
          setStormStarTriggered(true);
        }, 1200);
      } else if (sectionIndex === 3) { // Psylocke
        setPsylockeImagesTriggered(true);
        setPsylockeSwordTriggered(true);
        setPsylockeSwordStarted(true);
        setTimeout(() => {
          setPsylockeStarTriggered(true);
        }, 1200);
      } else if (sectionIndex === 4) { // Gambit
        setGambitWhiteCardTriggered(true);
        setGambitWhiteCardStarted(true);
        setTimeout(() => {
          setGambitOrangeCardTriggered(true);
        }, 1500);
      } else if (sectionIndex === 5) { // Colossus
        setColossusPeachFaceTriggered(true);
        setColossusPeachFaceStarted(true);
        setTimeout(() => {
          setColossusSilverFaceTriggered(true);
        }, 1200);
        setTimeout(() => {
          setColossusStarTriggered(true);
        }, 1800);
      }
    }
    const sections = document.querySelectorAll('section');
    if (sections[sectionIndex]) {
      const section = sections[sectionIndex];
      const windowHeight = window.innerHeight;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const targetScrollTop = sectionTop + (sectionHeight / 2) - (windowHeight / 2);
      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
    setTimeout(() => {
      setActiveSection(sectionIndex);
      setIsNavigating(false);
      setLockedSection(null); // Unlock after navigation
    }, 500);
  };

  // Check screen size for responsive navigation
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Helper function to determine text color for active buttons
  const getTextColor = (sectionName, isActive) => {
    if (!isActive) return '#666';
    
    // White text for dark backgrounds
    if (sectionName === 'Storm' || sectionName === 'Psylocke' || sectionName === 'Gambit') {
      return '#fff';
    }
    return '#000';
  };

  // Horizontal navigation for mobile/tablet
  const HorizontalNav = () => {
    const sections = [
      { name: 'Cyclops', color: '#ffffff' },
      { name: 'Wolverine', color: '#0085ba' },
      { name: 'Storm', color: '#17609c' },
      { name: 'Psylocke', color: '#2a273d' },
      { name: 'Gambit', color: '#bf1f2f' },
      { name: 'Colossus', color: '#fff203' }
    ];

    // State for responsive sizing
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update window size on resize
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Check if window is too small for double rows
    const isVerySmall = windowSize.width < 600 || windowSize.height < 400;
    const isTiny = windowSize.width < 400 || windowSize.height < 300;
    const buttonWidth = isTiny ? '60px' : isVerySmall ? '70px' : '90px';
    const fontSize = isTiny ? '10px' : isVerySmall ? '12px' : '14px';
    const padding = isTiny ? '4px 8px' : isVerySmall ? '6px 12px' : '8px 16px';
    const gap = isTiny ? '4px' : isVerySmall ? '6px' : '8px';

    return (
      <div style={{
        position: 'fixed',
        top: isTiny || isVerySmall ? '10px' : '20px',
        left: isTiny || isVerySmall ? '10px' : '50%',
        transform: isTiny || isVerySmall ? 'none' : 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: isTiny || isVerySmall ? '15px' : '25px',
        padding: isTiny ? '6px 8px' : isVerySmall ? '8px 12px' : '12px 20px',
        zIndex: 2000,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: isTiny ? 'column' : isVerySmall ? 'row' : 'column',
        flexWrap: 'wrap',
        gap: gap,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        minWidth: isTiny ? 'auto' : isVerySmall ? 'auto' : '320px',
        // maxWidth removed for better wrapping
      }}>
        {isTiny ? (
          // 2 columns of 3 for tiny windows (top left corner)
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: gap,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {sections.map((section, index) => (
              <button
                key={section.name}
                onClick={() => scrollToSection(index)}
                className={`nav-btn ${navActiveSection === index ? 'nav-btn-hover' : ''}`}
                style={{
                  backgroundColor: navActiveSection === index ? section.color : 'transparent',
                  color: getTextColor(section.name, navActiveSection === index),
                  border: `2px solid ${navActiveSection === index ? section.color : '#ccc'}`,
                  borderRadius: '20px',
                  padding: padding,
                  fontSize: fontSize,
                  fontWeight: navActiveSection === index ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  width: buttonWidth,
                  minWidth: buttonWidth,
                  maxWidth: buttonWidth,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  '--nav-hover-bg': section.color,
                  '--nav-hover-color': getTextColor(section.name, true)
                }}
                onMouseEnter={e => e.currentTarget.classList.add('nav-btn-hover')}
                onMouseLeave={e => e.currentTarget.classList.remove('nav-btn-hover')}
              >
                {section.name}
              </button>
            ))}
          </div>
        ) : isVerySmall ? (
          // 2 columns of 3 for very small windows (top left corner)
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: gap,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {sections.map((section, index) => (
              <button
                key={section.name}
                onClick={() => scrollToSection(index)}
                className={`nav-btn ${navActiveSection === index ? 'nav-btn-hover' : ''}`}
                style={{
                  backgroundColor: navActiveSection === index ? section.color : 'transparent',
                  color: getTextColor(section.name, navActiveSection === index),
                  border: `2px solid ${navActiveSection === index ? section.color : '#ccc'}`,
                  borderRadius: '20px',
                  padding: padding,
                  fontSize: fontSize,
                  fontWeight: navActiveSection === index ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  width: buttonWidth,
                  minWidth: buttonWidth,
                  maxWidth: buttonWidth,
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  '--nav-hover-bg': section.color,
                  '--nav-hover-color': getTextColor(section.name, true)
                }}
                onMouseEnter={e => e.currentTarget.classList.add('nav-btn-hover')}
                onMouseLeave={e => e.currentTarget.classList.remove('nav-btn-hover')}
              >
                {section.name}
              </button>
            ))}
          </div>
        ) : (
          // Double row for normal mobile
          <>
            {/* Top row - first 3 buttons */}
            <div style={{
              display: 'flex',
              gap: gap,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {sections.slice(0, 3).map((section, index) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(index)}
                  className={`nav-btn ${navActiveSection === index ? 'nav-btn-hover' : ''}`}
                  style={{
                    backgroundColor: navActiveSection === index ? section.color : 'transparent',
                    color: getTextColor(section.name, navActiveSection === index),
                    border: `2px solid ${navActiveSection === index ? section.color : '#ccc'}`,
                    borderRadius: '20px',
                    padding: padding,
                    fontSize: fontSize,
                    fontWeight: navActiveSection === index ? 'bold' : 'normal',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    width: buttonWidth,
                    minWidth: buttonWidth,
                    maxWidth: buttonWidth,
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    '--nav-hover-bg': section.color,
                    '--nav-hover-color': getTextColor(section.name, true)
                  }}
                  onMouseEnter={e => e.currentTarget.classList.add('nav-btn-hover')}
                  onMouseLeave={e => e.currentTarget.classList.remove('nav-btn-hover')}
                >
                  {section.name}
                </button>
              ))}
            </div>
            
            {/* Bottom row - last 3 buttons */}
            <div style={{
              display: 'flex',
              gap: gap,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {sections.slice(3, 6).map((section, index) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(index + 3)}
                  className={`nav-btn ${navActiveSection === (index + 3) ? 'nav-btn-hover' : ''}`}
                  style={{
                    backgroundColor: navActiveSection === (index + 3) ? section.color : 'transparent',
                    color: getTextColor(section.name, navActiveSection === (index + 3)),
                    border: `2px solid ${navActiveSection === (index + 3) ? section.color : '#ccc'}`,
                    borderRadius: '20px',
                    padding: padding,
                    fontSize: fontSize,
                    fontWeight: navActiveSection === (index + 3) ? 'bold' : 'normal',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    width: buttonWidth,
                    minWidth: buttonWidth,
                    maxWidth: buttonWidth,
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    '--nav-hover-bg': section.color,
                    '--nav-hover-color': getTextColor(section.name, true)
                  }}
                  onMouseEnter={e => e.currentTarget.classList.add('nav-btn-hover')}
                  onMouseLeave={e => e.currentTarget.classList.remove('nav-btn-hover')}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  // Vertical sidebar for desktop
  const Sidebar = () => {
    const sections = [
      { name: 'Cyclops', color: '#ffffff' },
      { name: 'Wolverine', color: '#0085ba' },
      { name: 'Storm', color: '#17609c' },
      { name: 'Psylocke', color: '#2a273d' },
      { name: 'Gambit', color: '#bf1f2f' },
      { name: 'Colossus', color: '#fff203' }
    ];

    // State for responsive sizing
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update window size on resize
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Responsive sizing based on window size
    const isSmallWindow = windowSize.width < 1200 || windowSize.height < 600;
    const sidebarWidth = isSmallWindow ? '100px' : '120px';
    const buttonPadding = isSmallWindow ? '8px 6px' : '10px 8px';
    const fontSize = isSmallWindow ? '12px' : '14px';
    const gap = isSmallWindow ? '8px' : '12px';
    const leftPosition = isSmallWindow ? '20px' : '30px';

    return (
      <div style={{
        position: 'fixed',
        left: leftPosition,
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '25px',
        padding: isSmallWindow ? '15px 10px' : '20px 15px',
        zIndex: 2000,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: gap,
        width: sidebarWidth,
      }}>
        {sections.map((section, index) => (
          <button
            key={section.name}
            onClick={() => scrollToSection(index)}
            className={`nav-btn ${navActiveSection === index ? 'nav-btn-hover' : ''}`}
            style={{
              backgroundColor: navActiveSection === index ? section.color : 'transparent',
              color: getTextColor(section.name, navActiveSection === index),
              border: `2px solid ${navActiveSection === index ? section.color : '#ccc'}`,
              borderRadius: '20px',
              padding: buttonPadding,
              fontSize: fontSize,
              fontWeight: navActiveSection === index ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              '--nav-hover-bg': section.color,
              '--nav-hover-color': getTextColor(section.name, true)
            }}
            onMouseEnter={e => e.currentTarget.classList.add('nav-btn-hover')}
            onMouseLeave={e => e.currentTarget.classList.remove('nav-btn-hover')}
          >
            {section.name}
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    let scrollTimeout;
    let navScrollTimeout;
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll('section');
      
      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (navScrollTimeout) {
        clearTimeout(navScrollTimeout);
      }

      // Only update activeSection based on scroll if not navigating
      if (!isNavigating) {
        // Always update active section based on scroll position (even when navigating, but with delay)
        const updateActiveSection = () => {
          // Calculate which section is currently in view for immediate color updates
          let foundActive = false;
          
          sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            // Check if section is more than 50% in view
            if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
              if (activeSection !== index) {
                setActiveSection(index);
              }
              foundActive = true;
            }
          });

          // If no section is found, default to first section (white)
          if (!foundActive && activeSection !== 0) {
            setActiveSection(0);
          }
        };
        updateActiveSection();
      }

      // Always update colors based on current active section
      // const colors = ['#ffffff', '#0085ba', '#17609c', '#2a273d', '#bf1f2f', '#fff203'];
      // const newColor = colors[activeSection] || colors[0];
      // if (currentColor !== newColor) {
      //   setCurrentColor(newColor);
      // }



      // Additional scroll detection for better responsiveness after navigation
      if (isNavigating) {
        setTimeout(() => {
          const sections = document.querySelectorAll('section');
          let foundActive = false;
          
          sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
              if (activeSection !== index) {
                // Do not update activeSection during navigation
                // setActiveSection(index);
              }
              foundActive = true;
            }
          });

          if (!foundActive && activeSection !== 0) {
            // Do not update activeSection during navigation
            // setActiveSection(0);
          }
        }, 200);
      }





      // Only trigger animations on scroll if not navigating and section hasn't been visited
      if (!isNavigating) {
        // Check if Cyclops section is in view for image animations
        const cyclopsSection = document.querySelector('.cyclops-section');
        if (cyclopsSection && !visitedSections.has(0)) {
          const rect = cyclopsSection.getBoundingClientRect();
          // Show images when section is 50% in view (more mobile-friendly)
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setCyclopsImagesTriggered(true);
            setVisitedSections(prev => new Set([...prev, 0]));
          }
        }

        // Check if Wolverine section is in view for image animations
        const wolverineSection = document.querySelector('.wolverine-section');
        if (wolverineSection && !visitedSections.has(1)) {
          const rect = wolverineSection.getBoundingClientRect();
          // Show images when section is 50% in view (more mobile-friendly)
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setWolverineImagesTriggered(true);
            setWolverineClawsStarted(true);
            setVisitedSections(prev => new Set([...prev, 1]));
            // Trigger highlights and star after claws animation finishes (1.2s duration)
            setTimeout(() => {
              setWolverineHighlightsTriggered(true);
              setWolverineStarTriggered(true);
            }, 1200);
          }
        }

        // Check if Storm section is in view for image animations
        const stormSection = document.querySelector('.storm-section');
        if (stormSection && !visitedSections.has(2)) {
          const rect = stormSection.getBoundingClientRect();
          // Show images when section is 50% in view (more mobile-friendly)
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setStormImagesTriggered(true);
            setStormLightningStarted(true);
            setVisitedSections(prev => new Set([...prev, 2]));
            // Trigger star after lightning animation finishes (1.2s duration)
            setTimeout(() => {
              setStormStarTriggered(true);
            }, 1200);
          }
        }

        // Check if Psylocke section is in view for image animations
        const psylockeSection = document.querySelector('.psylocke-section');
        if (psylockeSection && !visitedSections.has(3)) {
          const rect = psylockeSection.getBoundingClientRect();
          // Show pinklight when section is 50% in view (more mobile-friendly)
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setPsylockeImagesTriggered(true);
            setPsylockeSwordTriggered(true);
            setPsylockeSwordStarted(true);
            setVisitedSections(prev => new Set([...prev, 3]));
            // Trigger star after sword animation finishes (1.2s duration)
            setTimeout(() => {
              setPsylockeStarTriggered(true);
            }, 1200);
          }
        }

        // Check if Gambit section is in view for image animations
        const gambitSection = document.querySelector('.gambit-section');
        if (gambitSection && !visitedSections.has(4)) {
          const rect = gambitSection.getBoundingClientRect();
          // Show white card when section is 50% in view (more mobile-friendly)
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setGambitWhiteCardTriggered(true);
            setGambitWhiteCardStarted(true);
            setVisitedSections(prev => new Set([...prev, 4]));
            // Trigger orange card after white card animation finishes (1.5s duration)
            setTimeout(() => {
              setGambitOrangeCardTriggered(true);
            }, 1500);
          }
        }

        // Check if Colossus section is in view for image animations
        const colossusSection = document.querySelector('.colossus-section');
        if (colossusSection && !visitedSections.has(5)) {
          const rect = colossusSection.getBoundingClientRect();
          // Show peach face when section is 50% in view (more mobile-friendly)
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setColossusPeachFaceTriggered(true);
            setColossusPeachFaceStarted(true);
            setVisitedSections(prev => new Set([...prev, 5]));
            // Trigger silver face after peach face animation finishes (1.2s duration)
            setTimeout(() => {
              setColossusSilverFaceTriggered(true);
            }, 1200);
            // Trigger star when silver face is at 50% (0.6s after silver face starts)
            setTimeout(() => {
              setColossusStarTriggered(true);
            }, 1800);
          }
        }
      }
    };

    // Set initial color to white
    // setCurrentColor('#ffffff');
    
    // Trigger initial scroll to set correct color
    handleScroll();
    
    const handleResize = () => {
      setIsResizing(true);
      // Add a small delay to ensure DOM has updated
      setTimeout(() => {
        handleScroll();
        setIsResizing(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [colossusPeachFaceStarted, gambitWhiteCardStarted, psylockeSwordStarted, stormLightningStarted, wolverineClawsStarted, activeSection]);

  // Compute background color for App container
  const colors = ['#ffffff', '#0085ba', '#17609c', '#2a273d', '#bf1f2f', '#fff203'];
  const bgColor = lockedSection !== null ? colors[lockedSection] : colors[activeSection];

  // Separate effect to sync navigation with active section after delay
  useEffect(() => {
    // Skip nav updates if we're navigating
    if (isNavigating) return;
    // Only update navActiveSection if not navigating
    const timer = setTimeout(() => {
      setNavActiveSection(activeSection);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeSection, isNavigating]);

  // Effect to snap to the active section and prevent skipping sections
  useEffect(() => {
    if (isNavigating || isResizing) return;
    
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section');
      if (sections[activeSection]) {
        const section = sections[activeSection];
        const windowHeight = window.innerHeight;
        
        // Calculate the exact scroll position needed to center the section
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const targetScrollTop = sectionTop + (sectionHeight / 2) - (windowHeight / 2);
        
        // Very gentle centering - only when significantly off-center
        const threshold = isMobile ? 200 : 50;
        if (Math.abs(window.scrollY - targetScrollTop) > threshold) {
          window.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
          });
        }
      }
    }, isMobile ? 50 : 300); // Very fast response on mobile to catch sections immediately
    
    return () => clearTimeout(timer);
  }, [activeSection, isNavigating, isResizing, isMobile]);

  // Effect to set initial color based on scroll position
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('section');
    const colors = ['#ffffff', '#0085ba', '#17609c', '#2a273d', '#bf1f2f', '#fff203'];
    
    let foundActive = false;
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
        setActiveSection(index);
        // setCurrentColor(colors[index]); // Removed
      }
    });

    if (!foundActive) {
      setActiveSection(0);
      // setCurrentColor(colors[0]); // Removed
    }
  }, []); // Run only on mount

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      {/* Cyclops Assets - Outside section for proper positioning */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        pointerEvents: 'none'
      }}>
        <motion.img 
          src="/assets/cyclops_visor_2.png"
          alt="Cyclops Visor"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60vw',
            height: 'auto',
            maxWidth: '800px',
            maxHeight: '80vh',
            zIndex: 1001,
            objectFit: 'contain'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: cyclopsImagesTriggered ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.img 
          src="/assets/cyclops_ray_2.png?v=2"
          alt="Cyclops Ray"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60vw',
            height: 'auto',
            maxWidth: '800px',
            maxHeight: '80vh',
            zIndex: 1002,
            objectFit: 'contain'
          }}
          initial={{ 
            clipPath: 'inset(0 0 100% 0)'
          }}
          animate={{ 
            clipPath: cyclopsImagesTriggered ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)'
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        <motion.img 
          src="/assets/cyclops_star_2.png"
          alt="Cyclops Star"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60vw',
            height: 'auto',
            maxWidth: '800px',
            maxHeight: '80vh',
            zIndex: 1003,
            objectFit: 'contain'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: cyclopsImagesTriggered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />
      </div>

      <div className="content">
        <section className="section cyclops-section">
          {/* Empty section for spacing */}
        </section>
        
        <section className="section wolverine-section">
          {/* Wolverine Assets - Inside section */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            pointerEvents: 'none'
          }}>
            <motion.img 
              src="/assets/wolvering_claws.png"
              alt="Wolverine Claws"
              style={{
                position: 'absolute',
                width: '53vw',
                height: 'auto',
                maxWidth: '800px',
                maxHeight: '80vh',
                zIndex: 1001,
                objectFit: 'contain'
              }}
              initial={{ 
                clipPath: 'inset(100% 0 0 0)',
                transform: 'translateY(20px)'
              }}
              animate={{ 
                clipPath: wolverineImagesTriggered ? 'inset(0% 0 0 0)' : 'inset(100% 0 0 0)',
                transform: wolverineImagesTriggered ? 'translateY(0px)' : 'translateY(20px)'
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            <motion.img 
              src="/assets/wolverine_highlights.png"
              alt="Wolverine Highlights"
              style={{
                position: 'absolute',
                width: '53vw',
                height: 'auto',
                maxWidth: '800px',
                maxHeight: '80vh',
                zIndex: 1002,
                objectFit: 'contain'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: wolverineHighlightsTriggered ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            />
            
            <motion.img 
              src="/assets/wolverine_star.png"
              alt="Wolverine Star"
              style={{
                position: 'absolute',
                width: '53vw',
                height: 'auto',
                maxWidth: '800px',
                maxHeight: '80vh',
                zIndex: 1003,
                objectFit: 'contain'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: wolverineStarTriggered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </section>
        
        <section className="section storm-section" style={{ position: 'relative' }}>
          {/* Storm Assets - Inside section, absolutely centered */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            pointerEvents: 'none'
          }}>
            <motion.img 
              src="/assets/storm_lightning.png"
              alt="Storm Lightning"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '51vw' : '60vw',
                height: 'auto',
                maxWidth: isMobile ? '680px' : '800px',
                maxHeight: '80vh',
                zIndex: 1001,
                objectFit: 'contain'
              }}
              initial={{ 
                clipPath: 'inset(0 0 100% 0)'
              }}
              animate={{ 
                clipPath: stormImagesTriggered ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)'
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            <motion.img 
              src="/assets/storm_star.png"
              alt="Storm Star"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '51vw' : '60vw',
                height: 'auto',
                maxWidth: isMobile ? '680px' : '800px',
                maxHeight: '80vh',
                zIndex: 1002,
                objectFit: 'contain'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: stormStarTriggered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </section>
        
        <section className="section psylocke-section" style={{ position: 'relative' }}>
          {/* Psylocke Assets - Inside section, absolutely centered */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            pointerEvents: 'none'
          }}>
            <motion.img 
              src="/assets/psylocke_pinklight.png"
              alt="Psylocke Pink Light"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '51vw' : '60vw',
                height: 'auto',
                maxWidth: isMobile ? '680px' : '800px',
                maxHeight: '80vh',
                zIndex: 1001,
                objectFit: 'contain'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: psylockeImagesTriggered ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            />
            
            <motion.img 
              src="/assets/psylocke_sword.png"
              alt="Psylocke Sword"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) translateY(20px)',
                width: isMobile ? '51vw' : '60vw',
                height: 'auto',
                maxWidth: isMobile ? '680px' : '800px',
                maxHeight: '80vh',
                zIndex: 1002,
                objectFit: 'contain'
              }}
              initial={{ 
                clipPath: 'inset(100% 0 0 0)',
                transform: 'translate(-50%, -50%) translateY(20px)'
              }}
              animate={{ 
                clipPath: psylockeSwordTriggered ? 'inset(0% 0 0 0)' : 'inset(100% 0 0 0)',
                transform: psylockeSwordTriggered ? 'translate(-50%, -50%) translateY(0px)' : 'translate(-50%, -50%) translateY(20px)'
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            <motion.img 
              src="/assets/psylocke_star.png"
              alt="Psylocke Star"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '51vw' : '60vw',
                height: 'auto',
                maxWidth: isMobile ? '680px' : '800px',
                maxHeight: '80vh',
                zIndex: 1003,
                objectFit: 'contain'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: psylockeStarTriggered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </section>
        
        <section className="section gambit-section" style={{ position: 'relative' }}>
          {/* Gambit Assets - Inside section, absolutely centered */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            pointerEvents: 'none'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(400px, 40vh)',
              height: 'auto',
              maxWidth: '400px',
              maxHeight: '80vh',
              zIndex: 1001,
              pointerEvents: 'none'
            }}>
              <motion.img 
                src="/assets/gambit_whitecard_2.png"
                alt="Gambit White Card"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transformOrigin: 'center'
                }}
                initial={{ 
                  opacity: 0,
                  rotate: 0
                }}
                animate={{ 
                  opacity: gambitWhiteCardTriggered ? 1 : 0,
                  rotate: gambitWhiteCardTriggered ? 360 : 0
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(400px, 40vh)',
              height: 'auto',
              maxWidth: '400px',
              maxHeight: '80vh',
              zIndex: 1002,
              pointerEvents: 'none'
            }}>
              <motion.img 
                src="/assets/gambit_orangecard_2.png"
                alt="Gambit Orange Card"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transformOrigin: 'center'
                }}
                initial={{ 
                  clipPath: 'inset(0 0 100% 0)'
                }}
                animate={{ 
                  clipPath: gambitOrangeCardTriggered ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)'
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </section>
        
        <section className="section colossus-section" style={{ position: 'relative' }}>
          {/* Colossus Assets - Inside section, absolutely centered */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            pointerEvents: 'none'
          }}>
            <motion.img 
              src="/assets/colossus_peachface.png"
              alt="Colossus Peach Face"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '51vw',
                height: 'auto',
                maxWidth: '800px',
                maxHeight: '80vh',
                zIndex: 1001,
                objectFit: 'contain'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: colossusPeachFaceTriggered ? 1 : 0 }}
              transition={{ duration: 1.2 }}
            />
            
            <motion.img 
              src="/assets/colossus_silverface.png"
              alt="Colossus Silver Face"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '51vw',
                height: 'auto',
                maxWidth: '800px',
                maxHeight: '80vh',
                zIndex: 1002,
                objectFit: 'contain'
              }}
              initial={{ 
                clipPath: 'inset(0 0 100% 0)'
              }}
              animate={{ 
                clipPath: colossusSilverFaceTriggered ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)'
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            <motion.img 
              src="/assets/colossus_star.png"
              alt="Colossus Star"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '51vw',
                height: 'auto',
                maxWidth: '800px',
                maxHeight: '80vh',
                zIndex: 1003,
                objectFit: 'contain'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: colossusStarTriggered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </section>
      </div>
      {isMobile ? <HorizontalNav /> : <Sidebar />}
    </div>
  );
}

export default App;
