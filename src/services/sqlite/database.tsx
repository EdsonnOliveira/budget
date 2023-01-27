import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase(
    {
        name: 'Budget',
        location: 'default',
        createFromLocation: 1
    },
    () => {},
    error => { console.log(error) }
);

export default db;