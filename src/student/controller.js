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


module.exports ={
    getStudents,
    getStudentById,
}