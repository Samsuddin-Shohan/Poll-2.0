const router = require('express').Router();
const {homeGetController,createGetController,createPostController,pollsGetController,singlePollGetController,singlePollPostController} = require('./../controler/mainController');

router.get('/health',(req,res)=>{
    // throw new Error('something is wrong')
    res.send('All is well')
});
router.get('/',homeGetController);
router.get('/create',createGetController)
router.post('/create',createPostController)
router.get('/polls',pollsGetController)
router.get('/polls/:id',singlePollGetController);
router.post('/polls/:id',singlePollPostController)

module.exports = router;