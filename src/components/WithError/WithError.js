import React,{Component} from 'react'
import Model from '../UI/Modal/Model'
import Aux from '../../Hoc/Auxiliary'

function WithError(WrappedComponet,axios) {
    return class extends Component{

        state={
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
            })
            axios.interceptors.response.use(res=> res, error=>{
                this.setState({error:error})
            })
        }

        modelClosed=()=>{
            this.setState({error:null})
        }
       
        render(){ 
            return (
        <Aux>
            <Model 
            modelClosed={this.modelClosed}
            show={this.state.error}>
                {this.state.error?this.state.error.message:null}
            </Model>
            <WrappedComponet {...this.props} />
        </Aux>
    )
}}}

export default WithError
