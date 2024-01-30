import { gql } from "code-tag";
import type { GithubBlog } from "../github-blog";
import { Post } from "../datatypes/Post";

gql`
  query GetPostById($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        ...Post_Issue
      }
    }
  }
`;

export type GetPostByIdParams = {
  number: number;
};

export const getPostById = (blog: GithubBlog) => async () => {
  const [owner, name] = blog.repo.split("/");
  const result = await blog.sdk.GetPostById({ owner, name, number: 1 });

  const issue = result.repository?.issue;

  if (!issue) {
    return { post: null };
  }

  return {
    post: Post.translate(issue),
  };
};

export type GetPostById = ReturnType<typeof getPostById>;

export type GetPostByIdResult = Awaited<ReturnType<GetPostById>>;
