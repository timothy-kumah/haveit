import Link from "next/link";

interface Props{
  title?:string;
  className:string;
}
const logo = ({title,className}:Props) => {
  return (
    <Link href={"/"}>
          <h1 className={`text-3xl font-extrabold uppercase ${className}`}>{title||'Blog name'}</h1>
    </Link>
  )
}

export default logo