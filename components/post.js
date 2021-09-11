import React from "react";
import Link from "next/link";
export default function Post(props) {
  console.log(props);
  let tags;
  if (props.tags) {
    tags = props.tags.map((tag) => {
      return (
        <button className="mr-4 my-1 px-1 bg-gray-300 rounded">{tag}</button>
      );
    });
  }
  return (
    <div>
      <div className="flex flex-col space-y-1">
        <Link href={`/writing/${props.slug}`}>
          <a className="text-2xl">{props.title}</a>
        </Link>
        <p className="font-mono text-gray-500 text-sm">{props.date}</p>
        <p>{props.description}</p>
      </div>
      <div className="space-x-2">{tags}</div>
    </div>
  );
}
