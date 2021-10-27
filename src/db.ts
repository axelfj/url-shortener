import * as dotenv from "dotenv";
import * as monk from "monk";

import { ICollection, IMonkManager } from "monk";

dotenv.config();

const db: IMonkManager = monk.default(process.env.MONGO_URI ?? "");

const urls: ICollection = db.get("urls");
urls.createIndex({ slug: 1 }, { unique: true });

export default urls;
