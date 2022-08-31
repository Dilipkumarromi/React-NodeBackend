module.exports=(sequelize,DataTypes)=>{
    const StudentRegistration=sequelize.define('StudentRegistration',{
        
        SubjectID:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        name:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        mobile:{type:DataTypes.STRING}     
      
    },  

    {tableName:'StudentRegistration'} ,    
     
    );
    return StudentRegistration
}