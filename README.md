# needed to collect keyCodes for the keys I want activate in JS

wasd codes:

w = 87
a = 65 (e.keyCode65)
s = 83
d = 68

space = 32 (e.keyCode32)



- ex code on how to use animation in js (ex from Bjørnar):
 anime({
        targets: "#player",
        duration: 150,
        translateX: player_x - player_size / 2,
        translateY: player_y - player_size / 2,
        background: col,
        scale: 1 + p_y / 8.0,
        borderRadius: (50 + p_x * 10) / 2 + "%",
        easing: "easeInOutQuart"
    });