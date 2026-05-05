// @ts-nocheck
import express from "express";
import { specs, swaggerUi } from "./swagger.js";

const app = express();

const PORT = 8000;
const HOSTNAME = "localhost";

app.use(express.json());
//Midleware untuk OpenAPI Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const daftarFilm = [];

/**
 * @swagger
 * /film:
 *   get:
 *     summary: Daftar film yang di simpan
 *     responses:
 *       200:
 *         description: Daftar film berhasil diambil
 *       404:
 *         description: Daftar film tidak ditemukan
 */

//ambil semua film
app.get('/film', (req, res) => {
    return res.status(200).json(daftarFilm);
})
/**
 * @swagger
 * /film/{id}:
 *   get:
 *     summary: Ambil satu film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari film yang ingin dicari
 *     responses:
 *       200:
 *         description: Film berhasil ditemukan
 *       404:
 *         description: Film tidak ditemukan
 */
// ambil satu film
app.get('/film/:id', (req, res)=>{
    const film = daftarFilm.find(m => m.id ===
        parseInt(req.params.id));
        if(!film){
            return res.status(404);
        }
        return res.status(200).json(film);
})

/**
 * @swagger
 * /film:
 *   post:
 *     summary: Tambah film baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Film berhasil ditambahkan
 */
//tambah film baru
app.post('/film', (req, res) => {
    const film = {
        id: daftarFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };
    daftarFilm.push(film);
    return res.status(201).json(film);
})

/**
 * @swagger
 * /film/{id}:
 *   delete:
 *     summary: Hapus film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari film yang ingin dihapus
 *     responses:
 *       200:
 *         description: Film berhasil dihapus
 *       404:
 *         description: Film tidak ditemukan
 */
//hapus film
app.delete('/film/:id', (req, res)=>{
    const indeksFilm = daftarFilm.findIndex(f => f.id
        === Number(req.params.id));
        if (indeksFilm === -1){
            return res.status(404)
        }
        const filmDihapus = daftarFilm.splice(indeksFilm,1);
        return res.json(filmDihapus);
    })


app.listen(PORT, HOSTNAME, () => {
    console.log(`paleden berjalan di ${HOSTNAME}:${PORT}`);
});
