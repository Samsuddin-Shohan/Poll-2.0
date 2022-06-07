const router = require('express').Router();
const {homeGetController,createGetController,createPostController} = require('./../controler/mainController');

router.get('/health',(req,res)=>{
    // throw new Error('something is wrong')
    res.send('All is well')
});
router.get('/',homeGetController);
router.get('/create',createGetController)
router.post('/create',createPostController)

module.exports = router;