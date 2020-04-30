import React from 'react';
import { connect } from 'react-redux';
import { fetchStream,editStream } from '../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValue) => {
      this.props.editStream(this.props.match.params.id,formValue);
    };

    render() {
        if (!this.props.stream){
          return (
            <div>loading. . .</div>
          )
        }
        return (
        <div>
          <h1 style={ { margin:'4%' }} > Edit Stream | {this.props.stream.title}</h1>
              <StreamForm
                 initialValues = {{ title: this.props.stream.title, description: this.props.stream.description }}
                 onSubmit={this.onSubmit}/>
       </div>
        );
      }


}


const mapStateToProps = (state, ownProps) =>{
  console.log(state);
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps,{ fetchStream,editStream })(StreamEdit);
