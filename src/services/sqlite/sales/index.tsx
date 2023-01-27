import { ResultSet, Transaction } from "react-native-sqlite-storage";
import db from "../database";
import Sales from "./models";

export interface Models extends Sales {}

db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
        'Sales ' +
        '(ID INTEGER PRIMARY KEY NOT NULL, ' +
        'IDPayment INTEGER, ' +
        'Descount TEXT, ' +
        'SubTotal TEXT, ' +
        'Total TEXT, ' +
        'Date TEXT, ' +
        'Time TEXT, ' +
        'Situation INTEGER)',
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
                        Sales
                    WHERE
                        Situation = ?
                `,
                ['2'],
                (tx: Transaction, result: ResultSet) => {
                    if (result.rows.length > 0) {
                        var array: Models[] = []
                        for (let i = 0; i < result.rows.length; i++) {
                            let json: Models = {
                                id: result.rows.item(i).ID,
                                idPayment: result.rows.item(i).IDPayment,
                                descount: String(result.rows.item(i).Descount).replace(',', '.'),
                                subTotal: String(result.rows.item(i).SubTotal).replace(',', '.'),
                                total: String(result.rows.item(i).Total).replace(',', '.'),
                                date: result.rows.item(i).Date,
                                time: result.rows.item(i).Time,
                                situation: result.rows.item(i).Situation,
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

const findOpened = () => {
    return new Promise<Models>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    SELECT
                        *
                    FROM
                        Sales
                    WHERE
                        Situation = ?
                    LIMIT
                        1
                `,
                ['1'],
                (tx: Transaction, result: ResultSet) => {
                    if (result.rows.length > 0) {
                        let json: Models = {
                            id: result.rows.item(0).ID,
                            idPayment: result.rows.item(0).IDPayment,
                            descount: String(result.rows.item(0).Descount).replace(',', '.'),
                            subTotal: String(result.rows.item(0).SubTotal).replace(',', '.'),
                            total: String(result.rows.item(0).Total).replace(',', '.'),
                            date: result.rows.item(0).Date,
                            time: result.rows.item(0).Time,
                            situation: result.rows.item(0).Situation,
                        }
                        resolve(json)
                    } else reject(result)
                }
            )
        })
    })
}

const findOne = (obj: Models) => {
    return new Promise<Models>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    SELECT
                        *
                    FROM
                        Sales
                    WHERE
                        ID = ?
                    LIMIT
                        1
                `,
                [obj.id],
                (tx: Transaction, result: ResultSet) => {
                    if (result.rows.length > 0) {
                        let json: Models = {
                            id: result.rows.item(0).ID,
                            idPayment: result.rows.item(0).IDPayment,
                            descount: String(result.rows.item(0).Descount).replace(',', '.'),
                            subTotal: String(result.rows.item(0).SubTotal).replace(',', '.'),
                            total: String(result.rows.item(0).Total).replace(',', '.'),
                            date: result.rows.item(0).Date,
                            time: result.rows.item(0).Time,
                            situation: result.rows.item(0).Situation,
                        }
                        resolve(json)
                    } else reject(result)
                }
            )
        })
    })
}

const findValues = (obj: Models) => {
    return new Promise<Models[]>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    SELECT
                        ID,
                        Total
                    FROM
                        Sales
                    WHERE
                        Date BETWEEN ? AND ?
                        AND Situation = ?
                `,
                [obj.date, obj.date2 || obj.date, '2'],
                (tx: Transaction, result: ResultSet) => {
                    if (result.rows.length > 0) {
                        var array: Models[] = []
                        for (let i = 0; i < result.rows.length; i++) {
                            let json: Models = {
                                id: result.rows.item(i).ID,
                                total: result.rows.item(i).Total != null ? String(result.rows.item(i).Total).replace(',', '.') : '0.00',
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
    return new Promise<string>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    INSERT INTO Sales (Date, Time, Situation)
                    VALUES (?, ?, ?)
                `,
                [obj.date, obj.time, '1'],
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
                    UPDATE Sales
                    SET IDPayment = ?, Descount = ?, SubTotal = ?, Total = ?, Situation = ?
                    WHERE ID = ?
                `,
                [obj.idPayment, obj.descount, obj.subTotal, obj.total, obj.situation, obj.id],
                (_: any, { rowsAffected, insertId }: any) => {
                    if (rowsAffected > 0) resolve(insertId)
                    else reject('Error updating obj: ' + JSON.stringify(obj))
                }
            )
        })
    })
}

const del = (obj: Models) => {
    return new Promise<Models>((resolve, reject) => {
        db.transaction((tx: Transaction) => {
            tx.executeSql(
                `
                    UPDATE Sales
                    SET Situation = ?
                    WHERE ID = ?
                    LIMIT 1
                `,
                ['3', obj.id],
                (_: any, { rowsAffected, insertId }: any) => {
                    if (rowsAffected > 0) resolve(insertId)
                    else reject('Error updating obj: ' + JSON.stringify(obj))
                }
            )
        })
    })
}

export default {
    listAll,
    findOpened,
    findOne,
    findValues,
    insert,
    update,
    del
}