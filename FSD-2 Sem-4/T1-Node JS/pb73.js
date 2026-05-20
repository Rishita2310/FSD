fs = require("fs");

fs.writeFile("help.txt", "you are creating a file",
    function (err) {
        if (err) {
            throw err;
        } else {
            console.log("File created");

            fs.appendFile("help.txt", "you are appending data",
                function (err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("File appended");

                        fs.readFile("help.txt", "utf-8",
                            function (err, data) {
                                if (err) {
                                    throw err;
                                } else {
                                    console.log(data);
                                    console.log("Thanks");
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);