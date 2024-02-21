const { Schema, model } = require('mongoose');

// shcema for user model
const userSchema = new Schema(
  {
    // username with properties
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    // email with properties
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match a valid email address']
    },
    // thoughts implementation
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // friends array
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    // json format
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// friend count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// export model
const User = model('User', userSchema);
module.exports = User;