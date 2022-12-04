import { createConnection } from "mysql";
export const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "161926",
  database: "pbl_web",
  port: 3307
});

export async function connectionBD() {
  try {
    console.log("INICIANDO A CONNEXÃO COM O BANCO DE DADOS...");
    console.time("connection");
    connection.connect();
    console.timeEnd("connection");
    console.log("CONEXÃO BEM SUCEDIDA...");
  } catch (err) {
    console.error("FALHA NA CONEXÃO COM O BANCO DE DADOS...");
  }
}




