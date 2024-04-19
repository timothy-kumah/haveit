import { urlFor } from "@/lib/createClient"
import { Post } from "../../../types"
import Container from "./container"
import Link from "next/link"
import Image from "next/image"

interface Props{
    posts:Post[]
}

const BlogContent = ({posts}:Props) => {
  return (
    <Container className="bg-gray-100 py-20 px-10 flex flex-col">
        {posts.map((post)=>
        (
            <Link href={'/'}>
                <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md 
                rounded-tr-md rounded-br-md hover:shadow-md">
                    <div className="w-full md:w-3/5 group overflow-hidden 
                        rounded-tl-md rounded-bl-md relative">
                        <Image key={post?._id} src={urlFor(post?.mainImage).url()} alt="blog post" 
                        width={500} height={500} className="w-full max-h-[500px] object-cover
                        group-hover:scale-105 duration-200 rounded-tl-md rounded-bl-md"/>
                        <div className="absolute top-0 left-0  w-full h-full bg-black/20
                        group-hover:hidden duration-200"
                        />
                        <div className="absolute hidden group-hover:inline-flex
                         bottom-0 left-0 w-full bg-opacity-20 bg-black 
                         backdrop-blur-lg rounded drop-shadow-
                          text-white p-5 justify-center">
                            <p className="text-lg font-semibold">Read More</p>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </Container>
  )
}

export default BlogContent