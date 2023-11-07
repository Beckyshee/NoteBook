import { sqlConfig } from "../config/sqlConfig";
import sql from 'mssql';


export async function dbConnectService(){
            try {
                 let pool = await new sql.ConnectionPool(sqlConfig);
                  return pool; 
            } catch (error) {
                  console.log(error)
            }

}