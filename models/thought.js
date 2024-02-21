const { Schema, model } = require('mongoose');

// schema for reaction
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal) //date format
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// schema for thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal) // date format
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema] // reactions implementation
  },
  {
    // json formatting
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// export thought
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;