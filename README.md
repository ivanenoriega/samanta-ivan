# Samanta & Ivan - Wedding Invitation

A beautiful, responsive wedding invitation website built with Next.js and TypeScript.

## Features

- **Responsive Design**: Looks great on all devices
- **Countdown Timer**: Real-time countdown to the wedding date
- **Interactive Gallery**: Photo carousel with navigation
- **Modal Information**: Dress code and tips displayed in elegant modals
- **Action Buttons**: Calendar integration, attendance confirmation, and directions
- **Social Media Integration**: Instagram hashtag and sharing
- **Customizable Content**: All text and data stored in a single configuration file

## Sections

1. **Intro Section**: Hero image, couple names, date, and quote
2. **Timer Section**: Countdown to the wedding date
3. **Details Section**: Event information and action buttons
4. **Gallery Section**: Photo carousel with navigation
5. **Info Section**: Dress code and tips with modal popups
6. **Gifts Section**: Gift information modal
7. **Hashtag Section**: Instagram sharing
8. **Footer Section**: Quick links and social media

## Customization

### 1. Update Wedding Data

Edit `src/data/weddingData.ts` to customize all content:

```typescript
export const weddingData: WeddingData = {
  coupleNames: "Samanta & Ivan",
  weddingDate: "15.05.2025",
  weddingTime: "17:00",
  quote: "Your custom quote here",
  eventLocation: "Your venue name",
  eventAddress: "Your venue address",
  // ... more customization options
};
```

### 2. Replace Images

Replace the placeholder images with your actual photos:

- **Hero Image**: Update the URL in `IntroSection.tsx`
- **Gallery Images**: Update the URLs in `weddingData.ts`

### 3. Update Links

Update the action URLs in `weddingData.ts`:

- `calendarUrl`: Google Calendar event link
- `attendanceUrl`: RSVP form link
- `directionsUrl`: Google Maps directions link
- `instagramUrl`: Instagram profile link

### 4. Customize Colors

The color scheme uses warm, elegant tones:
- Primary: `#8B4513` (Saddle Brown)
- Secondary: `#A0522D` (Sienna)
- Accent: `#CD853F` (Peru)
- Background: Cream and beige gradients

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The site can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## Technologies Used

- **Next.js 15**: React framework
- **TypeScript**: Type safety
- **CSS-in-JS**: Styled components with styled-jsx
- **Google Fonts**: Playfair Display and Inter fonts

## License

This project is open source and available under the MIT License.
