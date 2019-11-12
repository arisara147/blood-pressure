var db = require('../db-config');

exports.getPatientAll = function (callback) {
    let sql = `SELECT * FROM patient`;
    db.query(sql, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.getPatient = function (id, callback) {
    let sql = `SELECT * From patient WHERE p_id = ?`;
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.insertPatient = function (data, callback) {
    let sql = "INSERT into patient set ?";

    db.query(sql, [data], function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.updatePatient = function (id, data, callback) {
    let sql = "update patient set ? where p_id = ?";
    db.query(sql, [data, id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.deletePatient = function (id, callback) {
    let sql = "DELETE from patient where p_id = ?";
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}