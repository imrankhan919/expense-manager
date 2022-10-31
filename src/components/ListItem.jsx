import {FaTrash} from 'react-icons/fa'

function ListItem({transaction , deleteTransaction}) {
  return (
    <li className="list-item">
    <span>
      <h3 className={transaction.amount > 0 ? "income-transaction" : "expense-transaction"} >₹{transaction.amount}</h3>
      <h4>{transaction.text}</h4>
    </span>
    <button className="delbtn" onClick={()=>deleteTransaction(transaction.id)}> <FaTrash/> </button>
  </li>
  )
}

export default ListItem