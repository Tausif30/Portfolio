
const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About Me', path: '/about_me', anchorable: true });
pages.set('journey', { name: 'Journey', path: '/journey', anchorable: true });
pages.set('bookings', { 
  name: 'Contact Me', 
  path: '/contact_me', 
  anchorable: true 
});
pages.set('confirmedBooking', {
  name: 'Confirmation',
  path: '/confirmation',
  anchorable: false
});


export default pages;
