import { StyledHeader } from "./Header.style";

export const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="142" height="21" viewBox="0 0 142 21" fill="none">
                            <g clip-path="url(#clip0_4_11)">
                                <path d="M68.2515 18.0371C67.742 18.7116 67.009 19.0831 66.1905 19.0831C64.8905 19.0831 64.5525 18.4886 64.5525 17.4486L64.61 7.8031H67.7765V7.1851H64.61V2.9231H64.2435C63.631 5.5571 62.039 7.0946 60.178 7.3801V7.8031L62.0675 7.7971C62.0675 7.7971 62.0105 16.7971 62.0105 17.0771C62.0105 18.1516 62.211 18.8256 62.8005 19.3346C63.3675 19.8146 64.043 20.0371 65.177 20.0371C66.757 20.0371 67.8625 19.2201 68.452 18.2316L68.2515 18.0371Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M80.854 13.4429C80.854 9.3799 77.9685 6.8999 74.6645 6.8999C71.3895 6.8999 68.475 9.3799 68.475 13.4714C68.475 17.5629 71.3605 20.0429 74.6645 20.0429C77.974 20.0429 80.854 17.5344 80.854 13.4429ZM74.6645 19.5914C73.96 19.5914 73.17 19.3684 72.5745 18.7454C71.67 17.7854 71.2175 16.0084 71.2175 13.4714C71.2175 10.8769 71.67 9.0999 72.603 8.1969C73.1645 7.6029 73.96 7.3514 74.6645 7.3514C75.34 7.3514 76.1305 7.5744 76.726 8.1969C77.659 9.1284 78.1115 10.9054 78.1115 13.4714C78.1115 16.0084 77.6305 17.8144 76.726 18.7454C76.136 19.3684 75.369 19.5914 74.6645 19.5914Z" fill="black" />
                                <path d="M88.8475 6.8999C87.8855 6.8999 87.267 7.2654 86.7575 7.6884C86.1905 8.2254 85.658 8.9344 85.2285 10.2599H85.1425C85.1425 10.1554 85.1595 9.3654 85.1745 8.6349V8.6324C85.188 8.0054 85.2 7.4229 85.2 7.3574C85.2 7.2714 85.1425 7.1854 84.9995 7.1854H81.043V7.4369H81.0455C81.3825 7.4659 81.725 7.4949 82.0335 7.7169C82.1709 7.80313 82.2877 7.91841 82.3757 8.05464C82.4638 8.19087 82.5209 8.34473 82.543 8.5054C82.629 8.8714 82.629 9.9169 82.629 10.3684V16.3799C82.629 17.1114 82.6005 17.8714 82.5145 18.3799C82.3485 18.9454 82.148 19.1399 81.753 19.3399C81.501 19.4544 81.215 19.5114 80.9915 19.5399V19.7914H86.8435V19.5399C86.5915 19.5114 86.391 19.4829 86.139 19.3684C85.91 19.2829 85.744 19.0829 85.572 18.7744C85.32 18.2369 85.177 17.6484 85.177 16.2369V14.6149C85.177 13.8034 85.1945 13.0089 85.2975 12.2034C85.5605 10.0949 86.62 8.4089 87.3815 8.4089C87.7195 8.4089 87.914 8.7459 88.1145 9.2259C88.3435 9.7634 88.624 9.9459 89.443 9.9459C90.233 9.9459 90.6855 9.2949 90.6855 8.5634C90.6855 8.0259 90.5135 7.6604 90.2615 7.3804C89.9465 7.0719 89.443 6.8999 88.8475 6.8999ZM97.419 8.0314C96.6285 8.8199 96.062 10.5969 96.062 13.2199C96.062 15.9569 96.6285 17.4484 97.419 18.3229C97.9285 18.8884 98.7185 19.2544 99.6235 19.2544C102.223 19.2544 103.3 17.3054 103.746 15.8429L104.17 15.9854C103.546 18.2714 101.965 20.0484 99.28 20.0484C97.6135 20.0484 96.3995 19.5114 95.4665 18.7229C94.2525 17.7054 93.319 16.0714 93.319 13.4769C93.319 9.8084 95.9185 6.9054 99.28 6.9054C101.484 6.9054 102.504 7.4999 103.151 8.1454C103.632 8.5684 103.912 9.1344 103.912 9.6944C103.912 10.4544 103.431 10.8484 102.698 10.8484C101.88 10.8484 101.427 10.3114 101.284 9.3514C100.946 7.8314 100.523 7.3514 99.251 7.3514C98.5781 7.34822 97.9269 7.58991 97.419 8.0314Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M117.946 13.4429C117.946 9.3799 115.06 6.8999 111.757 6.8999C108.481 6.8999 105.566 9.3799 105.566 13.4714C105.566 17.5629 108.453 20.0429 111.757 20.0429C115.066 20.0429 117.946 17.5344 117.946 13.4429ZM111.757 19.5914C111.052 19.5914 110.262 19.3684 109.666 18.7454C108.761 17.7854 108.31 16.0084 108.31 13.4714C108.31 10.8769 108.761 9.0999 109.695 8.1969C110.256 7.6029 111.052 7.3514 111.757 7.3514C112.432 7.3514 113.222 7.5744 113.817 8.1969C114.751 9.1284 115.203 10.9054 115.203 13.4714C115.203 16.0084 114.722 17.8144 113.817 18.7454C113.228 19.3684 112.461 19.5914 111.757 19.5914Z" fill="black" />
                                <path d="M91.9335 18.6145C91.9333 18.803 91.896 18.9897 91.8236 19.1637C91.7513 19.3378 91.6454 19.496 91.512 19.6291C91.3785 19.7623 91.2202 19.8679 91.046 19.9398C90.8717 20.0118 90.685 20.0487 90.4965 20.0485C90.1157 20.0489 89.7504 19.8981 89.4808 19.6292C89.2113 19.3602 89.0595 18.9953 89.059 18.6145C89.0592 18.4259 89.0965 18.2392 89.1689 18.0651C89.2412 17.8909 89.3472 17.7328 89.4806 17.5996C89.6141 17.4663 89.7725 17.3607 89.9468 17.2888C90.1211 17.2168 90.3079 17.1798 90.4965 17.18C90.685 17.1798 90.8718 17.2168 91.0461 17.2888C91.2203 17.3608 91.3787 17.4664 91.5122 17.5996C91.6456 17.7328 91.7515 17.891 91.8238 18.0651C91.8961 18.2393 91.9334 18.426 91.9335 18.6145ZM118.238 19.7855V19.563C118.461 19.5345 118.776 19.42 118.971 19.34C119.48 19.14 119.732 18.917 119.847 18.2945C119.933 17.8145 119.933 17.083 119.933 16.2655V10.3685C119.933 9.63702 119.933 8.87152 119.847 8.47702C119.761 8.08302 119.623 7.82552 119.366 7.68852C119.114 7.51702 118.742 7.46552 118.404 7.43702V7.18552H122.36C122.503 7.18552 122.532 7.24302 122.532 7.35702C122.532 7.42902 122.517 8.00952 122.503 8.58502L122.503 8.59002C122.489 9.15452 122.475 9.71202 122.475 9.78002H122.589C122.984 8.79152 123.465 8.17452 124.112 7.72302C124.736 7.21452 125.584 6.90552 126.798 6.90552C127.926 6.90552 128.75 7.21452 129.283 7.80852C129.735 8.28852 130.016 8.88302 130.073 9.83702H130.159C130.64 8.71152 131.178 8.11702 131.796 7.69452C132.501 7.18552 133.297 6.90552 134.396 6.90552C135.61 6.90552 136.32 7.21452 136.881 7.78002C137.505 8.34552 137.786 9.22002 137.786 10.6255V16.437C137.786 17.197 137.814 17.9055 137.929 18.357C138.072 18.8945 138.238 19.1455 138.662 19.3455C138.714 19.3635 138.768 19.383 138.821 19.4025C139.023 19.4755 139.23 19.5505 139.452 19.5685V19.7915H133.657V19.54L133.693 19.5325C134.069 19.4505 134.34 19.3925 134.562 19.2315C134.843 19.0315 135.014 18.7515 135.1 18.3855C135.215 17.9055 135.215 17.1455 135.215 16.2715V10.8715C135.215 9.99702 135.072 9.35152 134.762 8.87152C134.453 8.39152 133.944 8.14002 133.262 8.14002C132.02 8.14002 131.058 8.95702 130.52 10.4545C130.239 11.2145 130.153 12.1455 130.153 13.5285V16.3915C130.153 16.536 130.152 16.677 130.151 16.814V16.816C130.147 17.4795 130.144 18.041 130.239 18.391C130.382 18.786 130.548 19.0945 130.863 19.2945C131.128 19.4344 131.415 19.5291 131.71 19.5745V19.797H126.002V19.5455C126.397 19.4885 126.677 19.403 126.907 19.2655C127.216 19.0945 127.388 18.843 127.445 18.477C127.588 17.9685 127.617 17.1515 127.617 16.277V10.8485C127.617 10.06 127.473 9.43702 127.279 9.01452C126.941 8.42002 126.403 8.14002 125.613 8.14002C124.284 8.14002 123.408 9.04302 122.898 10.483C122.589 11.357 122.503 12.2315 122.503 13.5285V16.277C122.503 17.1515 122.503 17.8545 122.647 18.3915C122.732 18.757 122.87 19.0145 123.099 19.18C123.322 19.38 123.666 19.4885 124.118 19.5455V19.7855H118.238Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M141.204 9.96844C141.159 9.9006 141.135 9.82116 141.135 9.73994L141.118 9.52294C141.107 9.38544 141.055 9.28844 140.941 9.24294C141.112 9.16844 141.158 9.02544 141.158 8.88844C141.158 8.61994 140.952 8.47144 140.631 8.47144H139.99V9.97444H140.253V9.36844H140.66C140.809 9.36844 140.855 9.41994 140.866 9.58544L140.878 9.73994C140.883 9.83694 140.895 9.91694 140.935 9.96844H141.204ZM140.626 8.70544C140.797 8.70544 140.889 8.77444 140.889 8.91694C140.889 9.05444 140.803 9.12844 140.648 9.12844H140.248V8.70544H140.626Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M140.551 10.6369C141.364 10.6369 142 10.0199 142 9.23691C142 8.45441 141.364 7.83691 140.551 7.83691C139.732 7.83691 139.097 8.45441 139.097 9.23691C139.097 10.0144 139.732 10.6369 140.551 10.6369ZM140.551 8.10541C141.204 8.10541 141.702 8.60291 141.702 9.23691C141.702 9.87141 141.204 10.3629 140.551 10.3629C139.893 10.3629 139.395 9.87141 139.395 9.23691C139.395 8.60291 139.893 8.10541 140.551 8.10541Z" fill="black" />
                                <path d="M58.512 16.74C58.512 17.3915 58.512 17.8945 58.5695 18.317C58.7125 18.9115 59.0215 19.163 59.331 19.3055C59.5825 19.42 59.869 19.5055 60.121 19.5285V19.78H54.3035V19.5285C54.5555 19.5 54.8705 19.4145 55.065 19.3055C55.4315 19.1345 55.712 18.9115 55.8265 18.4315C55.941 17.9515 55.941 17.4145 55.941 16.74V3.66C55.941 3.237 55.941 2.1915 55.884 1.8255C55.7695 1.4315 55.632 1.1745 55.403 1.0085C55.1225 0.837 54.8645 0.7855 54.4125 0.757V0.5H58.34C58.4835 0.5 58.5405 0.557 58.5405 0.7C58.5405 0.9435 58.5355 1.2075 58.5295 1.508C58.5215 1.9045 58.512 2.366 58.512 2.9285V16.74ZM26.648 7.6885C27.1575 7.2655 27.776 6.9 28.738 6.9C29.333 6.9 29.837 7.0715 30.152 7.38C30.404 7.66 30.576 8.0255 30.576 8.563C30.576 9.2945 30.1235 9.9455 29.3335 9.9455C28.5145 9.9455 28.2335 9.763 28.005 9.2255C27.8045 8.7455 27.61 8.4085 27.272 8.4085C26.5105 8.4085 25.451 10.0945 25.188 12.203C25.085 13.0085 25.068 13.803 25.068 14.6145V16.237C25.068 17.6485 25.2105 18.237 25.463 18.7745C25.6345 19.083 25.8005 19.283 26.0295 19.3685C26.2815 19.483 26.482 19.5115 26.734 19.54V19.7915H20.882V19.54C21.1055 19.5115 21.392 19.4545 21.6435 19.34C22.0385 19.14 22.239 18.9455 22.405 18.38C22.491 17.8715 22.52 17.1115 22.52 16.38V10.3685C22.52 9.917 22.52 8.8715 22.4335 8.5055C22.4113 8.34485 22.3541 8.19101 22.2661 8.05479C22.1781 7.91857 22.0613 7.80328 21.924 7.717C21.6155 7.495 21.273 7.466 20.936 7.437H20.9335V7.1855H24.89C25.033 7.1855 25.0905 7.2715 25.0905 7.357C25.0905 7.423 25.0785 8.0055 25.0655 8.632C25.05 9.3635 25.033 10.1555 25.033 10.26H25.119C25.549 8.9345 26.081 8.2255 26.648 7.6885Z" fill="#D92228" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.3075 19.54H53.33V19.7915C52.9065 19.9115 52.3795 20.043 51.79 20.043C51.1945 20.043 50.742 19.9055 50.49 19.7345C50.0895 19.4545 49.895 19.06 49.866 18.1855H49.7515C49.299 19.117 48.2855 20.0485 46.4475 20.0485C44.4665 20.0485 42.9435 18.9455 42.9435 16.917C42.9435 16.157 43.167 15.397 43.7625 14.8315C44.4765 14.164 45.294 13.9165 46.274 13.62C46.5355 13.5405 46.809 13.458 47.0945 13.363C48.933 12.8255 49.78 12.0655 49.8375 11.1915V9.27153C49.8375 7.80303 49.299 7.32303 48.114 7.32303C47.604 7.32303 47.152 7.46553 46.814 7.68853C46.362 7.99703 46.219 8.53453 46.19 9.32303C46.1615 10.3115 45.652 10.677 44.833 10.677C44.186 10.677 43.648 10.283 43.648 9.55153C43.648 8.98553 43.877 8.56303 44.243 8.19703C44.948 7.40853 46.728 6.90003 48.0565 6.90003C50.5705 6.90003 52.351 7.77453 52.351 9.69453V17.203C52.351 18.443 52.4085 18.98 52.66 19.26C52.7975 19.4545 53.0265 19.54 53.3075 19.54ZM47.49 19.14C48.48 19.14 49.78 18.2945 49.809 16.8545V12.3745C49.364 12.9595 48.536 13.35 47.8875 13.6565L47.8565 13.6715C46.9805 14.037 46.3845 14.3455 46.0465 14.7685C45.6805 15.1915 45.5375 15.8145 45.5375 16.66C45.5375 18.4085 46.2475 19.14 47.49 19.14ZM41.9415 15.9855L41.4665 15.837C40.9165 17.6255 39.7545 19.22 37.401 19.22C36.353 19.22 35.426 18.883 34.773 18.1455C34.0115 17.3 33.5305 15.58 33.5305 13.437C33.5305 13.2145 33.5305 13.0545 33.559 12.8315H41.8385C41.8955 12.4655 41.8955 11.8885 41.8955 11.5745C41.8955 9.43153 40.3955 6.89453 36.7825 6.89453C33.45 6.89453 30.765 9.66003 30.765 13.523C30.765 15.443 31.303 17.1345 32.5455 18.3745C33.622 19.4715 35.059 20.037 36.8685 20.037C39.5365 20.037 41.22 18.4255 41.9475 15.98H41.9415V15.9855ZM34.9735 8.11153C35.454 7.63153 36.101 7.38003 36.811 7.38003C37.601 7.38003 38.0825 7.60303 38.5345 8.00303C39.073 8.54003 39.3535 9.44303 39.3535 10.9055C39.3535 12.003 39.1815 12.2315 38.3345 12.2315H33.5875C33.7595 10.3685 34.269 8.73453 34.9735 8.11153ZM17.3665 11.7915L8.6915 2.89453L0 11.7915H2.651V19.7745H14.721V11.7915H17.366H17.3665ZM12.0015 9.46003C11.772 9.23153 11.406 9.10553 10.965 9.10553C10.238 9.10553 9.78 9.40853 9.465 9.67153L9.459 9.67703C9.144 9.98003 8.7835 10.3915 8.4855 11.1915C8.4905 11.0155 8.4945 10.7865 8.499 10.5565L8.503 10.3745C8.5145 9.92853 8.52 9.54553 8.52 9.50003C8.52 9.40303 8.4515 9.30003 8.3025 9.30003H5.4795V9.54003L5.5545 9.54553C5.783 9.56303 6.0005 9.58553 6.201 9.72853C6.3785 9.84853 6.4875 10.0145 6.5215 10.2255C6.579 10.4715 6.579 11.1915 6.579 11.5V15.5855C6.579 16.003 6.5675 16.5745 6.5045 16.957C6.39 17.3285 6.2695 17.443 6.0235 17.5685C5.86324 17.638 5.69325 17.6823 5.5195 17.7L5.4395 17.7055V17.9455H9.6535V17.7055L9.5795 17.7C9.41741 17.6892 9.25841 17.6505 9.1095 17.5855C8.984 17.54 8.875 17.4255 8.7605 17.2145C8.5945 16.86 8.4915 16.46 8.4915 15.4885V13.7855C8.4915 13.2715 8.5145 12.7745 8.5315 12.557C8.7205 11.197 9.459 10.1055 9.94 10.1055C10.123 10.1055 10.2435 10.3055 10.375 10.6255C10.53 10.9915 10.7475 11.38 11.3715 11.38C11.99 11.38 12.3165 10.86 12.3165 10.34C12.3215 9.98553 12.219 9.70003 12.0015 9.46003Z" fill="#D92228" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_11">
                                    <rect width="142" height="20" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>

                        </svg>
                    </a>
                </div>

                <div className="menu-main">
                    <nav className="main-menu">
                        <a href="#" id="for-anim">Buy</a>
                        <a href="#" id="for-anim">Sell</a>
                        <a href="#" id="for-anim">Mortgage</a>
                        <a href="#" id="for-anim">Find Realtors</a>
                        <a href="#" id="for-anim">My Home</a>
                        <a href="#" id="for-anim">News & Insights</a>

                    </nav>
                </div>
                <div className="menu-second">
                    <nav className="second-menu">
                        <a href="#" id="for-anim">Manage rentals</a>
                        <a href="#" id="for-anim">Advertise</a>
                    </nav>
                </div>
                <button className="log-in" id="for-anim">Log In</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </StyledHeader>
    )
};