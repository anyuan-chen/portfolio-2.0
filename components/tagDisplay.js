import React from "react";
import Link from "next/link";
export default function TagDisplay({ tags }) {
  const tagGroup = tags.map((tag) => {
    return (
      <Link href={`/writing/tags/${tag}`}>
        <button className="mr-4 my-1 px-1 bg-gray-300 rounded">{tag}</button>
      </Link>
    );
  });
  return (
    <div className="w-page py-4 border-b">
      <h2 className="text-gray-500 font-mono">Filter tags</h2>
      {tagGroup}
    </div>
  );
}
