import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

export default function EventIdPage({ evt }) {
  const deleteEvent = (e) => {
    console.log("delete");
  };
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt?.id}`}>
            <FaPencilAlt /> Edit Event
          </Link>
          <Link href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </Link>
        </div>

        <span>
          {evt?.date} at {evt?.time}
        </span>
        <h1>{evt?.name}</h1>
        {evt?.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt?.performers}</p>
        <h3>Description:</h3>
        <p>{evt?.description}</p>
        <h3>Venue: {evt?.venue}</h3>
        <p>{evt?.address}</p>

        <Link href="/events" className={styles.back}>
          {"<"} Go Back
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();                                      
  const paths = events.map((evt) => ({
    params: { id: evt.id },
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
