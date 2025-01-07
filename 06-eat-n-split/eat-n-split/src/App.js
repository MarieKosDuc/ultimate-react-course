import { useState } from "react";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [friendsList, setFriendsList] = useState(initialFriends);

  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }

  function handleSelectFriend(friendId) {
    console.log("received friend id : ", friendId);
    setSelectedFriendId(friendId);
  }

  function handleAddFriend(friend) {
    setFriendsList((prevFriendsList) => {
      return [...prevFriendsList, friend];
    });
    setShowAddFriend(false);
  }

  function handleBalanceUpdate(friendId, value) {
    setFriendsList((prevFriendsList) => {
      return prevFriendsList.map((friend) => {
        if (friend.id === friendId) {
          return { ...friend, balance: value + friend.balance };
        }
        return friend;
      });
    });
    setSelectedFriendId(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friendsList} selectedFriendId={selectedFriendId} onSelectFriend={handleSelectFriend} />
        {showAddFriend ? (
          <FormAddFriend friendsList={friendsList} onFriendAdd={handleAddFriend} />
        ) : null}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriendId !== null ? (
        <FormSplitBill friend={friendsList.find(friend => friend.id === selectedFriendId)} onBalanceUpdate={handleBalanceUpdate}/>
      ) : null}
    </div>
  );
}
