import React from 'react';
import {SvgXml} from 'react-native-svg';

interface Props {
  color?: string;
}

const NotificationIcon: React.FC<Props> = ({color = '#171717'}) => {
  const svg = `
<svg width="51px" height="54px" viewBox="0 0 51 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <filter x="-10.4%" y="-34.2%" width="120.8%" height="168.4%" filterUnits="objectBoundingBox" id="filter-kzp4at2xp5-1">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
        <path d="M12.7,13.5 L4.6,13.5 L4.6,7.65 C4.6,5.4 6.4,3.6 8.65,3.6 C10.9,3.6 12.7,5.4 12.7,7.65 L12.7,13.5 Z M14.5,12.6 L14.5,7.65 C14.5,4.887 12.574,2.574 10,1.962 L10,1.35 C10,0.604415588 9.39558441,0 8.65,0 C7.90441559,0 7.3,0.604415588 7.3,1.35 L7.3,1.962 C4.717,2.574 2.8,4.887 2.8,7.65 L2.8,12.6 L1,14.4 L1,15.3 L16.3,15.3 L16.3,14.4 L14.5,12.6 Z M8.65,18 C9.64411255,18 10.45,17.1941125 10.45,16.2 L6.85,16.2 C6.85,17.1941125 7.65588745,18 8.65,18 Z" id="path-kzp4at2xp5-2"></path>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="world" transform="translate(-233.000000, -702.000000)">
            <g id="Nav/Bottom/01" transform="translate(0.000000, 698.000000)" filter="url(#filter-kzp4at2xp5-1)">
                <g id="编组" transform="translate(104.000000, 22.000000)">
                    <g id="编组-6" transform="translate(143.000000, 0.000000)">
                        <g id="Icon-#3" transform="translate(2.895833, 0.000000)">
                            <mask id="mask-kzp4at2xp5-3" fill="white">
                                <use xlink:href="#path-kzp4at2xp5-2"></use>
                            </mask>
                            <use id="Shape" fill="${color}" xlink:href="#path-kzp4at2xp5-2"></use>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;
  return <SvgXml xml={svg} />;
};

export default NotificationIcon;
