import { ResultSet, Transaction } from "react-native-sqlite-storage";
import db from "../../database";
import Items from "./models";

export interface Models extends Items {}

db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
        'SalesItems ' +
        '(ID INTEGER PRIMARY KEY NOT NULL, ' +
        'IDSale INTEGER, ' +
        'Sequence INTEGER, ' +
        'Name TEXT, ' +
        'PriceUnit TEXT, ' +
        'PriceTotal TEXT, ' +
        'BarCode TEXT, ' +
        'QT TEXT)',
        [],
        () => (null)
    )
})

const listAll = (obj: Models) => {
    return new Promise<Models[]>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    SELECT
                        *
                    FROM
                        SalesItems
                    WHERE
                        IDSale = ?
                `,
                [obj.idSale],
                (tx: Transaction, result: ResultSet) => {
                    if (result.rows.length > 0) {
                        var array: Models[] = []
                        for (let i = 0; i < result.rows.length; i++) {
                            let json: Models = {
                                id: result.rows.item(i).ID,
                                sequence: result.rows.item(i).Sequence,
                                name: result.rows.item(i).Name,
                                priceUnit: String(result.rows.item(i).PriceUnit).replace(',', '.'),
                                priceTotal: String(result.rows.item(i).PriceTotal).replace(',', '.'),
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

const findValues = (obj: Models) => {
    return new Promise<Models>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    SELECT
                        sum(qt) as QT,
                        sum(priceTotal) as PriceTotal
                    FROM
                        SalesItems
                    WHERE
                        IDSale = ?
                `,
                [obj.idSale],
                (tx: Transaction, result: ResultSet) => {
                    if (result.rows.length > 0) {
                        let json: Models = {
                            qt: result.rows.item(0).QT,
                            priceTotal: result.rows.item(0).PriceTotal,
                        }

                        resolve(json)
                    }
                    else reject(result)
                }
            )
        })
    })
}

const insert = (obj: Models) => {
    return new Promise<string>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    INSERT INTO SalesItems (IDSale, Sequence, Name, PriceUnit, PriceTotal, BarCode, QT)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `,
                [obj.idSale, obj.sequence, obj.name, obj.priceUnit, obj.priceTotal, obj.barCode, obj.qt],
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
                    UPDATE SalesItems
                    SET PriceUnit = ?, PriceTotal = ?, QT = ?
                    WHERE ID = ?
                `,
                [obj.priceUnit, obj.priceTotal, obj.barCode, obj.qt, obj.id],
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
                    DELETE FROM SalesItems
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
    findValues,
    insert,
    update,
    del
}