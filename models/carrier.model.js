const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  vacancy: { type: Number, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  deadline: { type: Date, required: true },
  time: { type: String, required: true },
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;

