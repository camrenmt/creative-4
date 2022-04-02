const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const mongoose = require('mongoose');


// connect to the database
mongoose.connect('mongodb+srv://public:haveallmydata@creativedata.ksnhw.mongodb.net/CreativeData?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const questionSchema = new mongoose.Schema({
  question: String,
  answer: String,
  contributor: String,
  times_answered: String,
});

const rankingSchema = new mongoose.Schema({
    name: String,
    time: Number,
    date: String
});

const Question = mongoose.model('question', questionSchema);
const Rankinng = mongoose.model('ranking', rankingSchema);

app.post('/api/question', async (req, res) => {
  const question = new Item({
    question: req.body.question,
    answer: req.body.answer,
    contributor: req.body.contributor,
    times_answered: req.body.times_answered
  });
  try {
    await question.save();
    res.send(question);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/ranking', async (req, res) => {
    const ranking = new Item({
      name: req.body.name,
      time: req.body.time,
      date: req.body.date
    });
    try {
      await ranking.save();
      res.send(ranking);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

app.get('/api/question', async (req, res) => {
  try {
    let questions = await Question.find();
    res.send(questions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/ranking', async (req, res) => {
    try {
      let rankings = await Question.find();
      res.send(rankings);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });

    item.title = req.body.title;
    item.description = req.body.description;
    item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));


