import React from "react";
import path from "path";
import fs from "fs";
import * as matter from "gray-matter";
import Post from "../../../components/post";
import Layout from "../../../components/layout";
import Link from "next/link";
export default function Tag({ posts }) {
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
  return (
    <Layout>
      <div className="w-page space-y-4 pt-2">
        {postComponents}
        <div className="border-t">
          <Link href="/writing">
            <button className="mt-8 bg-accent px-2 rounded">Back</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
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
  const tagsArray = [...tagSet];
  const tagsParams = tagsArray.map((tag) => ({
    params: {
      tag: tag,
    },
  }));
  //console.log(tagsParams);
  return {
    paths: tagsParams,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log(context);
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
  const filteredPosts = posts.filter((post) => {
    let contains = false;
    post.frontmatter.tags.forEach((tag) => {
      if (tag === context.params.tag) {
        console.log(tag, context.params.tag);
        contains = true;
      }
    });
    if (contains) {
      return true;
    }
    return false;
  });
  return {
    props: {
      posts: filteredPosts,
    },
  };
}
