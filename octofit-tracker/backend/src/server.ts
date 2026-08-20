import express from 'express';
import cors from 'cors';
import type { Model } from 'mongoose';
import './config/database';
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from './models';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());
app.use(cors());

type ResourceModel = Model<any>;

function registerResourceRoutes(path: string, resourceModel: ResourceModel) {
  app.get(`/api/${path}/`, async (_request, response) => {
    try {
      const documents = await resourceModel.find().lean().exec();
      response.json(documents);
    } catch (error) {
      console.error(`Unable to read ${path}:`, error);
      response.status(503).json({ error: 'Data service unavailable' });
    }
  });

  app.post(`/api/${path}/`, async (request, response) => {
    try {
      const document = await resourceModel.create(request.body);
      response.status(201).json(document);
    } catch (error) {
      console.error(`Unable to create ${path} record:`, error);
      response.status(400).json({ error: 'Unable to create record' });
    }
  });
}

registerResourceRoutes('users', User);
registerResourceRoutes('teams', Team);
registerResourceRoutes('activities', Activity);
registerResourceRoutes('leaderboard', LeaderboardEntry);
registerResourceRoutes('workouts', Workout);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api', baseUrl });
});

app.get('/api/config', (_request, response) => {
  response.json({ apiUrl: baseUrl });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening on port ${port}`);
});
