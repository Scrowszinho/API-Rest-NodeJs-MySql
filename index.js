const customExpress = require('./src/config/customExpress');
const app = customExpress();
const connection = require('./src/schema/connection');
const Tables = require('./src/schema/tables');

connection.connect(error=>{
    if(error){
        console.log(error);
    } else {
        console.log('Connection successful 🚀');
        Tables.init(connection);
        const app = customExpress();
        app.listen(3000, ()=> console.log('Server is up 🚀'));
    }
})
