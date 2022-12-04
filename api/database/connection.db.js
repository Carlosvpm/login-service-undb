import { createConnection } from "mysql2";
export const connection = createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "new_schema_for_docker_test",
  port: 3306,
});

export async function connectionBD() {
  try {
    console.log("INICIANDO A CONNEXÃO COM O BANCO DE DADOS...");
    console.time("connection");
    connection.connect();
    console.timeEnd("connection");
  } catch (err) {
    console.error("FALHA NA CONEXÃO COM O BANCO DE DADOS...");
  }
  console.log("CONEXÃO BEM SUCEDIDA...");
}
