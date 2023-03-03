import { useRouter } from "next/router";
export default function EventIdPage() {
  const route = useRouter();
  console.log("route", route);
  return <div>EventIdPage</div>;
}
