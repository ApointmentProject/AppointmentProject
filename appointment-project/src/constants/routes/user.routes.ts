const baseUrl = '/user';

const routes = (endpoint: string) => `${baseUrl}/${endpoint}`;

const UserRoutes = {
    baseUrl: baseUrl,
    checkUser: routes('checkUser'),
    validatePassword: routes('validatePassword'),
}

export default UserRoutes;