import React from 'react';
import styled from 'styled-components';
import heart from './img/heart.png';

const BackgroundColor = styled.div`
  background: #fef7e2;
  width: 390px;
  height: 844px;
  flex-shrink: 0;
`;

// export const Heart = styled.div`
//   width: 624px;
//   height: 669px;
//   flex-shrink: 0;
//   background: url(${heart});
//   drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
// `;

const Background = () => {
    return (
      <>
        <BackgroundColor>
            <svg xmlns="http://www.w3.org/2000/svg" width="390" height="669" viewBox="0 0 390 669" fill="none">
                <path d="M211.421 164.225C211.421 254.924 137.901 328.45 47.2105 328.45C-43.4804 328.45 -117 254.924 -117 164.225C-117 73.5259 -43.4804 0 47.2105 0C137.901 0 211.421 73.5259 211.421 164.225Z" fill="#C03C38"/>
                <path d="M315.133 286.961C315.133 377.66 241.613 451.186 150.922 451.186C60.2315 451.186 -13.2881 377.66 -13.2881 286.961C-13.2881 196.262 60.2315 122.736 150.922 122.736C241.613 122.736 315.133 196.262 315.133 286.961Z" fill="#C03C38"/>
                <path d="M507 164.225C507 254.924 433.48 328.45 342.789 328.45C252.098 328.45 178.579 254.924 178.579 164.225C178.579 73.5259 252.098 0 342.789 0C433.48 0 507 73.5259 507 164.225Z" fill="#C03C38"/>
                <path d="M194.136 669L477.06 259.302H-88.7883L194.136 669Z" fill="#C03C38"/>
            </svg>
        </BackgroundColor>
      </>
    );
}

export default Background;