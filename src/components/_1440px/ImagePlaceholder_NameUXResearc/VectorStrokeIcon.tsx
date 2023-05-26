import { memo, SVGProps } from 'react';

const VectorStrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 33 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.7147 0.122973C16.0017 -0.040991 16.3539 -0.040991 16.6408 0.122973L31.8853 8.83408C32.1761 9.00026 32.3556 9.30951 32.3556 9.64444C32.3556 9.97938 32.1761 10.2886 31.8853 10.4548L16.6408 19.1659C16.3539 19.3299 16.0017 19.3299 15.7147 19.1659L0.47027 10.4548C0.179467 10.2886 0 9.97938 0 9.64444C0 9.30951 0.179467 9.00026 0.47027 8.83408L15.7147 0.122973ZM2.81453 9.64444L16.1778 17.2806L29.541 9.64444L16.1778 2.0083L2.81453 9.64444Z'
      fill='#0770E0'
    />
  </svg>
);
const Memo = memo(VectorStrokeIcon);
export { Memo as VectorStrokeIcon };
