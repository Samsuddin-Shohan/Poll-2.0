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
const pollsGetController = async(req,res,next)=>{
  try{
    const polls = await pollDb.find({});
    res.render('polls',{polls});
}
catch(e){
    console.log(e);
}
  
}
const singlePollGetController = async(req,res,next)=>{
    const id = req.params.id;
    try{
        const poll = await pollDb.findById(id);
        console.log(poll);
        let options = [...poll.options];
        let result = [];
        options.forEach(opt => {
            let percantage;
            percantage = (opt.vote * 100)/poll.totalVote;

            result.push({
                ...opt._doc,
                percantage: percantage ? percantage : 0,

            })
            
        })
        console.log(result);
        res.render('singlePoll',{poll,result})
    }
    catch(e){
        console.log(e);
    }

}
const singlePollPostController = async (req,res,next)=>{
    const id = req.params.id;
    const optionId = req.body.option;
    try{
        // console.log(req.body,req.params);
        const poll = await pollDb.findById(id);
        let options = [...poll.options];
        let index = poll.options.findIndex(opt => opt.id === optionId);
        options[index].vote = poll.options[index].vote+1;
        let totalVote = poll.totalVote+1;
        console.log(totalVote);

        await pollDb.findOneAndUpdate(
            {_id:poll.id},
            {$set:{options,totalVote}}

        )
        // console.log(index);

        res.redirect('/create');
    }
    catch(e){
        console.log(e);
    }

}
module.exports ={
    homeGetController,
    createGetController,
    createPostController,
    pollsGetController,
    singlePollGetController,
    singlePollPostController
}