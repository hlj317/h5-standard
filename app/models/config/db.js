let dbConf = "";

const DEV = {
    host: "172.16.3.30",
    user: "root",
    password: "root",
    database: "beibei_wxmp",
    account_table: "movie_login",
    account_table_field: ["username", "password"],
    movie_table: "movie_list",
    movie_table_field: ["doubanId", "title", "rate", "poster", "type"]
};

const PRO = {
    host: "rm-bp1i82w9q3dkk74ll125010.mysql.rds.aliyuncs.com",
    user: "hlj317",
    password: "@Abc$05906107#",
    database: "movie",
    account_table: "movie_login",
    account_table_field: ["username", "password"],
    movie_table: "movie_list",
    movie_table_field: ["doubanId", "title", "rate", "poster", "type"]
};

if (process.env.NODE_ENV === "dev") {
    dbConf = DEV;
} else {
    dbConf = PRO;
}

module.exports = dbConf;
