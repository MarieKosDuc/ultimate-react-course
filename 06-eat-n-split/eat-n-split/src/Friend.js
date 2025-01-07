import Button from "./Button";

export default function Friend({friend, selectedFriendId, onSelectFriend}) {
    function handleSelectFriend() {
        console.log(friend.id);
        console.log(selectedFriendId)
        console.log(selectedFriendId === friend.id)
        selectedFriendId === friend.id ? onSelectFriend(null) : onSelectFriend(friend.id);
    }


    return <>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (<p className="green">{friend.name} owes you {Math.abs(friend.balance)}€</p>)}
        {friend.balance < 0 && (<p className="red">You owe {friend.name} {friend.balance}€</p>)}
        {friend.balance === 0 && (<p>You are even</p>)}
        <Button onClick={() => handleSelectFriend(friend.id)}>Select</Button>
        </>;
}