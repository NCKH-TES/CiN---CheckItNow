const User = require('../Model/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');


//CREATE NEW TOKEN
const signToken = id => {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    })
}

//LOGIN WITH GOOGLE
exports.login = catchAsync(async (req, res, next) => {
    const [user, created] = await User.findOrCreate({
        where: {
            user_id: req.user.id
        },
        defaults: {
            user_name: req.user.displayName,
            email: req.user.email,
            provider: req.user.provider,
        }
    })
    const token = signToken(user.user_id);
    res.status(200).json({
        status: 'Success',
        token, 
    })
});


exports.protect = catchAsync(async (req, res, next) => {
    let token;
    //Check JWT and getting token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
        token = req.headers.authorization.split(' ')[1];
    if(!token) return next(new AppError('You are not login', 401));
    //verify token
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decode.id);
    //Check user exist;
    if(!user) return next(new AppError(404, 'User not belong exist'));
    //Send current user
    req.user = user;
    next();
})