
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
    
    return (
        <li>
     <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        <div className="expense-item-description">
            <h2>{props.title}</h2>  </div> 
            <div className="expense-item__price">{props.amount} Rs</div> 
    </Card>
    </li>
    );
}


export default ExpenseItem;