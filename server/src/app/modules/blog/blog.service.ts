import QueryBuilder from '../../builder/querybuilders';
import { TBlog } from './blog.interface';
import Blog from './blog.model';

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};
const updateBlog = async (blogId: string, payload: TBlog) => {
  const checkBlogId = await Blog.findByIdAndUpdate(blogId, payload, {
    new: true,
  });
  return checkBlogId;
};
const deleteBlog = async (blogId: string) => {
  const checkBlogId = await Blog.findByIdAndDelete(blogId);
  return checkBlogId;
};

const getSingleBlogs = async (_id: string) => {
  const result = await Blog.findById(_id);

  return result;
};
const getBlogs = async (query: Record<string, unknown>) => {
  const searchableFields = ['title', 'content'];
  const blogs = new QueryBuilder(Blog.find(),query)

    .search(searchableFields)
    .filter()
    .sort();
 const result = blogs.modelQuery

  return result;
};
export const BlogService = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
  getSingleBlogs,
};
