const pool = require('../../db.js');
const query = require('./query.js');



const getStudents = (req,res)=>{
    pool.query(query.getStudents, (error,result)=>{
        if (error) throw error;
        res.status(200).json(result.rows);
    });
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(query.getStudentById, [id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    });
};

const addStudent = (req,res)=>{
    const{name,email,age,dob} = req.body;

    pool.query(query.checkEmailExist,[email],(error,results)=>{

        if (results.rows.length) {
            res.send("Email already exists.");
        }

        // add student

        pool.query(query.addStudent,[name,email,age,dob], 
            (error,results)=>{
            if (error) throw error;
            res.status(201).send("Student created successfully!");
            console.log("Student created successfuly");
        })
    });
    
}


module.exports ={
    getStudents,
    getStudentById,
    addStudent,
}