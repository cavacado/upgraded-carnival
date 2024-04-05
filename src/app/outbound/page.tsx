import Link from "next/link";
export default function Outbound() {
  return (
    <Link href={"https://www.channelnewsasia.com/"} passHref>
      Link to outbound
    </Link>
  );
}
