import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "config";
import Link from "next/link";
export default function Home({ events }) {
  return (
    <Layout>
      <h1>INCOMING REQUEST</h1>
      {events.length === 0 && <h3>No Events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link className="btn-seconday" href="/events">
          View All Events
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps({ req }) {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { events: events.slice(0, 3) },
  };
}
