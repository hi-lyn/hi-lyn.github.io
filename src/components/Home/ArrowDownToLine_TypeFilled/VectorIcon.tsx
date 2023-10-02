import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 15C16 14.4477 15.5523 14 15 14H1C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16L15 16C15.5523 16 16 15.5523 16 15ZM13.7071 5.29289C13.3166 4.90237 12.6834 4.90237 12.2929 5.29289L9 8.58579V1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L7 8.58579L3.70711 5.29289C3.31658 4.90237 2.68342 4.90237 2.29289 5.29289C1.90237 5.68342 1.90237 6.31658 2.29289 6.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L13.7071 6.70711C14.0976 6.31658 14.0976 5.68342 13.7071 5.29289Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
