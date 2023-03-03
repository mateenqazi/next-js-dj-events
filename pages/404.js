import Link from "next/link";
import Layout from "@/components/Layout";
import style from "@/styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";
export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={style.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is no found.</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
