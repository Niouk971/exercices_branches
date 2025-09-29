import express from "express";
import data from "./data.json" with { type: "json" };
import cors from "cors";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config();


const app = express();
// const PORT = process.env.PORT || 3000;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});


app.use(express.json());

app.use(cors({ origin: "http://127.0.0.1:5500/menu" }));

// app.use(cors());


const frontendPath = path.join(process.cwd(), "../nodejs_frontend");
app.use(express.static(frontendPath));


app.get("/", (req, res) => {
    res.send("Accueil");
});


// Ajoutez cette fonction pour tester la connexion
const testDbConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('Connexion à la base de données réussie !');
        client.release();
    } catch (err) {
        console.error('Erreur de connexion à la base de données:', err);
    }
};

// Appelez la fonction de test
testDbConnection();

// Exemple de requête pour récupérer les plats depuis la base de données
app.get("/menus", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM menus');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

app.get("/menu/:id", (req, res) => {
    const id = Number(req.params.id);
    const plat = data.find(p => p.id === id);
    if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });
    res.json(plat);
});

app.get("/orders", (req, res) => {
    res.send("Coucou");
});

app.post("/orders", (req, res) => {
    console.log("[POST /orders] body reçu:", req.body);
    const { id, plate, clientName } = req.body;
    if (!id || !plate || !clientName) {
        return res.status(400).json({ error: "Champs manquants ou invalides" });
    }
    console.log(`[COMMANDE REÇUE] id=${id} | plat="${plate}" | client="${clientName}"`);
    return res.status(201).json({ ok: true, message: `Commande reçue ${plate} pour ${clientName}` });
});

app.listen(3000, () => { console.log("Serveur lancé sur http://localhost:3000"); });
