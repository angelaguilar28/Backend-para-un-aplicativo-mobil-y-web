const app = require ('./app');
const {connect} = require ('./db')

async function main(){
    //DB connection
    await connect();
    //Express Application
    app.listen(4000);
    console.log('Server on port 4000')
}

main();