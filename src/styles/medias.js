const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1024px'
}

export const medias = {
  mobile: `only screen and (max-width: ${size.mobile})`,
  tablet: `only screen and (min-width: calc(${size.mobile} + 1px)) and (max-width: ${size.tablet})`,
  desktop: `only screen and (min-width: calc(${size.tablet} + 1px))`,
};