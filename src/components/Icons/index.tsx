import React from 'react';
import {ViewStyle} from 'react-native';
import Svg, {Circle, G, Path} from 'react-native-svg';

export interface BaseSvgProps {
  height: number;
  width: number;
  style?: ViewStyle;
  strokeWidth?: number;
}

export interface LogoProps {
  scale: number;
  color: string;
  style?: ViewStyle;
}

export interface SvgProps extends BaseSvgProps {
  color: string;
  fill?: string;
}

export const EyeIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    style={props.style}
    fill="none">
    <Path
      id="Stroke 1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48892 15.806 4.75092 11.998 4.75092H12.002C8.194 4.75092 4.711 7.48892 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PlusIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    style={props.style}
    stroke={props.color}
    strokeWidth={props.strokeWidth || 2}
    fill="none">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    />
  </Svg>
);

export const CancelIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    style={props.style}
    stroke={props.color}
    strokeWidth={props.strokeWidth || 2}
    fill="none">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </Svg>
);

export const MinusIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    style={props.style}
    stroke={props.color}
    strokeWidth={props.strokeWidth || 2}
    fill="none">
    <Path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
  </Svg>
);

export const TrashIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Delete_2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
      fill={props.color}
    />
  </Svg>
);

export const UploadIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    style={props.style}
    stroke={props.color}
    strokeWidth={props.strokeWidth || 2}
    fill="none">
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
    />
  </Svg>
);

export const EditIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Edit_2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.3764 20.0279L18.1628 8.66544C18.6403 8.0527 18.8101 7.3443 18.6509 6.62299C18.513 5.96726 18.1097 5.34377 17.5049 4.87078L16.0299 3.69906C14.7459 2.67784 13.1541 2.78534 12.2415 3.95706L11.2546 5.23735C11.1273 5.39752 11.1591 5.63401 11.3183 5.76301C11.3183 5.76301 13.812 7.76246 13.8651 7.80546C14.0349 7.96671 14.1622 8.1817 14.1941 8.43969C14.2471 8.94493 13.8969 9.41792 13.377 9.48242C13.1329 9.51467 12.8994 9.43942 12.7297 9.29967L10.1086 7.21422C9.98126 7.11855 9.79025 7.13898 9.68413 7.26797L3.45514 15.3303C3.0519 15.8355 2.91395 16.4912 3.0519 17.1255L3.84777 20.5761C3.89021 20.7589 4.04939 20.8879 4.24039 20.8879L7.74222 20.8449C8.37891 20.8341 8.97316 20.5439 9.3764 20.0279ZM14.2797 18.9533H19.9898C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533Z"
      fill={props.color}
    />
  </Svg>
);

export const EyeCancelIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      d="M9.76057 14.3668C9.18557 13.7928 8.83557 13.0128 8.83557 12.1378C8.83557 10.3848 10.2476 8.9718 11.9996 8.9718C12.8666 8.9718 13.6646 9.3228 14.2296 9.8968"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M15.1047 12.6989C14.8727 13.9889 13.8567 15.0069 12.5677 15.2409"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 5"
      d="M6.65451 17.4723C5.06751 16.2263 3.72351 14.4063 2.74951 12.1373C3.73351 9.85829 5.08651 8.02829 6.68351 6.77229C8.27051 5.51629 10.1015 4.83429 11.9995 4.83429C13.9085 4.83429 15.7385 5.52629 17.3355 6.79129"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 7"
      d="M19.4475 8.99078C20.1355 9.90478 20.7405 10.9598 21.2495 12.1368C19.2825 16.6938 15.8065 19.4388 11.9995 19.4388C11.1365 19.4388 10.2855 19.2988 9.46753 19.0258"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 9"
      d="M19.8868 4.24957L4.11279 20.0236"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MailIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      d="M17.9026 8.85114L13.4593 12.4642C12.6198 13.1302 11.4387 13.1302 10.5992 12.4642L6.11841 8.85114"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const UserIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill={props.fill || 'none'}>
    <Path
      id="Stroke 1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9848 15.3462C8.11719 15.3462 4.81433 15.931 4.81433 18.2729C4.81433 20.6148 8.09624 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8734 15.3462 11.9848 15.3462Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38858 4.8716 7.38858 7.40969C7.38001 9.93922 9.42382 11.9973 11.9524 12.0059H11.9848Z"
      stroke={props.color}
      strokeWidth="1.42857"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DashboardIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill={props.fill || 'none'}>
    <Path
      id="Stroke 1"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 7"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HeartIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill={props.fill || 'none'}>
    <Path
      id="Stroke 1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BagIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Path_33955"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5136 21.5H8.16579C5.09943 21.5 2.74703 20.3925 3.41522 15.9348L4.19325 9.89363C4.60515 7.66937 6.02392 6.81812 7.26877 6.81812H17.4473C18.7104 6.81812 20.0468 7.73345 20.5228 9.89363L21.3008 15.9348C21.8683 19.8891 19.58 21.5 16.5136 21.5Z"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Path_33956"
      d="M16.651 6.59842C16.651 4.21235 14.7167 2.27805 12.3306 2.27805V2.27805C11.1816 2.27319 10.078 2.72622 9.26381 3.53697C8.44963 4.34772 7.99193 5.44941 7.99194 6.59842H7.99194"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Line_192"
      d="M15.2962 11.1018H15.2505"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Line_193"
      d="M9.46566 11.1018H9.41989"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HeartFilledIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Heart_2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8498 2.50071C16.4808 2.50071 17.1108 2.58971 17.7098 2.79071C21.4008 3.99071 22.7308 8.04071 21.6198 11.5807C20.9898 13.3897 19.9598 15.0407 18.6108 16.3897C16.6798 18.2597 14.5608 19.9197 12.2798 21.3497L12.0298 21.5007L11.7698 21.3397C9.4808 19.9197 7.3498 18.2597 5.4008 16.3797C4.0608 15.0307 3.0298 13.3897 2.3898 11.5807C1.2598 8.04071 2.5898 3.99071 6.3208 2.76971C6.6108 2.66971 6.9098 2.59971 7.2098 2.56071H7.3298C7.6108 2.51971 7.8898 2.50071 8.1698 2.50071H8.2798C8.9098 2.51971 9.5198 2.62971 10.1108 2.83071H10.1698C10.2098 2.84971 10.2398 2.87071 10.2598 2.88971C10.4808 2.96071 10.6898 3.04071 10.8898 3.15071L11.2698 3.32071C11.3616 3.36968 11.4647 3.44451 11.5538 3.50918C11.6102 3.55015 11.661 3.58705 11.6998 3.61071C11.7161 3.62034 11.7327 3.63002 11.7494 3.63978C11.8352 3.68983 11.9245 3.74197 11.9998 3.79971C13.1108 2.95071 14.4598 2.49071 15.8498 2.50071ZM18.5098 9.70071C18.9198 9.68971 19.2698 9.36071 19.2998 8.93971V8.82071C19.3298 7.41971 18.4808 6.15071 17.1898 5.66071C16.7798 5.51971 16.3298 5.74071 16.1798 6.16071C16.0398 6.58071 16.2598 7.04071 16.6798 7.18971C17.3208 7.42971 17.7498 8.06071 17.7498 8.75971V8.79071C17.7308 9.01971 17.7998 9.24071 17.9398 9.41071C18.0798 9.58071 18.2898 9.67971 18.5098 9.70071Z"
      fill={props.color}
    />
  </Svg>
);

export const ChevronRightIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      d="M8.5 5L15.5 12L8.5 19"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SettingsIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Path_33946"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.8067 7.62355L20.1842 6.54346C19.6577 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.037 2.27801 10.5513 2.47985 10.194 2.83888C9.83669 3.19791 9.63717 3.68453 9.63961 4.19106V4.19106C9.6246 5.23686 8.77248 6.07675 7.72657 6.07664C7.40421 6.07329 7.08846 5.98488 6.81123 5.82035V5.82035C5.89606 5.29595 4.72911 5.61123 4.20254 6.52516L3.53435 7.62355C3.00841 8.53633 3.3194 9.70255 4.23 10.2322V10.2322C4.8219 10.574 5.18653 11.2055 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5457V13.5457C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2345C4.41265 17.6797 4.8266 18.0082 5.31619 18.1474C5.80578 18.2865 6.33064 18.2248 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7821C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9488 9.62711 19.2646 9.63046 19.5869V19.5869C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7074 21.1318 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8067 7.63271V7.63271V7.62355Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      id="Ellipse_737"
      cx="12.175"
      cy="11.889"
      r="2.63616"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FilterIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      d="M10.3301 16.5929H4.02942"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M13.1405 6.90036H19.4412"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.72629 6.84625C8.72629 5.5506 7.66813 4.5 6.36314 4.5C5.05816 4.5 4 5.5506 4 6.84625C4 8.14191 5.05816 9.19251 6.36314 9.19251C7.66813 9.19251 8.72629 8.14191 8.72629 6.84625Z"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 7"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 16.5538C20 15.2581 18.9426 14.2075 17.6376 14.2075C16.3318 14.2075 15.2737 15.2581 15.2737 16.5538C15.2737 17.8494 16.3318 18.9 17.6376 18.9C18.9426 18.9 20 17.8494 20 16.5538Z"
      stroke={props.color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ArrowLeftIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    fill="none"
    viewBox="0 0 24 24"
    stroke={props.color}
    strokeWidth={props.strokeWidth || 2}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 17l-5-5m0 0l5-5m-5 5h12"
    />
  </Svg>
);

export const ArrowRightIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 20 20"
    fill={props.color}
    style={props.style}
    strokeWidth={props.strokeWidth || 2}>
    <Path
      fillRule="evenodd"
      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </Svg>
);

