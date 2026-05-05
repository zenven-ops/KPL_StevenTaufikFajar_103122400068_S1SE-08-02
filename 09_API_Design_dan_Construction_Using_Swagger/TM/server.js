const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const nama = data.nama;
                const tebakan = data.tebakan;

                if (!nama || tebakan === undefined) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ jawaban: "Format salah. Pastikan menyertakan 'nama' dan 'tebakan'." }));
                }

                let jumlahAscii = 0;
                for (let i = 0; i < nama.length; i++) {
                    jumlahAscii += nama.charCodeAt(i);
                }

                const targetAngka = (jumlahAscii % 100) + 1;

                let jawaban = "";
                if (tebakan === targetAngka) {
                    jawaban = `Benar sekali! Tebakannya adalah ${targetAngka}.`;
                } else if (tebakan > targetAngka) {
                    jawaban = "Tebakanmu terlalu tinggi!";
                } else if (tebakan < targetAngka) {
                    jawaban = "Tebakanmu terlalu rendah!";
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ jawaban: jawaban }));

            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ jawaban: "Format JSON tidak valid." }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});