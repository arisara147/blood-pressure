const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");



// use model
const user = require("./model/users");
const doctor = require("./model/doctor");
const appoint = require("./model/appoint");
const patient = require("./model/patient");
const report = require("./model/report");
const treatment = require("./model/treatment");
const news = require("./model/news");

const app = express();
app.listen(9000);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    next();
});

app.get("/api/user/:id", function (req, res) {
    try {
        user.getUser(req.params.id, function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/user", function (req, res) {
    try {
        user.insertUser(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                user.getUser(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/user/:id", function (req, res) {
    try {
        user.updateUser(req.params.id, req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                user.getUser(req.params.id, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
})

app.delete("/api/user/:id", function (req, res) {
    try {
        user.deleteUser(req.params.id, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

////////////////////////////////////////////////////////////////////////////



app.get("/api/doctor", function (req, res) {
    try {
        doctor.getDoctorAll(function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/api/doctor/:id", function (req, res) {
    try {
        doctor.getDoctor(req.params.id, function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/doctor", function (req, res) {
    try {
        doctor.insertDoctor(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                doctor.getDoctor(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/doctor/:id", function (req, res) {
    try {
        doctor.updateDoctor(req.params.id, req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                doctor.getDoctor(req.params.id, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
})

app.delete("/api/doctor/:id", function (req, res) {
    try {
        doctor.deleteDoctor(req.params.id, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


///////////////////////////////////////////////////////////////////////


app.get("/api/appoint", function (req, res) {
    try {
        appoint.getAppointAll(function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/api/appoint/:id", function (req, res) {
    try {
        appoint.getAppoint(req.params.id, function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/appoint", function (req, res) {
    try {
        appoint.insertAppoint(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                appoint.getAppoint(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/appoint/:id", function (req, res) {
    try {
        appoint.updateAppoint(req.params.id, req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                appoint.getAppoint(req.params.id, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
})

app.delete("/api/appoint/:id", function (req, res) {
    try {
        appoint.deleteAppoint(req.params.id, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

////////////////////////////////////////////////////////////////////////////


app.get("/api/patient", function (req, res) {
    try {
        patient.getPatientAll(function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/api/patient/:id", function (req, res) {
    try {
        patient.getPatient(req.params.id, function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/patient", function (req, res) {
    try {
        patient.insertPatient(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                patient.getPatient(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/patient/:id", function (req, res) {
    try {
        patient.updatePatient(req.params.id, req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                patient.getPatient(req.params.id, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
})

app.delete("/api/patient/:id", function (req, res) {
    try {
        patient.deletePatient(req.params.id, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

////////////////////////////////////////////////////////////////////


app.get("/api/report", function (req, res) {
    try {
        report.getReportAll(function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/api/report/:id", function (req, res) {
    try {
        report.getReport(req.params.id, function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/report", function (req, res) {
    try {
        report.insertReport(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                report.getPatient(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/report/:id", function (req, res) {
    try {
        report.updateReport(req.params.id, req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                report.getReport(req.params.id, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
})

app.delete("/api/report/:id", function (req, res) {
    try {
        report.deleteReport(req.params.id, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

////////////////////////////////////////////////////////////////////



app.get("/api/treatment", function (req, res) {
    try {
        treatment.getTreatmentAll(function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/api/treatment/:id", function (req, res) {
    try {
        treatment.getTreatment(req.params.id, function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/treatment", function (req, res) {
    try {
        treatment.insertTreatment(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                treatment.getTreatment(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/treatment/:id", function (req, res) {
    try {
        treatment.updateTreatment(req.params.id, req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                treatment.getTreatment(req.params.id, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
})

app.delete("/api/treatment/:id", function (req, res) {
    try {
        treatment.deleteTreatment(req.params.id, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//////////////////////////////////////////////////////////////////////



app.get("/api/news", function (req, res) {
    try {
        news.getNewsAll(function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/api/news/:id", function (req, res) {
    try {
        news.getNews(req.params.id, function (err, data) {
            if (err) {
                throw err
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/news", function (req, res) {
    try {
        news.insertNews(req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                news.getNews(data.insertId, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/news/:id", function (req, res) {
    try {
        news.updateNews(req.params.id, req.body, function (err, data) {
            if (err) {
                throw err;
            } else {
                news.getNews(req.params.id, function (err, data) {
                    if (err) {
                        throw err;
                    } else {
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

app.delete("/api/news/:id", function (req, res) {
    try {
        news.deleteNews(req.params.id, function (err, data) {
            if (err) {
                throw err;
            } else {
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

////////////////////////////////////////////////////////////////////
