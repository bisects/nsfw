export default function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Missing Spotify code");
  }

  res.send("Spotify callback works!");
}
