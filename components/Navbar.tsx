"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <main>
      <div className="logo">
        <h1>Test</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
};

export default Navbar;
