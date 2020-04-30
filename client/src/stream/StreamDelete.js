import React from 'react';
import Modal from '../components/Modal';
import history from '../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream,deleteStream } from '../actions';



class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);

  }

  renderActionButton(){
    return(
        <React.Fragment>
          <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button red">
              Delete
          </button>
          <Link to='/' className="ui button primary">
              Cancel
          </Link>
        </React.Fragment>
    );
  }

  renderContent(){
    if (!this.props.streams){
        return 'Error, try to refresh page';
    }
    return ` Are you sure about deleting ${this.props.streams.title}`
  }

  render() {
      return(
           <Modal
             title = "Are you sure you want to delete this stream ?"
             content={this.renderContent()}
             actions={this.renderActionButton()}
             onDismiss={() => history.push('/stream/list')}
            />
      );
  }
}


const mapStateToProps = (state,ownProps) => {
        return { streams: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps,{ fetchStream,deleteStream })(StreamDelete);
