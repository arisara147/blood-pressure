var db = require('../db-config');

exports.getDoctorAll = function (callback) {
    let sql = `SELECT * FROM doctor`;
    db.query(sql, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.getDoctor = function (id, callback) {
    let sql = `SELECT * From doctor WHERE dr_id = ?`;
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.insertDoctor = function (data, callback) {
    let sql = "INSERT into doctor set ?";

    db.query(sql, [data], function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.updateDoctor = function (id, data, callback) {
    let sql = "update doctor set ? where dr_id = ?";
    db.query(sql, [data, id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.deleteDoctor = function (id, callback) {
    let sql = "DELETE from doctor where dr_id = ?";
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}