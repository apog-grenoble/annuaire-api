/* Still matching to existing model even if it's painfull :(
*/
module.exports = function(sequelize, DataTypes) {
    var Civility = sequelize.define('Civility', {

    id: {type: DataTypes.INTEGER,
            primaryKey: true, field: "civil_id"},
	name: DataTypes.STRING,

    }, {
        tableName: 'civil',
        timestamps: false
    });
    return Civility;
}