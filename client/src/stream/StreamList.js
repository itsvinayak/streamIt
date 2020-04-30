import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../actions';

class StreamList extends React.Component {
     componentDidMount() {
       this.props.fetchStreams();
       }

      renderAdminButton(stream){
        if(stream.userId === this.props.currentUserId && this.props.currentUserId !== null){
          return(
            <div className="right floated content">
              <Link to={`/stream/edit/${stream.id}`} className="ui button black">Edit</Link>
              <Link to={`/stream/delete/${stream.id}`} className="ui button red">Delete</Link>
            </div>
          );
        }
      }

      renderList = () => {
         return this.props.streams.map(stream => {
           return (
             <div className="item" key={stream.id} style={{padding: '1%'}}>
                {this.renderAdminButton(stream)}
               <i className="icon large middle aligned camera" />
               <div className="content">
                 <Link to={`/stream/show/${stream.id}`} className="header" >
                   {stream.title}
                 </Link>
                 <div className="description">
                  {stream.description}
                 </div>
               </div>
             </div>
           );
         });
      }

      renderCreateButton(stream){
        if(this.props.currentUserId){
          return (
            <div style={{textAlign:'right'}}>
               <Link to='/stream/new' className=" ui button primary">
                  Create Stream
              </Link>
           </div>
          );
        }
      }




      render() {
        return (
          <div>
          <div className="ui segment">
             <h1 className="">Streams</h1>
             <div className="ui celled list">
               {this.renderList()}
             </div>
          </div>
           {this.renderCreateButton()}
         </div>
        );
      }
}


const mapStateToProps = (state) => {
     return {
       streams: Object.values(state.streams),
       currentUserId: state.auth.userId
     };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
