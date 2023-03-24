// const mongoose = require("mongoose");

// const pressReleaseSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     body: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     date: {
//       type: Date,
//     //   required: true,
//     },
//     author: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     //   required: true,
//     },
//     company: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Company",
//     //   required: true,
//     },
//     tags: {
//       type: [String],
//     //   required: true,
//       lowercase: true,
//       trim: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// pressReleaseSchema.index({ tags: 1 });

// const PressRelease = mongoose.model("PressRelease", pressReleaseSchema);

// module.exports = PressRelease;
const mongoose = require("mongoose");

const pressReleaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    tags: {
      type: [String],
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

pressReleaseSchema.index({ tags: 1 });

const PressRelease = mongoose.model("PressRelease", pressReleaseSchema);

module.exports = PressRelease;
