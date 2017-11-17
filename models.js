var Sequelize = require('sequelize')

//define db
var db = new Sequelize('postgres://localhost:5432/restaurants', {
    logging: false
})

/*Restaurant model. Include the following.....

model: 
-name
-type of cuisine
-rating(out of 5 stars)
-# of visists with a default value of 0(bonus)

methods(if time):
-describe : returns a string such as "Chipotle serves mexican food!"
-rate : gives restaurant a new rating
-findBest : returns all resturants with a rating greater or equal to 4
-hook increasing the number of visits, then console.logs for ex... "Chipotle has been visited 10 times"

*/ 

var Restaurant = db.define('Restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    typeCuisine: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
    },
    rating: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5,
        }
    },
    visits: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})

/* Menu model
-name
-calories
-isSpicy(boolean)
 */

var Menu = db.define('Menu', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    calories: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    isSpicy: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
})



//relationships
Menu.belongsTo(Restaurant);

module.exports = { db, Restaurant, MenuItem }
//module.exports = { db : db, Restaurant: Restaurant, MenuItem: MenuItem }

