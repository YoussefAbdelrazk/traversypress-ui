import { Post } from "@/types/Post";
import { TableCell, TableRow, Table, TableHeader, TableHead, TableBody ,TableCaption,} from "../ui/table";
import { posts } from "@/data/posts";
import Link from 'next/link'
interface PostTableProps {
  limit?: number,
  title?: string,
}

export default function PostTable({ limit,title }: PostTableProps) {
  return (
    <div className="mt-10">
      <h1 className="text-2xl mb-4  font-semibold">{title? title : "Posts"}</h1>
      <Table>
        <TableCaption>A List of Recent Posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell ">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
            <TableHead className="text-right">View</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post)=>(
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell ">{post.author}</TableCell>
              <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
              <TableCell >
                <Link href={`/posts/edit/${post.id}`} >
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-bold">Edit</button></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
