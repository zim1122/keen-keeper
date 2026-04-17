import FriendDetailsPageLeft from "@/components/friendDetailsPages/FriendDetailsPageLeft";
import FriendDetailsPageRight from "@/components/friendDetailsPages/FriendDetailsPageRight";
import React from "react";
import NotFound from "./not-found";

const res = await fetch("https://keen-keeper-liard.vercel.app/data.json");
const friends = await res.json();

export async function generateMetadata({ params }) {
  const { friendId } = await params;

  const friend = friends.find((friend) => String(friend.id) === friendId);

  if (!friend) {
    return {
      title: `Not found - KeenKeeper`,
    };
  }

  return {
    title: `KeenKeeper | ${friend.name} `,
    description: friend.bio,
  };
}

const FriendDetailPage = async ({ params }) => {
  const { friendId } = await params;

  // console.log(friendId);

  console.log("friendId from params:", friendId);

  const matchFriend = friends.find((friend) => friend.id === Number(friendId));
  // console.log(matchFriend);

  return (
    <div>
      {!matchFriend ? (
        <NotFound></NotFound>
      ) : (
        <div className=" container mx-auto my-10 px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* left */}
          <div className="lg:col-span-1">
            <FriendDetailsPageLeft matchFriend={matchFriend} />
          </div>

          <div className="lg:col-span-2">
            {/* right */}
            <FriendDetailsPageRight matchFriend={matchFriend} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendDetailPage;
