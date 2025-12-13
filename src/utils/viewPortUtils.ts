export const isMobile = () => window.innerWidth <= 576;

export const isIpad = () => window.innerWidth > 576 && window.innerWidth < 1024;

export const isIpadPro = () => window.innerWidth === 1024;

export const isDesktop = () => window.innerWidth > 1024;
