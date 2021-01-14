const express = require('express');
const router = express.Router();
const Post = require('../modules/Post');
const cookie = require('cookie');
const cookieIdGenerate = require('../util/cookieGenerator');
const isCookie = require('../util/isCookie');


router.get('/', async (req, res)=>{
   try {

       const posts = await Post.find({});
       // console.log("Url: " + req.url);
       // console.log("Тип запроса: " + req.method);
       // console.log("User-Agent: " + req.headers["user-agent"]);
       // console.log("Все заголовки");
       // console.log(req.headers);
       // console.log(`IP-адрес ${req.headers['x-forwarded-for']}`);
       // console.log(arrIP);

       // res.setHeader('Access-Control-Allow-Origin', '*');
       // res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
       // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
       // res.setHeader('Access-Control-Allow-Credentials', 'true');

       res.status(200).json(posts)
   }catch (err) {
       console.error(err.message);
       res.status(500).send('Server error');
   }
});

router.get('/reviews', async (req, res)=>{
    try {
      const posts = await Post.find().sort({ $natural: -1 }).limit(3);
      const count = await Post.find().count();
        res.status(200).json({posts, count});
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});

router.post('/', async (req, res)=>{
    try{
        if(!isCookie(req.headers.cookie, 'tempCookie')){
            let mess = req.body.message.replace(/\n+/g, ' ').trim().replace(/\s+/g, ' ').trim();
            const postData = {
                title: req.body.title,
                message: mess,
                ratingStar: req.body.ratingStar,
            };
            const post = new Post(postData);

            await post.save();

            let idCookie =  cookieIdGenerate();
             res.setHeader('Set-Cookie', cookie.serialize('tempCookie', String(idCookie), {
                maxAge: 60 // 60 sec
            }));
           return  res.status(201).json({post, messageInfo: 'Дякуємо за відгук!!!'});

        }else if(req.headers.cookie){
            res.status(200).json({
                status: true,
                message: 'Ви вже додали коментар, додати наступний ви можете через 24 год'
            });
        }
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});


router.delete('/:id', async (req, res)=>{
  await  Post.remove({_id: req.params.id});
    res.status(200).json({
        message: 'Видалено'
    })
});

module.exports = router;