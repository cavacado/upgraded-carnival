import Link from "next/link";
export default function Outbound() {
  return (
    <>
      <h1>Showcasing Outbound Links:</h1>
      <Link href={"https://www.channelnewsasia.com/"} passHref>
        Link to outbound
      </Link>
    </>
  );
}
