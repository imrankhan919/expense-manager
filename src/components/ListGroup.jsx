import React from "react";
import ListItem from "./ListItem";

function ListGroup({transactions,deleteTransaction}) {
  return (
    <ul className="list-group">
     {
        transactions.map((transaction)=>
        <ListItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        )
     }
    </ul>
  );
}

export default ListGroup;
