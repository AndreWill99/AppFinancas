import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
}

/** material-symbols:dashboard-rounded — grid 2x2 arredondado */
export function DashboardIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill={color}
        d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm10-8h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
}

/** tabler:target — alvo (círculos concêntricos) */
export function TargetIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      <Path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0" />
      <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    </Svg>
  );
}

/** fluent:document-text-extract — documento com linhas (regular) */
export function DocumentExtractIcon({ size = 28, color = 'currentColor' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M6 4a2 2 0 0 1 2-2h8l6 6v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4z" />
      <Path d="M16 2v6h6" />
      <Path d="M9 14h10" />
      <Path d="M9 18h10" />
      <Path d="M9 10h4" />
    </Svg>
  );
}

/** fluent:document-text-extract filled */
export function DocumentExtractFilledIcon({ size = 32, color = 'currentColor' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill={color}>
      <Path fillRule="evenodd" clipRule="evenodd" d="M8 4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10.83a2 2 0 0 0-.59-1.42L20.59 4.6A2 2 0 0 0 19.17 4H8zm4 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1z" />
    </Svg>
  );
}

/** iconamoon:profile-light — perfil outline */
export function ProfileIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <Path d="M18 20a6 6 0 0 0-12 0" />
    </Svg>
  );
}

/** iconamoon:profile-fill — perfil preenchido */
export function ProfileFilledIcon({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </Svg>
  );
}
