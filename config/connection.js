const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error) => {
  if(error) {
    console.log("Error with MongoDB's connectivity");
  }
  else {  
    console.log("Successful connection with MongoDB Server");  
  }
});
mongoose.set('useCreateIndex', true);