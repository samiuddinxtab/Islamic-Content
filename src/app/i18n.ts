// Common location for internationalization utilities
export const supportedLanguages = ['en', 'ar', 'ur'] as const;
export type Language = typeof supportedLanguages[number];

export function getDirection(lang: string | undefined | null): 'ltr' | 'rtl' {
  // Make language-to-direction resolution total and runtime-safe
  // Handle null, undefined, and empty string cases
  if (!lang) {
    return 'ltr'; // Safe fallback to LTR
  }
  
  // Convert to lowercase for case-insensitive comparison
  const normalizedLang = lang.toLowerCase().trim();
  
  switch (normalizedLang) {
    case 'ar':
    case 'ur':
      return 'rtl';
    case 'en':
    default:
      // Default to LTR for any unrecognized language
      // This ensures we never crash at runtime while maintaining
      // proper direction for known RTL languages
      return 'ltr';
  }
}

export function isValidLanguage(lang: string): lang is Language {
  return supportedLanguages.includes(lang as Language);
}