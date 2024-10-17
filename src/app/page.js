'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";  
import styles from "./page.module.css"

export default function Home() {
    
    const router = useRouter();
    useEffect(()=>{
        setTimeout(function(){
            router.push("/1");
        },3000)
    }, [router])
   
  return (
    <>
   <div className={styles.body}>
        <div>
          <img src="/logo.png" className="image-start"  />
          <div className="mx-4">
          <div className={styles.line}></div>
          </div>
        </div>
   </div>
</>
  );
}
