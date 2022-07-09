import getConnection from "../database/database";

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT idalias,mail FROM language");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { idalias } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT idalias, mail FROM language WHERE idalias = ?",
      idalias
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addUsers = async (req, res) => {
  try {
    const { idalias, mail } = req.body;

    if (idalias === undefined || mail === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const Users = { idalias, mail };
    const connection = await getConnection();
    await connection.query("INSERT INTO language SET ?", Users);
    res.json({ message: "User added" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getUsers,
  getUser,
  addUsers,
};
