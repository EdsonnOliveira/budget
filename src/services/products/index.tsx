import { ResultSet, Transaction } from "react-native-sqlite-storage";
import db from "../database";
import { Products } from "./models";

export interface Models extends Products {}

db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
        'Products ' +
        '(ID INTEGER PRIMARY KEY NOT NULL, ' +
        'Name TEXT, ' +
        'Price TEXT, ' +
        'BarCode TEXT, ' +
        'QT TEXT)',
        [],
        () => (null)
    )
})

const listAll = () => {
    return new Promise<Models[]>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    SELECT
                        *
                    FROM
                        Products
                `,
                [],
                (tx: Transaction, result: ResultSet) => {
                    if (result.rows.length > 0) {
                        var array: Products[] = []
                        for (let i = 0; i < result.rows.length; i++) {
                            let json: Products = {
                                id: result.rows.item(i).ID,
                                name: result.rows.item(i).Name,
                                price: String(result.rows.item(i).Price).replace(',', '.'),
                                barCode: result.rows.item(i).BarCode,
                                qt: result.rows.item(i).QT,
                            }
                            array.push(json)
                        }
                        resolve(array)
                    } else reject(result)
                }
            )
        })
    })
}

const insert = (obj: Models) => {
    return new Promise<Models>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    INSERT INTO Products (Name, Price, BarCode, QT)
                    VALUES (?, ?, ?, ?)
                `,
                [obj.name, obj.price, obj.barCode, obj.qt],
                (_: any, { rowsAffected, insertId }: any) => {
                    if (rowsAffected > 0) resolve(insertId)
                    else reject('Error inserting obj: ' + JSON.stringify(obj))
                }
            )
        })
    })
}

const update = (obj: Models) => {
    return new Promise<Models>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    UPDATE Products
                    SET Name = ?, Price = ?, BarCode = ?, QT = ?
                    WHERE ID = ?
                `,
                [obj.name, obj.price, obj.barCode, obj.qt, obj.id],
                (_: any, { rowsAffected, insertId }: any) => {
                    if (rowsAffected > 0) resolve(insertId)
                    else reject('Error updating obj: ' + JSON.stringify(obj))
                }
            )
        })
    })
}

const del = (obj: Models) => {
    return new Promise<string>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    DELETE FROM Products
                    WHERE ID = ?
                `,
                [obj.id],
                (tx: Transaction, result: ResultSet) => {
                    resolve(String(result.rows.length))
                },
            )
        })
    })
}

export default {
    listAll,
    insert,
    update,
    del
}