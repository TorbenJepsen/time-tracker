var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', (req, res) => {
    
    pool.query(`SELECT SUM("entries"."hours"), "projects"."name"
    FROM "projects"
    LEFT JOIN "entries" ON "projects"."id" = "entries"."project_id"
    GROUP BY "projects"."name";`)
    .then((results) => {
        res.send(results.rows);
        console.log(results.rows)
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

module.exports = router;