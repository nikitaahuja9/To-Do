const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');

let add_count = 0;
let update_count = 0;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//API for the Task List
todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

//Get item by ID
todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

//Execution time for Add API calculated
//Count noted in add_count variable
todoRoutes.route('/add').post(function(req, res) {
    console.time("dbsave");
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            add_count = add_count + 1;
            console.timeEnd("dbsave");
            res.json(add_count);
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

//Execution time for Update API calculated
//Count noted in update_count variable
todoRoutes.route('/update/:id').post(function(req, res) {
    console.time("dbsave");
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.description = req.body.description;
            todo.priority = req.body.priority;
            todo.completed = req.body.completed;

            todo.save().then(todo => {
                update_count = update_count + 1;
                console.timeEnd("dbsave");
                res.json(update_count);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});