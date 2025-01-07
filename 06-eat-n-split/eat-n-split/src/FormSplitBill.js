import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({friend, onBalanceUpdate}) {
    const [bill, setBill] = useState('');
    const [expense, setExpense] = useState('');
    const [friendsExpense, setFriendsExpense] = useState('');
    const [paying, setPaying] = useState('user');

    function handleSubmit(e){
        e.preventDefault();
        const balance = bill/2 - expense;
       paying === 'user' ? onBalanceUpdate(friend.id, -balance) : onBalanceUpdate(friend.id, balance);

        
    }

    return <form className="form-split-bill">
        <h2>Split a bill with {friend.name}</h2>

        <label>💰 Bill value</label>
        <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))}></input>
        
        <label>🙋 Your expense</label>
        <input type="text" value={expense} onChange={(e) => {
            setExpense(Number(e.target.value))
            setFriendsExpense(bill - Number(e.target.value))}}></input>
        
        <label>🧑‍🤝‍🧑 {friend.name}'s expense</label>
        <input type="text" value={friendsExpense} disabled></input>

        <label>🤑 Who's paying the bill?</label>
        <select value={paying} onChange={(e) => setPaying(e.target.value)}>
            <option value="user">You</option>
            <option value={friend.name}>{friend.name}</option>
        </select>


        <Button onClick={handleSubmit}>Split bill</Button>
    </form>
}