import React from "react"

class AddTask extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Afficher : false

        }

    }
     

    render(){
        return(
                     <div>

                        
                        <ul>
                                <li>{this.props.theInput} </li>
                                <button> Delete {!this.setState.Afficher}</button>
                         </ul>

                         
                    </div>

        )
    }
}
export default AddTask