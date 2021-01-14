
import moment from "moment";
import uk from  'moment/locale/uk';
import {commentsAPI} from "../api/api";
import {reset} from "redux-form";
const ADD_COMMENT = 'ADD-COMMENT';
const DOWNLOAD_COMMENTS = 'DOWNLOAD-COMMENTS';
const LIMIT_COMMENT = 'LIMIT-COMMENT';
const BUTTON_FREEZE = 'BUTTON-FREEZE';
const LOAD_REVIEWS = 'LOAD-REVIEWS';
const ERROR_COMMENTS = 'ERROR-COMMENTS';
const ERROR_REVIEWS = 'ERROR-REVIEWS';


let initialState = {
    modalMessage: false,
    modalMessageInfo: '',
    comments: [],
    buttonFreezeUnfreeze: false,
    userReviews: [],
    reviewsCount: 0,
    isErrorComments: false,
    isErrorReviews: false,
    isFetched: false
};

const commentsReducer = (state = initialState, action) =>{

    switch (action.type){
        case DOWNLOAD_COMMENTS:
            return {
                ...state,
                comments: payloadFormatDate(action.payload),
                isFetched: true
            };
        case ADD_COMMENT:
            return {
                ...state,
                modalMessage: true,
                modalMessageInfo: action.payload.messageInfo,
                comments: [
                    ...state.comments,
                    { ...action.payload.post, date: payloadFormatDate(action.payload.post.date)}
                    ]
            };
        case LIMIT_COMMENT:
            return{
              ...state,
                modalMessageInfo: action.payload.message,
                modalMessage: action.payload.status || action.payload,
            };
        case BUTTON_FREEZE:
            return{
                ...state,
                buttonFreeze: action.payload
            };
        case LOAD_REVIEWS:
            return{
                ...state,
                userReviews: shortReviewsText(action.payload.posts),
                reviewsCount: action.payload.count,
                isError: action.payload
            };
        case ERROR_COMMENTS:
            return{
                ...state,
                isErrorComments: action.payload
            };
        case ERROR_REVIEWS:
            return {
                ...state,
                isErrorReviews: action.payload
            };
        default:
            return state;
    }
};

const shortReviewsText = (reviewsArr)=>{
    return reviewsArr.map((item)=>{
        if(item.message.length > 160){
            return {...item, message: item.message.replace(/\n+/g, ' ').trim().slice(0, 160) + ' ...'}
        }else{
            return {...item}
        }

    })
};
const payloadFormatDate = (payload)=>{
    if(Array.isArray(payload)){
        return  payload.map((item)=> {
            return   {...item, date: moment(item.date).locale('uk').format('MMMM Do YYYY, h:mm:ss a')}
        });
    }
    return  moment(payload).locale('uk').format('MMMM Do YYYY, h:mm:ss a')

};

//action creators
export const addCommentActionCreator = (values) =>{
    return {
        type: ADD_COMMENT,
        payload: values
    }

};

export const limitCommentsActCr = (data)=>{
    return {
        type: LIMIT_COMMENT,
        payload: data
    }
};

export const downloadCommentsActCr = (data)=>{
    return {
        type: DOWNLOAD_COMMENTS,
        payload: data
    }
};

export const buttonFreezeActCr = (bool)=>{
    return {
        type: BUTTON_FREEZE,
        payload: bool
    }
};

export const loadReviewsActCr = (data)=>{
    return {
        type: LOAD_REVIEWS,
        payload: data
    }
};

export const errorCommentsActCr = ()=>{
    return {
        type: ERROR_COMMENTS,
        payload: true
    }
};

export const errorReviewsActCr = ()=>{
    return {
        type: ERROR_REVIEWS,
        payload: true
    }
};



// thunks
export const getCommentsThunkCrt = ()=>{
  return  (dispatch)=>{
        commentsAPI.fetchUpdateData()
            .then((data)=>{dispatch(downloadCommentsActCr(data))})
            .catch(()=>{dispatch(errorCommentsActCr())})
    };
};

export const addCommentsThunkCrt = (values)=>{
    console.log(values);
  return async (dispatch)=>{
          dispatch(buttonFreezeActCr(true));

          let commentData = await commentsAPI.fetchAddData(values);

          if(commentData.status === true){
              dispatch(limitCommentsActCr(commentData));
              dispatch(reset('commentAddForm'));
              dispatch(buttonFreezeActCr(false));

          }else{
             dispatch(addCommentActionCreator(commentData));
             dispatch(reset('commentAddForm'));
             dispatch(buttonFreezeActCr(false));
          }
  }
};

export const getReviewsThunkCrt = ()=>{
  return  (dispatch)=>{
      commentsAPI.getReviews()
          .then((data)=>{
              dispatch(loadReviewsActCr(data))
          })
          .catch(()=>{dispatch(errorReviewsActCr())})
    };
};



export default commentsReducer;