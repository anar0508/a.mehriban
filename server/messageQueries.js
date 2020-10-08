const postMessage = async (query, connection, req, res) => {
  const { name, email, message, date } = req.body;
  let addMessageSQL = `INSERT INTO messages (name, email, message, date) VALUES (${connection.escape(
    name
  )},${connection.escape(email)}, ${connection.escape(
    message
  )}, ${connection.escape(date)})`;

  try {
    await query(addMessageSQL);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { postMessage };
