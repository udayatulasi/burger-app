import React, { Component } from 'react'
import Auxiliary from '../../Hoc/Auxiliary' 
import Burger from '../../components/Burger/Burger'
import BurgerControl from '../../components/Burger/BurgerControl/BurgerControl'
import Model from '../../components/UI/Modal/Model'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithError from '../../components/WithError/WithError'
import Axios from 'axios'

const INGREDIENTS_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    bacon:1.0,
    meat:1.5,
}

class BurgerBuilder extends Component {
    //  constructor(props){
    //     super(props);
    //     this.state={...}

    //  }

     state={
         items:null,
         totalPrice:4,
         purchasable:false,
         purchasing :false,
         loading:false,
     }

     componentDidMount(){
         axios.get('/items.json')
         .then(response =>{
             this.setState({items:response.data})
             
         })
     }
     UpdatePurchaseState(price){
          price = price-4;
         this.setState({purchasable:(price>0)?true:false})

     }

     addIngredientHandler = (type)=>{
                const oldCount = this.state.items[type];
                const updatedCount = oldCount +1;
                const updatedIngredients = {
                    ...this.state.items
                }
                updatedIngredients[type]=updatedCount;
                const priceAddition = INGREDIENTS_PRICES[type];
                const newPrice = this.state.totalPrice + priceAddition;
                this.setState({ totalPrice:newPrice,items:updatedIngredients})
                this.UpdatePurchaseState(newPrice);
            }

     removeIngredientHandler =(type)=>{
                if(this.state.items[type]!==0){
        const oldCount = this.state.items[type];
        const updatedCount = oldCount -1;
        const updatedIngredients = {
            ...this.state.items
        }
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const newPrice = this.state.totalPrice - priceAddition;
        this.setState({ totalPrice:newPrice,items:updatedIngredients})
        this.UpdatePurchaseState(newPrice);
     }
    }

    purchaseHandler=()=>{
        this.setState({
            purchasing:true,
        })
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler =()=>{
        // alert("order conformed!")
        this.setState({loading:true})
        const order={
            items:this.state.items,
            price:this.state.totalPrice,
            customer:{
                name:'udaya',
                address:'1333 south park'
            }
        }
            axios.post('/orders.json',order)
            .then(response => this.setState({loading:false,purchasing:false}))
            .catch(error=>this.setState({loading:false,purchasing:false}) )

    }
    render() {

        let ordersummery = null;
        

        if(this.state.loading){
            ordersummery=<Spinner />
        }

        const disabledInfo={
            ...this.state.items
        };
        for(let key in disabledInfo){
            disabledInfo[key] =disabledInfo[key] <=0;
        }

        let burger = <Spinner />
        if(this.state.items){
     
         burger = <Auxiliary >
        <Burger items={this.state.items}/>
        {/* <div>Build Controls</div> */}
        <BurgerControl 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved ={this.removeIngredientHandler}
            disabled={disabledInfo}
            totalprice={this.state.totalPrice}
            purchase={this.state.purchasable}
            ordered={this.purchaseHandler}
       />
       </Auxiliary>;
        ordersummery=<OrderSummery 
        purchaseCanceled = {this.purchaseCancelHandler}
        purchaseContinued ={this.purchaseContinueHandler}
        ingredients={this.state.items}
        totalprice={this.state.totalPrice} />};

        return (
            <Auxiliary>
                <Model show ={this.state.purchasing} 
                modelClosed={this.purchaseCancelHandler}> 
                   {ordersummery}
                   </Model>     
                {/* <div>Burger</div> */}
               {burger}
            </Auxiliary>      
        )
    }
}

export default WithError(BurgerBuilder,axios)
