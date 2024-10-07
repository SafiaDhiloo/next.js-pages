import Link from "next/link"
export default function Navbar() {
    return (
        <nav>
            <ul className="flex items-center justify-center gap-20 bg-blue-700  mx-auto my-0">
      <Link href={"/"}><li>Home</li></Link>
      <Link href={"/contact-us"}><li>contact-us</li></Link>
      <Link href={"/about-us"}><li>about-us</li></Link>
      <Link href={"/explore"}><li>explore</li></Link>

          </ul>
 </nav>
    )
}