import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  // console.log(friend);
  const { id,name, picture, tags, status, days_since_contact } = friend;
  return (
    <Link href={`/friends/${id}`} className="card bg-base-100  shadow-sm">
      <div className="card-body justify-center items-center space-y-2">
        <div className="rounded-full object-cover overflow-hidden w-20 h-20 flex justify-center items-center">
          <Image
            className=""
            src={picture}
            alt={name}
            width={400}
            height={400}
          />
        </div>
        <h2 className="card-title">{name}</h2>
        <p className="text-lg text-black/60">{days_since_contact}d ago</p>
        <div className="card-actions">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="text-green-800 bg-green-300 rounded-full px-3 py-1 text-center"
            >
              {tag}
            </p>
          ))}
        </div>
        <div 
          className={`card-actions rounded-full px-3 py-1 text-center text-white 
            ${status === "overdue" && " bg-red-700"} 
          ${status === "on-track" && " bg-green-900"}
          ${status === "almost due" && " bg-yellow-500"}`}
        >
          {status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
