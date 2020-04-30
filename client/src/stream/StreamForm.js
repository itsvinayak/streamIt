import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {
  renderInput = (formProps) => {
    const className = ` field ${formProps.meta.error && formProps.meta.touched ? 'error' : '' }`
    return(
      <div className={className}>
         <label>{formProps.label}</label>
        <input {...formProps.input} />
        {this.renderError(formProps.meta)}
      </div>
   );
          // this can also be done _ _ _ _
         // <input
        //       onChange={formProps.input.onChange}
       //       value={formProps.input.value}
      // />
     // ------------------------------------------
  }

  renderError({ error,touched }){
    if(touched && error){
      return <div className="ui left red tiny header ">* {error}</div>
    }
  }

  onSubmit = (formValues) => {
    // api service
    this.props.onSubmit(formValues);



  }

  render() {
      return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui large error form segment">
          <div className="two fields">

                  <Field
                    type="text"
                    className="field"
                    name="title"
                    component={this.renderInput}
                    label="Title :"
                  />

                  <Field
                    type="text"
                    className="field"
                    name="description"
                    component={this.renderInput}
                    label="Description :"
                  />

          </div>

         <button className="ui primary button">Start stream
         <i className="icon hand point right"></i>
         </button>
       </form>
      );
    }
}


const validate = (values) => {
   let error = {} ;
   if(!values.title){
      error.title = 'Stream need a title';
   }
   if(!values.description){
     error.description = 'Stream need a description';
   }
   return error;
};

export default reduxForm({
    form:'StreamForm',
    validate
})(StreamForm);
