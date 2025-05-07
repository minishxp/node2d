const Constants = {
    screen: {
        x: 10,
        y: 10   
    }
}

var ScreenData = Array(Constants.screen.x * Constants.screen.y);
ScreenData.forEach((_, idx) => {
    ScreenData[idx] = {}
})