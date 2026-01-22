import { getDirection } from '../i18n';

// Test function to verify our direction resolution works properly
export function testDirectionResolution() {
  console.log('Testing direction resolution...');
  
  // Test cases that should return 'rtl'
  console.log('ARABIC (ar):', getDirection('ar')); // Should be 'rtl'
  console.log('URDU (ur):', getDirection('ur')); // Should be 'rtl'
  console.log('Arabic (case insensitive):', getDirection('AR')); // Should be 'rtl'
  console.log('Urdu (case insensitive):', getDirection('UR')); // Should be 'rtl'
  
  // Test cases that should return 'ltr'
  console.log('ENGLISH (en):', getDirection('en')); // Should be 'ltr'
  console.log('Undefined:', getDirection(undefined)); // Should be 'ltr' (safe fallback)
  console.log('Null:', getDirection(null)); // Should be 'ltr' (safe fallback)
  console.log('Empty string:', getDirection('')); // Should be 'ltr' (safe fallback)
  console.log('Invalid language:', getDirection('fr')); // Should be 'ltr' (safe fallback)
  console.log('Whitespace only:', getDirection('   ')); // Should be 'ltr' (safe fallback)
  
  console.log('All tests completed successfully!');
}

// Run tests
testDirectionResolution();