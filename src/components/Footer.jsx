export default function Footer() {
  return (
    <footer className="flex items-center justify-between lg:px-30 font-bold py-7">
      <div className="uppercase">
        <a
          href="#"
          className="flex items-center text-3xl leading-10 flex-grow-0"
        >
          b
          <span className="inline-block bg-dark-800 w-4 h-4 rounded-full mx-[6px]"></span>
          homes
        </a>
      </div>

      {/* Social media links */}
      <nav>
        <ul className="flex justify-center space-x-7">
          <li className="bg-dark-100 rounded-full p-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4902 12C22.4902 6.48 18.0102 2 12.4902 2C6.97023 2 2.49023 6.48 2.49023 12C2.49023 16.84 5.93023 20.87 10.4902 21.8V15H8.49023V12H10.4902V9.5C10.4902 7.57 12.0602 6 13.9902 6H16.4902V9H14.4902C13.9402 9 13.4902 9.45 13.4902 10V12H16.4902V15H13.4902V21.95C18.5402 21.45 22.4902 17.19 22.4902 12Z"
                fill="black"
              />
            </svg>
          </li>
          <li className="p-2 bg-dark-100 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0007 9.52C11.5102 9.52 11.0307 9.66545 10.6229 9.93795C10.215 10.2105 9.89716 10.5978 9.70945 11.0509C9.52174 11.5041 9.47263 12.0028 9.56832 12.4838C9.66402 12.9649 9.90021 13.4068 10.247 13.7536C10.5939 14.1005 11.0358 14.3367 11.5168 14.4323C11.9979 14.528 12.4966 14.4789 12.9497 14.2912C13.4029 14.1035 13.7902 13.7856 14.0627 13.3778C14.3352 12.97 14.4807 12.4905 14.4807 12C14.4807 11.6743 14.4165 11.3518 14.2919 11.0509C14.1673 10.7501 13.9846 10.4767 13.7543 10.2464C13.524 10.0161 13.2506 9.83341 12.9497 9.70878C12.6488 9.58415 12.3263 9.52 12.0007 9.52ZM21.9307 7.07C21.9254 6.29776 21.7832 5.53257 21.5107 4.81C21.31 4.28126 20.9994 3.80109 20.5995 3.40119C20.1996 3.00128 19.7194 2.69072 19.1907 2.49C18.4681 2.21746 17.7029 2.07526 16.9307 2.07C15.6407 2 15.2607 2 12.0007 2C8.74067 2 8.36067 2 7.07067 2.07C6.29843 2.07526 5.53324 2.21746 4.81067 2.49C4.28193 2.69072 3.80177 3.00128 3.40186 3.40119C3.00195 3.80109 2.69139 4.28126 2.49067 4.81C2.21814 5.53257 2.07593 6.29776 2.07067 7.07C2.00067 8.36 2.00067 8.74 2.00067 12C2.00067 15.26 2.00067 15.64 2.07067 16.93C2.08144 17.705 2.22345 18.4725 2.49067 19.2C2.6905 19.7263 3.0008 20.2037 3.40067 20.6C3.79886 21.0023 4.28006 21.3129 4.81067 21.51C5.53324 21.7825 6.29843 21.9247 7.07067 21.93C8.36067 22 8.74067 22 12.0007 22C15.2607 22 15.6407 22 16.9307 21.93C17.7029 21.9247 18.4681 21.7825 19.1907 21.51C19.7213 21.3129 20.2025 21.0023 20.6007 20.6C21.0005 20.2037 21.3108 19.7263 21.5107 19.2C21.7829 18.4739 21.9251 17.7055 21.9307 16.93C22.0007 15.64 22.0007 15.26 22.0007 12C22.0007 8.74 22.0007 8.36 21.9307 7.07ZM19.3907 15.07C19.3586 15.6871 19.2269 16.295 19.0007 16.87C18.8065 17.3497 18.5179 17.7854 18.152 18.1514C17.7861 18.5173 17.3504 18.8059 16.8707 19C16.2902 19.2136 15.6789 19.3318 15.0607 19.35H8.94067C8.3224 19.3318 7.71116 19.2136 7.13067 19C6.63477 18.8157 6.18695 18.5217 5.82067 18.14C5.45834 17.7813 5.17852 17.3479 5.00067 16.87C4.78623 16.2901 4.67128 15.6782 4.66067 15.06V8.94C4.67128 8.32183 4.78623 7.70988 5.00067 7.13C5.18495 6.6341 5.47895 6.18628 5.86067 5.82C6.221 5.45962 6.65393 5.18009 7.13067 5C7.71116 4.78641 8.3224 4.66821 8.94067 4.65H15.0607C15.6789 4.66821 16.2902 4.78641 16.8707 5C17.3666 5.18428 17.8144 5.47827 18.1807 5.86C18.543 6.21875 18.8228 6.65213 19.0007 7.13C19.2143 7.71049 19.3325 8.32173 19.3507 8.94V12C19.3507 14.06 19.4207 14.27 19.3907 15.06V15.07ZM17.7907 7.63C17.6716 7.30698 17.4839 7.01364 17.2405 6.77021C16.997 6.52678 16.7037 6.33906 16.3807 6.22C15.9371 6.06626 15.47 5.99179 15.0007 6H9.00067C8.52894 6.00461 8.06174 6.09263 7.62067 6.26C7.3026 6.37366 7.01236 6.55371 6.76926 6.7882C6.52615 7.02269 6.33573 7.30624 6.21067 7.62C6.06545 8.06537 5.9945 8.5316 6.00067 9V15C6.01059 15.4712 6.09844 15.9375 6.26067 16.38C6.37973 16.703 6.56746 16.9964 6.81088 17.2398C7.05431 17.4832 7.34766 17.6709 7.67067 17.79C8.09734 17.9469 8.54632 18.0347 9.00067 18.05H15.0007C15.4724 18.0454 15.9396 17.9574 16.3807 17.79C16.7037 17.6709 16.997 17.4832 17.2405 17.2398C17.4839 16.9964 17.6716 16.703 17.7907 16.38C17.958 15.9389 18.0461 15.4717 18.0507 15V9C18.051 8.5278 17.9628 8.05972 17.7907 7.62V7.63ZM12.0007 15.82C11.4995 15.82 11.0032 15.7211 10.5403 15.529C10.0774 15.3369 9.65698 15.0554 9.30305 14.7005C8.94913 14.3457 8.6687 13.9245 8.47782 13.4611C8.28693 12.9977 8.18936 12.5012 8.19067 12C8.19067 11.2441 8.41497 10.5051 8.83516 9.87669C9.25535 9.24828 9.85254 8.75866 10.5511 8.46983C11.2497 8.181 12.0183 8.10594 12.7596 8.25415C13.5009 8.40236 14.1815 8.76717 14.7154 9.30241C15.2492 9.83764 15.6122 10.5192 15.7585 11.2609C15.9048 12.0026 15.8277 12.771 15.537 13.4688C15.2464 14.1666 14.7552 14.7625 14.1257 15.1811C13.4962 15.5996 12.7566 15.822 12.0007 15.82ZM16.0007 8.93C15.7796 8.9066 15.575 8.80222 15.4264 8.63697C15.2777 8.47172 15.1954 8.25729 15.1954 8.035C15.1954 7.81271 15.2777 7.59828 15.4264 7.43303C15.575 7.26778 15.7796 7.1634 16.0007 7.14C16.2217 7.1634 16.4263 7.26778 16.575 7.43303C16.7237 7.59828 16.8059 7.81271 16.8059 8.035C16.8059 8.25729 16.7237 8.47172 16.575 8.63697C16.4263 8.80222 16.2217 8.9066 16.0007 8.93Z"
                fill="black"
              />
            </svg>
          </li>
          <li className="bg-dark-100 rounded-full p-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4611 21C18.3111 21 16.2154 20.5207 14.1741 19.562C12.1328 18.6033 10.3244 17.3367 8.74911 15.762C7.17377 14.1873 5.90711 12.379 4.94911 10.337C3.99111 8.295 3.51178 6.19933 3.51111 4.05C3.51111 3.75 3.61111 3.5 3.81111 3.3C4.01111 3.1 4.26111 3 4.56111 3H8.61111C8.84444 3 9.05278 3.075 9.23611 3.225C9.41944 3.375 9.52778 3.56667 9.56111 3.8L10.2111 7.3C10.2444 7.53333 10.2401 7.746 10.1981 7.938C10.1561 8.13 10.0604 8.30067 9.91111 8.45L7.51111 10.9C8.21111 12.1 9.08611 13.225 10.1361 14.275C11.1861 15.325 12.3444 16.2333 13.6111 17L15.9611 14.65C16.1111 14.5 16.3071 14.3877 16.5491 14.313C16.7911 14.2383 17.0284 14.2173 17.2611 14.25L20.7111 14.95C20.9444 15 21.1361 15.1127 21.2861 15.288C21.4361 15.4633 21.5111 15.6673 21.5111 15.9V19.95C21.5111 20.25 21.4111 20.5 21.2111 20.7C21.0111 20.9 20.7611 21 20.4611 21Z"
                fill="black"
              />
            </svg>
          </li>
          <li className="bg-dark-100 rounded-full p-2">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4815 6C21.7115 6.35 20.8815 6.58 20.0215 6.69C20.9015 6.16 21.5815 5.32 21.9015 4.31C21.0715 4.81 20.1515 5.16 19.1815 5.36C18.3915 4.5 17.2815 4 16.0215 4C13.6715 4 11.7515 5.92 11.7515 8.29C11.7515 8.63 11.7915 8.96 11.8615 9.27C8.30146 9.09 5.13146 7.38 3.02146 4.79C2.65146 5.42 2.44146 6.16 2.44146 6.94C2.44146 8.43 3.19146 9.75 4.35146 10.5C3.64146 10.5 2.98146 10.3 2.40146 10V10.03C2.40146 12.11 3.88146 13.85 5.84146 14.24C5.21219 14.4122 4.55156 14.4362 3.91146 14.31C4.18307 15.1625 4.715 15.9084 5.43248 16.4429C6.14996 16.9775 7.01691 17.2737 7.91146 17.29C6.39509 18.4904 4.51546 19.1393 2.58146 19.13C2.24146 19.13 1.90146 19.11 1.56146 19.07C3.46146 20.29 5.72146 21 8.14146 21C16.0215 21 20.3515 14.46 20.3515 8.79C20.3515 8.6 20.3515 8.42 20.3415 8.23C21.1815 7.63 21.9015 6.87 22.4815 6Z"
                fill="black"
              />
            </svg>
          </li>
          <li className="bg-dark-100 rounded-full p-3">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_449)">
                <path
                  d="M0.531921 1.146C0.531921 0.513 1.05792 0 1.70692 0H15.3569C16.0059 0 16.5319 0.513 16.5319 1.146V14.854C16.5319 15.487 16.0059 16 15.3569 16H1.70692C1.05792 16 0.531921 15.487 0.531921 14.854V1.146ZM5.47492 13.394V6.169H3.07392V13.394H5.47492ZM4.27492 5.182C5.11192 5.182 5.63292 4.628 5.63292 3.934C5.61792 3.225 5.11292 2.686 4.29092 2.686C3.46892 2.686 2.93192 3.226 2.93192 3.934C2.93192 4.628 3.45292 5.182 4.25892 5.182H4.27492ZM9.18292 13.394V9.359C9.18292 9.143 9.19892 8.927 9.26292 8.773C9.43592 8.342 9.83092 7.895 10.4949 7.895C11.3639 7.895 11.7109 8.557 11.7109 9.529V13.394H14.1119V9.25C14.1119 7.03 12.9279 5.998 11.3479 5.998C10.0739 5.998 9.50292 6.698 9.18292 7.191V7.216H9.16692C9.17223 7.20765 9.17757 7.19932 9.18292 7.191V6.169H6.78292C6.81292 6.847 6.78292 13.394 6.78292 13.394H9.18292Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_449">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.531921)"
                  />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
      </nav>
    </footer>
  );
}