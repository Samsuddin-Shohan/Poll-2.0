

const notFOundHandler = (req,res,next)=>{
    const error = new Error('Resource not Found');
    error.status = 404;
    next();
}
const errorHandler = (error,req,res,next)=>{
    if(error.status){
        res.status(404).json({message:error.message});
    }
    res.status(5000).json({message:"something is wrong in server"})
}

module.exports = {
    notFOundHandler,
    errorHandler
};