const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  title: String,
  anoEstreno: String,
  duracion: String,
  // active: Boolean,
});

module.exports = mongoose.model('Films', userSchema);


// module.exports = mongoose.model('User', mongoose.Schema({
//   mail: String
// }));