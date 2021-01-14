
import {connect} from "react-redux";
import Comments from "./Comments";
import React from "react";
import {downloadCommentsActCr, limitCommentsActCr,
        getCommentsThunkCrt, addCommentsThunkCrt
} from "../../../Redux/comments-reducer";
import Aos from 'aos';
import 'aos/dist/aos.css';


 class CommentsContainer extends React.Component {
     componentDidMount(){
         this.props.getComments();
         Aos.init({duration: 1000})
     };



     // async addComment(values){
     //     this.props.buttonFreeze(true);
     //     let commentData = await commentsAPI.fetchAddData(values);
     //     if(commentData.status === true){
     //         this.props.limitComments(commentData);
     //         this.props.resetForm();
     //         this.props.buttonFreeze(false);
     //
     //     }else{
     //         this.props.addCommentData(commentData);
     //         this.props.resetForm();
     //         this.props.buttonFreeze(false);
     //     }
     // };

     render() {

         return(
             <Comments {...this.props} addComment={this.props.addCommentData}/>
         )
     }
 };


let mapStateToProps = (state)=>{
    return{
        comments: state.commentsPage.comments,
        modalMessage: state.commentsPage.modalMessage,
        modalMessageInfo: state.commentsPage.modalMessageInfo,
        buttonFreezeUnfreeze: state.commentsPage.buttonFreezeUnfreeze,
        isErrorComments: state.commentsPage.isErrorComments,
        isFetched: state.commentsPage.isFetched
    }
};

// let mapDispatchToProps = (dispatch)=>{
//     return{
//         limitComments: (commentData)=>{
//             dispatch(limitCommentsActCr(commentData));
//         },
//         addCommentData: (commentData)=>{
//             dispatch(addCommentActionCreator(commentData));
//         },
//         resetForm: ()=>{
//             dispatch(reset('commentAddForm'))
//         },
//         updateData: (data)=> {
//            dispatch(downloadCommentsActCr(data));
//        },
//         closeModalComments: (value)=>{
//            dispatch(limitCommentsActCr(value));
//        },
//         buttonFreeze:(bool)=>{
//             dispatch(buttonFreezeActCr(bool));
//         }
//     }
// };


export default connect(mapStateToProps, {
    limitComments: limitCommentsActCr,
    updateData: downloadCommentsActCr,
    closeModalComments: limitCommentsActCr,
    getComments: getCommentsThunkCrt,
    addCommentData: addCommentsThunkCrt
})(CommentsContainer);
