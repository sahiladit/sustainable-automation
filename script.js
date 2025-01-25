gsap.to("#mod2 img", {
  scrollTrigger: {
    trigger: "#mod2",
    start: "bottom 75%",
    end: "bottom 0%",
    toggleActions: "play none none reset",
    onEnter: () => {
      gsap.to("#mod2 img", {
        filter: "blur(8px)",
        duration: 0.5, // Smooth transition
      });
    },
    onLeaveBack: () => {
      gsap.to("#mod2 img", {
        filter: "blur(0px)",
        duration: 0.5, // Smooth transition
      });
    },
  },
});

gsap.registerPlugin(ScrollTrigger);

    // Animation
    gsap.from("#tag1", {
      opacity: 0,
      y: 50, // Matches the translateY style
      duration: 1,
      scrollTrigger: {
        trigger: "#tag1",
        start: "top 50%", // When the top of #tag1 reaches 50% of the viewport
      }
    });
  
    // Animation
    gsap.from("#mod-1-det", {
      opacity: 0,
      y: 100, // Moves the element up by 50px
      duration: 1,
      scrollTrigger: {
        trigger: "#mod-1-det",
        start: "top 75%", // Starts animation when #mod-1-det reaches 75% of the viewport
        toggleActions: "play none none none", // Ensures the animation runs only once
        once: true, // Ensures the animation happens only once
      },
    });

    gsap.from("#features", {
      opacity: 0, // Start with opacity 0 (hidden)
      y: 100, // Start with 50px offset (below)
      duration: 1, // Duration of animation
      scrollTrigger: {
        trigger: "#features", // The trigger for the animation
        start: "top 75%", // Start the animation when the element reaches 75% of the viewport
        toggleActions: "play none none none", // Play the animation once
        once: true, // Ensure the animation only runs the first time the element comes into view
      },
    });
    
    
