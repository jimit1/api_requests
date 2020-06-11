const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

const clientRoutes = require("./route/client-routes");
app.use("/", clientRoutes);

const apiRoutes = require("./route/api-routes");
app.use("/", apiRoutes);

const dataRoutes = require("./route/data-routes");
app.use("/", dataRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
