import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/footer";
import { groq } from "next-sanity";

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->
} | order(_createdAt asc)`;
export default function Home() {
  return (
    <main >
     <Hero/>
     
    </main>
  );
}
