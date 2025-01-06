export default function Bill({ onBillInput }) {
    function handleInput(e) {
        onBillInput(Number(e.target.value));
    }

    return (
        <div>How much was the bill? 
            <input type="number" onChange={(e) => {handleInput(e)}}/>
        </div>
    );
}