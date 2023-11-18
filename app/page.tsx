import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <p>Hey From Home Page</p>
      <div>
        <Link href='/about'>About</Link>
        <Link href='/pricing'>Pricing</Link>
      </div>
    </div>
  )
}
