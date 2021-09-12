import React from "react";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import Layout from "../../components/layout";
import katex from "katex";
import Markdown from "../../components/markdown";

export default function PostPage({
  frontmatter: { title, date, tags, description },
  slug,
  content,
}) {
  return (
    <Layout>
      <div className="w-page pt-4">
        <h1 className="text-2xl">{title}</h1>
        <h3 className="font-mono text-gray-500 text-sm pb-2">{date}</h3>
        <Markdown>{content}</Markdown>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
