import * as axios from "axios";


const instance =  axios.create({
    baseURL: "/api/post"
});

export const commentsAPI = {
   async fetchUpdateData(){
        return instance.get()
            .then(response => response)
            .then((comments) => {
                return comments.data
            });
    },

   async fetchAddData({newCommentBody: message, userName: title, ratingStar}){
    return instance.post('',{title, message, ratingStar})
        .then(response => response)
        .then((comments) => {
            return comments.data
        });
    },
    async getReviews(){
        return instance.get('/reviews')
            .then(response => response)
            .then((comments) => {
                return comments.data
            });
    }
};

