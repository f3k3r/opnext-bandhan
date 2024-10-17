'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import styles from './page.module.css'; // Import the module CSS

export default function Home() {
    const router = useRouter();
  return (
    <>
    <Header />
    <main className="mt-4">
    <div className="container">
      <div className="mx-4 d-flex justify-content-center mb-5 text-center flex-column align-items-center mt-5">
        <h3 htmlFor="" className="text-secondary">
          We are verifying your details, Please wait...
        </h3>
        <img src="loader.gif" width="100%" alt="" />
      </div>
    </div>
  </main>

    <Footer />
</>
  );
}
