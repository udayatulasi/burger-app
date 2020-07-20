import React,{Component} from 'react'
import Aux from "../../../Hoc/Auxiliary"
import Button from '../../UI/Button/Button'

class OrderSummery extends Component {  
    render(){
    const ingredientSummery = Object.keys(this.props.ingredients)
    .map(igkey=>{
    return <li key={igkey}>
        <span style={{textTransform:'capitalize'}}>
            {igkey}</span>:
        {this.props.ingredients[igkey]}</li>
    })
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
    <p><strong>Order Price:{this.props.totalprice.toFixed(2)}</strong></p>
            <p>Continue to CheckOut</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled} >CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued} >CONTINUE</Button>
        </Aux>
    )
}
}

export default OrderSummery
