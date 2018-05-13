var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', (req, res) => {
    
    pool.query(`SELECT * FROM "projects";`)
    .then((results) => {
        res.send(results.rows);
        console.log(results.rows)
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const project = req.body;
    pool.query(`INSERT INTO "projects" ("name")
                VALUES ($1);`, [project.name])
        .then(() => {
            res.sendStatus(200);
            console.log(project);
        })
        .catch((error) => {
            console.log('error with SQL INSERT', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log(req.params);
  const project= req.params.id;

  let queryText = `DELETE FROM "projects" WHERE "id" = '$1'`;
    pool.query(queryText,[project])
    .then((results) => {
        res.sendStatus(200);

    })
    .catch((error) => {
        console.log('error with SQL DELETE', error);
        res.sendStatus(500);
    })
})

module.exports = router;