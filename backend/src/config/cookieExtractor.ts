import { Request } from "express";

interface RequestWithCookies extends Request {
    cookies: {
        [key: string]: any;
        token?: string;
    };
}

const cookieExtractor = function (req: any) {
    if (req && req.cookies && req.cookies.token) {
        return req.cookies.token;
    }
    return null;
};

export default cookieExtractor;
