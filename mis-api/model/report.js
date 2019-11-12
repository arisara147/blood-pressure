var db = require('../db-config');

exports.getReportAll = function (callback) {
    let sql = `SELECT * FROM report`;
    db.query(sql, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.getReport = function (id, callback) {
    let sql = `SELECT * From report WHERE rep_id = ?`;
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.insertReport = function (data, callback) {
    let sql = "INSERT into report set ?";

    db.query(sql, [data], function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.updateReport = function (id, data, callback) {
    let sql = "update report set ? where rep_id = ?";
    db.query(sql, [data, id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.deleteReport = function (id, callback) {
    let sql = "DELETE from report where rep_id = ?";
    db.query(sql, [id], function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}