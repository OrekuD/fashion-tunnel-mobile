import React from 'react';
import {ViewStyle} from 'react-native';
import Svg, {Circle, G, Path} from 'react-native-svg';

export interface BaseSvgProps {
  height: number;
  width: number;
  style?: ViewStyle;
  strokeWidth?: number;
}

export interface SvgProps extends BaseSvgProps {
  color: string;
}

export const EyeIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
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

export const EyeCancelIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
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
    viewBox="0 0 24 24"
    fill="none">
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

export const SettingsIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
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

export const ArrowLeftIcon = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
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
    viewBox="0 0 24 24"
    fill="none">
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
    viewBox="0 0 24 24"
    fill="none">
    <Path
      id="Star_2"
      d="M17.9184 14.3201C17.6594 14.5711 17.5404 14.9341 17.5994 15.2901L18.4884 20.2101C18.5634 20.6271 18.3874 21.0491 18.0384 21.2901C17.6964 21.5401 17.2414 21.5701 16.8684 21.3701L12.4394 19.0601C12.2854 18.9781 12.1144 18.9341 11.9394 18.9291H11.6684C11.5744 18.9431 11.4824 18.9731 11.3984 19.0191L6.96839 21.3401C6.74939 21.4501 6.50139 21.4891 6.25839 21.4501C5.66639 21.3381 5.27139 20.7741 5.36839 20.1791L6.25839 15.2591C6.31739 14.9001 6.19839 14.5351 5.93939 14.2801L2.32839 10.7801C2.02639 10.4871 1.92139 10.0471 2.05939 9.65012C2.19339 9.25412 2.53539 8.96512 2.94839 8.90012L7.91839 8.17912C8.29639 8.14012 8.62839 7.91012 8.79839 7.57012L10.9884 3.08012C11.0404 2.98012 11.1074 2.88812 11.1884 2.81012L11.2784 2.74012C11.3254 2.68812 11.3794 2.64512 11.4394 2.61012L11.5484 2.57012L11.7184 2.50012H12.1394C12.5154 2.53912 12.8464 2.76412 13.0194 3.10012L15.2384 7.57012C15.3984 7.89712 15.7094 8.12412 16.0684 8.17912L21.0384 8.90012C21.4584 8.96012 21.8094 9.25012 21.9484 9.65012C22.0794 10.0511 21.9664 10.4911 21.6584 10.7801L17.9184 14.3201Z"
      fill={props.color}
    />
  </Svg>
);
