import {useRouter} from "next/router";
import { useEffect } from "react";

export default function AboutUs () { 
    const router = useRouter();
    useEffect(()=> {
    },[])
    return (

        <>
        <h1>your verification ID is {router.query.id}</h1>
        
        </>
    )

} 