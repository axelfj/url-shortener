// const mongoose = require("mongoose");
const mongoose = require("mongoose");

const startServer = async () => {
  await mongoose.connect();

  mongoose.listen(mongoose.get("port"), () => {
    console.log(
      `Server is running on port ${mongoose.get("port")} in ${mongoose.get(
        "env"
      )} mode`
    );
    console.log("Press CTRL-C to stop");
  });
};

startServer().catch((err) => {
  console.error(err);
  process.exit(1);
});

export { startServer };
