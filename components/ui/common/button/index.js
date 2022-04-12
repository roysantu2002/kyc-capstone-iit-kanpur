
const SIZE = {
  sm: "p-2 text-base xs:px-4",
  md: "p-3 text-base xs:px-8",
  lg: "p-3 text-lg xs:px-8"
}



export default function Button({
  children,
  className,
  size = "md",
  hoverable = true,
  variant = "purple",
  ...rest
}) {

  // <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-primary-500 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"> {loading ? <Loader /> : "Subscribe"}</button>

  const sizeClass = SIZE[size]
  const variants = {
    white: `text-black bg-white`,
    green: `text-white bg-green-600 ${hoverable && "hover:bg-green-700"}`,
    purple: `text-white bg-primary-500 ${hoverable && "hover:bg-primary-500"}`,
    red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
    lightPurple: `text-indigo-700 bg-primary-500  ${hoverable && "hover:bg-primary-700"}`,
  }

  return (
    <button
      {...rest}
      className={`${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed border rounded-md font-medium ${className} ${variants[variant]}`}>
      {children}
    </button>
  )
}
