import React,{Component}from 'react'
import Aux from "../../Hoc/Auxiliary"
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component {
    state={
        showSideDrawer:false
    }

    SideDrawerClosed=()=>{
            this.setState({showSideDrawer:false})
    }
    SideDrawertoggler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}})
}

    render() {
        return (
            <div>
                <Aux>
                    <Toolbar  drawertoggleclicked={this.SideDrawertoggler}/>
                    <SideDrawer open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosed}/>
                        <main className={classes.Content}>
                            {this.props.children}
                        </main>
                </Aux>
            </div>
        )
    }
    
}

export default Layout