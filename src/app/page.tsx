import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.
      <nav>
        <Link href="/about">About</Link>
        <br />
        <Link href="/form">Form</Link>
        <br />
        <Link href="/file-download">Download</Link>
        <br />
        <Link href="/embed">Embed</Link>
        <br />
        <Link href="/outbound">Outbound</Link>
      </nav>
    </div>
  );
}
