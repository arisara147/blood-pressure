var db = require('../db-config');

exports.getTreatmentAll = function (callback) {
    let sql = `SELECT * FROM treatment`;
    db.query(sql, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.getTreatment = function (id, callback) {
    let sql = `SELECT * From treatment WHERE t_id = ?`;
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.insertTreatment = function (data, callback) {
    let sql = "INSERT into treatment set ?";

    db.query(sql, [data], function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.updateTreatment = function (id, data, callback) {
    let sql = "update treatment set ? where t_id = ?";
    db.query(sql, [data, id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.deleteTreatment = function (id, callback) {
    let sql = "DELETE from treatment where t_id = ?";
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}