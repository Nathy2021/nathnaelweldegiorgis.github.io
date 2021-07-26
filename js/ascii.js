$(function () {
    let state;
    let speed;

    $("#start").click(goAnimate);
    $("#stop").click(() => {
        state = null;
        $("#stop").prop("disabled", true);
        $('#text-area').prop("disabled", false);
        $('#animation').prop("disabled", false);
        $('#start').prop("disabled", false);
    });

    $("#turbo").click(() => {
        speed = $("#turbo").is(":checked") ? 50 : 250;
        state = null;
        setTimeout(() => {
            goAnimate();
        }, 150);
    });

    $('#animation').change(animationFrames);
    $("#fontsize").change(fontSize);


    function goAnimate() {
        $('#text-area').prop("disabled", true);
        $('#animation').prop("disabled", true);
        $('#start').prop("disabled", true);

        state = "Go";
        speed = (typeof speed === "undefined") ? 250 : speed;
        $("#stop").prop("disabled", false);
        let allFrames = $('#text-area').val();

        let chunckFrames = allFrames.split("=====\n");

        let interval = setInterval(() => {
            let currValue = chunckFrames.shift();
            $("#text-area").val(currValue);
            chunckFrames.push(currValue);

            speed = $("#turbo").is(":checked") ? 50 : 250;
            if (!state) {// state will be evaluated to 'true' if it has any meaningful value.
                clearInterval(interval);
                animationFrames();
            }
        }, speed);
    }


    function animationFrames() {
        let animationType = $('#animation').val();
        switch (animationType.toString().trim()) {
            case 'Blank':
                $('#text-area').val(ANIMATIONS["Blank"]);
                break;
            case 'Exercise':
                $('#text-area').val(ANIMATIONS["Exercise"]);
                break;
            case 'Juggler':
                $('#text-area').val(ANIMATIONS["Juggler"]);
                break;
            case 'Bike':
                $('#text-area').val(ANIMATIONS["Bike"]);
                break;
            case 'Dive':
                $('#text-area').val(ANIMATIONS["Dive"]);
                break;
            default:
                $('#text-area').val(ANIMATIONS["YEA, that was fun!"]);
        }
    }


    function fontSize() {
        let fontType = $("#fontsize").val();
        switch (fontType) {
            case 'Tiny':
                $("#text-area").css("font-size", "7pt");
                break;
            case 'Small':
                $("#text-area").css("font-size", "10pt");
                break;
            case 'Medium':
                $("#text-area").css("font-size", "12pt");
                break;
            case 'Large':
                $("#text-area").css("font-size", "16pt");
                break;
            case 'Extra Large':
                $("#text-area").css("font-size", "24pt");
                break;
            case 'XXL':
                $("#text-area").css("font-size", "32pt");
                break;
            default:
                $("#text-area").css("font-size", "12pt");
        }
    }
});