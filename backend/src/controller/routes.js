const express = require("express");
const router = express.Router();
const PlantModel = require("../model/PlantSchema");
const auth = require("../middleware/auth");


router.post("/add", auth, async (req, res) => {
  try {
    const { name, species, description, imageUrl } = req.body;

    if (!name || !species || !description || !imageUrl) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const newPlant = new PlantModel({
      ...req.body,
      created_by: req.user._id,
    });

    await newPlant.save();

    res.status(201).json({ message: "Plant added successfully", plant: newPlant });
  } catch (error) {
    console.error("Error adding plant:", error);
    res.status(500).json({ message: "Failed to add plant", error });
  }
});



router.get("/all", async (req, res) => {
  try {
    const plants = await PlantModel.find(); 
    res.status(200).json(plants);
  } catch (error) {
    console.error("Error fetching plants:", error);
    res.status(500).json({ message: "Failed to fetch plants", error });
  }
});



router.get("/all/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await PlantModel.findById(id);

    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    res.status(200).json(plant);
  } catch (error) {
    console.error("Error fetching plant:", error);
    res.status(500).json({ message: "Failed to fetch plant", error });
  }
});

router.get("/all/by-user/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;
    const plants = await PlantModel.find({ created_by: userId });

    if (!plants.length) {
      return res.status(404).json({ message: "No plants found for this user" });
    }

    res.status(200).json(plants);
  } catch (error) {
    console.error("Error fetching plants by user:", error);
    res.status(500).json({ message: "Failed to fetch plants", error });
  }
});




router.put("/change/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, species, description, imageUrl } = req.body;

    if (!name || !species || !description || !imageUrl) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const updatedPlant = await PlantModel.findByIdAndUpdate(
      id,
      { name, species, description, imageUrl },
      { new: true }
    );

    if (!updatedPlant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    res.status(200).json({ message: "Plant updated successfully", plant: updatedPlant });
  } catch (error) {
    console.error("Error updating plant:", error);
    res.status(500).json({ message: "Failed to update plant", error });
  }
});


router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlant = await PlantModel.findByIdAndDelete(id);

    if (!deletedPlant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    res.status(200).json({ message: "Plant deleted successfully", plant: deletedPlant });
  } catch (error) {
    console.error("Error deleting plant:", error);
    res.status(500).json({ message: "Failed to delete plant", error });
  }
});

module.exports = router;