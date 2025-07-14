import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState('#ffffff');
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
  const [activeSection, setActiveSection] = useState(0);
  const [navActiveSection, setNavActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  // Function to scroll to a specific section
  const scrollToSection = (sectionIndex) => {
    setIsNavigating(true);
    setActiveSection(sectionIndex);
    setNavActiveSection(sectionIndex);
    
    // Reset animation states for the target section only
    if (sectionIndex === 0) { // Cyclops
      setCyclopsImagesTriggered(false);
      setTimeout(() => setCyclopsImagesTriggered(true), 100);
    } else if (sectionIndex === 1) { // Wolverine
      setWolverineImagesTriggered(false);
      setWolverineHighlightsTriggered(false);
      setWolverineStarTriggered(false);
      setWolverineClawsStarted(false);
      setTimeout(() => setWolverineImagesTriggered(true), 100);
    } else if (sectionIndex === 2) { // Storm
      setStormImagesTriggered(false);
      setStormStarTriggered(false);
      setStormLightningStarted(false);
      setTimeout(() => setStormImagesTriggered(true), 100);
    } else if (sectionIndex === 3) { // Psylocke
      setPsylockeImagesTriggered(false);
      setPsylockeSwordTriggered(false);
      setPsylockeStarTriggered(false);
      setPsylockeSwordStarted(false);
      setTimeout(() => setPsylockeImagesTriggered(true), 100);
    } else if (sectionIndex === 4) { // Gambit
      setGambitWhiteCardTriggered(false);
      setGambitOrangeCardTriggered(false);
      setGambitWhiteCardStarted(false);
      setTimeout(() => setGambitWhiteCardTriggered(true), 100);
    } else if (sectionIndex === 5) { // Colossus
      setColossusPeachFaceTriggered(false);
      setColossusSilverFaceTriggered(false);
      setColossusStarTriggered(false);
      setColossusPeachFaceStarted(false);
      setTimeout(() => setColossusPeachFaceTriggered(true), 100);
    }
    
    const sections = document.querySelectorAll('section');
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
    
    // Reset navigation flag after scroll completes
    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
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
        gap: gap,
        justifyContent: 'center',
        alignItems: 'center',
        width: isTiny ? 'auto' : isVerySmall ? 'auto' : '320px',
        minWidth: isTiny ? 'auto' : isVerySmall ? 'auto' : '320px',
        maxWidth: isTiny ? 'auto' : isVerySmall ? '95vw' : '320px'
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
                style={{
                  backgroundColor: navActiveSection === index ? section.color : 'transparent',
                  color: navActiveSection === index ? '#000' : '#666',
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
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1)';
                  }
                }}
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
                style={{
                  backgroundColor: navActiveSection === index ? section.color : 'transparent',
                  color: navActiveSection === index ? '#000' : '#666',
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
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1)';
                  }
                }}
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
                  style={{
                    backgroundColor: navActiveSection === index ? section.color : 'transparent',
                    color: navActiveSection === index ? '#000' : '#666',
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
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.target.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.target.style.transform = 'scale(1)';
                    }
                  }}
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
                  style={{
                    backgroundColor: navActiveSection === (index + 3) ? section.color : 'transparent',
                    color: navActiveSection === (index + 3) ? '#000' : '#666',
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
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.target.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.target.style.transform = 'scale(1)';
                    }
                  }}
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
        width: sidebarWidth
      }}>
        {sections.map((section, index) => (
          <button
            key={section.name}
            onClick={() => scrollToSection(index)}
            style={{
              backgroundColor: navActiveSection === index ? section.color : 'transparent',
              color: navActiveSection === index ? '#000' : '#666',
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
              alignItems: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
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

      // Only update active section if not navigating or resizing
      if (!isNavigating && !isResizing) {
        // Calculate which section is currently in view for immediate color updates
        let foundActive = false;
        
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          // Check if section is more than 50% in view
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setActiveSection(index);
            foundActive = true;
          }
        });

        // If no section is found, default to first section (white)
        if (!foundActive) {
          setActiveSection(0);
        }
      }

      // Always update colors based on current active section
      const colors = ['#ffffff', '#0085ba', '#17609c', '#2a273d', '#bf1f2f', '#fff203'];
      const newColor = colors[activeSection] || colors[0];
      setCurrentColor(newColor);



      // Check if Cyclops section is in view for image animations
      const cyclopsSection = document.querySelector('.cyclops-section');
      if (cyclopsSection) {
        const rect = cyclopsSection.getBoundingClientRect();
        // Show images when section is 30% in view
        if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3) {
          setCyclopsImagesTriggered(true);
        }
      }

      // Check if Wolverine section is in view for image animations
      const wolverineSection = document.querySelector('.wolverine-section');
      if (wolverineSection) {
        const rect = wolverineSection.getBoundingClientRect();
        // Show images when section is much further in view (80% instead of 60%)
        if (rect.top <= windowHeight * 0.2 && rect.bottom >= windowHeight * 0.8) {
          setWolverineImagesTriggered(true);
          // Start the claws animation
          if (!wolverineClawsStarted) {
            setWolverineClawsStarted(true);
            // Trigger highlights and star after claws animation finishes (1.6s duration)
            setTimeout(() => {
              setWolverineHighlightsTriggered(true);
              setWolverineStarTriggered(true);
            }, 1600);
          }
        }
      }

      // Check if Storm section is in view for image animations
      const stormSection = document.querySelector('.storm-section');
      if (stormSection) {
        const rect = stormSection.getBoundingClientRect();
        // Show images when section is 30% in view
        if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3) {
          setStormImagesTriggered(true);
          // Start the lightning animation
          if (!stormLightningStarted) {
            setStormLightningStarted(true);
            // Trigger star after lightning animation finishes (1.6s duration)
            setTimeout(() => {
              setStormStarTriggered(true);
            }, 1600);
          }
        }
      }

      // Check if Psylocke section is in view for image animations
      const psylockeSection = document.querySelector('.psylocke-section');
      if (psylockeSection) {
        const rect = psylockeSection.getBoundingClientRect();
        // Show pinklight when section is 30% in view
        if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3) {
          setPsylockeImagesTriggered(true);
        }
        // Trigger sword when section is further in view (e.g. 50% from top and 50% from bottom)
        if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
          setPsylockeSwordTriggered(true);
          // Start the sword animation
          if (!psylockeSwordStarted) {
            setPsylockeSwordStarted(true);
            // Trigger star after sword animation finishes (1.6s duration)
            setTimeout(() => {
              setPsylockeStarTriggered(true);
            }, 1600);
          }
        }
      }

      // Check if Gambit section is in view for image animations
      const gambitSection = document.querySelector('.gambit-section');
      if (gambitSection) {
        const rect = gambitSection.getBoundingClientRect();
        // Show white card when section is 30% in view
        if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3) {
          setGambitWhiteCardTriggered(true);
          // Start the white card animation
          if (!gambitWhiteCardStarted) {
            setGambitWhiteCardStarted(true);
            // Trigger orange card after white card animation finishes (2.0s duration)
            setTimeout(() => {
              setGambitOrangeCardTriggered(true);
            }, 2000);
          }
        }
      }

      // Check if Colossus section is in view for image animations
      const colossusSection = document.querySelector('.colossus-section');
      if (colossusSection) {
        const rect = colossusSection.getBoundingClientRect();
        // Show peach face when section is 30% in view
        if (rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3) {
          setColossusPeachFaceTriggered(true);
          // Start the peach face animation
          if (!colossusPeachFaceStarted) {
            setColossusPeachFaceStarted(true);
            // Trigger silver face after peach face animation finishes (1.6s duration)
            setTimeout(() => {
              setColossusSilverFaceTriggered(true);
            }, 1600);
            // Trigger star when silver face is at 50% (0.8s after silver face starts)
            setTimeout(() => {
              setColossusStarTriggered(true);
            }, 2400);
          }
        }
      }
    };

    // Set initial color to white
    setCurrentColor('#ffffff');
    
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

  // Separate effect to sync navigation with active section after delay
  useEffect(() => {
    // Skip nav updates if we're navigating
    if (isNavigating) return;
    
    const timer = setTimeout(() => {
      setNavActiveSection(activeSection);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeSection, isNavigating]);

  // Effect to center the active section in the viewport (only for resize, not navigation)
  useEffect(() => {
    if (isNavigating || isResizing) return;
    const sections = document.querySelectorAll('section');
    if (sections[activeSection]) {
      const section = sections[activeSection];
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate the exact scroll position needed to center the section
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const targetScrollTop = sectionTop + (sectionHeight / 2) - (windowHeight / 2);
      
      // Only scroll if we're significantly off-center
      if (Math.abs(window.scrollY - targetScrollTop) > 10) {
        window.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSection, isNavigating, isResizing]);

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
        setCurrentColor(colors[index]);
        foundActive = true;
      }
    });

    if (!foundActive) {
      setActiveSection(0);
      setCurrentColor(colors[0]);
    }
  }, []); // Run only on mount

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
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
          transition={{ duration: 1.6, ease: "easeOut" }}
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
              transition={{ duration: 1.6, ease: "easeOut" }}
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
              transition={{ duration: 1.6 }}
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
              transition={{ duration: 1.6, ease: "easeOut" }}
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
              transition={{ duration: 1.6 }}
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
              transition={{ duration: 1.6, ease: "easeOut" }}
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
                transition={{ duration: 2.0, ease: "easeOut" }}
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
                transition={{ duration: 1.6, ease: "easeOut" }}
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
              transition={{ duration: 1.6 }}
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
              transition={{ duration: 1.6, ease: "easeOut" }}
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
