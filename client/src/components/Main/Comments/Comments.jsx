import React from 'react';
import style from './Comments.module.css';
import {Field, reduxForm} from 'redux-form';
import Comment from "./Comment/Comment";
import ModalWindow from "../../ModalWindow/ModalWindow";
import Loader from "./Loader/Loader";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {RenderField} from "../../Common/FormsControls/FormsControls";
import ErrorIndicator from "../../ErrorIndicator/ErrorIndicator";
import {RenderRatingField} from "../../RatingStar/RatingStar";


const Comments = (props)=> {
        let commentElements = props.comments.map((el, index) => {
            return <Comment
                message={el.message}
                title = {el.title} date = {el.date}
                ratingStar = {el.ratingStar}
                key = {index}
            />
        }).reverse();

        let addNewComment = (values) => {
            if (values.newCommentBody !== undefined && values.userName !== undefined) {
                props.addComment(values);
            }
        };


        return (
            <div className={style.section}>
                <div className={style.wrap}>
                    <ModalWindow
                        open = {props.modalMessage}
                        closeModalComments = {props.closeModalComments}
                        modalMessageInfo = {props.modalMessageInfo}
                    />
                    <AddCommentFormRedux
                        onSubmit={addNewComment}
                        buttonFreezeUnfreeze ={props.buttonFreezeUnfreeze}
                    />

                    {props.isFetched
                        ? commentElements
                        : props.isErrorComments ? <ErrorIndicator /> : <div className={style.loader}><Loader /></div>
                    }

                </div>

            </div>
        )

};

const maxLength15 = maxLengthCreator(15);
const maxLength300 = maxLengthCreator(300);

const CommentForm = (props)=>{
    return(
          <form onSubmit ={props.handleSubmit} className={style.formBox}>
              <div>
                      <Field
                          className={style.inputName}
                          name="userName"
                          component= {RenderField}
                          type="input"
                          placeholder="Ім'я"
                          validate={[required, maxLength15]}
                      />
              </div>
                <div>
                    <Field
                        className={style.textarea}
                        name = "newCommentBody"
                        component = {RenderField}
                        type = "text"
                        placeholder='Напишіть свій коментар'
                        validate={[required, maxLength300]}
                    />
                </div>
              <div className={style.ratingStar}>
                  <h2>Ваша оцінка</h2>
                  <Field
                      name="ratingStar"
                      initialStars={0}
                      starCount={5}
                      type="number"
                      starSize={30}
                      // topTxt={'Ваша оцінка'}
                      starsColor={"#ff821f"}
                      component={RenderRatingField}
                      validate={[required]}
                  />
              </div>
              <button disabled={props.buttonFreezeUnfreeze} className={style.buttonSend}>Додати</button>
          </form>
    )
};

const AddCommentFormRedux = reduxForm({
    form: 'commentAddForm'
})(CommentForm);

export default Comments;