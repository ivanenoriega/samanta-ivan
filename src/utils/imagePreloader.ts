/**
 * Image preloader utility to load all images once the app loads
 * This ensures smooth user experience by preloading all images
 */

export interface ImagePreloadResult {
  success: boolean;
  url: string;
  error?: string;
}

export class ImagePreloader {
  private static instance: ImagePreloader;
  private preloadedImages: Set<string> = new Set();
  private loadingPromises: Map<string, Promise<ImagePreloadResult>> = new Map();

  private constructor() {}

  public static getInstance(): ImagePreloader {
    if (!ImagePreloader.instance) {
      ImagePreloader.instance = new ImagePreloader();
    }
    return ImagePreloader.instance;
  }

  /**
   * Preload a single image
   */
  private preloadImage(url: string): Promise<ImagePreloadResult> {
    return new Promise((resolve) => {
      // If already preloaded, resolve immediately
      if (this.preloadedImages.has(url)) {
        resolve({ success: true, url });
        return;
      }

      // If already loading, return the existing promise
      if (this.loadingPromises.has(url)) {
        this.loadingPromises.get(url)!.then(resolve);
        return;
      }

      const img = new Image();
      
      const promise = new Promise<ImagePreloadResult>((resolveInner) => {
        img.onload = () => {
          this.preloadedImages.add(url);
          this.loadingPromises.delete(url);
          resolveInner({ success: true, url });
        };

        img.onerror = () => {
          this.loadingPromises.delete(url);
          resolveInner({ 
            success: false, 
            url, 
            error: `Failed to load image: ${url}` 
          });
        };

        // Start loading the image
        img.src = url;
      });

      this.loadingPromises.set(url, promise);
      promise.then(resolve);
    });
  }

  /**
   * Preload multiple images
   */
  public async preloadImages(urls: string[]): Promise<ImagePreloadResult[]> {
    const promises = urls.map(url => this.preloadImage(url));
    return Promise.all(promises);
  }

  /**
   * Preload all images for the wedding app
   */
  public async preloadAllWeddingImages(): Promise<ImagePreloadResult[]> {
    const allImages = this.getAllWeddingImageUrls();
    console.log('Starting to preload', allImages.length, 'images...');
    
    const results = await this.preloadImages(allImages);
    
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`Image preloading completed: ${successful} successful, ${failed} failed`);
    
    if (failed > 0) {
      console.warn('Failed to preload images:', results.filter(r => !r.success));
    }
    
    return results;
  }

  /**
   * Get all image URLs used in the wedding app
   */
  private getAllWeddingImageUrls(): string[] {
    const images: string[] = [];

    // Background images for TwoColumnLayout
    const localImages = [
      "/images/leftColumn/photo-1519741497674-611481863552.jpeg",
      "/images/leftColumn/photo-1519225421980-715cb0215aed.jpeg",
      "/images/leftColumn/photo-1511285560929-80b456fea0bc.jpeg",
    ];

    const fallbackImages = [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
    ];

    // Add local images first, then fallbacks
    images.push(...localImages);
    images.push(...fallbackImages);

    // Gallery images
    const galleryImages = [
      "/images/gallery/IMG_2260.jpg",
      "/images/gallery/IMG_2286.jpg",
      "/images/gallery/IMG_2467.jpg",
      "/images/gallery/IMG_3458.jpg",
      "/images/gallery/IMG_3558.jpg",
      "/images/gallery/IMG_5299.jpg",
      "/images/gallery/IMG_5448.jpg",
      "/images/gallery/IMG_5482.jpg",
      "/images/gallery/IMG_6622.jpg",
      "/images/gallery/IMG_6672.jpg",
      "/images/gallery/IMG_7036.jpg",
      "/images/gallery/IMG_7756.jpg",
      "/images/gallery/IMG_7765.jpg",
      "/images/gallery/IMG_9002.jpg",
    ];

    images.push(...galleryImages);

    // Icon images
    const iconImages = [
      "/images/icons/arrow-down-sign-to-navigate.png",
      "/images/icons/calendar/apple-logo.png",
      "/images/icons/calendar/download.png",
      "/images/icons/calendar/google-calendar.png",
      "/images/icons/calendar/outlook.png",
      "/images/icons/calendar/yahoo.png",
      "/images/icons/champagne-glass.png",
      "/images/icons/checked.png",
      "/images/icons/couple.png",
      "/images/icons/dress-code.png",
      "/images/icons/external-link.png",
      "/images/icons/gift-card.png",
      "/images/icons/just-married.png",
      "/images/icons/love-letter.png",
      "/images/icons/marriage-contract.png",
      "/images/icons/photos.png",
      "/images/icons/placeholder.png",
      "/images/icons/right-arrow.png",
      "/images/icons/wedding-cake.png",
      "/images/icons/wedding-couple.png",
    ];

    images.push(...iconImages);

    // Other images
    const otherImages = [
      "/images/logo.svg",
      "/images/wedding.png",
      "/favicon.ico",
      "/wedding.ico",
    ];

    images.push(...otherImages);

    return images;
  }

  /**
   * Check if an image is already preloaded
   */
  public isImagePreloaded(url: string): boolean {
    return this.preloadedImages.has(url);
  }

  /**
   * Get preloading progress
   */
  public getPreloadingProgress(): { loaded: number; total: number; percentage: number } {
    const allImages = this.getAllWeddingImageUrls();
    const loaded = this.preloadedImages.size;
    const total = allImages.length;
    const percentage = total > 0 ? Math.round((loaded / total) * 100) : 0;
    
    return { loaded, total, percentage };
  }
}

// Export singleton instance
export const imagePreloader = ImagePreloader.getInstance();
