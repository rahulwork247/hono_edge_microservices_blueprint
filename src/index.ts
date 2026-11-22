import { Hono } from 'hono';
import { logger } from './middleware/logger';
import health from './routes/health';

const app = new Hono();
app.use('*', logger);
app.route('/health', health);

export default app;
