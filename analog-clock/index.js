setInterval(() => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    $("#hour").css(
        "transform",
        `rotate(${90 + (hours % 12) * 30 + minutes * 0.5}deg)`
    );

    $("#minute").css("transform", `rotate(${90 + minutes * 6}deg)`);

    $("#second").css("transform", `rotate(${90 + seconds * 6}deg)`);
}, 1000)





