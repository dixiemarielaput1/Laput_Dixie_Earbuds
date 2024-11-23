

(() => { 
  const hotspots = document.querySelectorAll(".Hotspot");
  const menuIcon = document.querySelector("#menu-icon");
  const navbarMobile = document.querySelector("#navbar-mobile");

  const hotspotInfo = [
    {
      keyFeature: "Clear Voice Technology",  
      featureDescription: "The advanced noise-cancelling microphone, paired with a built-in copper shield, minimizes background noise for crystal-clear calls.",
      image: "images/icons8-sound-wave-100.png"
    },
    {
      keyFeature: "Rapid Charging",
      featureDescription: "Charge up in just 60 minutes for hours of uninterrupted listening.",
      image: "images/icons8-charge.svg"
    },
    {
      keyFeature: "Ergonomic Design",
      featureDescription: "Engineered for comfort, these earbuds feature an ergonomic shape that fits perfectly in your ears for all-day wear.",
      image: "images/icons8-motion.svg"
    },
    {
      keyFeature: "Optimal Comfort",
      featureDescription: "Three pairs of flexible silicone tips ensure a snug and secure fit for any ear shape.",
      image: "images/icons8-ears.svg"
    },
    {
      keyFeature: "Spatial Sound",
      featureDescription: "Immerses you in a dynamic audio environment. Feel every sound moving around you, creating a 3D listening experience.",
      image: "images/icons8-sample-rate.svg"
    }
  ];

  function applyGlowEffect() {
    hotspots.forEach(hotspot => {
      gsap.to(hotspot, {boxShadow: "0 0 80px 30px rgba(138, 43, 226, 1)",backgroundColor: "#7950F2",duration: .5,scale: 1.2, ease: "power2.out", borderRadius: "50%"}); 
    });

  }

  applyGlowEffect();

  function showInfo(ev) {
    hotspots.forEach((hotspot, counter) => {
      if (hotspot === ev.currentTarget) {
        const { keyFeature, featureDescription, image } = hotspotInfo[counter];
        let hotspotDetails  = ev.currentTarget.querySelector(".HotspotAnnotation");
        hotspotDetails.innerHTML = `<img src="${image}" alt="${keyFeature}"><h2>${keyFeature}</h2><p>${featureDescription}</p>`;
        gsap.to(hotspotDetails, { scale: 1.1, duration: 0.3, ease: "power2.out", autoAlpha: 1 });
        gsap.to(ev.currentTarget, { boxShadow: "0 0 40px 15px rgba(255, 105, 180, 1)", borderRadius: "50%", scale: 1.2, ease: "power3.out", duration: 0.5 });
      }
    });
  }

  function hideInfo(ev) {
    let hotspotDetails  = ev.currentTarget.querySelector(".HotspotAnnotation");
    gsap.to(hotspotDetails,{ease: "power2.in", scale: 1, autoAlpha: 0});
    gsap.to(ev.currentTarget, { boxShadow: "0 0 80px 15px rgba(255, 255, 255, 1)",borderRadius: "50%", duration: 0.2, scale: 1 ,ease: "power2.in"});
    applyGlowEffect();
  }

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

  menuIcon.addEventListener("click", () => {
    navbarMobile.classList.toggle("hidden");
  });
})();

(() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    
    canvas.width = 3840;
    canvas.height = 2160;
    
    const imageholder1 = [];
    const imageholder2 = [];
    const imageholder3 = [];
    
    for (let i = 0; i < 120; i++) {
      const img = new Image();
      img.src = `images/meowk${(i + 1).toString().padStart(4, '0')}.png`;
      imageholder1.push(img);
    }
    
    for (let i = 0; i < 150; i++) {
      const img = new Image();
      img.src = `images/meowers${(i + 1).toString().padStart(4, '0')}.png`;
      imageholder2.push(img);
    }
  
    for (let i = 0; i < 40; i++) {
      const img = new Image();
      img.src = `images/opencase${(i + 1).toString().padStart(4, '0')}.png`;
      imageholder3.push(img);
    }
  
    const imagesList = [...imageholder1, ...imageholder2, ...imageholder3];
    
    const buds = { frame: 0 };
    
    gsap.to(buds,{
      frame: imagesList.length - 1,snap: "frame",scrollTrigger: {trigger: "#explode-view",pin: true,scrub: 10,start: "top top",end: "bottom bottom"
      },
      onUpdate: render
    });
  
    gsap.fromTo(context.canvas,{opacity:0},{opacity: 1,x: 0,ease:"power3.inOut",duration: 1.4 });
    
    imagesList[0].addEventListener("load", render);
    
    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imagesList[buds.frame], 0, 0);
    }
  })();


