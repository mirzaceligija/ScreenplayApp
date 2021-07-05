import { Express, Request, Response } from 'express';

const userRoutes = require('./user.routes');
const sessionRoutes = require('./session.routes');
const screenplayRoutes = require('./screenplay.routes');
const categoriesRoutes = require('./category.routes');
const actorRoutes = require('./actor.routes');

export default function(app: Express) {
    
    app.use('/api/v1/users', userRoutes);
    app.use('/api/v1/sessions', sessionRoutes);
    app.use('/api/v1/screenplays', screenplayRoutes);
    app.use('/api/v1/categories', categoriesRoutes);
    app.use('/api/v1/actors', actorRoutes);
}