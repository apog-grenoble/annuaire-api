/**
  Object that represent a subscription to our asso TODO
*/

module.exports = function(sequelize, DataTypes) {
    var Cotisation = sequelize.define('Cotisation', {

TODO

    }, {
        associate: function(models) {
            Cotisation.belongsTo(models.Ancien, {foreignKey: 'ancien_id'});
        }
    });
    return Cotisation;
}