(() => { 
  console.log("IIFE Fired");

  const hotspots = document.querySelectorAll(".Hotspot");

  //objects and arrays
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


  console.log(hotspots);

  function showInfo(e) {
    const counter = Array.from(hotspots).indexOf(e.currentTarget);
    const hotspot = hotspotInfo[counter];
    let hotspotContent = e.currentTarget.querySelector(".HotspotAnnotation");
    hotspotContent.innerHTML = `<img src="${hotspot.image}" alt="${hotspot.keyFeature}"><h2>${hotspot.keyFeature}</h2><p>${hotspot.featureDescription}</p>`;
    gsap.to(hotspotContent, 1, { ease: "power3.out", autoAlpha: 1,scale: 1.1,});
    gsap.to(e.currentTarget, {ease: "power2.out", scale: 1.2, duration: 0.2, boxShadow: "5px 5px 50px rgba(255, 105, 180, 0.8)",borderRadius: "60%", });
    console.log(e.currentTarget.slot);
  }


  function hideInfo(e) {
    console.log("hideInfo called");
    let hotspotContent = e.currentTarget.querySelector(".HotspotAnnotation");
    gsap.to(hotspotContent, 1, { ease: "power2.in", scale: 1,autoAlpha: 0,  });
    gsap.to(e.currentTarget, {ease: "power2.in", boxShadow: "none",borderRadius: "0%", duration: 0.2,scale: 0.8,});
    console.log(e.currentTarget.slot);
  }

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
