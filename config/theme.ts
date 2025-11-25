// ملف مركزي للألوان والإعدادات
export const theme = {
  colors: {
    primary: '#0ea5e9',
    secondary: '#f59e0b',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    dark: '#0f172a',
    light: '#fafafa',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    secondary: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    hero: 'linear-gradient(135deg, #0ea5e9 0%, #7dd3fc 100%)',
  },

  // Spacing
  spacing: {
    section: '80px',
    container: '1280px',
  },

  // Border Radius
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type Theme = typeof theme;