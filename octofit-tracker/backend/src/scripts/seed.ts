import mongoose from 'mongoose';
import db from '../config/database';
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from '../models';

// Seed the octofit_db database with test data.
const seed = async () => {
  await db.asPromise();
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.create([
    { username: 'maya-chen', email: 'maya.chen@example.com', displayName: 'Maya Chen', avatarUrl: 'https://i.pravatar.cc/150?img=47' },
    { username: 'jordan-rivera', email: 'jordan.rivera@example.com', displayName: 'Jordan Rivera', avatarUrl: 'https://i.pravatar.cc/150?img=12' },
    { username: 'sam-taylor', email: 'sam.taylor@example.com', displayName: 'Sam Taylor', avatarUrl: 'https://i.pravatar.cc/150?img=33' },
  ]);

  const teams = await Team.create([
    { name: 'Trail Blazers', slug: 'trail-blazers', description: 'Weekend miles and weekday consistency.', memberIds: [users[0]._id, users[1]._id], color: '#e76f51' },
    { name: 'Core Crew', slug: 'core-crew', description: 'Strength, mobility, and steady progress.', memberIds: [users[2]._id], color: '#2a9d8f' },
  ]);

  await Activity.create([
    { userId: users[0]._id, type: 'run', durationMinutes: 42, distanceKm: 6.8, calories: 480, completedAt: new Date('2026-08-18T07:30:00Z'), notes: 'Easy riverside run' },
    { userId: users[1]._id, type: 'ride', durationMinutes: 55, distanceKm: 18.4, calories: 610, completedAt: new Date('2026-08-17T18:00:00Z'), notes: 'Tempo intervals' },
    { userId: users[2]._id, type: 'strength', durationMinutes: 35, calories: 290, completedAt: new Date('2026-08-19T12:15:00Z'), notes: 'Full-body circuit' },
  ]);

  await LeaderboardEntry.create([
    { userId: users[0]._id, points: 1840, weeklyPoints: 420, rank: 1, streakDays: 12 },
    { userId: users[1]._id, points: 1615, weeklyPoints: 365, rank: 2, streakDays: 8 },
    { userId: users[2]._id, points: 1390, weeklyPoints: 310, rank: 3, streakDays: 6 },
  ]);

  await Workout.create([
    { title: 'Runners Mobility Reset', focus: 'Mobility', difficulty: 'beginner', durationMinutes: 20, exercises: [{ name: 'Worlds greatest stretch', sets: 2, reps: 6 }, { name: 'Glute bridge', sets: 3, reps: 12 }], recommendedFor: [users[0]._id] },
    { title: 'Strong Foundations', focus: 'Full body strength', difficulty: 'intermediate', durationMinutes: 35, exercises: [{ name: 'Goblet squat', sets: 4, reps: 10 }, { name: 'Push-up', sets: 3, reps: 12 }, { name: 'Dead bug', sets: 3, reps: 10 }], recommendedFor: [users[1]._id, users[2]._id] },
  ]);

  console.log(`Seeded ${users.length} users, ${teams.length} teams, 3 activities, 3 leaderboard entries, and 2 workouts.`);
};

seed()
  .catch((error) => {
    console.error('Unable to seed octofit_db:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
