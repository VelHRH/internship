import express from 'express';

enum Method {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type Route = {
  path: string;
  method: Method;
  controller: express.RequestHandler;
  middlewares: express.RequestHandler[];
};

export { Method, Route };

