'use client'
import Link from "next/link"
import {useRouter} from 'next/navigation'

const Navbar = () => {

    const router = useRouter()
return (
  <nav>
    <div className="logo">
        <h1>Test</h1>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/dashboard">Dashboard</Link>
    <button onClick={()=>router.push('dashboard')} >click to dashboard</button>
  </nav>
)
}

export default Navbar