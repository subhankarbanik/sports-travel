import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// app.use(cors());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    })
  );
app.use(express.json());

let leads = [];

app.post("/lead", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newLead = {
    id: Date.now(),
    name,
    email,
    phone,
    message: message || "",
    createdAt: new Date(),
  };

  leads.push(newLead);

  console.log("New Lead Stored:", newLead);

  res.json({
    success: true,
    message: "Lead saved in memory",
    data: newLead,
  });
});

app.get("/leads", (req, res) => {
  res.json(leads);
});
app.get("/health", (req, res) => {
    res.json("health id fine");
  });

app.get("/lead", (req, res) => {
    res.send("POST enquiries to this endpoint.");
  });

app.listen(8000, () => console.log("Server running on port 8000"));


