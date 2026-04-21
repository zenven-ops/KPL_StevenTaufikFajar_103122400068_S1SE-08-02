/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} txt Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(txt) {
  // Kita beri tahu VS Code secara eksplisit bahwa object ini mengikuti aturan structure.d.ts
  /** @type {import('./structure').RobotsTxt} */
  const result = {
    agents: {},
    Sitemap: []
  };

  let currentAgents = []; // Diubah jadi Array untuk menampung bot bertumpuk
  let isAgentBlock = false;
  const lines = txt.split(/\r?\n/);

  for (let line of lines) {
    const cleanLine = line.split('#')[0].trim();
    if (!cleanLine) continue;

    const separatorIdx = cleanLine.indexOf(':');
    if (separatorIdx === -1) continue;

    const key = cleanLine.substring(0, separatorIdx).trim().toLowerCase();
    const value = cleanLine.substring(separatorIdx + 1).trim();

    if (key === 'user-agent') {
      // Reset array jika kita mulai blok agen baru
      if (!isAgentBlock) {
        currentAgents = [];
        isAgentBlock = true;
      }

      const agent = value.toLowerCase();
      currentAgents.push(agent);

      if (!result.agents[agent]) {
        result.agents[agent] = {
          Allow: [],
          Disallow: []
        };
      }
    } else if (key === 'allow' || key === 'disallow') {
      isAgentBlock = false; // Selesai mengumpulkan agen

      if (value !== '') {
        // Distribusikan aturan ke semua agen yang bertumpuk
        currentAgents.forEach(agent => {
          if (key === 'allow') {
            result.agents[agent].Allow.push(value);
          } else {
            result.agents[agent].Disallow.push(value);
          }
        });
      }
    } else if (key === 'sitemap') {
      if (value !== '') {
        result.Sitemap.push(value);
      }
    } else if (key === 'host') {
      if (value !== '') {
        result.Host = value;
      }
    }
  }

  return result;
}

module.exports = parseRobots;