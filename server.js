// Load express
const express = require('express');
// Create our express app
const app = express();
//configure the app (app.set)
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#poet#', '<h3>' + options.poet + '</h3>')
      .replace('#poem#', '<p>' + options.poem + '</p>')
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') //
app.get('/', (req, res) => {
  res.render('template', { title: 'Open Letter', message: 'Hey, Queen!', content: 'Girl, you have done it again, constantly raising the bar for all of us and doing it flawlessly.' })
})
app.get('/robert', (req, res) => {
  res.render('other', {title: 'Robert Frost', message: 'The Road Not Taken', poet: 'Robert Frost', poem: 'I shall be telling this with a sigh<br> Somewhere ages and ages hence<br> Two roads diverged in a wood, and I— <br>I took the one less traveled by, <br>And that has made all the difference.'})
})
app.get('/slay', (req, res) => {
  res.render('template', {title: 'Slayer', message:'Demon Slayer', content: '<img src="https://media.giphy.com/media/QUKqSLmE7vmZP2PkZk/giphy.gif"></img>'})
})
app.get('/maya', (req, res) => {
  res.render('other',{title: 'Maya Angelou', message: 'Alone', poet: 'Maya Angelou', poem: "Lying, thinking<br>Last night<br>How to find my soul a home<br>Where water is not thirsty<br>And bread loaf is not stone<br>I came up with one thing<br>And I don't believe I'm wrong<br>That nobody,<br>But nobody<br>Can make it out here alone."}) 
})
app.get('/christina', (req, res) => {
  res.render('other',{title: 'Christina Rossetti', message: 'Who Has Seen the Wind?', poet: 'Christina Georgina Rossetti', poem: "Who has seen the wind?<br>Neither I nor you:<br>But when the leaves hang trembling,<br>The wind is passing through.<br><br>Who has seen the wind?<br>Neither you nor I:<br>But when the trees bow down their heads,<br>The wind is passing by."}) 
})

app.get('/langston', (req, res) => {
  res.render('other',{title: 'Langston Hughes', message: 'I, Too, Sine America', poet: 'Langston Hughes', poem: "I, too, sing America.<br><br>I am the darker brother.<br>They send me to eat in the kitchen<br>When company comes,<br>But I laugh,<br>And eat well,<br>And grow strong.<br><br>Tomorrow,<br>I’ll be at the table<br>When company comes.<br>Nobody’ll dare<br>Say to me,<br>'Eat in the kitchen,'<br>Then.<br><br>Besides,<br>They’ll see how beautiful I am<br>And be ashamed—<br><br>I, too, am America."}) 
})
app.get('/myhero', (req, res) => {
  res.render('template', {title: 'MHA', message:'My Hero Academia', content: '<div class="tenor-gif-embed" data-postid="17788769" data-share-method="host" data-aspect-ratio="1.04918" data-width="100%"><a href="https://tenor.com/view/my-hero-academia-boku-no-hero-academia-anime-mha-bnha-gif-17788769">My Hero Academia Boku No Hero Academia GIF</a>from <a href="https://tenor.com/search/my+hero+academia-gifs">My Hero Academia GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>'})
})
app.get('/naruto', (req, res) => {
  res.render('template', {title: 'naruto', message:'Naruto Shippuden', content: '<img src="https://media.giphy.com/media/hMAhEUs3fwEbC/giphy.gif"></img>'})
})
app.get('/hunter', (req, res) => {
  res.render('template', {title: 'hunterxhunter', message:'Hunter X Hunter', content: '<img src="https://media.giphy.com/media/yZWsMXuXP9e5a/giphy.gif"></img>'})
})
app.get('/shelly', (req, res) => {
  res.render('other',{title: 'Shel Silverstein', message: 'Invitation', poet: 'Shel Silverstein', poem: "If you are a dreamer, come in,<br>If you are dreamer, a wisher, a liar,<br>A hope-er. a pray-er, a magic bean buyer...<br>If you're a pretender, come sit by my fire<br>For we have some flax-golden tales to spin.<br>Come in!<br>Come in!"}) 
})
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });