import App from './app';
import { AccountRouter } from './routes/account.router';
import { AuthRouter } from './routes/auth.router';
import { UserRouter } from './routes/user.router';

const app = new App([
    new AuthRouter(),
    new UserRouter(),
    new AccountRouter()
]);

app.getExpress().listen(3003);