export const LogoutIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      d="M15.016 7.38948V6.45648C15.016 4.42148 13.366 2.77148 11.331 2.77148H6.45597C4.42197 2.77148 2.77197 4.42148 2.77197 6.45648V17.5865C2.77197 19.6215 4.42197 21.2715 6.45597 21.2715H11.341C13.37 21.2715 15.016 19.6265 15.016 17.5975V16.6545"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M21.8094 12.0214H9.76843"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 5"
      d="M18.8812 9.10626L21.8092 12.0213L18.8812 14.9373"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HomeIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill={props.fill || 'none'}>
    <Path
      id="Home_2"
      d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const StarIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SearchIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Circle
      id="Ellipse_739"
      cx="11.7666"
      cy="11.7666"
      r="8.98856"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Line_181"
      d="M18.0183 18.4851L21.5423 22"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const NotificationIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M14.3889 20.8572C13.0247 22.372 10.8967 22.3899 9.51953 20.8572"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LocationIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ExploreIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Path_33947"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      id="Ellipse_738"
      cx="11.611"
      cy="11.611"
      r="9.61098"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DiscountIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      d="M4.79489 7.05601C4.79489 5.80701 5.80689 4.79501 7.05589 4.79401H8.08489C8.68189 4.79401 9.25389 4.55701 9.67789 4.13701L10.3969 3.41701C11.2779 2.53101 12.7099 2.52701 13.5959 3.40801L13.5969 3.40901L13.6059 3.41701L14.3259 4.13701C14.7499 4.55801 15.3219 4.79401 15.9189 4.79401H16.9469C18.1959 4.79401 19.2089 5.80601 19.2089 7.05601V8.08301C19.2089 8.68001 19.4449 9.25301 19.8659 9.67701L20.5859 10.397C21.4719 11.278 21.4769 12.71 20.5959 13.596L20.5949 13.597L20.5859 13.606L19.8659 14.326C19.4449 14.749 19.2089 15.321 19.2089 15.918V16.947C19.2089 18.196 18.1969 19.208 16.9479 19.208H16.9469H15.9169C15.3199 19.208 14.7469 19.445 14.3239 19.866L13.6039 20.585C12.7239 21.471 11.2929 21.476 10.4069 20.597C10.4059 20.596 10.4049 20.595 10.4039 20.594L10.3949 20.585L9.67589 19.866C9.25289 19.445 8.67989 19.209 8.08289 19.208H7.05589C5.80689 19.208 4.79489 18.196 4.79489 16.947V15.916C4.79489 15.319 4.55789 14.747 4.13689 14.324L3.41789 13.604C2.53189 12.724 2.52689 11.293 3.40689 10.407C3.40689 10.406 3.40789 10.405 3.40889 10.404L3.41789 10.395L4.13689 9.67501C4.55789 9.25101 4.79489 8.67901 4.79489 8.08101V7.05601"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M9.43164 14.5717L14.5716 9.4317"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 11"
      d="M14.4955 14.5H14.5045"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 11_2"
      d="M9.4955 9.5H9.5045"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CartIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      d="M2.75012 3.24988L4.83012 3.60988L5.79312 15.0829C5.87012 16.0199 6.65312 16.7389 7.59312 16.7359H18.5021C19.3991 16.7379 20.1601 16.0779 20.2871 15.1899L21.2361 8.63188C21.3421 7.89888 20.8331 7.21888 20.1011 7.11288C20.0371 7.10388 5.16412 7.09888 5.16412 7.09888"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M14.1251 10.7948H16.8981"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.15447 20.2025C7.45547 20.2025 7.69847 20.4465 7.69847 20.7465C7.69847 21.0475 7.45547 21.2915 7.15447 21.2915C6.85347 21.2915 6.61047 21.0475 6.61047 20.7465C6.61047 20.4465 6.85347 20.2025 7.15447 20.2025Z"
      fill={props.color}
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 7"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4347 20.2025C18.7357 20.2025 18.9797 20.4465 18.9797 20.7465C18.9797 21.0475 18.7357 21.2915 18.4347 21.2915C18.1337 21.2915 17.8907 21.0475 17.8907 20.7465C17.8907 20.4465 18.1337 20.2025 18.4347 20.2025Z"
      fill={props.color}
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DeleteIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Stroke 1"
      d="M19.325 9.4682C19.325 9.4682 18.782 16.2032 18.467 19.0402C18.317 20.3952 17.48 21.1892 16.109 21.2142C13.5 21.2612 10.888 21.2642 8.28003 21.2092C6.96103 21.1822 6.13803 20.3782 5.99103 19.0472C5.67403 16.1852 5.13403 9.4682 5.13403 9.4682"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 3"
      d="M20.7082 6.23969H3.75024"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Stroke 5"
      d="M17.4406 6.23967C16.6556 6.23967 15.9796 5.68467 15.8256 4.91567L15.5826 3.69967C15.4326 3.13867 14.9246 2.75067 14.3456 2.75067H10.1126C9.53358 2.75067 9.02558 3.13867 8.87558 3.69967L8.63258 4.91567C8.47858 5.68467 7.80258 6.23967 7.01758 6.23967"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const StarFilledIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    style={props.style}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Star_2"
      d="M17.9184 14.3201C17.6594 14.5711 17.5404 14.9341 17.5994 15.2901L18.4884 20.2101C18.5634 20.6271 18.3874 21.0491 18.0384 21.2901C17.6964 21.5401 17.2414 21.5701 16.8684 21.3701L12.4394 19.0601C12.2854 18.9781 12.1144 18.9341 11.9394 18.9291H11.6684C11.5744 18.9431 11.4824 18.9731 11.3984 19.0191L6.96839 21.3401C6.74939 21.4501 6.50139 21.4891 6.25839 21.4501C5.66639 21.3381 5.27139 20.7741 5.36839 20.1791L6.25839 15.2591C6.31739 14.9001 6.19839 14.5351 5.93939 14.2801L2.32839 10.7801C2.02639 10.4871 1.92139 10.0471 2.05939 9.65012C2.19339 9.25412 2.53539 8.96512 2.94839 8.90012L7.91839 8.17912C8.29639 8.14012 8.62839 7.91012 8.79839 7.57012L10.9884 3.08012C11.0404 2.98012 11.1074 2.88812 11.1884 2.81012L11.2784 2.74012C11.3254 2.68812 11.3794 2.64512 11.4394 2.61012L11.5484 2.57012L11.7184 2.50012H12.1394C12.5154 2.53912 12.8464 2.76412 13.0194 3.10012L15.2384 7.57012C15.3984 7.89712 15.7094 8.12412 16.0684 8.17912L21.0384 8.90012C21.4584 8.96012 21.8094 9.25012 21.9484 9.65012C22.0794 10.0511 21.9664 10.4911 21.6584 10.7801L17.9184 14.3201Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo1 = (props: LogoProps) => (
  <Svg
    width={76 * props.scale}
    height={10 * props.scale}
    viewBox="0 0 76 10"
    fill="none">
    <Path
      d="M1.7168 1.31836V4.44141H4.93359V5.16211H1.7168V9H0.960938V0.597656H5.68945V1.31836H1.7168ZM9.77344 7.04297H7.11328L6.5625 9H5.77734L8.23828 0.597656H8.63672L11.1094 9H10.3301L9.77344 7.04297ZM7.31836 6.32227H9.57422L8.4668 2.44922L8.44336 2.13867L8.41992 2.44922L7.31836 6.32227ZM16.793 7.05469C16.793 7.33984 16.7344 7.60742 16.6172 7.85742C16.5039 8.10742 16.3496 8.32617 16.1543 8.51367C15.9629 8.70117 15.7383 8.84961 15.4805 8.95898C15.2266 9.06445 14.957 9.11719 14.6719 9.11719H14.0684C13.7832 9.11719 13.5117 9.06445 13.2539 8.95898C13 8.84961 12.7754 8.70117 12.5801 8.51367C12.3887 8.32617 12.2344 8.10742 12.1172 7.85742C12.0039 7.60742 11.9473 7.33984 11.9473 7.05469V6.7207L12.7031 6.59766V7.05469C12.7031 7.24219 12.7402 7.41797 12.8145 7.58203C12.8926 7.74219 12.9961 7.88477 13.125 8.00977C13.2539 8.13086 13.4023 8.22656 13.5703 8.29688C13.7422 8.36719 13.9219 8.40234 14.1094 8.40234H14.6367C14.8242 8.40234 15.002 8.36719 15.1699 8.29688C15.3379 8.22656 15.4863 8.13086 15.6152 8.00977C15.7441 7.88477 15.8457 7.74219 15.9199 7.58203C15.998 7.41797 16.0371 7.24219 16.0371 7.05469V6.80273C16.0371 6.51367 15.9805 6.27344 15.8672 6.08203C15.7539 5.89062 15.6035 5.72852 15.416 5.5957C15.2285 5.45898 15.0156 5.34375 14.7773 5.25C14.543 5.15625 14.3008 5.0625 14.0508 4.96875C13.8008 4.875 13.5566 4.77148 13.3184 4.6582C13.084 4.54492 12.873 4.4043 12.6855 4.23633C12.498 4.06445 12.3477 3.85547 12.2344 3.60938C12.1211 3.36328 12.0645 3.06055 12.0645 2.70117V2.54297C12.0645 2.25781 12.1172 1.99023 12.2227 1.74023C12.332 1.49023 12.4805 1.27148 12.668 1.08398C12.8555 0.896484 13.0742 0.75 13.3242 0.644531C13.5781 0.535156 13.8477 0.480469 14.1328 0.480469H14.6719C14.957 0.480469 15.2246 0.535156 15.4746 0.644531C15.7246 0.75 15.9434 0.896484 16.1309 1.08398C16.3184 1.27148 16.4648 1.49023 16.5703 1.74023C16.6797 1.99023 16.7344 2.25781 16.7344 2.54297V2.75977L15.9785 2.88281V2.54297C15.9785 2.35547 15.9434 2.18164 15.873 2.02148C15.8027 1.85742 15.707 1.71484 15.5859 1.59375C15.4648 1.47266 15.3223 1.37695 15.1582 1.30664C14.998 1.23633 14.8242 1.20117 14.6367 1.20117H14.168C13.9805 1.20117 13.8047 1.23633 13.6406 1.30664C13.4805 1.37695 13.3379 1.47266 13.2129 1.59375C13.0918 1.71484 12.9961 1.85742 12.9258 2.02148C12.8555 2.18164 12.8203 2.35547 12.8203 2.54297V2.70117C12.8203 2.9707 12.877 3.19727 12.9902 3.38086C13.1035 3.56445 13.2539 3.72266 13.4414 3.85547C13.6289 3.98438 13.8398 4.09766 14.0742 4.19531C14.3125 4.28906 14.5566 4.38672 14.8066 4.48828C15.0566 4.58594 15.2988 4.69531 15.5332 4.81641C15.7715 4.93359 15.9844 5.08008 16.1719 5.25586C16.3594 5.42773 16.5098 5.63867 16.623 5.88867C16.7363 6.13867 16.793 6.44336 16.793 6.80273V7.05469ZM22.3945 9V5.16211H19.1777V9H18.4219V0.597656H19.1777V4.44141H22.3945V0.597656H23.1504V9H22.3945ZM25.0781 9V0.597656H25.834V9H25.0781ZM32.3672 7.05469C32.3672 7.33984 32.3125 7.60742 32.2031 7.85742C32.0977 8.10742 31.9512 8.32617 31.7637 8.51367C31.5762 8.70117 31.3574 8.84961 31.1074 8.95898C30.8574 9.06445 30.5898 9.11719 30.3047 9.11719H29.707C29.4219 9.11719 29.1523 9.06445 28.8984 8.95898C28.6484 8.84961 28.4297 8.70117 28.2422 8.51367C28.0547 8.32617 27.9062 8.10742 27.7969 7.85742C27.6914 7.60742 27.6387 7.33984 27.6387 7.05469V2.54297C27.6387 2.25781 27.6914 1.99023 27.7969 1.74023C27.9062 1.49023 28.0547 1.27148 28.2422 1.08398C28.4297 0.896484 28.6484 0.75 28.8984 0.644531C29.1523 0.535156 29.4219 0.480469 29.707 0.480469H30.3047C30.5898 0.480469 30.8574 0.535156 31.1074 0.644531C31.3574 0.75 31.5762 0.896484 31.7637 1.08398C31.9512 1.27148 32.0977 1.49023 32.2031 1.74023C32.3125 1.99023 32.3672 2.25781 32.3672 2.54297V7.05469ZM31.6113 2.54297C31.6113 2.35547 31.5762 2.18164 31.5059 2.02148C31.4355 1.85742 31.3398 1.71484 31.2188 1.59375C31.0977 1.47266 30.9551 1.37695 30.791 1.30664C30.6309 1.23633 30.457 1.20117 30.2695 1.20117H29.7422C29.5547 1.20117 29.3789 1.23633 29.2148 1.30664C29.0547 1.37695 28.9121 1.47266 28.7871 1.59375C28.666 1.71484 28.5703 1.85742 28.5 2.02148C28.4297 2.18164 28.3945 2.35547 28.3945 2.54297V7.05469C28.3945 7.24219 28.4297 7.41797 28.5 7.58203C28.5703 7.74219 28.666 7.88477 28.7871 8.00977C28.9121 8.13086 29.0547 8.22656 29.2148 8.29688C29.3789 8.36719 29.5547 8.40234 29.7422 8.40234H30.2695C30.457 8.40234 30.6309 8.36719 30.791 8.29688C30.9551 8.22656 31.0977 8.13086 31.2188 8.00977C31.3398 7.88477 31.4355 7.74219 31.5059 7.58203C31.5762 7.41797 31.6113 7.24219 31.6113 7.05469V2.54297ZM38.502 9L34.998 2.88281L34.9277 2.51953V9H34.1719V0.597656H34.5645L38.0684 6.7207L38.1445 7.07812V0.597656H38.9004V9H38.502ZM42.8672 1.31836V9H42.1113V1.31836H40.1074V0.597656H44.8711V1.31836H42.8672ZM50.6836 7.05469C50.6836 7.33984 50.6289 7.60742 50.5195 7.85742C50.4141 8.10742 50.2676 8.32617 50.0801 8.51367C49.8926 8.70117 49.6738 8.84961 49.4238 8.95898C49.1738 9.06445 48.9062 9.11719 48.6211 9.11719H48.0234C47.7383 9.11719 47.4688 9.06445 47.2148 8.95898C46.9648 8.84961 46.7461 8.70117 46.5586 8.51367C46.3711 8.32617 46.2227 8.10742 46.1133 7.85742C46.0078 7.60742 45.9551 7.33984 45.9551 7.05469V0.597656H46.7109V7.05469C46.7109 7.24219 46.7461 7.41797 46.8164 7.58203C46.8867 7.74219 46.9824 7.88477 47.1035 8.00977C47.2285 8.13086 47.3711 8.22656 47.5312 8.29688C47.6953 8.36719 47.8711 8.40234 48.0586 8.40234H48.5859C48.7734 8.40234 48.9473 8.36719 49.1074 8.29688C49.2715 8.22656 49.4141 8.13086 49.5352 8.00977C49.6562 7.88477 49.752 7.74219 49.8223 7.58203C49.8926 7.41797 49.9277 7.24219 49.9277 7.05469V0.597656H50.6836V7.05469ZM56.8184 9L53.3145 2.88281L53.2441 2.51953V9H52.4883V0.597656H52.8809L56.3848 6.7207L56.4609 7.07812V0.597656H57.2168V9H56.8184ZM63.4746 9L59.9707 2.88281L59.9004 2.51953V9H59.1445V0.597656H59.5371L63.041 6.7207L63.1172 7.07812V0.597656H63.873V9H63.4746ZM65.8008 9V0.597656H70.5293V1.31836H66.5566V4.44141H69.7734V5.16211H66.5566V8.2793H70.5293V9H65.8008ZM71.8535 9V0.597656H72.6094V8.2793H75.8262V9H71.8535Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo2 = (props: LogoProps) => (
  <Svg
    width={91 * props.scale}
    height={10 * props.scale}
    viewBox="0 0 91 10"
    fill="none">
    <Path
      d="M0.924 0.18H5.064V1.344H2.256V3.84H4.44V5.016H2.256V9H0.924V0.18ZM9.10931 0.167999L13.3573 9H11.8093L11.0533 7.272H7.00931L6.25331 9H4.75331L8.97731 0.167999H9.10931ZM8.50931 3.924L7.54931 6.06H10.5253L9.57731 3.936L9.06131 2.724H9.03731L8.50931 3.924ZM16.1242 9.12C15.6442 9.12 15.1682 9.036 14.6962 8.868C14.2242 8.7 13.8842 8.512 13.6762 8.304L14.3122 7.164C14.4802 7.316 14.7402 7.476 15.0922 7.644C15.4522 7.804 15.7962 7.884 16.1242 7.884C16.5482 7.884 16.8922 7.784 17.1562 7.584C17.4282 7.384 17.5642 7.108 17.5642 6.756C17.5642 6.484 17.4922 6.248 17.3482 6.048C17.2042 5.848 17.0282 5.684 16.8202 5.556C16.6122 5.42 16.3162 5.256 15.9322 5.064C15.4762 4.84 15.1642 4.672 14.9962 4.56C14.2202 4.04 13.8322 3.32 13.8322 2.4C13.8322 1.64 14.0842 1.06 14.5882 0.659999C15.0922 0.251999 15.7282 0.0479994 16.4962 0.0479994C17.3202 0.0479994 18.0202 0.283999 18.5962 0.756L17.9602 1.848C17.8082 1.688 17.5922 1.552 17.3122 1.44C17.0402 1.32 16.7482 1.26 16.4362 1.26C16.0362 1.26 15.7202 1.352 15.4882 1.536C15.2642 1.712 15.1522 1.976 15.1522 2.328C15.1522 2.576 15.2242 2.8 15.3682 3C15.5122 3.192 15.6922 3.36 15.9082 3.504C16.1322 3.648 16.4322 3.824 16.8082 4.032C17.1682 4.232 17.4442 4.392 17.6362 4.512C17.8282 4.624 18.0082 4.76 18.1762 4.92C18.4082 5.128 18.5962 5.376 18.7402 5.664C18.8842 5.952 18.9562 6.268 18.9562 6.612C18.9562 7.148 18.8322 7.604 18.5842 7.98C18.3442 8.356 18.0082 8.64 17.5762 8.832C17.1522 9.024 16.6682 9.12 16.1242 9.12ZM20.3888 0.18H21.7328V3.78H24.8408V0.18H26.1848V9H24.8408V4.908H21.7328V9H20.3888V0.18ZM28.1975 0.18H29.5415V9H28.1975V0.18ZM35.6248 9.12C34.8248 9.12 34.0848 8.936 33.4048 8.568C32.7328 8.192 32.1968 7.66 31.7968 6.972C31.3968 6.284 31.1968 5.484 31.1968 4.572C31.1968 3.652 31.3968 2.852 31.7968 2.172C32.1968 1.484 32.7328 0.956 33.4048 0.588C34.0848 0.22 34.8248 0.0359995 35.6248 0.0359995C36.4248 0.0359995 37.1608 0.22 37.8328 0.588C38.5128 0.956 39.0528 1.484 39.4528 2.172C39.8528 2.852 40.0528 3.652 40.0528 4.572C40.0528 5.484 39.8528 6.284 39.4528 6.972C39.0528 7.66 38.5128 8.192 37.8328 8.568C37.1608 8.936 36.4248 9.12 35.6248 9.12ZM35.6248 7.908C36.1768 7.908 36.6808 7.78 37.1368 7.524C37.5928 7.26 37.9528 6.88 38.2168 6.384C38.4888 5.88 38.6248 5.28 38.6248 4.584C38.6248 3.88 38.4888 3.28 38.2168 2.784C37.9528 2.28 37.5928 1.9 37.1368 1.644C36.6888 1.388 36.1848 1.26 35.6248 1.26C35.0648 1.26 34.5568 1.388 34.1008 1.644C33.6448 1.9 33.2848 2.28 33.0208 2.784C32.7568 3.28 32.6248 3.88 32.6248 4.584C32.6248 5.28 32.7608 5.88 33.0328 6.384C33.3048 6.88 33.6688 7.26 34.1248 7.524C34.5888 7.78 35.0888 7.908 35.6248 7.908ZM42.8612 3.288L42.8972 4.248V9H41.5532V0.167999H41.7212L46.9052 5.952L46.8572 4.944V0.18H48.2012V9H48.0212L42.8612 3.288ZM51.7527 1.356H49.4967V0.18H55.3647V1.356H53.0847V9H51.7527V1.356ZM59.4603 9.12C58.3563 9.12 57.5563 8.788 57.0603 8.124C56.5643 7.46 56.3163 6.496 56.3163 5.232V0.18H57.6603V5.256C57.6603 6.192 57.8003 6.864 58.0803 7.272C58.3603 7.672 58.8203 7.872 59.4603 7.872C60.1003 7.872 60.5563 7.676 60.8283 7.284C61.1083 6.884 61.2483 6.208 61.2483 5.256V0.18H62.6043V5.232C62.6043 6.488 62.3403 7.452 61.8123 8.124C61.2923 8.788 60.5083 9.12 59.4603 9.12ZM65.6776 3.288L65.7136 4.248V9H64.3696V0.167999H64.5376L69.7216 5.952L69.6736 4.944V0.18H71.0176V9H70.8376L65.6776 3.288ZM74.1971 3.288L74.2331 4.248V9H72.8891V0.167999H73.0571L78.2411 5.952L78.1931 4.944V0.18H79.5371V9H79.3571L74.1971 3.288ZM81.3967 0.18H85.2607V1.356H82.7287V3.792H84.7687V4.992H82.7287V7.812H85.6567V9H81.3967V0.18ZM87.0102 0.18H88.3662V7.8H90.8982V9H87.0102V0.18Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo = (props: LogoProps) => (
  <Svg
    width={85 * props.scale}
    height={10 * props.scale}
    viewBox="0 0 85 10"
    fill="none">
    <Path
      d="M1.544 1.956V4.152H4.016V5.496H1.544V9H0.00800008V0.636H4.376V1.956H1.544ZM8.93534 7.788H5.94734L5.50334 9H3.82334L7.36334 0.491999H7.48334L11.0353 9H9.40334L8.93534 7.788ZM8.49134 6.624L7.61534 4.344L7.41134 3.672L7.21934 4.344L6.37934 6.624H8.49134ZM13.8839 9.132C13.5119 9.132 13.1599 9.088 12.8279 9C12.4999 8.912 12.2119 8.798 11.9639 8.658C11.7159 8.518 11.5199 8.372 11.3759 8.22L11.9879 6.96C12.0799 7.08 12.2199 7.208 12.4079 7.344C12.5959 7.48 12.8099 7.596 13.0499 7.692C13.2939 7.788 13.5359 7.836 13.7759 7.836C14.0919 7.836 14.3559 7.75 14.5679 7.578C14.7839 7.402 14.8919 7.156 14.8919 6.84C14.8919 6.636 14.8419 6.46 14.7419 6.312C14.6459 6.16 14.5159 6.026 14.3519 5.91C14.1919 5.79 13.9439 5.628 13.6079 5.424C13.1479 5.144 12.7879 4.906 12.5279 4.71C12.2679 4.51 12.0419 4.25 11.8499 3.93C11.6619 3.606 11.5679 3.216 11.5679 2.76C11.5679 2.316 11.6619 1.924 11.8499 1.584C12.0419 1.24 12.3239 0.972 12.6959 0.779999C13.0679 0.587999 13.5159 0.491999 14.0399 0.491999C14.8919 0.491999 15.6039 0.751999 16.1759 1.272L15.5039 2.496C15.4359 2.4 15.3339 2.296 15.1979 2.184C15.0619 2.068 14.8979 1.97 14.7059 1.89C14.5139 1.806 14.3119 1.764 14.0999 1.764C13.7919 1.764 13.5519 1.854 13.3799 2.034C13.2119 2.21 13.1279 2.432 13.1279 2.7C13.1279 2.904 13.1779 3.086 13.2779 3.246C13.3819 3.402 13.5159 3.542 13.6799 3.666C13.8479 3.79 14.0719 3.936 14.3519 4.104C14.8599 4.404 15.2479 4.656 15.5159 4.86C15.7839 5.064 16.0079 5.324 16.1879 5.64C16.3719 5.952 16.4639 6.336 16.4639 6.792C16.4639 7.276 16.3599 7.694 16.1519 8.046C15.9439 8.398 15.6459 8.668 15.2579 8.856C14.8699 9.04 14.4119 9.132 13.8839 9.132ZM23.7588 0.636V9H22.1988V5.448H19.4388V9H17.8908V0.636H19.4388V4.128H22.1988V0.636H23.7588ZM25.7415 0.636H27.2775V9H25.7415V0.636ZM32.21 9.144C31.466 9.144 30.832 8.968 30.308 8.616C29.784 8.26 29.388 7.758 29.12 7.11C28.852 6.458 28.718 5.692 28.718 4.812C28.718 3.94 28.85 3.18 29.114 2.532C29.382 1.88 29.774 1.378 30.29 1.026C30.81 0.669999 31.438 0.491999 32.174 0.491999C32.938 0.491999 33.582 0.671999 34.106 1.032C34.63 1.388 35.022 1.89 35.282 2.538C35.546 3.186 35.678 3.944 35.678 4.812C35.678 5.692 35.542 6.458 35.27 7.11C35.002 7.758 34.608 8.26 34.088 8.616C33.568 8.968 32.942 9.144 32.21 9.144ZM32.21 7.86C32.566 7.86 32.884 7.746 33.164 7.518C33.448 7.29 33.672 6.944 33.836 6.48C34 6.016 34.082 5.448 34.082 4.776C34.082 3.788 33.914 3.036 33.578 2.52C33.246 2 32.778 1.74 32.174 1.74C31.586 1.74 31.13 2 30.806 2.52C30.486 3.036 30.326 3.792 30.326 4.788C30.326 5.468 30.402 6.038 30.554 6.498C30.71 6.954 30.928 7.296 31.208 7.524C31.492 7.748 31.826 7.86 32.21 7.86ZM43.0724 0.636V9.168H42.9524L38.9444 4.596L38.5724 4.116L38.6324 5.28V9H37.1564V0.491999H37.2884L41.2364 5.1L41.6564 5.646L41.5964 4.5V0.636H43.0724ZM49.71 1.992H47.778V9H46.23V1.992H44.298V0.636H49.71V1.992ZM53.6977 9.156C52.7897 9.156 52.0657 8.914 51.5257 8.43C50.9897 7.942 50.7217 7.136 50.7217 6.012V0.636H52.2817V6.18C52.2817 6.812 52.4197 7.248 52.6957 7.488C52.9757 7.728 53.3017 7.848 53.6737 7.848C54.0497 7.848 54.3697 7.73 54.6337 7.494C54.8977 7.258 55.0297 6.82 55.0297 6.18V0.636H56.5897V6.012C56.5897 7.136 56.3277 7.942 55.8037 8.43C55.2797 8.914 54.5777 9.156 53.6977 9.156ZM64.3068 0.636V9.168H64.1868L60.1788 4.596L59.8068 4.116L59.8668 5.28V9H58.3908V0.491999H58.5228L62.4708 5.1L62.8908 5.646L62.8308 4.5V0.636H64.3068ZM72.2404 0.636V9.168H72.1204L68.1124 4.596L67.7404 4.116L67.8004 5.28V9H66.3244V0.491999H66.4564L70.4044 5.1L70.8244 5.646L70.7644 4.5V0.636H72.2404ZM78.83 7.644V9H74.222V0.636H78.59V1.944H75.722V3.9H78.002V5.172H75.722V7.644H78.83ZM84.3483 7.68V9H80.3283V0.636H81.8523V7.68H84.3483Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo4 = (props: LogoProps) => (
  <Svg
    width={56 * props.scale}
    height={9 * props.scale}
    viewBox="0 0 56 9"
    fill="none">
    <Path
      d="M0.756 8V0.908H3.816V1.448H1.536V3.992H3.36V4.592H1.536V8H0.756ZM3.66047 8L5.23247 0.908H6.20447L7.75247 8H6.93647L6.55247 6.356H4.81247L4.45247 8H3.66047ZM4.83647 5.936H6.54047L5.70047 1.832L4.83647 5.936ZM10.1296 8.084C9.76959 8.084 9.45759 8.02 9.19359 7.892C8.93759 7.764 8.73759 7.552 8.59359 7.256C8.44959 6.952 8.37759 6.532 8.37759 5.996V5.6C8.50559 5.6 8.63359 5.6 8.76159 5.6C8.89759 5.6 9.02559 5.6 9.14559 5.6V6.044C9.14559 6.444 9.18559 6.756 9.26559 6.98C9.35359 7.196 9.46959 7.348 9.61359 7.436C9.76559 7.524 9.93759 7.568 10.1296 7.568C10.4416 7.568 10.6936 7.472 10.8856 7.28C11.0856 7.08 11.1856 6.728 11.1856 6.224C11.1856 5.864 11.1336 5.596 11.0296 5.42C10.9256 5.236 10.7656 5.092 10.5496 4.988C10.3336 4.876 10.0696 4.756 9.75759 4.628C9.50159 4.524 9.26959 4.4 9.06159 4.256C8.86159 4.104 8.70559 3.908 8.59359 3.668C8.48159 3.428 8.42559 3.124 8.42559 2.756C8.42559 2.34 8.48159 1.996 8.59359 1.724C8.70559 1.444 8.88959 1.236 9.14559 1.1C9.40159 0.964 9.74159 0.896 10.1656 0.896C10.7176 0.896 11.1416 1.036 11.4376 1.316C11.7416 1.588 11.8936 1.976 11.8936 2.48V3.26C11.7736 3.26 11.6496 3.26 11.5216 3.26C11.4016 3.26 11.2776 3.26 11.1496 3.26V2.66C11.1496 2.276 11.0656 1.988 10.8976 1.796C10.7376 1.596 10.4976 1.496 10.1776 1.496C9.82559 1.496 9.56959 1.6 9.40959 1.808C9.25759 2.008 9.18159 2.316 9.18159 2.732C9.18159 3.044 9.24159 3.292 9.36159 3.476C9.48159 3.652 9.63759 3.792 9.82959 3.896C10.0216 3.992 10.2256 4.08 10.4416 4.16C10.8016 4.296 11.0936 4.44 11.3176 4.592C11.5416 4.736 11.7056 4.924 11.8096 5.156C11.9136 5.388 11.9656 5.712 11.9656 6.128C11.9656 6.616 11.8856 7.004 11.7256 7.292C11.5736 7.572 11.3576 7.776 11.0776 7.904C10.8056 8.024 10.4896 8.084 10.1296 8.084ZM13.1779 8V0.908H13.9339V4.004H16.0099V0.908H16.7539V8H16.0099V4.58H13.9339V8H13.1779ZM18.2638 8V0.908H19.0198V8H18.2638ZM22.1815 8.144C21.8375 8.144 21.5335 8.104 21.2695 8.024C21.0055 7.944 20.7935 7.78 20.6335 7.532C20.4815 7.276 20.4055 6.892 20.4055 6.38V2.384C20.4055 1.936 20.4815 1.6 20.6335 1.376C20.7935 1.152 21.0095 1.004 21.2815 0.931999C21.5535 0.852 21.8615 0.812 22.2055 0.812C22.5495 0.812 22.8535 0.852 23.1175 0.931999C23.3895 1.012 23.6015 1.164 23.7535 1.388C23.9135 1.612 23.9935 1.944 23.9935 2.384V6.368C23.9935 6.888 23.9135 7.276 23.7535 7.532C23.6015 7.78 23.3895 7.944 23.1175 8.024C22.8535 8.104 22.5415 8.144 22.1815 8.144ZM22.1935 7.676C22.4015 7.676 22.5815 7.652 22.7335 7.604C22.8935 7.548 23.0175 7.444 23.1055 7.292C23.1935 7.132 23.2375 6.896 23.2375 6.584V2.384C23.2375 2.072 23.1935 1.84 23.1055 1.688C23.0175 1.528 22.8935 1.424 22.7335 1.376C22.5735 1.32 22.3935 1.292 22.1935 1.292C21.9855 1.292 21.8015 1.32 21.6415 1.376C21.4895 1.424 21.3695 1.528 21.2815 1.688C21.1935 1.84 21.1495 2.072 21.1495 2.384V6.584C21.1495 6.896 21.1935 7.132 21.2815 7.292C21.3695 7.444 21.4895 7.548 21.6415 7.604C21.8015 7.652 21.9855 7.676 22.1935 7.676ZM25.4005 8V0.908H26.0605L28.2805 6.452V0.908H28.9645V8H28.2805L26.0845 2.66V8H25.4005ZM31.027 8V1.448H29.839V0.908H32.995V1.448H31.783V8H31.027ZM35.6129 8.144C35.3649 8.144 35.1329 8.124 34.9169 8.084C34.7009 8.044 34.5089 7.968 34.3409 7.856C34.1809 7.744 34.0529 7.58 33.9569 7.364C33.8689 7.14 33.8249 6.844 33.8249 6.476V0.908H34.5809V6.632C34.5809 6.92 34.6289 7.136 34.7249 7.28C34.8209 7.424 34.9449 7.524 35.0969 7.58C35.2569 7.628 35.4289 7.652 35.6129 7.652C35.7889 7.652 35.9569 7.628 36.1169 7.58C36.2769 7.524 36.4049 7.424 36.5009 7.28C36.5969 7.136 36.6449 6.92 36.6449 6.632V0.908H37.3889V6.476C37.3889 6.844 37.3409 7.14 37.2449 7.364C37.1569 7.58 37.0329 7.744 36.8729 7.856C36.7129 7.968 36.5209 8.044 36.2969 8.084C36.0809 8.124 35.8529 8.144 35.6129 8.144ZM38.8419 8V0.908H39.5019L41.7219 6.452V0.908H42.4059V8H41.7219L39.5259 2.66V8H38.8419ZM43.9044 8V0.908H44.5644L46.7844 6.452V0.908H47.4684V8H46.7844L44.5884 2.66V8H43.9044ZM48.9669 8V0.908H52.0269V1.448H49.7469V3.992H51.5709V4.592H49.7469V7.46H52.0269V8H48.9669ZM53.0685 8V0.908H53.8125V7.46H55.7925V8H53.0685Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo5 = (props: LogoProps) => (
  <Svg
    width={85 * props.scale}
    height={11 * props.scale}
    viewBox="0 0 85 11"
    fill="none">
    <Path
      d="M2.39648 5.03125V6.24414C2.39648 7.48633 2.41016 8.25195 2.4375 8.54102C2.46875 8.82617 2.49805 9.03125 2.52539 9.15625C2.55273 9.28125 2.59375 9.39258 2.64844 9.49023C2.73438 9.65039 2.89844 9.82031 3.14062 10H0.169922C0.478516 9.80859 0.679688 9.64258 0.773438 9.50195C0.953125 9.23633 1.04297 8.89258 1.04297 8.4707C1.03906 7.43164 1.03711 6.49023 1.03711 5.64648V2.57031C1.03711 1.98828 0.945312 1.56641 0.761719 1.30469C0.691406 1.21094 0.607422 1.12109 0.509766 1.03516H4.91602C5.18164 1.12891 5.36328 1.45703 5.46094 2.01953C5.48828 2.17578 5.50195 2.32812 5.50195 2.47656C5.50195 2.78125 5.45703 3.02344 5.36719 3.20312L5.05078 2.57031C4.83984 2.15625 4.53711 1.87891 4.14258 1.73828C3.92383 1.66016 3.67773 1.62109 3.4043 1.62109C3.13086 1.62109 2.93555 1.63086 2.81836 1.65039C2.70117 1.66602 2.61133 1.70703 2.54883 1.77344C2.44727 1.88672 2.39648 2.10352 2.39648 2.42383C2.39648 2.74023 2.4043 2.96094 2.41992 3.08594C2.43555 3.20703 2.47266 3.30664 2.53125 3.38477C2.65234 3.53711 2.9082 3.61328 3.29883 3.61328H5.13867C5.04883 3.83984 4.95703 4 4.86328 4.09375C4.67578 4.28125 4.42188 4.375 4.10156 4.375C3.97656 4.375 3.85742 4.36133 3.74414 4.33398C3.5332 4.2832 3.34766 4.25781 3.1875 4.25781C3.02734 4.25781 2.89453 4.27344 2.78906 4.30469C2.6875 4.33203 2.60742 4.37695 2.54883 4.43945C2.44727 4.54883 2.39648 4.74609 2.39648 5.03125ZM10.377 10C10.4277 9.75391 10.4531 9.55859 10.4531 9.41406C10.4531 9.26562 10.4492 9.1543 10.4414 9.08008C10.4375 9.00586 10.4297 8.92773 10.418 8.8457C10.4102 8.75977 10.3984 8.66602 10.3828 8.56445C10.3711 8.45898 10.3594 8.33789 10.3477 8.20117C10.2578 7.26758 9.93945 6.5 9.39258 5.89844C9.15039 5.63281 8.88867 5.43164 8.60742 5.29492C8.32617 5.1543 8.09375 5.08398 7.91016 5.08398C7.73047 5.08398 7.5918 5.0957 7.49414 5.11914C7.27539 5.77539 7.16602 6.46094 7.16602 7.17578C7.16602 7.80859 7.19922 8.28125 7.26562 8.59375C7.37109 9.0625 7.5332 9.5332 7.75195 10.0059H6C6.09375 9.77148 6.14062 9.2793 6.14062 8.5293C6.14062 7.77539 6.19727 7.07227 6.31055 6.41992C6.42383 5.76367 6.57031 5.17969 6.75 4.66797C6.93359 4.15625 7.13672 3.70898 7.35938 3.32617C7.58594 2.93945 7.81055 2.60352 8.0332 2.31836C8.25977 2.0293 8.47266 1.7832 8.67188 1.58008C8.87109 1.37305 9.03711 1.19141 9.16992 1.03516H11.0156C10.8477 1.22656 10.7637 1.49414 10.7637 1.83789C10.7637 1.99414 10.7891 2.25 10.8398 2.60547L10.9863 3.67188C11.5215 7.35938 12 9.46875 12.4219 10H10.377ZM7.73438 4.49805C7.88672 4.43945 8.04688 4.41016 8.21484 4.41016C8.38281 4.41016 8.5332 4.42188 8.66602 4.44531C8.80273 4.46875 8.9375 4.50781 9.07031 4.5625C9.35547 4.67188 9.59375 4.8457 9.78516 5.08398C9.59375 4.08008 9.47656 3.4668 9.43359 3.24414L9.22852 2.21875L8.89453 2.61719C8.42578 3.17969 8.03906 3.80664 7.73438 4.49805ZM14.4375 6.89453C14.3867 7.30078 14.3613 7.625 14.3613 7.86719C14.3613 8.10547 14.3906 8.32617 14.4492 8.5293C14.5078 8.73242 14.5918 8.9082 14.7012 9.05664C14.9355 9.37305 15.2324 9.53125 15.5918 9.53125C16.2793 9.53125 16.623 9.15234 16.623 8.39453C16.623 7.78516 16.2695 7.13867 15.5625 6.45508L14.9531 5.86328C14.418 5.34766 14.0527 4.93359 13.8574 4.62109C13.4707 4.00391 13.2773 3.39062 13.2773 2.78125C13.2773 2.28516 13.4375 1.86914 13.7578 1.5332C14.1445 1.12305 14.7012 0.917969 15.4277 0.917969C15.7129 0.917969 15.9277 0.931641 16.0723 0.958984C16.3418 1.00977 16.5215 1.03516 16.6113 1.03516C16.8379 1.03516 17.0137 0.964844 17.1387 0.824219C17.1855 0.773437 17.2363 0.707031 17.291 0.625C17.5762 0.785156 17.7188 1.37305 17.7188 2.38867C17.7188 3.03711 17.6543 3.51562 17.5254 3.82422C17.4824 3.92969 17.4336 3.99609 17.3789 4.02344C17.3164 3.43359 17.125 2.90625 16.8047 2.44141C16.4297 1.89453 15.9961 1.62109 15.5039 1.62109C15.082 1.62109 14.8223 1.81445 14.7246 2.20117C14.6973 2.31055 14.6836 2.44727 14.6836 2.61133C14.6836 2.77148 14.7324 2.95508 14.8301 3.16211C14.9277 3.36914 15.0547 3.57617 15.2109 3.7832C15.3711 3.98633 15.5547 4.19141 15.7617 4.39844C16.3867 5.03906 16.8008 5.47266 17.0039 5.69922C17.2109 5.92578 17.3945 6.16016 17.5547 6.40234C17.9062 6.94531 18.082 7.4707 18.082 7.97852C18.082 8.5918 17.8438 9.09961 17.3672 9.50195C16.875 9.91211 16.2422 10.1172 15.4688 10.1172C14.8281 10.1172 14.2773 9.95703 13.8164 9.63672C13.3086 9.28516 13.0547 8.82031 13.0547 8.24219C13.207 7.69922 13.5391 7.30078 14.0508 7.04688C14.1875 6.97656 14.3164 6.92578 14.4375 6.89453ZM23.4434 6.51367L23.4375 4.9082C23.4375 4.68945 23.4023 4.54102 23.332 4.46289C23.2031 4.31836 22.9648 4.24609 22.6172 4.24609H21.6914C21.207 4.24609 20.9414 4.38281 20.8945 4.65625C20.8828 4.73438 20.877 4.81836 20.877 4.9082L20.8711 6.66602C20.8711 8.18164 20.9492 9.13086 21.1055 9.51367C21.168 9.66211 21.2656 9.82422 21.3984 10H19.2012C19.3262 9.70312 19.3984 9.45508 19.418 9.25586C19.4414 9.05664 19.4648 8.81055 19.4883 8.51758C19.5312 7.9043 19.5527 7.20312 19.5527 6.41406C19.5527 5.625 19.5508 5.08203 19.5469 4.78516C19.543 4.48438 19.5391 4.19141 19.5352 3.90625C19.5078 2.72266 19.4707 2.01367 19.4238 1.7793C19.377 1.54102 19.3379 1.38086 19.3066 1.29883L19.2012 1.03516H21.3984C21.1172 1.34766 20.9609 1.76953 20.9297 2.30078C20.918 2.46094 20.9121 2.62891 20.9121 2.80469C20.9121 2.98047 20.9277 3.11914 20.959 3.2207C20.9941 3.31836 21.0508 3.39062 21.1289 3.4375C21.2344 3.50781 21.4824 3.54297 21.873 3.54297H22.4297C22.8281 3.54297 23.0742 3.51367 23.168 3.45508C23.3242 3.35352 23.4023 3.13281 23.4023 2.79297C23.4023 1.96094 23.2383 1.375 22.9102 1.03516H25.1074C24.9902 1.29297 24.918 1.53125 24.8906 1.75C24.8672 1.96875 24.8496 2.17969 24.8379 2.38281C24.8262 2.58203 24.8145 2.81445 24.8027 3.08008C24.791 3.3457 24.7812 3.62109 24.7734 3.90625C24.7617 4.57031 24.7559 5.17188 24.7559 5.71094C24.7559 7.90234 24.8379 9.24414 25.002 9.73633C25.0293 9.81836 25.0645 9.90625 25.1074 10H22.9102C23.1055 9.73828 23.2246 9.51367 23.2676 9.32617C23.3105 9.13477 23.3438 8.91016 23.3672 8.65234C23.418 8.15625 23.4434 7.44336 23.4434 6.51367ZM28.752 1.03516C28.6074 1.39844 28.5234 1.76367 28.5 2.13086C28.4766 2.49414 28.459 2.80664 28.4473 3.06836C28.4355 3.33008 28.4258 3.60156 28.418 3.88281C28.4062 4.53906 28.4004 5.13672 28.4004 5.67578C28.4004 7.88672 28.4824 9.24219 28.6465 9.74219C28.6738 9.82812 28.709 9.91406 28.752 10H26.7305C26.8516 9.73438 26.9238 9.49414 26.9473 9.2793C26.9707 9.06445 26.9922 8.80859 27.0117 8.51172C27.0586 7.89844 27.082 7.19141 27.082 6.39062C27.082 5.58984 27.0801 5.04297 27.0762 4.75C27.0723 4.45312 27.0664 4.16406 27.0586 3.88281C27.0312 2.51172 26.9492 1.64062 26.8125 1.26953L26.7305 1.03516H28.752ZM33.5566 9.53125C34.3066 9.53125 34.791 8.61719 35.0098 6.78906C35.084 6.17188 35.1211 5.44531 35.1211 4.60938C35.1211 2.53906 34.5957 1.50391 33.5449 1.50391C32.4941 1.50391 31.9688 2.53906 31.9688 4.60938C31.9688 7.05078 32.2832 8.5918 32.9121 9.23242C33.1074 9.43164 33.3223 9.53125 33.5566 9.53125ZM33.5449 10.1172C32.5059 10.1172 31.7227 9.62891 31.1953 8.65234C30.6875 7.71094 30.4336 6.36328 30.4336 4.60938C30.4336 2.78516 30.9941 1.63672 32.1152 1.16406C32.5098 1 32.9863 0.917969 33.5449 0.917969C35.1465 0.917969 36.125 1.62891 36.4805 3.05078C36.5977 3.50781 36.6562 4.0957 36.6562 4.81445C36.6562 5.5332 36.5938 6.23438 36.4688 6.91797C36.3438 7.59766 36.1523 8.17578 35.8945 8.65234C35.3672 9.62891 34.584 10.1172 33.5449 10.1172ZM39.5098 3.61914C39.502 4.02539 39.498 4.48828 39.498 5.00781C39.498 5.74609 39.5117 6.5918 39.5391 7.54492C39.5664 8.49414 39.5879 9.03516 39.6035 9.16797C39.6191 9.29688 39.6387 9.41016 39.6621 9.50781C39.7012 9.66797 39.7617 9.83203 39.8438 10H38.2734C38.3906 9.76172 38.4609 9.5293 38.4844 9.30273C38.5117 9.07227 38.5332 8.84375 38.5488 8.61719C38.5801 8.15625 38.5957 7.53711 38.5957 6.75977C38.5957 5.81836 38.5801 4.95898 38.5488 4.18164L38.4844 2.57031C38.4609 1.97656 38.3672 1.55469 38.2031 1.30469C38.1367 1.21094 38.0547 1.12109 37.957 1.03516H39.7793C40.0098 1.56641 40.2539 2.09375 40.5117 2.61719L41.3086 4.17578L43.0195 7.32227C43.0234 7.07617 43.0254 6.8125 43.0254 6.53125V5.61719C43.0254 3.66406 42.9062 2.25391 42.668 1.38672C42.6211 1.22656 42.5703 1.10938 42.5156 1.03516L44.2793 1.0293C44.084 1.41992 43.9609 2.51953 43.9102 4.32812C43.9023 4.60938 43.8984 4.87891 43.8984 5.13672L43.9043 5.62891V8.01953C43.9043 9.03125 43.9121 9.69141 43.9277 10H42.9785L41.2793 6.83594L39.5098 3.61914ZM45.0352 3.67188C44.9414 3.44531 44.8945 3.17773 44.8945 2.86914C44.8945 2.56055 44.9062 2.30859 44.9297 2.11328C44.9531 1.91406 44.9844 1.73437 45.0234 1.57422C45.1172 1.21484 45.2324 1.03516 45.3691 1.03516H50.5312C50.7578 1.03516 50.9102 1.37109 50.9883 2.04297C51.0078 2.23047 51.0176 2.42383 51.0176 2.62305C51.0176 3.0918 50.9668 3.44141 50.8652 3.67188C50.5293 2.62891 50.0938 1.96094 49.5586 1.66797C49.4375 1.59766 49.3184 1.5625 49.2012 1.5625C49.084 1.5625 48.9922 1.59375 48.9258 1.65625C48.8594 1.71484 48.8047 1.81055 48.7617 1.94336C48.6914 2.17773 48.6562 2.45898 48.6562 2.78711V4.98438L48.6621 6.77734V8.47656C48.6621 8.85938 48.7109 9.14258 48.8086 9.32617C48.9102 9.50586 49.0117 9.64258 49.1133 9.73633C49.2188 9.83008 49.3418 9.91797 49.4824 10H46.4883C46.7695 9.76953 46.9492 9.58008 47.0273 9.43164C47.1719 9.16211 47.2441 8.84375 47.2441 8.47656V3.19727C47.2441 2.58398 47.2207 2.18945 47.1738 2.01367C47.127 1.83398 47.0703 1.71484 47.0039 1.65625C46.9375 1.59375 46.8457 1.5625 46.7285 1.5625C46.6113 1.5625 46.4922 1.59766 46.3711 1.66797C46.25 1.73437 46.1309 1.82422 46.0137 1.9375C45.9004 2.04688 45.791 2.17578 45.6855 2.32422C45.584 2.46875 45.4902 2.61914 45.4043 2.77539C45.2363 3.08398 45.1133 3.38281 45.0352 3.67188ZM56.4082 6.99414L56.4375 4.74414C56.4375 3.16992 56.3789 2.16406 56.2617 1.72656C56.207 1.51562 56.1406 1.36133 56.0625 1.26367C55.9883 1.16602 55.9277 1.08984 55.8809 1.03516H57.8027L57.6797 1.19922C57.5039 1.45703 57.4062 1.74805 57.3867 2.07227C57.3672 2.39648 57.3516 2.72461 57.3398 3.05664C57.332 3.38867 57.3242 3.71875 57.3164 4.04688C57.3086 4.59766 57.3047 5.21289 57.3047 5.89258V6.60742C57.3047 7.86914 57.1016 8.77344 56.6953 9.32031C56.293 9.85156 55.6367 10.1172 54.7266 10.1172C52.9648 10.1172 52.0879 8.98633 52.0957 6.72461L52.1016 2.33594C52.1016 1.71875 51.9922 1.28516 51.7734 1.03516H53.9941C53.7637 1.3125 53.6484 1.70703 53.6484 2.21875C53.6484 2.51562 53.6465 2.82031 53.6426 3.13281L53.6191 5.00781C53.6152 5.31641 53.6133 5.63477 53.6133 5.96289C53.6133 7.13867 53.6484 7.88477 53.7188 8.20117C53.7891 8.51367 53.875 8.75781 53.9766 8.93359C54.2109 9.33203 54.5586 9.53125 55.0195 9.53125C55.7305 9.53125 56.168 9.01172 56.332 7.97266C56.3828 7.66406 56.4082 7.33789 56.4082 6.99414ZM60.252 3.61914C60.2441 4.02539 60.2402 4.48828 60.2402 5.00781C60.2402 5.74609 60.2539 6.5918 60.2812 7.54492C60.3086 8.49414 60.3301 9.03516 60.3457 9.16797C60.3613 9.29688 60.3809 9.41016 60.4043 9.50781C60.4434 9.66797 60.5039 9.83203 60.5859 10H59.0156C59.1328 9.76172 59.2031 9.5293 59.2266 9.30273C59.2539 9.07227 59.2754 8.84375 59.291 8.61719C59.3223 8.15625 59.3379 7.53711 59.3379 6.75977C59.3379 5.81836 59.3223 4.95898 59.291 4.18164L59.2266 2.57031C59.2031 1.97656 59.1094 1.55469 58.9453 1.30469C58.8789 1.21094 58.7969 1.12109 58.6992 1.03516H60.5215C60.752 1.56641 60.9961 2.09375 61.2539 2.61719L62.0508 4.17578L63.7617 7.32227C63.7656 7.07617 63.7676 6.8125 63.7676 6.53125V5.61719C63.7676 3.66406 63.6484 2.25391 63.4102 1.38672C63.3633 1.22656 63.3125 1.10938 63.2578 1.03516L65.0215 1.0293C64.8262 1.41992 64.7031 2.51953 64.6523 4.32812C64.6445 4.60938 64.6406 4.87891 64.6406 5.13672L64.6465 5.62891V8.01953C64.6465 9.03125 64.6543 9.69141 64.6699 10H63.7207L62.0215 6.83594L60.252 3.61914ZM67.6699 3.61914C67.6621 4.02539 67.6582 4.48828 67.6582 5.00781C67.6582 5.74609 67.6719 6.5918 67.6992 7.54492C67.7266 8.49414 67.748 9.03516 67.7637 9.16797C67.7793 9.29688 67.7988 9.41016 67.8223 9.50781C67.8613 9.66797 67.9219 9.83203 68.0039 10H66.4336C66.5508 9.76172 66.6211 9.5293 66.6445 9.30273C66.6719 9.07227 66.6934 8.84375 66.709 8.61719C66.7402 8.15625 66.7559 7.53711 66.7559 6.75977C66.7559 5.81836 66.7402 4.95898 66.709 4.18164L66.6445 2.57031C66.6211 1.97656 66.5273 1.55469 66.3633 1.30469C66.2969 1.21094 66.2148 1.12109 66.1172 1.03516H67.9395C68.1699 1.56641 68.4141 2.09375 68.6719 2.61719L69.4688 4.17578L71.1797 7.32227C71.1836 7.07617 71.1855 6.8125 71.1855 6.53125V5.61719C71.1855 3.66406 71.0664 2.25391 70.8281 1.38672C70.7812 1.22656 70.7305 1.10938 70.6758 1.03516L72.4395 1.0293C72.2441 1.41992 72.1211 2.51953 72.0703 4.32812C72.0625 4.60938 72.0586 4.87891 72.0586 5.13672L72.0645 5.62891V8.01953C72.0645 9.03125 72.0723 9.69141 72.0879 10H71.1387L69.4395 6.83594L67.6699 3.61914ZM78.3164 7.83203C78.4219 7.97656 78.4746 8.18555 78.4746 8.45898C78.4746 8.73242 78.4629 8.95117 78.4395 9.11523C78.416 9.27539 78.3789 9.42188 78.3281 9.55469C78.2109 9.85156 78.0566 10 77.8652 10H73.1191C73.4199 9.83984 73.6191 9.68555 73.7168 9.53711C73.9004 9.25977 73.9922 8.9082 73.9922 8.48242C73.9883 7.43945 73.9863 6.49609 73.9863 5.65234V2.57031C73.9863 1.98828 73.8945 1.56641 73.7109 1.30469C73.6406 1.21094 73.5566 1.12109 73.459 1.03516H77.8652C78.1309 1.12891 78.3125 1.45703 78.4102 2.01953C78.4375 2.17578 78.4512 2.32812 78.4512 2.47656C78.4512 2.78125 78.4062 3.02344 78.3164 3.20312L78 2.57031C77.7891 2.15625 77.4863 1.87891 77.0918 1.73828C76.873 1.66016 76.627 1.62109 76.3535 1.62109C76.0801 1.62109 75.8848 1.63086 75.7676 1.65039C75.6504 1.66602 75.5605 1.70703 75.498 1.77344C75.3965 1.88672 75.3457 2.10352 75.3457 2.42383C75.3457 2.74023 75.3535 2.96094 75.3691 3.08594C75.3848 3.20703 75.4219 3.30664 75.4805 3.38477C75.6016 3.53711 75.8574 3.61328 76.248 3.61328H78.0879C77.998 3.83984 77.9062 4 77.8125 4.09375C77.625 4.28125 77.3711 4.375 77.0508 4.375C76.9258 4.375 76.8066 4.36133 76.6934 4.33398C76.4824 4.2832 76.2969 4.25781 76.1367 4.25781C75.9766 4.25781 75.8438 4.27344 75.7383 4.30469C75.6367 4.33203 75.5566 4.37695 75.498 4.43945C75.3965 4.54883 75.3457 4.74609 75.3457 5.03125V7.82617C75.3457 8.56055 75.3867 8.99609 75.4688 9.13281C75.5508 9.26953 75.6504 9.35156 75.7676 9.37891C75.8848 9.40234 76.0801 9.41406 76.3535 9.41406C76.627 9.41406 76.875 9.375 77.0977 9.29688C77.3203 9.21875 77.5059 9.10938 77.6543 8.96875C77.8066 8.82812 77.9316 8.66211 78.0293 8.4707C78.127 8.27539 78.2227 8.0625 78.3164 7.83203ZM84.0996 7.83203C84.2051 7.98438 84.2578 8.16797 84.2578 8.38281C84.2578 8.59766 84.2422 8.7832 84.2109 8.93945C84.1836 9.0957 84.1445 9.24414 84.0938 9.38477C83.9766 9.69336 83.8281 9.89844 83.6484 10H78.9375C79.2461 9.80859 79.4473 9.64258 79.541 9.50195C79.7207 9.23633 79.8105 8.89258 79.8105 8.4707C79.8066 7.43164 79.8047 6.49219 79.8047 5.65234V2.58203C79.8047 2.01562 79.7109 1.59961 79.5234 1.33398C79.457 1.23633 79.375 1.13672 79.2773 1.03516H81.6855C81.4551 1.36719 81.3242 1.70898 81.293 2.06055C81.2852 2.17773 81.2812 2.30664 81.2812 2.44727V7.81445C81.2812 8.54492 81.3203 8.98242 81.3984 9.12695C81.4766 9.26758 81.5703 9.35156 81.6797 9.37891C81.7891 9.40234 81.9551 9.41406 82.1777 9.41406C82.4004 9.41406 82.6113 9.375 82.8105 9.29688C83.0098 9.21875 83.1875 9.10938 83.3438 8.96875C83.6094 8.72656 83.8613 8.34766 84.0996 7.83203Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo6 = (props: LogoProps) => (
  <Svg
    width={92 * props.scale}
    height={11 * props.scale}
    viewBox="0 0 92 11"
    fill="none">
    <Path
      d="M4.744 1.656C4.576 1.856 4.456 2.044 4.384 2.22C4.312 2.396 4.276 2.604 4.276 2.844V4.584H5.236C5.66 4.584 5.996 4.54 6.244 4.452C6.5 4.356 6.736 4.228 6.952 4.068L7.132 4.248C6.668 4.936 5.952 5.28 4.984 5.28H4.276V7.62C4.276 8.228 4.18 8.712 3.988 9.072C3.796 9.432 3.488 9.776 3.064 10.104L2.812 9.852C2.932 9.724 3.02 9.548 3.076 9.324C3.132 9.108 3.16 8.896 3.16 8.688V5.28H1.936L2.476 4.584H3.16V3.54C3.16 3.196 3.26 2.864 3.46 2.544C3.66 2.216 3.904 1.92 4.192 1.656L2.536 1.644C2.232 1.644 1.968 1.7 1.744 1.812C1.52 1.916 1.304 2.084 1.096 2.316L0.892 2.136C1.284 1.648 1.7 1.272 2.14 1.008C2.58 0.743999 3.032 0.611999 3.496 0.611999H5.548C6.124 0.611999 6.66 0.583999 7.156 0.528C7.66 0.464 8.028 0.332 8.26 0.132L8.38 0.263999C8.124 0.648 7.772 0.976 7.324 1.248C6.876 1.52 6.452 1.656 6.052 1.656H4.744ZM13.9091 0.804C13.0211 0.924 12.2211 1.232 11.5091 1.728C10.7971 2.216 10.2371 2.836 9.82909 3.588C9.42909 4.332 9.22909 5.14 9.22909 6.012C9.22909 6.74 9.36909 7.316 9.64909 7.74C9.92909 8.164 10.2971 8.376 10.7531 8.376C11.2011 8.376 11.6291 8.068 12.0371 7.452C12.4531 6.828 12.7851 6.016 13.0331 5.016C13.2891 4.008 13.4171 2.96 13.4171 1.872L14.5451 1.428V7.716C14.5451 7.94 14.5931 8.12 14.6891 8.256C14.7851 8.392 14.9171 8.46 15.0851 8.46C15.2131 8.46 15.3451 8.42 15.4811 8.34C15.6171 8.252 15.7211 8.148 15.7931 8.028L15.9611 8.184C15.8491 8.432 15.6771 8.64 15.4451 8.808C15.2131 8.976 14.9491 9.06 14.6531 9.06C14.2851 9.06 13.9851 8.932 13.7531 8.676C13.5291 8.42 13.4171 8.056 13.4171 7.584V5.292H13.3571C12.7811 7.852 11.8051 9.132 10.4291 9.132C9.71709 9.132 9.14509 8.884 8.71309 8.388C8.28109 7.884 8.06509 7.196 8.06509 6.324C8.06509 5.324 8.32909 4.384 8.85709 3.504C9.38509 2.624 10.0971 1.908 10.9931 1.356C11.8891 0.804 12.8611 0.504 13.9091 0.456V0.804ZM19.5185 0.263999C20.0545 0.263999 20.5625 0.388 21.0425 0.636C21.5225 0.875999 21.9265 1.22 22.2545 1.668L21.3185 2.82C21.1185 2.26 20.8185 1.796 20.4185 1.428C20.0265 1.06 19.5585 0.875999 19.0145 0.875999C18.4945 0.875999 18.0905 1.024 17.8025 1.32C17.5145 1.616 17.3705 1.996 17.3705 2.46C17.3705 2.892 17.4745 3.252 17.6825 3.54C17.8905 3.828 18.1425 4.06 18.4385 4.236C18.7345 4.412 19.1345 4.612 19.6385 4.836C20.1185 5.052 20.4945 5.24 20.7665 5.4C21.0465 5.56 21.2825 5.768 21.4745 6.024C21.6665 6.28 21.7625 6.596 21.7625 6.972C21.7705 7.668 21.5465 8.204 21.0905 8.58C20.6345 8.956 20.0425 9.144 19.3145 9.144C18.7785 9.144 18.2665 9.04 17.7785 8.832C17.2985 8.616 16.9145 8.292 16.6265 7.86L17.5625 6.816C17.8345 7.456 18.1665 7.912 18.5585 8.184C18.9505 8.448 19.3305 8.58 19.6985 8.58C20.0425 8.58 20.3345 8.488 20.5745 8.304C20.8225 8.112 20.9465 7.864 20.9465 7.56C20.9465 7.28 20.8585 7.036 20.6825 6.828C20.5145 6.612 20.3025 6.432 20.0465 6.288C19.7905 6.136 19.4425 5.96 19.0025 5.76C18.4425 5.504 17.9945 5.272 17.6585 5.064C17.3225 4.856 17.0345 4.584 16.7945 4.248C16.5545 3.904 16.4345 3.488 16.4345 3C16.4345 2.488 16.5665 2.024 16.8305 1.608C17.1025 1.184 17.4745 0.856 17.9465 0.624C18.4185 0.384 18.9425 0.263999 19.5185 0.263999ZM28.157 0.672V4.968H24.785V0.24L23.657 0.672V4.968H23.033L22.685 5.676H23.657V9.168L24.785 8.76V5.676H28.157V9.168L29.273 8.76V0.24L28.157 0.672ZM32.5049 8.772L31.3889 9.168V0.659999L32.5049 0.24V8.772ZM38.1933 0.323999C38.9533 0.323999 39.6213 0.536 40.1973 0.96C40.7813 1.384 41.2293 1.94 41.5413 2.628C41.8613 3.316 42.0213 4.036 42.0213 4.788C42.0213 5.532 41.8773 6.244 41.5893 6.924C41.3093 7.596 40.8813 8.144 40.3053 8.568C39.7293 8.992 39.0253 9.204 38.1933 9.204C37.4253 9.204 36.7453 8.992 36.1533 8.568C35.5613 8.144 35.1053 7.592 34.7853 6.912C34.4733 6.232 34.3173 5.524 34.3173 4.788C34.3173 4.028 34.4573 3.308 34.7373 2.628C35.0253 1.948 35.4613 1.396 36.0453 0.972C36.6293 0.539999 37.3453 0.323999 38.1933 0.323999ZM37.6413 0.983999C37.1293 0.983999 36.7053 1.136 36.3693 1.44C36.0333 1.736 35.7893 2.112 35.6373 2.568C35.4853 3.016 35.4093 3.464 35.4093 3.912C35.4093 4.608 35.5213 5.308 35.7453 6.012C35.9773 6.708 36.3373 7.296 36.8253 7.776C37.3213 8.248 37.9413 8.484 38.6853 8.484C39.1973 8.484 39.6173 8.332 39.9453 8.028C40.2813 7.724 40.5253 7.348 40.6773 6.9C40.8293 6.452 40.9053 6 40.9053 5.544C40.9053 4.864 40.7933 4.172 40.5693 3.468C40.3453 2.764 39.9853 2.176 39.4893 1.704C39.0013 1.224 38.3853 0.983999 37.6413 0.983999ZM44.6455 0.228V2.556C44.8215 1.884 45.1135 1.332 45.5215 0.9C45.9375 0.46 46.4855 0.24 47.1655 0.24C47.6455 0.24 48.0095 0.404 48.2575 0.732C48.5055 1.06 48.6295 1.468 48.6295 1.956V7.716C48.6295 7.94 48.6735 8.12 48.7615 8.256C48.8575 8.392 48.9895 8.46 49.1575 8.46C49.2935 8.46 49.4295 8.42 49.5655 8.34C49.7015 8.252 49.8055 8.148 49.8775 8.028L50.0455 8.184C49.9415 8.424 49.7735 8.632 49.5415 8.808C49.3095 8.976 49.0415 9.06 48.7375 9.06C48.3695 9.06 48.0735 8.936 47.8495 8.688C47.6255 8.432 47.5135 8.064 47.5135 7.584V2.436C47.5135 1.988 47.4615 1.616 47.3575 1.32C47.2615 1.024 47.0335 0.875999 46.6735 0.875999C46.2175 0.875999 45.8375 1.104 45.5335 1.56C45.2295 2.008 45.0055 2.536 44.8615 3.144C44.7175 3.752 44.6455 4.276 44.6455 4.716V8.712L43.5415 9.156V0.648L44.6455 0.228ZM56.3687 0.263999C56.0567 0.671999 55.6687 1.008 55.2047 1.272C54.7407 1.528 54.2607 1.656 53.7647 1.656C53.6047 1.856 53.4887 2.044 53.4167 2.22C53.3447 2.396 53.3087 2.604 53.3087 2.844V6.756C53.3087 7.38 53.2127 7.872 53.0207 8.232C52.8287 8.584 52.5207 8.924 52.0967 9.252L51.8447 9.012C51.9647 8.876 52.0527 8.7 52.1087 8.484C52.1727 8.268 52.2047 8.052 52.2047 7.836V3.54C52.2047 3.18 52.3007 2.836 52.4927 2.508C52.6847 2.18 52.9287 1.896 53.2247 1.656L51.5687 1.644C51.2647 1.644 51.0047 1.7 50.7887 1.812C50.5727 1.916 50.3607 2.084 50.1527 2.316L49.9247 2.136C50.3247 1.648 50.7447 1.272 51.1847 1.008C51.6327 0.743999 52.0887 0.611999 52.5527 0.611999H53.5487C54.1247 0.611999 54.6607 0.583999 55.1567 0.528C55.6527 0.464 56.0127 0.332 56.2367 0.132L56.3687 0.263999ZM62.0447 7.716C62.0447 7.94 62.0887 8.12 62.1767 8.256C62.2727 8.392 62.4047 8.46 62.5727 8.46C62.7007 8.46 62.8327 8.42 62.9687 8.34C63.1047 8.252 63.2127 8.148 63.2927 8.028L63.4487 8.184C63.3527 8.424 63.1847 8.632 62.9447 8.808C62.7127 8.976 62.4407 9.06 62.1287 9.06C61.7767 9.06 61.4887 8.936 61.2647 8.688C61.0407 8.432 60.9287 8.068 60.9287 7.596V6.756C60.7527 7.412 60.4567 7.968 60.0407 8.424C59.6247 8.88 59.0887 9.108 58.4327 9.108C57.9527 9.108 57.5887 8.948 57.3407 8.628C57.0927 8.3 56.9687 7.888 56.9687 7.392V0.84L58.0847 0.443999V6.912C58.0847 7.232 58.0967 7.492 58.1207 7.692C58.1447 7.884 58.2167 8.06 58.3367 8.22C58.4647 8.38 58.6647 8.46 58.9367 8.46C59.3927 8.46 59.7687 8.232 60.0647 7.776C60.3607 7.312 60.5767 6.776 60.7127 6.168C60.8567 5.552 60.9287 5.024 60.9287 4.584V0.852L62.0447 0.443999V7.716ZM65.7627 0.228V2.556C65.9387 1.884 66.2307 1.332 66.6387 0.9C67.0547 0.46 67.6027 0.24 68.2827 0.24C68.7627 0.24 69.1267 0.404 69.3747 0.732C69.6227 1.06 69.7467 1.468 69.7467 1.956V7.716C69.7467 7.94 69.7907 8.12 69.8787 8.256C69.9747 8.392 70.1067 8.46 70.2747 8.46C70.4107 8.46 70.5467 8.42 70.6827 8.34C70.8187 8.252 70.9227 8.148 70.9947 8.028L71.1627 8.184C71.0587 8.424 70.8907 8.632 70.6587 8.808C70.4267 8.976 70.1587 9.06 69.8547 9.06C69.4867 9.06 69.1907 8.936 68.9667 8.688C68.7427 8.432 68.6307 8.064 68.6307 7.584V2.436C68.6307 1.988 68.5787 1.616 68.4747 1.32C68.3787 1.024 68.1507 0.875999 67.7907 0.875999C67.3347 0.875999 66.9547 1.104 66.6507 1.56C66.3467 2.008 66.1227 2.536 65.9787 3.144C65.8347 3.752 65.7627 4.276 65.7627 4.716V8.712L64.6587 9.156V0.648L65.7627 0.228ZM73.2393 0.228V2.556C73.4153 1.884 73.7073 1.332 74.1152 0.9C74.5313 0.46 75.0793 0.24 75.7593 0.24C76.2393 0.24 76.6033 0.404 76.8513 0.732C77.0993 1.06 77.2233 1.468 77.2233 1.956V7.716C77.2233 7.94 77.2673 8.12 77.3553 8.256C77.4513 8.392 77.5833 8.46 77.7513 8.46C77.8873 8.46 78.0233 8.42 78.1593 8.34C78.2953 8.252 78.3993 8.148 78.4713 8.028L78.6393 8.184C78.5353 8.424 78.3673 8.632 78.1353 8.808C77.9033 8.976 77.6353 9.06 77.3313 9.06C76.9633 9.06 76.6673 8.936 76.4433 8.688C76.2193 8.432 76.1073 8.064 76.1073 7.584V2.436C76.1073 1.988 76.0553 1.616 75.9513 1.32C75.8553 1.024 75.6273 0.875999 75.2673 0.875999C74.8113 0.875999 74.4313 1.104 74.1273 1.56C73.8233 2.008 73.5993 2.536 73.4553 3.144C73.3113 3.752 73.2393 4.276 73.2393 4.716V8.712L72.1353 9.156V0.648L73.2393 0.228ZM82.8398 0.396C83.4318 0.396 83.9398 0.64 84.3638 1.128L83.6318 1.728C83.4078 1.488 83.1798 1.3 82.9478 1.164C82.7238 1.02 82.4678 0.948 82.1798 0.948C81.9158 0.948 81.6598 1.004 81.4118 1.116C81.1638 1.228 80.9598 1.388 80.7998 1.596C80.6478 1.796 80.5718 2.024 80.5718 2.28C80.5718 2.536 80.6518 2.772 80.8118 2.988C80.9718 3.204 81.1758 3.376 81.4238 3.504C81.6798 3.624 81.9438 3.684 82.2158 3.684C82.3198 3.684 82.4198 3.68 82.5158 3.672C82.6198 3.664 82.7038 3.64 82.7678 3.6L82.8758 3.936C82.1798 4.144 81.5558 4.476 81.0038 4.932C80.4518 5.38 80.1758 5.924 80.1758 6.564C80.1758 7.044 80.3158 7.44 80.5958 7.752C80.8758 8.056 81.2598 8.208 81.7478 8.208C82.1478 8.208 82.5398 8.132 82.9238 7.98C83.3158 7.82 83.6598 7.616 83.9558 7.368C84.2518 7.12 84.4798 6.864 84.6398 6.6L84.9158 6.84C84.5238 7.496 83.9998 8.044 83.3438 8.484C82.6878 8.916 81.9798 9.132 81.2198 9.132C80.7718 9.132 80.3678 9.044 80.0078 8.868C79.6558 8.684 79.3758 8.432 79.1678 8.112C78.9678 7.784 78.8678 7.408 78.8678 6.984C78.8678 6.408 79.0878 5.888 79.5278 5.424C79.9678 4.952 80.5038 4.576 81.1358 4.296C80.7358 4.2 80.4158 4.012 80.1758 3.732C79.9358 3.444 79.8158 3.112 79.8158 2.736C79.8158 2.232 79.9718 1.804 80.2838 1.452C80.6038 1.1 80.9958 0.835999 81.4598 0.659999C81.9318 0.484 82.3918 0.396 82.8398 0.396ZM89.7163 0.24C90.1483 0.24 90.4963 0.344 90.7603 0.551999C91.0323 0.76 91.1683 1.044 91.1683 1.404C91.1683 1.724 91.0403 2.044 90.7843 2.364C90.5363 2.684 90.2083 2.956 89.8003 3.18C89.4003 3.404 88.9843 3.544 88.5523 3.6L88.4443 3.372C88.8763 3.236 89.2363 3.012 89.5243 2.7C89.8123 2.388 89.9563 2.06 89.9563 1.716C89.9563 1.46 89.8723 1.264 89.7043 1.128C89.5443 0.984 89.3283 0.912 89.0563 0.912C88.4003 0.912 87.9123 1.14 87.5923 1.596C87.2723 2.044 87.1123 2.58 87.1123 3.204V6.924C87.1123 7.172 87.0723 7.388 86.9923 7.572C86.9203 7.748 86.8043 7.932 86.6443 8.124L86.7043 8.16C86.8963 8.016 87.0803 7.908 87.2563 7.836C87.4323 7.764 87.6363 7.728 87.8683 7.728C88.1883 7.728 88.5243 7.756 88.8763 7.812C88.9243 7.82 89.0483 7.836 89.2483 7.86C89.4483 7.884 89.6643 7.896 89.8963 7.896C90.1683 7.896 90.4243 7.824 90.6643 7.68C90.9043 7.536 91.1083 7.352 91.2763 7.128L91.4923 7.272L90.6043 9.132C90.2283 9.092 89.7963 9.016 89.3083 8.904C88.8203 8.808 88.4203 8.74 88.1083 8.7C87.8043 8.652 87.4723 8.628 87.1123 8.628C86.8803 8.628 86.6323 8.668 86.3683 8.748C86.1043 8.828 85.8723 8.944 85.6723 9.096L85.3963 8.868C85.7963 8.556 85.9963 8.124 85.9963 7.572V4.188C85.9963 3.452 86.1523 2.784 86.4643 2.184C86.7763 1.584 87.2123 1.112 87.7723 0.767999C88.3403 0.416 88.9883 0.24 89.7163 0.24Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo7 = (props: LogoProps) => (
  <Svg
    width={91 * props.scale}
    height={10 * props.scale}
    viewBox="0 0 91 10"
    fill="none">
    <Path
      d="M0.552 0.779999L0.564 0.599999H5.7L5.688 0.636L5.844 2.328L5.604 2.424L5.412 0.84H2.148V4.716H5.016C5.056 4.724 5.092 4.716 5.124 4.692C5.156 4.66 5.172 4.62 5.172 4.572L5.22 3.744L5.412 3.72V5.772C5.404 5.772 5.344 5.776 5.232 5.784L5.184 4.956H2.148V8.772L2.976 8.82C2.976 8.828 2.972 8.888 2.964 9L0.552 9.012L0.564 8.844L1.188 8.76C1.268 8.752 1.316 8.7 1.332 8.604V1.008C1.316 0.912 1.268 0.86 1.188 0.852L0.552 0.779999ZM5.72297 9.012L5.73497 8.844L6.35897 8.76C6.41497 8.752 6.46297 8.7 6.50297 8.604L9.09497 0.599999H9.88697L12.647 8.772L13.475 8.82C13.475 8.828 13.471 8.888 13.463 9L11.063 9.012C11.063 8.94 11.067 8.884 11.075 8.844L11.699 8.76C11.763 8.752 11.795 8.704 11.795 8.616L11.135 6.66H7.39097L6.75497 8.748L8.14697 8.82C8.14697 8.828 8.14297 8.888 8.13497 9L5.72297 9.012ZM9.17897 0.827999L7.46297 6.42H11.051L9.17897 0.827999ZM16.2623 8.772C16.8543 8.772 17.3743 8.6 17.8223 8.256C18.2703 7.904 18.4943 7.372 18.4943 6.66C18.4943 6.34 18.4143 6.068 18.2543 5.844C18.1023 5.612 17.8983 5.436 17.6423 5.316C17.3863 5.188 17.1063 5.08 16.8023 4.992C16.4983 4.896 16.1943 4.796 15.8903 4.692C15.5863 4.588 15.3063 4.464 15.0503 4.32C14.7943 4.176 14.5863 3.972 14.4263 3.708C14.2743 3.444 14.1982 3.128 14.1982 2.76C14.1982 2.12 14.4183 1.596 14.8583 1.188C15.2983 0.78 15.8863 0.576 16.6223 0.576C17.3583 0.576 18.0623 0.66 18.7343 0.827999L18.8663 2.328L18.6383 2.424L18.5183 1.476C17.9263 1.036 17.3703 0.816 16.8503 0.816C16.3303 0.816 15.8943 0.976 15.5423 1.296C15.1903 1.608 15.0143 2.08 15.0143 2.712C15.0143 3.08 15.1623 3.372 15.4583 3.588C15.7543 3.804 16.1103 3.972 16.5263 4.092C16.9503 4.212 17.3703 4.348 17.7863 4.5C18.2103 4.652 18.5703 4.908 18.8663 5.268C19.1623 5.628 19.3103 6.096 19.3103 6.672C19.3103 7.448 19.0343 8.032 18.4823 8.424C17.9303 8.816 17.2023 9.012 16.2983 9.012C15.3943 9.012 14.6103 8.768 13.9463 8.28L13.9583 7.008L14.1863 6.948L14.2103 7.632C14.4263 7.936 14.7223 8.204 15.0983 8.436C15.4743 8.66 15.8623 8.772 16.2623 8.772ZM27.2252 0.599999C27.2252 0.607999 27.2292 0.667999 27.2372 0.779999L26.4812 0.864V8.772L27.3572 8.82C27.3572 8.828 27.3532 8.888 27.3452 9L24.9452 9.012C24.9452 8.94 24.9492 8.884 24.9572 8.844L25.5812 8.76C25.6612 8.752 25.7092 8.7 25.7252 8.604V4.956H21.6332V8.772L22.5212 8.82C22.5212 8.828 22.5172 8.888 22.5092 9L20.0972 9.012L20.1092 8.844L20.7332 8.76C20.8132 8.752 20.8612 8.704 20.8772 8.616V1.008C20.8612 0.912 20.8132 0.86 20.7332 0.852L20.1092 0.792L20.0972 0.611999L22.5092 0.599999C22.5092 0.607999 22.5132 0.667999 22.5212 0.779999L21.6332 0.864V4.716H25.7252V1.02C25.7092 0.916 25.6612 0.86 25.5812 0.852L24.9572 0.792C24.9492 0.743999 24.9452 0.683999 24.9452 0.611999L27.2252 0.599999ZM28.2094 9.012L28.2214 8.844L28.8454 8.76C28.9254 8.752 28.9734 8.7 28.9894 8.604H29.0014V1.02H28.9894C28.9734 0.916 28.9254 0.86 28.8454 0.852L28.2214 0.792L28.2094 0.611999L30.6214 0.599999C30.6214 0.607999 30.6254 0.667999 30.6334 0.779999L29.8174 0.852V8.772L30.6334 8.82C30.6334 8.828 30.6294 8.888 30.6214 9L28.2094 9.012ZM31.5816 4.824C31.5816 3.504 31.9176 2.452 32.5896 1.668C33.2696 0.884 34.1136 0.491999 35.1216 0.491999C37.4816 0.491999 38.6616 1.936 38.6616 4.824C38.6616 6.152 38.3256 7.2 37.6536 7.968C36.9816 8.728 36.1376 9.108 35.1216 9.108C32.7616 9.108 31.5816 7.68 31.5816 4.824ZM32.3976 4.8C32.3976 7.512 33.3056 8.868 35.1216 8.868C35.9056 8.868 36.5536 8.508 37.0656 7.788C37.5856 7.068 37.8456 6.072 37.8456 4.8C37.8456 2.088 36.9376 0.732 35.1216 0.732C34.3456 0.732 33.6976 1.096 33.1776 1.824C32.6576 2.552 32.3976 3.544 32.3976 4.8ZM39.4463 0.779999L39.4583 0.599999H41.1023L45.7703 8.664L45.7103 1.02C45.6783 0.94 45.6343 0.896 45.5783 0.887999L44.4743 0.792C44.4663 0.743999 44.4623 0.683999 44.4623 0.611999L46.7423 0.599999C46.7423 0.607999 46.7463 0.667999 46.7543 0.779999L45.9863 0.864V9H45.1103L40.4423 0.935999L40.5023 8.748L41.8703 8.82C41.8703 8.828 41.8663 8.888 41.8583 9L39.4463 9.012L39.4583 8.844L40.0823 8.76C40.1623 8.752 40.2103 8.7 40.2263 8.604V1.008C40.2103 0.912 40.1623 0.86 40.0823 0.852L39.4463 0.779999ZM49.6342 0.84H47.5702L47.3782 2.424L47.1502 2.328L47.2702 0.84H47.2582L47.2822 0.744L47.2942 0.599999L47.3182 0.611999V0.599999H52.7662L52.9222 2.328L52.6822 2.424L52.4902 0.84H50.3902V8.772L51.2662 8.82C51.2662 8.828 51.2622 8.888 51.2542 9L48.8542 9.012C48.8542 8.94 48.8582 8.884 48.8662 8.844L49.4902 8.76C49.5702 8.752 49.6182 8.7 49.6342 8.604V0.84ZM56.1094 0.599999C56.1094 0.607999 56.1134 0.667999 56.1214 0.779999L55.3054 0.852V5.388C55.3054 6.78 55.5494 7.704 56.0374 8.16C56.2694 8.384 56.5054 8.54 56.7454 8.628C56.9854 8.708 57.2654 8.748 57.5854 8.748C57.9134 8.748 58.2094 8.704 58.4734 8.616C58.7374 8.528 58.9934 8.368 59.2414 8.136C59.7694 7.656 60.0334 6.74 60.0334 5.388V1.044C60.0174 0.939999 59.9694 0.883999 59.8894 0.875999L59.0254 0.792C59.0174 0.743999 59.0134 0.683999 59.0134 0.611999L61.2934 0.599999C61.2934 0.607999 61.2974 0.667999 61.3054 0.779999L60.3094 0.887999V5.4C60.3094 7.832 59.4014 9.048 57.5854 9.048C57.1454 9.048 56.7574 9.004 56.4214 8.916C56.0934 8.82 55.7734 8.648 55.4614 8.4C54.8134 7.896 54.4894 6.896 54.4894 5.4V1.008C54.4574 0.912 54.4094 0.86 54.3454 0.852L53.7214 0.792C53.7134 0.743999 53.7094 0.683999 53.7094 0.611999L56.1094 0.599999ZM61.8994 0.779999L61.9114 0.599999H63.5554L68.2234 8.664L68.1634 1.02C68.1314 0.94 68.0874 0.896 68.0314 0.887999L66.9274 0.792C66.9194 0.743999 66.9154 0.683999 66.9154 0.611999L69.1954 0.599999C69.1954 0.607999 69.1994 0.667999 69.2074 0.779999L68.4394 0.864V9H67.5634L62.8954 0.935999L62.9554 8.748L64.3234 8.82C64.3234 8.828 64.3194 8.888 64.3114 9L61.8994 9.012L61.9114 8.844L62.5354 8.76C62.6154 8.752 62.6634 8.7 62.6794 8.604V1.008C62.6634 0.912 62.6154 0.86 62.5354 0.852L61.8994 0.779999ZM70.0673 0.779999L70.0793 0.599999H71.7233L76.3913 8.664L76.3313 1.02C76.2993 0.94 76.2553 0.896 76.1993 0.887999L75.0953 0.792C75.0873 0.743999 75.0833 0.683999 75.0833 0.611999L77.3633 0.599999C77.3633 0.607999 77.3673 0.667999 77.3753 0.779999L76.6073 0.864V9H75.7313L71.0633 0.935999L71.1233 8.748L72.4913 8.82C72.4913 8.828 72.4873 8.888 72.4793 9L70.0673 9.012L70.0793 8.844L70.7033 8.76C70.7833 8.752 70.8313 8.7 70.8473 8.604V1.008C70.8313 0.912 70.7833 0.86 70.7033 0.852L70.0673 0.779999ZM78.2473 0.779999L78.2593 0.599999H83.3953L83.3833 0.636L83.5393 2.328L83.2993 2.424L83.1073 0.84H79.8433V4.716H82.7113C82.7513 4.724 82.7873 4.716 82.8193 4.692C82.8513 4.66 82.8673 4.62 82.8673 4.572L82.9153 3.744L83.1073 3.72V5.772C83.0993 5.772 83.0393 5.776 82.9273 5.784L82.8793 4.956H79.8433V8.76H83.4313L83.6593 6.84L83.8873 6.9L83.7073 9H80.6593L78.2473 9.012L78.2593 8.844L78.8833 8.76C78.9633 8.752 79.0113 8.7 79.0273 8.604V1.008C79.0113 0.912 78.9633 0.86 78.8833 0.852L78.2473 0.779999ZM87.0823 0.599999C87.0823 0.607999 87.0863 0.667999 87.0943 0.779999L86.2663 0.852V8.76H89.5783L89.8183 6.84L90.0463 6.9L89.8663 9H87.0823L84.6703 9.012L84.6823 8.844L85.3063 8.76C85.3863 8.752 85.4343 8.7 85.4503 8.604V1.008C85.4343 0.912 85.3863 0.86 85.3063 0.852L84.6823 0.792L84.6703 0.611999L87.0823 0.599999Z"
      fill={props.color}
    />
  </Svg>
);

