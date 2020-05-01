/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#08fdd8"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0.2,
                "color": "#08fcd3"
            },
            "polygon": {
                "nb_sides": 8
            },
            "image": {
                "src": "images/icon.ico",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.4,
            "random":true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": true
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable":false,
                "speed": 4,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#08fdd8",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 190,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 1,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 210,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});

