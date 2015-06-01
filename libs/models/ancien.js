/**
 Object that represent an old Polytech Grenoble student based on original database...

*/

module.exports = function(sequelize, DataTypes) {
    var Ancien = sequelize.define('Ancien', {

        ancien_id: {type: DataTypes.INTEGER,
            primaryKey: true},

        nom: DataTypes.STRING,
        nom_marital: DataTypes.STRING,
        prenom: DataTypes.STRING,

        adresse: DataTypes.STRING,
        code_postal: DataTypes.STRING,
        ville: DataTypes.STRING,
        //pay: DataTypes.STRING,

        telephone_perso: DataTypes.STRING,
        mobile_perso: DataTypes.STRING,

        print_perso: DataTypes.BOOLEAN,

        email_perso: DataTypes.STRING,

        login: DataTypes.STRING,
        password: DataTypes.STRING,

        //filiere: TODO,
        //civilite: TODO,

        mail_send: DataTypes.BOOLEAN,
        nb_modif: DataTypes.INTEGER ,

        //entreprise: TODO,

    }, {
        associate: function(models) {
            //Ancien.hasOne(models.Cotisation);
        },
        tableName: 'anciens',
        timestamps: false
    });

    return Ancien;
}