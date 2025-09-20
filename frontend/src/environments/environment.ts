// Auto-detect environment based on hostname
let isProduction = false;
if (typeof window !== 'undefined') {
  isProduction = window.location.hostname === 'medhika.vercel.app' ||
    window.location.hostname.includes('vercel.app');
}

export const environment = {
  production: isProduction,
  apiUrl: isProduction ? 'https://skillswap-25xu.onrender.com/api' : 'http://localhost:3000/api',
  socketUrl: isProduction ? 'https://skillswap-25xu.onrender.com' : 'http://localhost:3000',
  frontendUrl: isProduction ? 'https://medhika.vercel.app' : 'http://localhost:4200',
  stripePublishableKey: 'pk_test_51S2M7pBiOdK8gYs8ynQUFp3zDcwxtTFeeFJguXFwiTJixcEBSS7O7hccLXzNeSQnelTQL2YOS4TfrJgkj3XWQadi0015BKbYKr',
  zoomClientId: 'your_zoom_client_id',
  appName: 'SkillSwap',
  version: '1.0.0'
};