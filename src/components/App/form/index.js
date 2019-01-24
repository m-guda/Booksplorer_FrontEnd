// import React from "react";
// import { timingSafeEqual } from "crypto";

// class Form extends React.Component{
   
//     constructor(props){
//         super(props);
//         this.onFormSubmit = this.onFormSubmit.bind(this)
//         this.onNameChange = this.onNameChange.bind(this)
//         this.onAliasChange = this.onAliasChange.bind(this)
//         this.onTeamChange = this.onTeamChange.bind(this)

//         this.state = {
//             name: props.name,
//             alias: props.alias,
//             team: props.team,
//         }
//     }
    
//     onFormSubmit(event){
//         event.preventDefault()
//         this.props.formSubmitCallback(
//             this.state.name,
//             this.state.alias,
//             this.state.team
//         )
//         this.props.history.push('/list')
//     }
    
//     onNameChange(event){
        
//         this.setState({name: event.target.value})
//     }

//     onAliasChange(event){
//          this.setState({alias: event.target.value})
//     }

//     onTeamChange(event){
//          this.setState({team: event.target.value})
//     }

//     render(){
//         return(
//            <form onSubmit={this.onFormSubmit}>
//                <h3>View Detail</h3>
//                <label>Name: <input type="text" onChange={this.onNameChange}/></label>
//                <label>Alias: <input type="text" onChange={this.onAliasChange} /></label>
//                <label>Team: <input type="text" onChange={this.onTeamChange}/></label>
//                <button>Submit</button>
//            </form>
//         )
//     }
// }
// export default Form;

import React from "react";

class Form extends React.Component {

    constructor(props) {
        super(props);
        //this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onBookNameChange = this.onBookNameChange.bind(this)
        this.onAuthorNameChange = this.onAuthorNameChange.bind(this)
        this.onLanguageChange = this.onLanguageChange.bind(this)
        this.onPriceChange = this.onPriceChange.bind(this)
        this.onDiscountChange = this.onDiscountChange.bind(this)
       

        this.state = {
            bookname: props.bokname,
            authorname: props.authorname,
            language: props.language,
            price: props.price,
            discount: props.discount
        }
    }
    // onFormSubmit(event) {
    //     event.preventDefault()
    //     this.props.formSubmitCallback(
    //         this.state.name,
    //         this.state.alias,
    //         this.state.team
    //     )
    //     this.props.history.push('/list')
    // }


    handleSubmit(event) {
        alert('A book was created: ' + this.state.value);
        event.preventDefault();
      }


    onBookNameChange(event){
        this.setState({name: event.target.value})
    }
    onAuthorNameChange(event){
        this.setState({alias: event.target.value})
    }
    onLanguageChange(event){
        this.setState({team: event.target.value})
    }
    onPriceChange(event){
        this.setState({team: event.target.value})
    }
    onDiscountChange(event){
        this.setState({team: event.target.value})
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Upload Book Details</h3>
                <label>Book Name: <input type="text" onChange={this.onBookNameChange}/></label><br/>
                <label>Author Name: <input type="text" onChange={this.onAuthorNameChange}/></label><br/>
                <label>Language: <input type="text" onChange={this.onLanguageChange}/></label><br/>
                <label>Price: <input type="text" onChange={this.onPriceChange}/></label><br/>
                <label>Discount: <input type="text" onChange={this.onDiscountChange}/></label><br/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;