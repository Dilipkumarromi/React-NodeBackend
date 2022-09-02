module.exports=(sequelize,DataTypes)=>{
    const StudentRegistration=sequelize.define('User',{
        
        SubjectID:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true},
        name:{type:DataTypes.STRING},
        email:{type:DataTypes.STRING},
        password:{type:DataTypes.STRING},
        mobile:{type:DataTypes.STRING},        
        gender:{type:DataTypes.STRING},  
        city:{type:DataTypes.STRING},
        isActive:{type:DataTypes.BOOLEAN}           
      
    },  

    {tableName:'User'} ,    
     
    );
    return StudentRegistration
}