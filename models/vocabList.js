module.exports = function(sequelize, DataTypes) {
    const VocabList = sequelize.define("VocabList", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        timestamps: false
    });

    VocabList.associate = function(models) {
        VocabList.hasMany(models.Vocab, {
            onDelete: 'cascade'
        });
    };

    return VocabList;
}