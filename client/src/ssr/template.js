module.exports = (appComponent, preLoadedState, chunks) => {
    return `<!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Basic ReactJS application</title>
            <base href="/dist/" />
            <link href="app.css" rel="stylesheet" />
            <script>window.__INITIAL_DATA__ = ${JSON.stringify(
                preLoadedState
            )}</script>
        </head>
        <body>
            <div id="app">${appComponent}</div>
            <script src="app.bundle.js" defer></script>
            ${chunks.join('')}
        </body>
    </html>`;
};
