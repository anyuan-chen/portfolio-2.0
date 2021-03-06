import React from "react";
import Layout from "../../components/layout";
import path from "path";
import * as matter from "gray-matter";
import Link from "next/link";
import fs from "fs";
import Post from "../../components/post";
import TagDisplay from "../../components/tagDisplay";
import Search from "../../components/search";

export default function Writing({ posts, tags }) {
  // const postComponents = posts.map((post) => {
    // return (
    //   <Post
    //     title={post.frontmatter.title}
    //     description={post.frontmatter.description}
    //     date={post.frontmatter.date}
    //     tags={post.frontmatter.tags}
    //     slug={post.slug}
    //   ></Post>
    // );
  // });
  // console.log(posts);
  return (
    <Layout>
      
      <TagDisplay tags={tags} />
      <Search posts={posts}></Search>
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
  let tagSet = new Set([]);
  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });
  console.log(posts);
  return {
    props: {
      posts: posts,
      tags: [...tagSet],
    },
  };
}
