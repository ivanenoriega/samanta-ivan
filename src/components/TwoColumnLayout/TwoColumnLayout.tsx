"use client";

import { useEffect, useState, useRef } from "react";
import { weddingData } from "@/data/weddingData";
import IntroSection from "@/components/IntroSection";
import DetailsSection from "@/components/DetailsSection";
import ItinerarySection from "@/components/ItinerarySection";
import GallerySection from "@/components/GallerySection";
import ConfirmationSection from "@/components/ConfirmationSection";
import styles from "./TwoColumnLayout.module.scss";

// Local background images for different sections
const localImages = [
  "/images/leftColumn/photo-1519741497674-611481863552.jpeg", // Intro section - couple photo
  "/images/leftColumn/photo-1519225421980-715cb0215aed.jpeg", // Timer section - venue photo
  "/images/leftColumn/photo-1511285560929-80b456fea0bc.jpeg", // Details section - detail photo
  "/images/leftColumn/photo-1519741497674-611481863552.jpeg", // Itinerary section - couple photo
  "/images/leftColumn/photo-1519225421980-715cb0215aed.jpeg", // Gallery section - venue photo
  "/images/leftColumn/photo-1511285560929-80b456fea0bc.jpeg", // Info section - detail photo
  "/images/leftColumn/photo-1519741497674-611481863552.jpeg", // Gifts section - couple photo
  "/images/leftColumn/photo-1519225421980-715cb0215aed.jpeg", // Hashtag section - venue photo
  "/images/leftColumn/photo-1519741497674-611481863552.jpeg", // Confirmation section - couple photo
  "/images/leftColumn/photo-1519225421980-715cb0215aed.jpeg", // Footer section - venue photo
];

// Fallback images using placeholder services (in case local images fail to load)
const fallbackImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
];

// Function to get the appropriate image URL
const getImageUrl = (index: number) => {
  // Use local images if available, otherwise fallback to external images
  return localImages[index] || fallbackImages[index];
};

export default function TwoColumnLayout() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(true); // Start as true since we're using external images
  const [isTransitioning, setIsTransitioning] = useState(false);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const lastSectionChange = useRef<number>(Date.now());

  // Preload images
  useEffect(() => {
    // Preload local images first
    localImages.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });

    // Also preload fallback images as backup
    fallbackImages.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!rightColumnRef.current || isTransitioning) return;

          const scrollTop = rightColumnRef.current.scrollTop;
          const containerHeight = rightColumnRef.current.clientHeight;
          const sections = rightColumnRef.current.children;
          const totalSections = sections.length;

          // Get the container's bounding rect
          const containerRect = rightColumnRef.current.getBoundingClientRect();

          // Find which section is most visible
          let currentSectionIndex = 0;
          let maxVisibility = 0;

          Array.from(sections).forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top - containerRect.top;
            const sectionHeight = rect.height;

            // Calculate how much of the section is visible in the viewport
            const visibleTop = Math.max(0, sectionTop);
            const visibleBottom = Math.min(
              containerHeight,
              sectionTop + sectionHeight
            );
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            if (visibleHeight > maxVisibility) {
              maxVisibility = visibleHeight;
              currentSectionIndex = index;
            }
          });

          // Ensure we don't exceed the number of background images
          const clampedIndex = Math.min(
            currentSectionIndex,
            fallbackImages.length - 1
          );

          const newSection = Math.max(0, clampedIndex);

          // Only update if section actually changed and enough time has passed
          const now = Date.now();
          const timeSinceLastChange = now - lastSectionChange.current;
          const minTransitionTime = 800; // Minimum 800ms between transitions

          if (
            newSection !== currentSection &&
            timeSinceLastChange >= minTransitionTime
          ) {
            setIsTransitioning(true);
            setCurrentSection(newSection);
            lastSectionChange.current = now;

            // Reset transition flag after animation completes
            setTimeout(() => {
              setIsTransitioning(false);
            }, 800); // Match the CSS transition duration
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    const rightColumn = rightColumnRef.current;
    if (rightColumn) {
      rightColumn.addEventListener("scroll", handleScroll);
      // Initial call to set the first section
      handleScroll();
      return () => rightColumn.removeEventListener("scroll", handleScroll);
    }
  }, [currentSection, isTransitioning]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = () => {
    // If local image fails, use fallback
    setIsImageLoaded(true);
  };

  return (
    <div className={styles.container}>
      {/* Left Column - Fixed with changing background */}
      <div className={styles.leftColumn}>
        <div
          className={`${styles.backgroundImage} ${
            isImageLoaded ? styles.loaded : ""
          }`}
          style={{
            backgroundImage: `url(${getImageUrl(currentSection)})`,
          }}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h1 className={styles.coupleNames}>{weddingData.coupleNames}</h1>
          <p className={styles.date}>{weddingData.weddingDate}</p>
          <p className={styles.quote}>&ldquo;{weddingData.quote}&rdquo;</p>
        </div>
      </div>

      {/* Right Column - Scrollable content */}
      <div className={styles.rightColumn} ref={rightColumnRef}>
        <IntroSection data={weddingData} />
        <ItinerarySection data={weddingData} />
        <DetailsSection data={weddingData} />
        <GallerySection data={weddingData} />
        <ConfirmationSection data={weddingData} />
      </div>
    </div>
  );
}
