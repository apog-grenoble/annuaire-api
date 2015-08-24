/*
*/
module.exports = function(sequelize, DataTypes) {
    var Pays = sequelize.define('Pays', {

    id: {type: DataTypes.INTEGER,
            primaryKey: true, field: "pays_id"},
	name: DataTypes.STRING,

    }, {
        tableName: 'pays',
        timestamps: false
    });
    return Pays;
}