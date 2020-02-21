module.exports = function(sequelize, DataTypes) {
    const Vocab = sequelize.define("Vocab", {
        english: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        korean: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        definition: {
            type: DataTypes.TEXT,
        },
        note: {
            type: DataTypes.TEXT
        }
    });

    Vocab.associate = function(models) {
        Vocab.belongsTo(models.VocabList, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Vocab;
}