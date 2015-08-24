/*
*/
module.exports = function(sequelize, DataTypes) {
    var Filiere = sequelize.define('Filiere', {

    id: {type: DataTypes.INTEGER,
            primaryKey: true, field: "filiere_id"},
	name: DataTypes.STRING,

    }, {
        tableName: 'filiere',
        timestamps: false
    });
    return Filiere;
}