import {useState,useEffect} from "react";
import axios from "axios";
import Lookup from "../../../components/Lookup";

export default function detailPage(post) {



    return(
        <Lookup post={post}/>
    );
}
export async function getStaticProps() {
    try {
        const res = await axios.get(`https://6ef31a81-4ac0-4a05-b01b-ba5853c9cddd.mock.pstmn.io/api/notice/07f45ff1-29ff-4c27-89b5-03c0eb16b587`)
        const data = res.data;
        return {
            props: {
                post: res.data,
            },
        };
    } catch (err) {
        console.log(err);
    }
}

