import express from 'express';
import bodyParser from 'body-parser';
import { studentsRouter } from './routers/students-router';
import { coursesRouter } from './routers/courses-router';
import { subjectsRouter } from './routers/subjects-router';
import {personRouter} from './routers/person-router'; 
import {addressRouter} from './routers/addresses-router'; 
import {professorsRouter} from './routers/professors-router'; 
import { db } from './daos/db';
import bunyan from 'bunyan'; 


const app = express();
const log = bunyan.createLogger({name: "Project_P0"});
const port = process.env.port || 3000;

app.set('port', port);

/*  Middleware Registration */
app.use(bodyParser.json());
log.warn('server started');

/* Router Registration*/
app.use('/students', studentsRouter);
app.use('/courses',coursesRouter);
app.use('/subjects',subjectsRouter);
app.use('/person',personRouter);
app.use('/address',addressRouter);
app.use('/professors',professorsRouter);


process.on('unhandledRejection', () => {
    db.end().then(() => {
        log.warn('something is wrong! Database pool closed');
    });
});


app.listen(port, () => {
    console.log(`College Schedule web app running at http://localhost:${port}`);
    log.info('server is listenning!'); 
});