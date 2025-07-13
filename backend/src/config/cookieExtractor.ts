import { Request } from "express";

interface RequestWithCookies extends Request {
    cookies: {
        [key: string]: any;
        token?: string;
    };
}

const cookieExtractor = (req: RequestWithCookies): string | null => {
    return req.cookies?.token || null;
};

export default cookieExtractor;
