interface IFilter {
  grayscale: number;
  sepia: number;
  invert: number;
  hueRotate: number;
  blur: number;
  contrast: number;
}

const makeFilter = (slideFilter: IFilter): string => {
  const { grayscale, sepia, invert, hueRotate, blur, contrast } = slideFilter;
  let filter = '';
  filter += `grayscale(${grayscale}%) `;
  filter += `sepia(${sepia}%) `;
  filter += `invert(${invert}%) `;
  filter += `hue-rotate(${hueRotate}deg) `;
  filter += `blur(${blur}px) `;
  filter += `contrast(${contrast}%) `;

  return filter;
};

export default makeFilter;
