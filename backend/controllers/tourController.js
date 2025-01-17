import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res
      .status(200)
      .json({ success: true, message: "Successful created", data: savedTour });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to created. Try again" });
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successful updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successful deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Tour fetched successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};
export const getAllTour = async (req, res) => {
  try {
    const tour = await Tour.find({}).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Tour fetched successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const tour = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    res.status(200).json({
      success: true,
      message: "successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};
export const getFeaturedTour = async (req, res) => {
  try {
    const tour = await Tour.find({ featured: true }).populate("reviews");
    res.status(200).json({
      success: true,
      message: " successfully",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to Fetch" });
  }
};
