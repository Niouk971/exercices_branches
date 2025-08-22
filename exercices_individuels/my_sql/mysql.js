import {Client} from "pg";

// Exemple de connectionString
const connectionString = 'postgresql://neondb_owner:npg_D81wpKArWavm@ep-gentle-queen-abf82igu-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Création du client
const client = new Client({
    connectionString,
});

async function run() {
    try {
        // Connexion
        await client.connect();

        // Exemple de requête SELECT
        const result = await client.query("select mangas.name, mangas.description, facts.fun_facts from mangas INNER JOIN facts ON mangas.fact_id = facts.id;");

        console.log("Résultats :", result.rows);
    } catch (err) {
        console.error("Erreur :", err);
    } finally {
        // Déconnexion
        await client.end();
    }
}

run();

console.log("Recherche : ", process.argv[2]);