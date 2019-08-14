const shop = (eventId: string) => `/events/${eventId}/shop`;

export default {
  home: '/',
  pokemons: '/pokemons',
  shop: shop,
  checkout: {
    authenticate: (eventId: string) => `${shop(eventId)}/checkout`,
    billing: (eventId: string) => `${shop(eventId)}/checkout/billing`,
    payment: (eventId: string) => `${shop(eventId)}/checkout/payment`,
    confirmation: (eventId: string) => `${shop(eventId)}/checkout/confirmation`,
  },
  profile: '/profile',
  partners: {
    index: '/partners',
    signup: '/partners/signup',
    confirmation: '/partners/confirmation',
  },
  blog: 'https://blogpro.shotgun.live',
  smartboard: 'https://smartboard.shotgun.live',
  terms: '/terms',
  appleStore:
    'https://apps.apple.com/fr/app/shotgun-entrées-et-consos/id760028892?_branch_match_id=687304098353647725',
  playStore:
    'https://play.google.com/store/apps/details?id=com.shotguntheapp.android',
  facebook: 'https://www.facebook.com/shotguntheapp',
  instagram: 'https://www.instagram.com/shotguntheapp',
};
