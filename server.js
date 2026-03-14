const express = require("express");
const fetch = require("node-fetch"); // install with: npm install node-fetch
const app = express();

app.use(express.json());

// Your Discord webhook
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1482323920903209101/RV4w27fxPq8Nn9uP4PoS13JvRUkZgRAot2LaaWGPKCpDQiY-HIptiU38Q8fVA0IO7KPg";

app.post("/sendDiscord", async (req, res) => {
    const { phone, cart } = req.body;
    if (!phone || !cart) return res.status(400).send("Missing data");

    const message = `📦 **New Order**\n**Phone:** ${phone}\n**Cart:** ${cart.map(i => `${i.name} ($${i.price.toLocaleString()})`).join(", ")}`;

    try {
        await fetch(DISCORD_WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: message })
        });
        res.send("Sent to Discord!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error sending to Discord");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));