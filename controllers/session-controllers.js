const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);

const mongo_uri = process.env.MONGO_URI;

function createSession(){
    const store = mongoDBStore({
        uri:mongo_uri,
        databaseName:"Shop",
        collection:"session"
    })
    return session({
        resave:false,
        saveUninitialized:false,
        store:store,
        secret:"monis"
    })
    
}

module.exports = createSession;
