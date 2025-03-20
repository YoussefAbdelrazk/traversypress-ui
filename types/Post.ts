
export type Post = {
  id: string,
  title: string,
  body: string,
  author: string,
  date: string,
  comments:PostComments[]
}

export type PostComments = {
  id: string,
  text: string,
  username: string,
  
}