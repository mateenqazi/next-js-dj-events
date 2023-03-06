import Layout from "@/components/Layout";
import { API_URL } from "config";
export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <div>INCOMING REQUEST</div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log("MATEEN", events);
  return {
    props: { events },
  };
}
