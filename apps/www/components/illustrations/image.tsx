import { createComponent } from "./create-component"

export const ImageAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M148.01 105C143.619 105 140 108.619 140 113.01V187.777C140 192.169 143.619 195.787 148.01 195.787H252.147C256.539 195.787 260.157 192.169 260.157 187.777V113.01C260.157 108.619 256.539 105 252.147 105H148.01ZM148.01 110.34H252.147C253.672 110.34 254.817 111.485 254.817 113.01V176.844L231.412 151.227C230.872 150.654 230.07 150.339 229.284 150.393C228.609 150.43 227.954 150.735 227.49 151.227L208.381 171.504L180.719 140.59C180.129 139.917 179.184 139.575 178.3 139.713C177.712 139.809 177.158 140.107 176.756 140.548L145.339 174.301V113.013C145.339 111.488 146.484 110.343 148.01 110.343L148.01 110.34ZM209.425 123.691C203.558 123.691 198.745 128.504 198.745 134.372C198.745 140.239 203.558 145.053 209.425 145.053C215.293 145.053 220.106 140.239 220.106 134.372C220.106 128.504 215.293 123.691 209.425 123.691Z"
        fill={palette[3]}
      />
    </svg>
  )
})