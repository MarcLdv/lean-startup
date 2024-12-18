import {SVGProps} from "react";

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="22" viewBox="0 0 20 22" fill="white" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
      stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);
export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20 6L9 17L4 12" stroke="current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);