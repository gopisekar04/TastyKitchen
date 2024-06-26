import './index.css'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const overlayStyle = {
  marginTop: '54px',
}

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-title-container">
        <svg
          width="39"
          height="32"
          viewBox="0 0 39 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.9726 2.84334C29.6961 2.03394 27.3207 2.46534 25.2564 4.04969C24.165 3.0346 22.4322 2.15681 19.6823 2.0177C15.7289 1.81742 12.0503 3.32455 9.59101 6.15115C7.90956 8.0839 7.03292 10.3788 7.20375 12.353C6.95019 12.418 6.69507 12.4949 6.44082 12.591C3.80467 13.5848 2.14797 15.8748 2.00865 18.7173C1.88697 21.1984 3.05421 23.3421 5.20972 24.5991C7.25827 25.7926 9.8392 25.9987 12.0667 25.2553C12.7192 25.0372 13.339 24.7332 13.9091 24.3528C14.9659 25.4722 15.8652 26.6437 16.821 29.5167L16.9494 29.9016L17.2656 29.6632C20.0818 27.5403 22.8084 26.0303 25.3688 25.1758C27.5587 24.445 29.7004 24.1688 31.7354 24.3543L32.3258 24.4079L32.0056 23.888C31.2442 22.6544 30.5814 19.896 31.4126 17.5248C31.652 17.4936 31.8903 17.4388 32.1283 17.3596C33.2333 16.991 34.3091 16.1153 35.1774 14.8552C36.6 12.7891 37.1458 10.1403 36.6013 7.94172C36.0231 5.60607 34.2485 3.65293 31.9726 2.84334Z"
            fill="#F7931E"
          />
          <path
            d="M13.81 24.4208C13.81 24.4208 13.7245 24.4818 13.5643 24.5963C13.4838 24.6546 13.3841 24.7268 13.2588 24.7995C13.1343 24.8731 12.9945 24.9682 12.8251 25.0505C12.7409 25.0941 12.6525 25.14 12.5597 25.1883C12.4652 25.2343 12.3638 25.2755 12.2589 25.3224C12.0498 25.4202 11.8127 25.4974 11.5588 25.5867C11.047 25.7513 10.4445 25.8821 9.76729 25.9407C9.09055 25.9965 8.33645 25.9828 7.54203 25.8281C6.74933 25.6746 5.90835 25.402 5.10405 24.9222C4.89913 24.8102 4.70788 24.6671 4.50849 24.5319C4.31984 24.38 4.12305 24.2335 3.94513 24.057C3.57976 23.7173 3.24001 23.3236 2.96014 22.8727C2.68062 22.4238 2.43554 21.9314 2.28202 21.399C2.12694 20.8689 2.02414 20.3119 2.00527 19.747C1.96425 18.6234 2.16277 17.5141 2.5972 16.5456C3.02366 15.5747 3.67149 14.7669 4.39513 14.1647C4.75997 13.867 5.1359 13.6037 5.52654 13.4013C5.6219 13.3461 5.71969 13.2972 5.81834 13.2533C5.91648 13.2082 6.01254 13.1609 6.11015 13.1193C6.30833 13.0442 6.49958 12.9608 6.69619 12.9051C7.08337 12.7745 7.47072 12.7016 7.84145 12.6424C8.21513 12.5989 8.57461 12.5713 8.91782 12.5879C9.60338 12.609 10.2159 12.7411 10.7248 12.9309C11.2348 13.1196 11.6381 13.3659 11.9451 13.5911C12.0945 13.7114 12.2297 13.8117 12.3318 13.9193C12.4372 14.0218 12.5287 14.1048 12.5907 14.1849C12.7198 14.3366 12.7885 14.4174 12.7885 14.4174C12.7885 14.4174 12.7105 14.3471 12.5637 14.2146C12.4934 14.145 12.3929 14.0748 12.2786 13.9882C12.168 13.8969 12.0239 13.8157 11.8679 13.7174C11.5477 13.5366 11.1388 13.3477 10.6408 13.2212C10.1439 13.094 9.5608 13.029 8.92319 13.0673C8.60455 13.0803 8.27311 13.1357 7.93284 13.2032C7.59516 13.2863 7.24554 13.3796 6.90008 13.5252C6.72441 13.5882 6.55548 13.6775 6.37998 13.7567C6.29396 13.8006 6.2095 13.8494 6.12331 13.8958C6.0366 13.9409 5.95161 13.9905 5.86854 14.0459C5.52688 14.2493 5.20444 14.5048 4.89376 14.7844C4.27865 15.3513 3.74626 16.0745 3.40062 16.9205C3.04772 17.7613 2.88952 18.7283 2.92397 19.7055C2.96499 20.6792 3.22997 21.605 3.69987 22.3753C3.92678 22.765 4.20717 23.1121 4.51386 23.4199C4.66184 23.5798 4.83024 23.7146 4.98948 23.8566C5.16117 23.9829 5.32386 24.1191 5.50231 24.2277C6.19825 24.6931 6.95045 24.9922 7.6746 25.1874C8.40015 25.3843 9.10561 25.4563 9.7498 25.4615C10.3943 25.4644 10.9804 25.398 11.4875 25.2924C11.9925 25.1808 12.4254 25.053 12.7671 24.9135C12.9419 24.8531 13.0883 24.7777 13.2195 24.721C13.3516 24.6653 13.458 24.6074 13.5444 24.561C13.718 24.4695 13.81 24.4208 13.81 24.4208Z"
            fill="#452210"
          />
          <path
            d="M36.6037 7.9791C36.3668 7.65901 36.1035 7.33984 35.8093 7.02246C37.219 11.1417 34.1377 15.7339 29.6089 15.9716C25.8921 16.1668 17.4814 19.5096 14.9268 23.3092C19.4874 19.7055 24.0507 18.328 29.8255 17.87C30.3774 17.8264 30.8738 17.817 31.3219 17.8352C31.3508 17.7385 31.378 17.6412 31.4114 17.5456C31.6507 17.5144 31.8891 17.4596 32.127 17.3803C33.232 17.0117 34.3078 16.1361 35.1762 14.876C36.595 12.815 37.1416 10.1744 36.6037 7.9791Z"
            fill="#ffffff"
          />
          <path
            d="M31.6664 17.2377C31.6664 1p7.2377 31.7495 17.2207 31.9047 17.1889C32.0591 17.1528 32.2852 17.0893 32.5598 16.9715C33.108 16.7398 33.8467 16.2464 34.5007 15.3958C35.1596 14.5581 35.7336 13.3736 35.9951 11.9832C36.0619 11.6364 36.1059 11.2768 36.1247 10.9093C36.1469 10.5419 36.1436 10.1661 36.109 9.78756C36.0461 9.02813 35.8693 8.25968 35.5479 7.54067C34.9028 6.09038 33.7719 4.9867 32.5886 4.31929C31.4004 3.63637 30.1492 3.40181 29.1125 3.43988C28.0676 3.47958 27.24 3.7818 26.6974 4.03638C26.4277 4.17116 26.2188 4.28231 26.0843 4.36999C25.9474 4.45299 25.874 4.4972 25.874 4.4972C25.874 4.4972 25.9393 4.44108 26.062 4.33607C26.1826 4.22619 26.374 4.08257 26.6285 3.90485C27.141 3.56636 27.9568 3.13081 29.0709 2.96247C29.625 2.87947 30.2472 2.86882 30.9054 2.96481C31.2356 3.00775 31.5707 3.09111 31.9132 3.18927C32.2516 3.30059 32.599 3.42527 32.9371 3.59668C33.6203 3.92433 34.2865 4.39056 34.8862 4.98057C35.483 5.57309 36.0089 6.29968 36.3817 7.13633C36.573 7.55132 36.7063 7.99048 36.8087 8.4246C36.9102 8.85744 36.9626 9.2939 36.987 9.72224C37.0126 10.1508 36.9995 10.5728 36.9569 10.9811C36.9169 11.3898 36.8475 11.7854 36.7516 12.1629C36.374 13.6774 35.6377 14.9 34.8412 15.7179C34.0481 16.5499 33.1994 16.9611 32.6054 17.1135C32.3066 17.1924 32.0697 17.2192 31.9101 17.2297C31.7516 17.2349 31.6664 17.2377 31.6664 17.2377Z"
            fill="#452210"
          />
          <path
            d="M14.2584 24.7471C14.2584 24.7471 14.3654 24.8534 14.5679 25.0557C14.7699 25.2596 15.0679 25.5616 15.4149 25.9937C15.7526 26.4327 16.114 27.0189 16.447 27.7446C16.5278 27.9265 16.605 28.1174 16.6883 28.3135C16.7293 28.4118 16.7712 28.5116 16.8137 28.613C16.8518 28.7159 16.8901 28.8203 16.9295 28.9262C16.9475 28.9746 16.9657 29.0235 16.9839 29.0727L17.0216 29.1693C17.046 29.2308 17.0704 29.293 17.095 29.3562C17.0997 29.4092 17.1365 29.3603 17.163 29.3432L17.2457 29.2783C17.3041 29.2328 17.3631 29.1866 17.4226 29.14C18.9916 27.9631 20.9544 26.644 23.3618 25.5908C24.564 25.067 25.8794 24.6174 27.2922 24.3316C27.6453 24.2607 28.0056 24.2077 28.3688 24.1526C28.5515 24.1333 28.7352 24.114 28.9193 24.0945L29.1969 24.0666L29.4764 24.0532C29.6634 24.0445 29.851 24.0359 30.0396 24.027C30.2285 24.0292 30.418 24.0314 30.608 24.0335L30.892 24.0371L30.9 24.0364L30.9118 24.0346L30.9085 24.0312L30.9078 24.0321L30.8181 23.8076C30.6987 23.4679 30.5876 23.1231 30.5102 22.7693C30.3039 21.9088 30.2338 21.0305 30.2655 20.1659C30.2948 19.7337 30.3351 19.3038 30.428 18.8845C30.4516 18.7798 30.4684 18.6741 30.4971 18.5712L30.5725 18.3029L30.5841 18.2831L30.5632 18.2771L30.5556 18.2762L30.4388 18.2816L30.1618 18.2943C29.9775 18.3033 29.794 18.3121 29.6116 18.321C29.4295 18.337 29.2487 18.3529 29.0685 18.3688C28.7087 18.4031 28.3508 18.4244 27.9999 18.4675C27.6491 18.5126 27.3022 18.5573 26.9594 18.6015C24.2227 18.9929 21.8062 19.6875 19.8667 20.509C19.7452 20.5594 19.6247 20.6088 19.506 20.6579C19.3891 20.712 19.2742 20.7656 19.1603 20.8185C18.9332 20.9255 18.7095 21.0247 18.4966 21.1299C18.0763 21.3538 17.67 21.5476 17.3106 21.7677C17.1286 21.8738 16.9531 21.9761 16.7833 22.0748C16.6187 22.1811 16.46 22.2832 16.308 22.3814C15.9994 22.5713 15.7356 22.7727 15.4907 22.9438C15.2436 23.1115 15.043 23.2869 14.8592 23.4262C14.6752 23.5655 14.5279 23.6942 14.4093 23.7984C14.17 24.0052 14.0435 24.1144 14.0435 24.1144C14.0435 24.1144 14.1608 23.9946 14.3825 23.7678C14.4935 23.6532 14.6314 23.5123 14.8048 23.358C14.9783 23.2041 15.1681 23.0116 15.4044 22.8241C15.6377 22.6338 15.8905 22.4106 16.1886 22.1971C16.3357 22.0873 16.4892 21.9727 16.6488 21.8538C16.8137 21.7423 16.9849 21.6266 17.162 21.507C17.5128 21.2594 17.9114 21.037 18.3254 20.7829C18.536 20.6628 18.7571 20.5482 18.9819 20.4259C19.0947 20.3652 19.209 20.3039 19.3247 20.2418C19.443 20.185 19.5624 20.1274 19.6834 20.0695C21.613 19.1214 24.0543 18.2921 26.842 17.8019C27.1913 17.746 27.5452 17.6895 27.9021 17.6323C28.2606 17.5782 28.6251 17.5462 28.9925 17.502C29.1763 17.4814 29.3612 17.4609 29.5469 17.4399C29.7335 17.4237 29.9206 17.4136 30.1087 17.4001C30.3482 17.3847 30.5886 17.369 30.8301 17.3535C31.0136 17.3423 31.1979 17.331 31.382 17.3198L31.6602 17.3026L31.7998 17.2942L31.8346 17.292L31.841 17.2996L31.8353 17.3165L31.8127 17.3842C31.7522 17.5653 31.6913 17.7469 31.6306 17.9289L31.5388 18.2032L31.449 18.4906L31.4263 18.5628L31.4166 18.5985L31.3988 18.6656L31.3628 18.8004C31.3384 18.8902 31.3258 18.9839 31.3062 19.0757C31.2285 19.4431 31.1979 19.8249 31.1742 20.2086C31.1529 20.9782 31.2181 21.7711 31.4038 22.5421C31.4726 22.8599 31.5721 23.1653 31.6749 23.4641C31.6882 23.5013 31.7038 23.537 31.7178 23.5734L31.7396 23.6279L31.7505 23.6552L31.7742 23.7095L31.8765 23.9442L32.0027 24.1819C32.1711 24.5018 32.3385 24.8078 32.5043 25.1093C32.1358 25.0808 31.7683 25.0521 31.4026 25.0236C31.2197 25.0093 31.0373 24.9949 30.8552 24.9806L30.5841 24.9741C30.405 24.9698 30.2269 24.9656 30.0492 24.9613C29.8712 24.9671 29.6942 24.9729 29.5178 24.9784L29.2534 24.9867L28.9908 25.0091C28.816 25.0241 28.6422 25.0393 28.4686 25.0542C28.1237 25.1004 27.7803 25.1428 27.4426 25.2029C26.0921 25.4443 24.8155 25.8369 23.6332 26.3024C21.2662 27.2372 19.2746 28.434 17.6613 29.5061C17.522 29.6007 17.3844 29.694 17.2485 29.786C17.1788 29.8331 17.11 29.8798 17.0415 29.9262C16.9773 29.9608 16.8899 30.0707 16.8819 29.9319C16.7874 29.6292 16.6955 29.3344 16.6059 29.0477C16.5735 28.9407 16.5417 28.8351 16.5098 28.7314C16.4743 28.6292 16.4392 28.5289 16.4048 28.4301C16.3348 28.2325 16.2708 28.0394 16.2026 27.8558C15.922 27.125 15.6107 26.5319 15.3106 26.0758C15.0009 25.6269 14.7269 25.3012 14.5419 25.0813C14.3564 24.8624 14.2584 24.7471 14.2584 24.7471Z"
            fill="#452210"
          />
          <path
            d="M20.9043 3.16062C25.454 2.52028 30.2017 9.80943 24.1784 14.2229C25.1 11.6354 28.1152 4.72277 20.9043 3.16062Z"
            fill="white"
          />
          <path
            d="M25.5103 13.0061C25.5103 13.0061 25.5818 12.9171 25.7157 12.7497C25.7779 12.6616 25.8531 12.5516 25.9385 12.4204C26.0158 12.2829 26.1114 12.1299 26.195 11.9432C26.3703 11.5758 26.543 11.1044 26.6536 10.5382C26.7615 9.97379 26.8191 9.3136 26.7336 8.60199C26.7016 8.24546 26.6154 7.88081 26.5112 7.51093C26.3975 7.1425 26.24 6.77605 26.0473 6.41645C25.8422 6.06371 25.5999 5.7209 25.3123 5.40316C25.0163 5.09463 24.6887 4.80089 24.315 4.55154C23.5699 4.05085 22.6796 3.69829 21.7195 3.48574C20.7569 3.28078 19.7224 3.20373 18.6678 3.2308C16.5578 3.27771 14.5816 3.84696 12.9727 4.74568C12.1694 5.19657 11.4487 5.71494 10.8336 6.27427C10.2183 6.8336 9.70049 7.42307 9.27922 8.00351C8.43235 9.16511 7.99187 10.2865 7.80702 11.0843C7.75233 11.283 7.73139 11.4649 7.6992 11.6211C7.68171 11.7788 7.66337 11.9132 7.65454 12.0218C7.6445 12.2398 7.63914 12.3558 7.63914 12.3558C7.63914 12.3558 7.63083 12.2396 7.61508 12.0211C7.61144 11.9111 7.61439 11.7748 7.61473 11.6126C7.62962 11.4522 7.63135 11.2637 7.66596 11.056C7.76946 10.223 8.11164 9.01734 8.90139 7.7307C9.29359 7.08837 9.79309 6.42764 10.4063 5.79361C11.0192 5.15958 11.7544 4.56309 12.5916 4.04128C14.2644 2.99822 16.3913 2.32089 18.6427 2.27254C19.7648 2.24367 20.8661 2.33966 21.9118 2.59027C22.9531 2.84829 23.9354 3.27663 24.7525 3.88359C25.1622 4.18563 25.5205 4.53909 25.8364 4.90933C26.1443 5.28895 26.3963 5.69456 26.6008 6.10593C26.7936 6.52399 26.9402 6.94439 27.0366 7.35901C27.1246 7.77508 27.1869 8.1787 27.1922 8.56662C27.2243 9.34103 27.1024 10.0342 26.9352 10.6132C26.766 11.194 26.5384 11.6617 26.3199 12.017C26.2149 12.1979 26.1003 12.3434 26.007 12.4724C25.9059 12.5954 25.8175 12.6966 25.7451 12.7769C25.5918 12.9265 25.5103 13.0061 25.5103 13.0061Z"
            fill="#452210"
          />
        </svg>
        <h1 className="header-title">Tasty Kitchens</h1>
      </div>
      <div className="lg-nav-link-container">
        <Navbar />
      </div>
      <div className="sm-hamburger-container">
        <Popup
          modal
          overlayStyle={overlayStyle}
          trigger={
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button type="button" className="hamburger-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.94849 6H20.0515C20.5735 6 21.0005 6.427 21.0005 6.949V7.051C21.0005 7.573 20.5735 8 20.0515 8H3.94849C3.42649 8 3.00049 7.573 3.00049 7.051V6.949C3.00049 6.427 3.42649 6 3.94849 6ZM20.0515 11H3.94849C3.42649 11 3.00049 11.427 3.00049 11.949V12.051C3.00049 12.573 3.42649 13 3.94849 13H20.0515C20.5735 13 21.0005 12.573 21.0005 12.051V11.949C21.0005 11.427 20.5735 11 20.0515 11ZM20.0515 16H3.94849C3.42649 16 3.00049 16.427 3.00049 16.949V17.051C3.00049 17.573 3.42649 18 3.94849 18H20.0515C20.5735 18 21.0005 17.573 21.0005 17.051V16.949C21.0005 16.427 20.5735 16 20.0515 16Z"
                  fill="#183B56"
                />
              </svg>
            </button>
          }
        >
          {close => (
            <>
              <Navbar />
              <button type="button" onClick={() => close()}>
                Close
              </button>
            </>
          )}
        </Popup>
      </div>
    </div>
  )
}

export function Navbar() {
  return (
    <div className="nav-link-container">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <button type="button">Logout</button>
    </div>
  )
}
