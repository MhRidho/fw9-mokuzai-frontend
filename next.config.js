/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/Login',
      },
      {
        source: '/register',
        destination: '/auth/Register',
      },
      {
        source: '/forgot-password',
        destination: '/auth/ForgotPassword',
      },
      {
        source: '/products',
        destination: '/ProductList',
      },
      {
        source: '/product',
        destination: '/ProductPage',
      },
      {
        source: '/profile/customer',
        destination: '/profiles/customer/ProfileCust',
      },
      {
        source: '/profile/seller',
        destination: '/profiles/seller/ProfileSeller',
      },
      {
        source: '/profile/cart',
        destination: '/pageCart/pageCartnew',
      },
      {
        source: '/profile/cart/checkout',
        destination: '/pageCart/checkout',
      },
    ]
  }
}

module.exports = nextConfig