export const Logo8 = (props: LogoProps) => (
  <Svg
    width={85 * props.scale}
    height={9 * props.scale}
    viewBox="0 0 85 9"
    fill="none">
    <Path
      d="M0.08 8.412H0.392V4.512H3.608V4.212H0.392V0.804H4.544V0.516H0.08V8.412ZM4.49281 8.412H4.79281L5.83681 5.688H9.44881L10.4808 8.412H10.8048L7.80481 0.516H7.49281L4.49281 8.412ZM7.63681 0.948H7.66081L9.34081 5.4H5.93281L7.63681 0.948ZM13.9478 8.508C15.7118 8.508 16.4678 7.692 16.4678 6.408C16.4678 5.112 15.6638 4.668 14.4518 4.248L13.9598 4.104C12.6518 3.636 12.2078 3.24 12.2078 2.244C12.2078 1.356 12.8318 0.707999 14.1518 0.707999C15.0038 0.707999 15.6638 0.912 16.0598 1.152V0.864C15.6518 0.636 15.0278 0.431999 14.1638 0.431999C12.6398 0.431999 11.8958 1.236 11.8958 2.268C11.8958 3.396 12.4718 3.912 13.8518 4.38L14.3558 4.548C15.4358 4.896 16.1438 5.304 16.1438 6.432C16.1438 7.56 15.4838 8.232 13.9358 8.232C13.0958 8.232 12.2918 8.004 11.7278 7.68V7.956C12.2078 8.244 13.0238 8.508 13.9478 8.508ZM18.2912 8.412H18.6032V4.44H23.4752V8.412H23.7872V0.516H23.4752V4.176H18.6032V0.516H18.2912V8.412ZM25.9433 8.412H26.2673V0.516H25.9433V8.412ZM31.3437 8.508C33.3717 8.508 34.6797 7.092 34.6797 4.536V4.38C34.6797 1.812 33.3717 0.431999 31.3557 0.431999C29.3157 0.431999 28.0077 1.824 28.0077 4.38V4.536C28.0077 7.116 29.3157 8.508 31.3437 8.508ZM31.3557 8.232C29.4717 8.232 28.3317 6.936 28.3317 4.548V4.344C28.3317 1.98 29.5077 0.707999 31.3437 0.707999C33.2277 0.707999 34.3677 1.98 34.3677 4.38V4.572C34.3677 6.948 33.2277 8.232 31.3557 8.232ZM36.4318 8.412H36.7318V0.924H36.7438L41.6398 8.412H41.9638V0.516H41.6758V7.908H41.6638L36.8158 0.516H36.4318V8.412ZM46.2305 8.412H46.5305V0.804H49.3025V0.516H43.4705V0.804H46.2305V8.412ZM53.4753 8.508C55.2393 8.508 56.1993 7.68 56.1993 5.772V0.516H55.9233V5.76C55.9233 7.572 55.0353 8.244 53.4873 8.244C51.9393 8.244 51.0393 7.572 51.0393 5.76V0.516H50.7273V5.784C50.7273 7.668 51.7473 8.508 53.4753 8.508ZM58.3459 8.412H58.6459V0.924H58.6579L63.5539 8.412H63.8779V0.516H63.5899V7.908H63.5779L58.7299 0.516H58.3459V8.412ZM66.0686 8.412H66.3686V0.924H66.3806L71.2766 8.412H71.6006V0.516H71.3126V7.908H71.3006L66.4526 0.516H66.0686V8.412ZM73.7792 8.412H78.3392V8.136H74.1032V4.512H77.3552V4.224H74.1032V0.804H78.3392V0.516H73.7792V8.412ZM80.0839 8.412H84.4759V8.136H80.3959V0.516H80.0839V8.412Z"
      fill={props.color}
    />
  </Svg>
);
