import { memo } from "react"

function CloudIconComponent () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <g clipPath="url(#clip0_7211_2797)">
      <path d="M6.41602 16.5001C5.27227 16.5001 4.17537 16.0655 3.36662 15.2919C2.55787 14.5183 2.10352 13.4691 2.10352 12.3751C2.10352 11.2811 2.55787 10.2319 3.36662 9.45828C4.17537 8.6847 5.27227 8.2501 6.41602 8.2501C6.68614 7.04668 7.47638 5.98912 8.61289 5.31009C9.17563 4.97386 9.80644 4.74068 10.4693 4.62387C11.1322 4.50705 11.8141 4.50889 12.4762 4.62926C13.1383 4.74964 13.7675 4.98621 14.328 5.32545C14.8885 5.6647 15.3693 6.09998 15.7429 6.60645C16.1165 7.11291 16.3755 7.68065 16.5053 8.27723C16.6351 8.87381 16.6331 9.48756 16.4993 10.0834H17.416C18.2669 10.0834 19.083 10.4215 19.6847 11.0231C20.2863 11.6248 20.6243 12.4409 20.6243 13.2918C20.6243 14.1427 20.2863 14.9587 19.6847 15.5604C19.083 16.1621 18.2669 16.5001 17.416 16.5001H16.4993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.25 13.75L11 11L13.75 13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 11V19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_7211_2797">
      <rect width="22" height="22" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

const CloudIcon = memo(CloudIconComponent);
export default CloudIcon;