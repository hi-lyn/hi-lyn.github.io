import { memo, SVGProps } from 'react';

const VectorStrokeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.625 1.5C2.07272 1.5 1.625 1.94772 1.625 2.5C1.625 3.05229 2.07272 3.5 2.625 3.5C3.17728 3.5 3.625 3.05229 3.625 2.5C3.625 1.94772 3.17728 1.5 2.625 1.5ZM0.125 2.5C0.125 1.11929 1.24429 9.53674e-07 2.625 9.53674e-07C4.00571 9.53674e-07 5.125 1.11929 5.125 2.5C5.125 3.88071 4.00571 5 2.625 5C1.24429 5 0.125 3.88071 0.125 2.5Z'
      fill='#0770E0'
    />
  </svg>
);
const Memo = memo(VectorStrokeIcon2);
export { Memo as VectorStrokeIcon2 };
