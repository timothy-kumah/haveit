import { groq } from "next-sanity";
import { Post } from "../../../../types";
import { client } from "../../../../sanity/lib/client";
import Container from "@/app/components/container";
import { urlFor } from "@/lib/createClient";
import Image from "next/image"
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { PortableText } from "@portabletext/react";

interface Props{
  params:{
    slug:string;
  }
}

export const generateStaticParams = async () =>{
  const query = groq`*[_type == 'post']{
    slug
  }`;

  const posts: Post[] = await client.fetch(query)
  const slugRoutes = posts.map((post) => post?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug
  }))
}

const SlugPage = async ({params:{slug}}:Props) => {
  const query = groq `*[_type == 'post'
     && slug.current == $slug][0]{
      ...,
      body,
      author->,    
    }`;
    const post:Post = await client.fetch(query, {slug});

  return (    
    <Container className="mb-10">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image className="object-cover w-full" 
          src={urlFor(post?.mainImage).url()} width={500} 
          height={500} alt="main image"/>
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
        <Image className="w-32 h-32 rounded-full object-cover" 
          src={urlFor(post?.author?.image).url()} width={200} 
          height={200} alt="author image"/>
          <p className="text-3xl text-red-400 font-semibold">
            {post?.author?.description}
          </p>
          <p className="text-center tracking-wide text-sm">{post?.author?.description}</p>
          <div className="flex items-center gap-5">
          <Link href="#">
            <BsFacebook className='w-10 h-10 hover:text-blue-500 duration-200'/>
            </Link>
            <Link href="#">
            <BsYoutube className='w-10 h-10 hover:text-red-500 duration-200'/>
            </Link>
            <Link href="#">
            <BsLinkedin className='w-10 h-10 hover:text-blue-400 duration-200'/>
            </Link>
            </div>
        </div>
      </div>
      <div>
        <PortableText value={post?.body}/>
      </div>
      </Container>
  )
}

export default SlugPage