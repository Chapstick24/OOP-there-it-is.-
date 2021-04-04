
 const topHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
  header{
    width: 100%;
}
header div{
    background-color: darkgreen;
}
header, h1, p {
    color: yellow;
}
.jumbotron{
    background-color: darkgreen;
}    

#place{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    
}
</style>
</head>
<Header>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="display-4">The Simpsons Family</h1>
        <p class="lead">"You dont win friends with Salad " - Homer Simpsons</p>
        </div>
      </div>
</Header>
<body id="place">
    <div id="allEmployee"></div>`
    const bottomHtml = `</body>
    </html>`

    module.exports= {topHtml, bottomHtml}