const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "nmsi1234", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Success!");
    var Posts = sequelize.define(
      "posts",
      {
        title: {
          type: Sequelize.STRING
        },
        content: {
          type: Sequelize.STRING
        }
      },
      {
        freezeTableName: true
      }
    );

    Posts.sync({ force: false }).then(function() {
      return Posts.create({
        title: "Getting Started with PostgreSQL and Sequelize",
        content: "Hello there"
      });
    });

    // Posts.findAll({})
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // Posts.findAll({
    //   where: {
    //     id: 1
    //   }
    // })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // Posts.update(
    //   {
    //     content: "updated successully."
    //   },
    //   {
    //     where: {
    //       id: 1
    //     }
    //   }
    // )
    //   .then(() => {
    //     console.log("Updated");
    //   })
    //   .catch(e => {
    //     console.log("Error" + e);
    //   });

    // Posts.destroy({
    //   where: {
    //     id: 1
    //   }
    // })
    //   .then(() => {
    //     console.log("Deleted");
    //   })
    //   .catch(e => {
    //     console.log("Error" + e);
    //   });
  })
  .catch(err => {
    console.log(err);
  });
