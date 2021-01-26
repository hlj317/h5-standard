const loginHandler = require("../models/handles/loginHandler.js");
const addAccountHandler = require("../models/handles/addAccountHandler.js");

const login = async function (ctx, next) {
    await ctx.render("movie/login", {
        title: "登录页面"
    });
    return next();
};

const register = async function (ctx, next) {
    await ctx.render("movie/register", {
        title: "注册页面"
    });
    return next();
};

const loginAccount = async function (ctx, next) {
    return await (new loginHandler()).handler(ctx, next);
};

const addAccount = async function (ctx, next) {
    return await (new addAccountHandler()).handler(ctx, next);
};

module.exports = {
    login,
    register,
    loginAccount,
    addAccount
};
