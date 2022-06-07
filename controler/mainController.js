const pollDb = require('./../models/PollDb');
const homeGetController = (req,res,next)=>{
    res.render('home');
}
const createGetController = (req,res,next)=>{
    res.render('create');
}
const createPostController = async(req,res,next)=>{
    // console.log(req.body);
    let {title,description,options}=req.body;
    options = options.map(opt => {
        return{
            name:opt,
            vote:0
        }
    });
    console.log(options);
    const poll = new pollDb({
        title,
        description,
        options
    })
    try{
        await poll.save();
        res.redirect('/create');
    }
    catch(e){
        console.log(e);
    }

   
}

module.exports ={
    homeGetController,
    createGetController,
    createPostController
}