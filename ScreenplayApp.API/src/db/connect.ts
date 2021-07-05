import mongoose from "mongoose";
import config from "config";
import log from "../../config/logger";

function connect() {
  const dbUrl = config.get("dbUrl") as string;

  return mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("Database connection error", error);
      log.fatal(error);
      process.exit(1);
    });
}

export default connect;