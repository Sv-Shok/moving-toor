
import {connect} from "react-redux";
import React from "react";
import Reviews from "./Reviews";
import {getReviewsThunkCrt} from "../../../Redux/comments-reducer";
import Aos from 'aos';
import 'aos/dist/aos.css';
class ReviewsContainer extends React.Component {

    componentDidMount(){
        this.props.getReviewsThunkCrt();
        Aos.init({duration: 2000})
    };

    render() {
        return(
          <Reviews
              userReviews={this.props.userReviews}
              reviewsCount = {this.props.reviewsCount}
              isErrorReviews = {this.props.isErrorReviews}
          />
        )
    }
}


let mapStateToProps = (state)=>{
    return{
        userReviews: state.commentsPage.userReviews,
        reviewsCount: state.commentsPage.reviewsCount,
        isErrorReviews: state.commentsPage.isErrorReviews
    }
};

// let mapDispatchToProps = (dispatch)=>{
//     return{
//         onLoadReviews: (data)=>{
//             dispatch(loadReviewsActCr(data))
//         }
//     }
// };


export default connect(mapStateToProps, {getReviewsThunkCrt})(ReviewsContainer);