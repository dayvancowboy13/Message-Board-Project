const { Pool } = require("pg");

module.exports = new Pool({
    host: "hopper.proxy.rlwy.net",
    user: "postgres",
    database: "railway",
    password: "qjwbLWaQmLTAQMfpJUTluaiRrfYqyCwP",
    port: 40006
});

