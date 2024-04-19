import { groq } from "next-sanity";

interface Props{
  params:{
    slug:string;
  }
}

export const generateStaticParams = async (slug:string) =>{
  const query = groq`*[_type == 'post' && slug.current == ${slug}]{
    ...,
    author->,
      categories[]->
  } | order(_createdAt asc)`;
}

const SlugPage = ({params:{slug}}:Props) => {
  return (

    <div>SlugPage</div>
  )
}

export default SlugPage