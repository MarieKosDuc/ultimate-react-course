import Friend from "./Friend";

export default function FriendsList({friends, selectedFriendId, onSelectFriend}) {
    return <ul>List
        {friends.map((friend) => (
            <li><Friend friend={friend} key={friend.id} selectedFriendId={selectedFriendId}  onSelectFriend={onSelectFriend}/></li>
        ))}
    </ul>;
}