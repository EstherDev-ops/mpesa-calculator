type TransactionCardProps ={
  amount: number;
  type: string;
  fee:number;
  title: string;
};

function TransactionCard({amount, type, fee, title}: TransactionCardProps){
  return(
    <>
    <h3>{title}</h3>
    <p>Amount: KES {amount}</p>
    <p>Type: {type}</p>
    <p>Fee: KES {fee}</p>
    </>
  );
}
export default TransactionCard;