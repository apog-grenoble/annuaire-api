/**
 Object that represent an old Polytech Grenoble student based on original database...

*/

module.exports = function(sequelize, DataTypes) {
    var Ancien = sequelize.define('Ancien', {

        id: {type: DataTypes.INTEGER,
            primaryKey: true, field: "ancien_id"},

        nom: DataTypes.STRING,
        nom_marital: DataTypes.STRING,
        prenom: DataTypes.STRING,

        adresse: DataTypes.STRING,
        code_postal: DataTypes.STRING,
        ville: DataTypes.STRING,
        pays_id: {
           type: DataTypes.INTEGER,
           references: {
            model: sequelize.models.Pays,
            key: 'pays_id',
           }
        },

        telephone_perso: DataTypes.STRING,
        mobile_perso: DataTypes.STRING,

        print_perso: DataTypes.BOOLEAN,

        email_perso: DataTypes.STRING,

        login: DataTypes.STRING,
        password: DataTypes.STRING,

        filiere_id: {
           type: DataTypes.INTEGER,
           references: {
            model: sequelize.models.Filiere,
            key: 'filiere_id',
           }
        },
        annee: DataTypes.STRING,
        civility: {
           type: DataTypes.INTEGER,
           field: "civil_id",
           references: {
            model: sequelize.models.Civility,
            key: 'civil_id',
           }
        },

        mail_send: DataTypes.BOOLEAN,
        nb_modif: DataTypes.INTEGER,

        //entreprise: TODO,

    }, {
        associate: function(models) {
            Ancien.hasMany(models.Cotisation, { foreignKey: 'id' });
            Ancien.hasOne(models.Pays, { foreignKey: 'pays_id' });
            Ancien.hasOne(models.Filiere, { foreignKey: 'filiere_id' });
            Ancien.hasOne(models.Civility, { foreignKey: 'civil_id' });
        },
        tableName: 'anciens',
        timestamps: false
    });

    return Ancien;
}