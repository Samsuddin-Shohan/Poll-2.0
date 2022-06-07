

const notFOundHandler = (req,res,next)=>{
    console.log('not found handler invoked');
    const error = new Error('Resource not Found');
    error.status = 404;
    next(error);
}
const errorHandler = (error,req,res,next)=>{
    console.log('error handler invoked');
    if(error.status){
        res.status(error.status).json({
			message: error.message,
		});
    }
	res.status(500).json({ message: error.message });
}

module.exports = {
    notFOundHandler,
    errorHandler
};