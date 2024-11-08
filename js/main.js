(() => { 
  console.log("IIFE Fired");

  const hotspots = document.querySelectorAll(".Hotspot");

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
    console.log(`Hotspot Mouseover: ${ev.currentTarget.slot}`);
    hotspots.forEach((hotspot, counter) => {
      if (hotspot === ev.currentTarget) {
        const { keyFeature, featureDescription, image } = hotspotInfo[counter];
        let hotspotContent = ev.currentTarget.querySelector(".HotspotAnnotation");
        hotspotContent.innerHTML = `<img src="${image}" alt="${keyFeature}"><h2>${keyFeature}</h2><p>${featureDescription}</p>`;
        gsap.to(hotspotContent, { scale: 1.1,duration: 0.3, ease: "power2.out", autoAlpha: 1});
        gsap.to(ev.currentTarget, { boxShadow: "0 0 50px 20px rgba(255, 105, 180, 1)", borderRadius: "50%" ,scale: 1.2, ease: "power3.out", duration: 0.5});}
    });
  }

  function hideInfo(ev) {
    console.log(`Hotspot Mouseout: ${ev.currentTarget.slot}`);
    let hotspotContent = ev.currentTarget.querySelector(".HotspotAnnotation");
    gsap.to(hotspotContent, { ease: "power2.in", scale: 1, autoAlpha: 0 });
    gsap.to(ev.currentTarget, { boxShadow: "0 0 80px 15px rgba(255, 255, 255, 1)",   borderRadius: "50%", duration: 0.2,    scale: 1 ,ease: "power2.in"});
    applyGlowEffect();
  }

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });

})();