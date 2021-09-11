import React from "react";
import Layout from "../../components/layout";
import path from "path";
import * as matter from "gray-matter";
import Link from "next/link";
import fs from "fs";
import Post from "../../components/post";

export default function Writing({ posts }) {
  const postComponents = posts.map((post) => {
    return (
      <Post
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        slug={post.slug}
      ></Post>
    );
  });
  console.log(posts);
  return (
    <Layout>
      <div className="w-page space-y-3 pt-5">{postComponents}</div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownMeta = fs.readFileSync(path.join("posts", file), "utf-8");
    const { data: frontmatter } = matter(markdownMeta);
    return {
      slug,
      frontmatter,
    };
  });
  console.log(posts);
  return {
    props: {
      posts: posts,
    },
  };
}