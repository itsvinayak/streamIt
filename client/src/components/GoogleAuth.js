import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        clientId:'716512941786-2roa0d8e78ruf8ot36pac2u8sdnlmrgh.apps.googleusercontent.com',
        scope: 'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
     });
    }

  onAuthChange = (isSignedIn) =>{
    isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
  };

  TosignIn = () =>{
    this.auth.signIn();
  };


  TosignOut = () =>{
    this.auth.signOut();
  };

  renderAuthButton(){
    if (this.props.isSignedIn == null){
       return (
         <div> loading . . .  </div>
       );
     }
     else if (this.props.isSignedIn){
       return (
          <button onClick={this.TosignOut} className="red ui google button">
           <i className="icon google"></i> logout
          </button>

       );
     }
     else{
       return (
         <div>
           <button onClick={this.TosignIn} className="red ui google button">
           <i className="icon google"></i> logIn
           </button>
         </div>
       );
     }
  }

  render() {
    return (
      <div className="">
         {this.renderAuthButton()}
      </div>
     );
    }

}


const mapStateToProps = ( state ) => {
    return { isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps,{ signIn,signOut })(GoogleAuth);
