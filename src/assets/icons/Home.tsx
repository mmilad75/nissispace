import React from 'react';
import {SvgXml} from 'react-native-svg';

interface Props {
  color?: string;
}

const HomeIcon: React.FC<Props> = ({color = '#171717'}) => {
  const svg = `

<svg width="56px" height="57px" viewBox="0 0 56 57" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <filter x="-10.4%" y="-34.2%" width="120.8%" height="168.4%" filterUnits="objectBoundingBox" id="filter-jofvrg8heu-1">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
        <path d="M7,17 L7,11 L9,11 L11,11 L13,11 L13,17 L16,17 L16,8.91 L10,2.91 L4,8.91 L4,17 L7,17 L7,17 Z M10,0.09 L19.91,10 L18,10 L18,19 L11,19 L11,13 L9,13 L9,19 L2,19 L2,10 L0.09,10 L10,0.09 Z" id="path-jofvrg8heu-2"></path>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="hello" transform="translate(-88.000000, -702.000000)">
            <g id="Nav/Bottom/01" transform="translate(0.000000, 698.000000)" filter="url(#filter-jofvrg8heu-1)">
                <g id="编组" transform="translate(104.000000, 22.000000)">
                    <g id="Icon-#2" transform="translate(2.270833, 0.000000)">
                        <mask id="mask-jofvrg8heu-3" fill="white">
                            <use xlink:href="#path-jofvrg8heu-2"></use>
                        </mask>
                        <use id="Shape" fill="${color}" xlink:href="#path-jofvrg8heu-2"></use>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;

  return <SvgXml xml={svg} />;
};

export default HomeIcon;
