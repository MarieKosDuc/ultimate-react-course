export default function Bill({ bill, onBillInput }) {
    function handleInput(e) {
        onBillInput(Number(e.target.value));
    }

    return (
        <div>How much was the bill? 
            <input type="number" value={bill} onChange={(e) => {handleInput(e)}}/>
        </div>
    );
}