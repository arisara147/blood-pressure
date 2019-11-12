var db = require('../db-config');

exports.getAppointAll = function (callback) {
    let sql = `SELECT appoints.app_date, appoints.app_time, doctor.dr_name, patient.p_name
    FROM appoints
    INNER JOIN doctor ON appoints.dr_id = doctor.dr_id
    INNER JOIN patient ON appoints.p_id = patient.p_id`;
    db.query(sql, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.getAppoint = function (id, callback) {
    let sql = `SELECT * From appoints WHERE app_id = ?`;
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.insertAppoint = function (data, callback) {
    let sql = "INSERT into appoints set ?";

    db.query(sql, [data], function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.updateAppoint = function (id, data, callback) {
    let sql = "update appoints set ? where app_id = ?";
    db.query(sql, [data, id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.deleteAppoint = function (id, callback) {
    let sql = "DELETE from appoints where app_id = ?";
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}