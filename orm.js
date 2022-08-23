const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto("crud_test", "root", "root", {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
});

auto.run((err)=>{
    if(err) throw err;
})