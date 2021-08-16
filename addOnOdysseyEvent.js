require('dotenv').config();
const axios = require('axios');

(async function run() {
  const eventId = process.argv[2];
  const url = `https://api.wildcodeschool.com/api/v3/admin/events/${eventId}`;
  const recLink = process.argv[3];
  const requestConfig = {
    headers: {
      Authorization: `Bearer ${process.env.ODYSSEY_JWT}`,
    },
  };

  try {
    // const event = await axios.get(url, requestConfig).then((res) => res.data);
    await axios.put(
      url,
      {
        event: {
          body: {
            resources: {
              fr: `${recLink}\n# 🔴 Enregistrement`,
              en: `${recLink}\n# 🔴 Recording`,
            },
          },
        },
      },
      requestConfig
    );
  } catch (err) {
    console.error(err);
  }
})();