(() => {
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    const value = slider.value;
    divisor.style.height = `${100 - value}%`; 
  }

  slider.addEventListener("input", moveDivisor);
})();

(() => {
  const slider = document.querySelector('input[type=range]');

  gsap.to(slider, {ease: "bounce.out",  boxShadow: "0 0 25px 8px rgba(255, 105, 180, 0.7)",backgroundColor: "white",yoyo: true,duration: 1,repeat: -1,});

  const sliderTimeline = gsap.timeline({
    scrollTrigger: {trigger: slider,start: "top bottom",end: "bottom top",onEnter: (e) => sliderTimeline.play(),onLeaveBack: (e) => sliderTimeline.reverse(),
    }
  });

  sliderTimeline.fromTo(slider, {opacity: 0,y: -100,
  }, {opacity: 1,y: 0,ease: "bounce.out",boxShadow: "0 0 25px 8px rgba(255, 105, 180, 0.7)",backgroundColor: "white",duration: 1,repeat: 0, yoyo: true});
})();


(() => {
  const menuEffect = gsap.timeline({ paused: true });
  menuEffect.from("#menu li", {y: 20,ease: "circ.out",duration: 0.8,stagger: 0.1,opacity: 0});
  menuEffect.play();
  ScrollTrigger.create({trigger:"#menu",start:"top top",onEnter: (e) => menuEffect.restart(),onLeaveBack:(e) => menuEffect.restart(),markers: false,once: false});

  const heroEffect = gsap.timeline({ paused: true });
  heroEffect.from(".hero-text-1",{autoAlpha: 0,duration: 1.2,ease: "roughEase",y: -150,stagger: 0.5});
  heroEffect.play();
  ScrollTrigger.create({start:"top top",trigger: ".hero-text-1",onEnter: (e) => heroEffect.restart(),onLeaveBack: (e) => heroEffect.restart(),once: false,markers: false,});

  const connectEffect = gsap.timeline({ paused: true });
  connectEffect.from(".connect", {opacity: 0,x: -300,stagger: {amount: 1.5,ease: "power4.out",from: "start"},duration: 1.2});
  connectEffect.play();
  ScrollTrigger.create({start: "top top",trigger: ".connect",onEnter: (e) => connectEffect.restart(),onLeaveBack: (e) => connectEffect.restart(),markers: false,once: false});

  const aboutEffect = gsap.timeline();aboutEffect.from(".about-text", {x: -200,opacity: 0,duration: 1.2,stagger: { amount: 1.5, ease: "ease.out", from: "start" },});
  ScrollTrigger.create({trigger: ".about-text",start: "top bottom",end: "bottom top",onEnter: (e) => aboutEffect.restart(),onLeaveBack: (e) => aboutEffect.restart(),markers: false,once: false,scrub: true });

  const aboutInfoEffect = gsap.timeline();aboutInfoEffect.from(".about-info ", {y: -70,opacity: 0,duration: 1.2,stagger: { amount: 3.5, ease: "ease.in", from: "start" },});
  ScrollTrigger.create({trigger: ".about-info ",start: "top bottom",end: "bottom top",onEnter: (e) => aboutInfoEffect.restart(),onLeaveBack: (e) => aboutInfoEffect.restart(),markers: false,once: false});

  const aboutDetailEffect = gsap.timeline();aboutDetailEffect.from(".about-details", {y: 20,opacity: 0,duration: 1.4,stagger: { amount: 0.5, ease: "ease.out", from: "start" },});
  ScrollTrigger.create({trigger: ".about-details",start: "top bottom",end: "bottom top",onEnter: (e) => aboutDetailEffect.restart(),onLeaveBack: (e) => aboutDetailEffect.restart(),markers: false,once: false});
})();


