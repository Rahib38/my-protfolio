import { StatusCodes } from 'http-status-codes';
import { JwtPayload } from 'jsonwebtoken';
import QueryBuilder from '../../builder/querybuilders';
import AppError from '../../Errors/appError';
import { TBlog } from './blog.interface';
import Blog from './blog.model';

const createBlog = async (
  payload: TBlog,
  authorPayload: JwtPayload,
): Promise<TBlog> => {
  const author = authorPayload._id;

  const createBlog = await Blog.create({ ...payload, author });
  const result = await createBlog.populate('author');
  return result;
};
const updateBlog = async (
  blogId: string,
  payload: TBlog,
  loggerUser: JwtPayload,
) => {
  const checkBlogId = await Blog.findById(blogId).populate<{
    author: { email: string; role: string };
  }>('author');
  if (!checkBlogId) {
    throw new AppError(StatusCodes.BAD_GATEWAY, 'Blog not found!');
  } else if (checkBlogId?.author?.email !== loggerUser?.email) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'You are not authorized to update this blog',
    );
  } else if (checkBlogId?.isPublished === false) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'You can not updated this blog.Blog already deleted',
    );
  }
  const updateBlog = await Blog.findByIdAndUpdate(blogId, payload, {
    new: true,
  });
  if (!updateBlog) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Blog not updated');
  }
  const result = await updateBlog.populate('author');
  return result;
};
const deleteBlog = async (
  blogId: string,

  loggerUser: JwtPayload,
) => {
  const checkBlogId = await Blog.findById(blogId).populate<{
    author: { email: string; role: string };
  }>('author');
  if (!checkBlogId) {
    throw new AppError(StatusCodes.BAD_GATEWAY, 'Blog not found!');
  } else if (checkBlogId?.author?.email !== loggerUser?.email) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'You are not authorized to update this blog',
    );
  } else if (checkBlogId?.isPublished === false) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'You can not updated this blog.Blog already deleted',
    );
  }
  await Blog.findByIdAndUpdate(
    blogId,
    { isPublished: false },
    {
      new: true,
    },
  );
};

const getSingleBlogs = async (_id: string) => {
  const result = await Blog.findById(_id);

  return result;
};
const getBlogs = async (query: Record<string, unknown>) => {
  const searchableFields = ['title', 'content'];
  const blogs = new QueryBuilder(Blog.find().populate('author'), query)

    .search(searchableFields)
    .filter()
    .sort();
  const result = await blogs.modelQuery.select('_id title content author');

  return result;
};
export const BlogService = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
  getSingleBlogs,
};
