'use client';
import BackButton from '@/components/BackButton';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { posts } from '@/data/posts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  body: z.string().min(1, { message: 'Body is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
});

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default function EditPage({ params }: EditPageProps) {
  const resolvedParams = use(params);
  const post = posts.find((post) => post.id === resolvedParams.id);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // TODO: Implement actual update logic here
      toast({
        title: 'Success',
        description: 'Post updated successfully.',
      });
      router.push('/posts');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update post. Please try again.',
        variant: 'destructive',
      });
    }
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <BackButton text='Back to Posts' link='/posts' />
      <h3 className='text-2xl font-bold mb-4'> Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' uppercase text-xs font-bold text-zinc-500 dark:text-white '>Title</FormLabel>
                <FormControl>
                  <Input className=' bg-slate-100 border-0 focus-visible:ring-0 dark:bg-slate-500   text-black dark:text-white focus-visible:ring-offset-0 ' placeholder='Enter Title' {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='body'
            
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' uppercase text-xs font-bold text-zinc-500 dark:text-white '>Body</FormLabel>
                <FormControl>
                  <Input className=' bg-slate-100 border-0 focus-visible:ring-0 dark:bg-slate-500   text-black dark:text-white focus-visible:ring-offset-0 ' placeholder='Enter Body' {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name='author'
            
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' uppercase text-xs font-bold text-zinc-500 dark:text-white '>Author</FormLabel>
                <FormControl>
                  <Input className=' bg-slate-100 border-0 focus-visible:ring-0 dark:bg-slate-500   text-black dark:text-white focus-visible:ring-offset-0 ' placeholder='Enter Author' {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name='date'
            
            render={({ field }) => (
              <FormItem>
                <FormLabel className=' uppercase text-xs font-bold text-zinc-500 dark:text-white '>Date</FormLabel>
                <FormControl>
                  <Input className=' bg-slate-100 border-0 focus-visible:ring-0 dark:bg-slate-500   text-black dark:text-white focus-visible:ring-offset-0 ' placeholder='Enter Date' {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          
              <Button className=' w-full dark:bg-slate-800 dark:text-white'>Update Post</Button>
        </form>
      </Form>
    </>
  );
}
