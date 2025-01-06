export default function Sum({ totalSum, bill, totalTips}) {
    return (
        <div> You pay ${totalSum} (${bill} + ${totalTips})
        </div>
    );
}