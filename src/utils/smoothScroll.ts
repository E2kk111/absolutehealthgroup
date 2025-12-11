/**
 * Smooth scroll utility function
 * Scrolls to an element with the given ID, accounting for fixed header offset
 */
export const smoothScrollTo = (targetId: string, offset: number = 100) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Handler for anchor link clicks
 * Prevents default behavior and smoothly scrolls to target
 */
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
  offset: number = 100
) => {
  e.preventDefault();
  smoothScrollTo(targetId, offset);
};

