$(function () {
    // Function to set random position for an element
    function setRandomPosition(element) {
        element.css({
            left: (Math.random() * 90) + "%",
            top: (Math.random() * 90) + "%",
        });
    }

    // Periodically change positions of elements with class "tricky"
    setInterval(function () {
        $(".tricky").each(function () {
            setRandomPosition($(this));
        });
    }, 500); // Change position every 3 seconds

    // Hover event for elements with the class "btn-wrap"
    $(".btn-wrap").hover(function () {
        $(this).toggleClass('active');
    });

    // Touchstart event for elements with the class "tricky"
    $('.tricky').bind('touchstart', function () {
        setRandomPosition($(this));
    });
});

const button = document.getElementById('btnalert');
button.addEventListener('click', function () {
alert('I feel Disappointed')
});