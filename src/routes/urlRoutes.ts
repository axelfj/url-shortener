import { postUrl, redirectToUrl } from "../controllers/urlController";

import { Express } from "express";

const initRoutes = (app: Express) => {
  app.get("/:hash", redirectToUrl);
  app.post("/api/url", postUrl);
};

export { initRoutes };
