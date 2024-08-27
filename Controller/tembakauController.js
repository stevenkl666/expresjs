import db from "../connection.js";

export const getTembakau = (req, res) => {
  const sql = "SELECT * FROM Tembakau";
  db.query(sql, (error, result) => {
    res.send(result);
  });
};

export const getTembakauById = (req, res) => {
  const sql = `SELECT * FROM tembakau WHERE id=${req.query.id}`;
  db.query(sql, (error, result) => {
    res.json(result);
  });
};

export const createTembakau = (req, res) => {
  const { nama_tembakau, harga_tembakau, jenis_tembakau, rasa_tembakau } =
    req.body;
  const sql =
    "INSERT INTO tembakau (nama_tembakau, harga_tembakau, jenis_tembakau, rasa_tembakau) VALUES (?,?,?,?)";
  db.query(
    sql,
    [nama_tembakau, harga_tembakau, jenis_tembakau, rasa_tembakau],
    (error, result) => {
      if (error) {
        res.status(400);
        res.send(error);
      }
      res.status(201);
      res.json(result);
    }
  );
};

export const updateTembakau = (req, res) => {
  const id = req.params.id;

  const { nama_tembakau, harga_tembakau, jenis_tembakau, rasa_tembakau } =
    req.body;
  if (nama_tembakau || harga_tembakau || jenis_tembakau || rasa_tembakau || id ) {
    const query = `UPDATE tembakau SET nama_tembakau = "${nama_tembakau}", harga_tembakau = "${harga_tembakau}", jenis_tembakau = "${jenis_tembakau}", rasa_tembakau = "${rasa_tembakau}"  WHERE  id = ${id}`;

    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.message);
      res.json(result);
    });
  } else {
    res.send("Isi body nya");
  }
};

export const deleteTembakau = (req, res) => {
  const id = req.query.id;
  const sql = "DELETE FROM tembakau WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("data berhasil dihapus");
  });
};
