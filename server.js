const express = require("express");
const cors = require("cors");

const server = express();
const PORT = 5000;

server.use(express.json());
server.use(cors());

server.get("/api/artworks", async (req, res) => {
  try {
    const response = await fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?department=Greek%20and%20Roman%20Art&has_image=1&department=Photography&?collection=Sculpture&?type=Sculpture"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

server.get("/api/artworks/paintings", async (req, res) => {
  try {
    const response = await fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?department=Greek%20and%20Roman%20Art&has_image=1"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

server.get("/api/artworks/photography", async (req, res) => {
  try {
    const response = await fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?department=Photography&has_image=1"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

server.get("/api/artworks/sculptures", async (req, res) => {
  try {
    const response = await fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?collection=Sculpture&has_image=1"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

server.get("/api/artworks/statues", async (req, res) => {
  try {
    const response = await fetch(
      "https://openaccess-api.clevelandart.org/api/artworks/?type=Sculpture&has_image=1"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

server.get("/api/artworks/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const response = await fetch(
      `https://openaccess-api.clevelandart.org/api/artworks/${ID}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
