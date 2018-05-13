var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('GET /crew');
    pool.query(`SELECT "entries"."id", "entries"."entry", "entries"."date", "entries"."hours", "projects"."name" AS "project_name"
    FROM "entries"
    JOIN "projects" ON "entries"."project_id" = "projects"."id";`)
    .then((results) => {
        res.send(results.rows);
        console.log(results.rows)
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const entry = req.body;
    pool.query(`INSERT INTO "entries" ("entry", "date", "start_time", "end_time", "hours", "project_id")
                VALUES ($1, $2, $3, $4, $5, $6);`, [entry.entry, entry.date, entry.start_time, entry.end_time, entry.hours, entry.project_id])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error with SQL INSERT', error);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    const entry = req.query.id;
    console.log(req.query.id)
    pool.query(`DELETE FROM "entries" WHERE "id" = ${entry}`)
        .then((results) => {
            res.sendStatus(200);

        })
        .catch((error) => {
            console.log('error with SQL DELETE', error);
            res.sendStatus(500);
        })
})



module.exports = router;