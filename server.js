var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={

    'article-1': {
    title: 'article-1',
    heading: "Ties with China priority of India's foreign policy: SM Krishna",
    date: '23rd FEB. 2017',
    content: `
    <p>
                BEIJING:India today told China that it sees improving bilateral ties as a priority of its foreign policy and expressed desire to expand strategic cooperation, setting aside concerns here over future direction of the relations in the backdrop of the big US push into the Asia-Pacific region.
            </p>
            <p>
            Conveying a strong message about India's intention to firm up ties with China, visiting External Affairs Minister S M Krishna told Chinese Vice Premier Li Keqiang that it is important for both the countries to build trust and understanding to maintain strong and healthy relationship."I conveyed to him that our relations with China are a priority in India's foreign policy and we believe that India-China relations will be one of the most important bilateral relationships in the 21st  ..
    
            </p>
            <p>
                "I indicated that India desires to expand the strategic and cooperative partnership that exists between our countries. It is important for us to continue building better understanding and trust between us since that will help to maintain a strong and healthy relationship between India and China," he said.His assertion about India's desire to build friendship with China comes after US announcement about a major push into the Asia-Pacific, specially the South China Sea, where China i ..
            <p>
                <a href="http://economictimes.indiatimes.com/articleshow/13869730.cms">Read more here</a>
            </p>`
},

    'article-2': {
         title: 'article-2',
    heading: "Ties with China priority of India's foreign policy: SM Krishna",
    date: '24th FEB. 2017',
    content: `
    <p>
                BEIJING:India today told China that it sees improving bilateral ties as a priority of its foreign policy and expressed desire to expand strategic cooperation, setting aside concerns here over future direction of the relations in the backdrop of the big US push into the Asia-Pacific region.
            </p>
            <p>
            Conveying a strong message about India's intention to firm up ties with China, visiting External Affairs Minister S M Krishna told Chinese Vice Premier Li Keqiang that it is important for both the countries to build trust and understanding to maintain strong and healthy relationship."I conveyed to him that our relations with China are a priority in India's foreign policy and we believe that India-China relations will be one of the most important bilateral relationships in the 21st  ..
    
            </p>`
    },
    
    'article-3': {
         title: 'article-3',
    heading: "Ties with China priority of India's foreign policy: SM Krishna",
    date: '25th FEB. 2017',
    content: `
            <p>
                <a href="http://economictimes.indiatimes.com/articleshow/13869730.cms">Read more here</a>
            </p>`
    }
};

function createtemplate (data) {

var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmltemplate = `
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="content">
            <div>
              <a href='/'>HOME</a>
            </div>
            <hr/>
            <h1>${heading}</h1>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>  
    </body>
</html>
`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
