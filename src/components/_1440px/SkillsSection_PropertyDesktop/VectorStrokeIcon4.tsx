import { memo, SVGProps } from 'react';

const VectorStrokeIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.44225 1.5C2.84748 1.5 2.36533 1.94772 2.36533 2.5C2.36533 3.05229 2.84748 3.5 3.44225 3.5C4.03701 3.5 4.51917 3.05229 4.51917 2.5C4.51917 1.94772 4.03701 1.5 3.44225 1.5ZM0.749947 2.5C0.749947 1.11929 1.95533 9.53674e-07 3.44225 9.53674e-07C4.92916 9.53674e-07 6.13455 1.11929 6.13455 2.5C6.13455 3.88071 4.92916 5 3.44225 5C1.95533 5 0.749947 3.88071 0.749947 2.5Z'
      fill='#0770E0'
    />
  </svg>
);
const Memo = memo(VectorStrokeIcon4);
export { Memo as VectorStrokeIcon4 };
