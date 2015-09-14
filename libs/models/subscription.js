/**
  Object that represent a subscription to our asso TODO
*/
module.exports = function(sequelize, DataTypes) {
    var Subscription = sequelize.define('Subscription', {

        id: {type: DataTypes.INTEGER,
                primaryKey: true},
    	year: DataTypes.INTEGER,
    	paid_on: DataTypes.DATE,
    	paid_value: DataTypes.INTEGER,
    	paiement_type: DataTypes.STRING,

        ancien_id: {
               type: DataTypes.INTEGER,
               references: {
                model: sequelize.models.Ancien,
                key: 'ancien_id',
               }
        },
    }, {
        associate: function(models) {
            Subscription.belongsTo(models.Ancien, {foreignKey: 'ancien_id'});
        },
        tableName: 'cotisation',
        timestamps: false
    });
    return Subscription;
}