const {Router} = require('express');
const task = require('../models/task');
const router = Router();
const verifyToken = require('../routes/index'); 


router.get('/view-tasks', verifyToken, async (req, res) =>{
    const id = req.query.idUser;
    const allTasks = await task.find({ id_user: id }).lean(); 
    console.log(allTasks);
    res.send(allTasks);
});



router.post('/new-task', verifyToken, async (req, res) =>{
    const newTask = new task(req.body);
    newTask.id_user = req.query.idUser;
   await newTask.save(); 
   res.send(newTask);
});

router.post('/done-task', verifyToken, async (req, res) =>{
    let {id} = req.params; 
    const tasks = await task.findById(id); 
    task.done = !task.done; 
    await tasks.save();
    res.send(tasks); 

});

module.exports = router; 