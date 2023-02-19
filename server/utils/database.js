const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
const connectDb = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(con => {
    console.log(`Mongodb is connected to the host ${con.connection.host}`);
  }).catch((err) => {
    console.log(err.message);
    process.exit(1)
  })
}

module.exports = connectDb