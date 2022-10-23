import { SVGAttributes } from "react";
interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props:LogoProps) {
  return (
    <svg
      width={120}
      height={118}
      viewBox="0 0 120 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M120 59.014c0-8.778-9.955-17.097-25.218-22.256C98.304 19.581 96.739 5.915 89.84 1.54 88.251.513 86.392.027 84.362.027V6.05c1.125 0 2.03.243 2.788.702 3.327 2.107 4.77 10.128 3.645 20.445-.27 2.54-.71 5.213-1.248 7.941-4.794-1.296-10.028-2.296-15.531-2.944-3.303-4.997-6.727-9.534-10.176-13.504C71.814 10.506 79.3 6.023 84.386 6.023V0C77.66 0 68.855 5.294 59.951 14.476 51.048 5.348 42.242.108 35.516.108v6.023c5.063 0 12.572 4.456 20.546 12.586A125.646 125.646 0 0045.96 32.194c-5.528.648-10.762 1.648-15.556 2.971a89.19 89.19 0 01-1.272-7.832c-1.15-10.318.269-18.34 3.57-20.473.735-.486 1.689-.702 2.814-.702V.135c-2.055 0-3.914.486-5.528 1.513-6.873 4.375-8.414 18.014-4.868 35.137C9.906 41.971 0 50.264 0 59.014 0 67.79 9.955 76.11 25.218 81.269c-3.522 17.177-1.957 30.843 4.941 35.219 1.59 1.026 3.449 1.512 5.504 1.512 6.726 0 15.532-5.294 24.435-14.477 8.903 9.129 17.709 14.369 24.435 14.369 2.055 0 3.914-.486 5.528-1.513 6.873-4.375 8.414-18.014 4.868-35.138C110.094 76.084 120 67.764 120 59.014zM88.153 40.998c-.905 3.484-2.03 7.076-3.302 10.668a132.495 132.495 0 00-3.204-6.482c-1.125-2.16-2.324-4.267-3.522-6.32 3.473.567 6.824 1.27 10.028 2.134zM76.951 69.763c-1.908 3.646-3.865 7.103-5.895 10.317-3.645.351-7.338.54-11.056.54-3.693 0-7.387-.189-11.007-.513a151.76 151.76 0 01-5.92-10.263 146.413 146.413 0 01-5.087-10.75 146.757 146.757 0 015.063-10.776c1.908-3.646 3.865-7.103 5.895-10.317 3.645-.351 7.338-.54 11.056-.54 3.693 0 7.387.189 11.007.513a151.76 151.76 0 015.92 10.263 146.433 146.433 0 015.087 10.75 157.528 157.528 0 01-5.063 10.776zm7.9-3.511c1.321 3.619 2.446 7.238 3.376 10.75-3.205.863-6.58 1.593-10.078 2.16 1.199-2.08 2.397-4.214 3.522-6.401a159.266 159.266 0 003.18-6.51zM60.05 95.07c-2.275-2.593-4.55-5.483-6.8-8.643 2.201.108 4.452.19 6.726.19 2.3 0 4.574-.055 6.8-.19a103.308 103.308 0 01-6.726 8.643zM41.85 79.162c-3.474-.567-6.825-1.27-10.029-2.134.905-3.484 2.03-7.076 3.302-10.668a132.497 132.497 0 003.205 6.482c1.15 2.16 2.323 4.267 3.522 6.32zm18.076-56.205c2.274 2.593 4.55 5.483 6.8 8.643-2.202-.108-4.452-.19-6.727-.19-2.3 0-4.574.055-6.8.19 2.202-3.16 4.476-6.05 6.727-8.643zm-18.1 15.908c-1.2 2.08-2.398 4.213-3.523 6.401a158.395 158.395 0 00-3.18 6.482 124.134 124.134 0 01-3.375-10.75c3.204-.836 6.58-1.566 10.077-2.133zM19.69 72.68C11.031 68.6 5.43 63.254 5.43 59.013c0-4.24 5.601-9.614 14.26-13.666 2.104-1 4.403-1.89 6.776-2.728 1.394 5.294 3.228 10.804 5.503 16.449-2.25 5.617-4.06 11.1-5.43 16.367a69.902 69.902 0 01-6.849-2.755zm13.16 38.595c-3.327-2.107-4.77-10.128-3.645-20.446.27-2.538.71-5.212 1.248-7.94 4.794 1.296 10.028 2.296 15.531 2.944 3.303 4.996 6.727 9.534 10.176 13.504-7.974 8.184-15.459 12.667-20.546 12.667-1.101-.027-2.03-.27-2.764-.729zm58.018-20.58c1.15 10.317-.269 18.338-3.57 20.472-.735.486-1.689.702-2.814.702-5.063 0-12.572-4.456-20.546-12.586A125.66 125.66 0 0074.04 85.806c5.528-.648 10.762-1.648 15.556-2.971.563 2.728 1.003 5.348 1.272 7.86zm9.417-18.015c-2.103 1-4.402 1.89-6.775 2.728-1.394-5.294-3.229-10.804-5.504-16.449 2.25-5.617 4.06-11.1 5.43-16.367a72.984 72.984 0 016.874 2.755c8.659 4.078 14.26 9.426 14.26 13.666-.025 4.24-5.626 9.616-14.285 13.667z"
        fill="#81D8F7"
      />
      <path
        d="M52.81 25.104c5.418 0 9.81-5.62 9.81-12.552C62.62 5.62 58.228 0 52.81 0S43 5.62 43 12.552c0 6.932 4.392 12.552 9.81 12.552z"
        fill="#81D8F7"
      />
    </svg>
  )
}