import { memo, SVGProps } from 'react';

const VectorStrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.6453 0.122973C14.9127 -0.040991 15.241 -0.040991 15.5084 0.122973L29.7155 8.83408C29.9865 9.00026 30.1538 9.30951 30.1538 9.64444C30.1538 9.97938 29.9865 10.2886 29.7155 10.4548L15.5084 19.1659C15.241 19.3299 14.9127 19.3299 14.6453 19.1659L0.438269 10.4548C0.167254 10.2886 0 9.97938 0 9.64444C0 9.30951 0.167254 9.00026 0.438269 8.83408L14.6453 0.122973ZM2.623 9.64444L15.0769 17.2806L27.5308 9.64444L15.0769 2.0083L2.623 9.64444Z'
      fill='#0770E0'
    />
  </svg>
);
const Memo = memo(VectorStrokeIcon);
export { Memo as VectorStrokeIcon };
