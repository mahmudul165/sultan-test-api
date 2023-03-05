const JobPosting = require('../models/carrier.model');

exports.createJobPosting = async (req, res) => {
  try {
    const newJobPosting = new JobPosting(req.body);
    await newJobPosting.save();
    res.status(201).json(newJobPosting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getJobPostings = async (req, res) => {
  try {
    const jobPostings = await JobPosting.find();
    res.status(200).json(jobPostings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getJobPostingById = async (req, res) => {
  try {
    const jobPosting = await JobPosting.findById(req.params.id);
    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    res.status(200).json(jobPosting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateJobPosting = async (req, res) => {
  try {
    const jobPosting = await JobPosting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    res.status(200).json(jobPosting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteJobPosting = async (req, res) => {
  try {
    const jobPosting = await JobPosting.findByIdAndDelete(req.params.id);
    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    res.status(200).json({ message: 'Job posting deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
