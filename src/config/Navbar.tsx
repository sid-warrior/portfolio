export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.png',
    alt: 'logo',
    width: 1000,
    height: 100,
  },
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },

    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ] as NavItem[],
};
