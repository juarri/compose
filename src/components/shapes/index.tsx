import Shape from "./shape";

export default Shape;

export type Shapes = "square" | "circle" | "diamond";

export function NinjaStar() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_119_282)">
        <path
          d="M123.344 200C100 200 100 143.969 76.6558 143.969C49.7872 143.969 0 150.205 0 123.338C0 99.9951 56.0242 99.995 56.0242 76.652C56.0242 49.7946 49.7872 0 76.6558 0C100 0 100 56.0313 123.344 56.0313C150.213 56.0313 200 49.7946 200 76.652C200 99.995 143.966 99.9951 143.966 123.338C143.966 150.205 150.213 200 123.344 200Z"
          fill="url(#paint0_linear_119_282)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_119_282"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B8DBFC" /> <stop offset="1" stop-color="#F8FBFE" />
        </linearGradient>
        <clipPath id="clip0_119_282">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function FatNinjaStar() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_119_275)">
        <path
          d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z"
          fill="url(#paint0_linear_119_275)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_119_275"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" />
        </linearGradient>
        <clipPath id="clip0_119_275">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Donut() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <g clip-path="url(#clip0_104_157)">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 143.75C124.162 143.75 143.75 124.162 143.75 100C143.75 75.8375 124.162 56.25 100 56.25C75.8375 56.25 56.25 75.8375 56.25 100C56.25 124.162 75.8375 143.75 100 143.75Z"
          fill="url(#paint0_linear_104_157)"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_104_157"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0_104_157">
          {" "}
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  );
}
