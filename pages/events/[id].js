import Layout from "@/components/Layout";
import { API_URL } from "config";

export default function EventIdPage({ evt }) {
  return (
    <Layout>
      <div>{evt?.name}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({
    params: { id: evt.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/api/events/${id}`);
  const events = await res.json();
  return {
    props: { evt: events },
    revalidate: 1,
  };
}
