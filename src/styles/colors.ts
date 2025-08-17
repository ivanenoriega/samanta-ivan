export const colors = {
  // Primary colors
  oliveGreen: '#A4AC86',      // Verde oliva suave
  forestGreen: '#3B4A3F',     // Verde bosque profundo
  woodBrown: '#8B6B4A',       // Marrón madera
  smokeGray: '#4D4D4D',       // Gris humo
  chalkWhite: '#F5F4F0',      // Blanco tiza
  linenBeige: '#D8CFC4',      // Beige lino
  
  // Semantic colors
  primary: '#A4AC86',         // Main brand color
  secondary: '#3B4A3F',       // Secondary brand color
  accent: '#8B6B4A',          // Accent color
  text: '#4D4D4D',            // Main text color
  background: '#F5F4F0',      // Main background
  surface: '#D8CFC4',         // Surface/container background
  
  // Transparent versions for overlays and shadows
  oliveGreenTransparent: 'rgba(164, 172, 134, 0.1)',
  forestGreenTransparent: 'rgba(59, 74, 63, 0.1)',
  woodBrownTransparent: 'rgba(139, 107, 74, 0.1)',
  smokeGrayTransparent: 'rgba(77, 77, 77, 0.1)',
  
  // Shadow colors
  shadowLight: 'rgba(77, 77, 77, 0.1)',
  shadowMedium: 'rgba(77, 77, 77, 0.2)',
  shadowDark: 'rgba(77, 77, 77, 0.3)',
} as const;

export type ColorKey = keyof typeof colors;
