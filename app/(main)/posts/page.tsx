import BackButton from "@/components/BackButton";
import PostPaginatoin from "@/components/posts/PostPaginatoin";
import PostTable from "@/components/posts/PostTable";





export default function PostsPage() {
  return (
    <>
    <BackButton text="Go Back" link="/"/>
        <PostTable/>   
        <PostPaginatoin/>
    </>
  )
}
