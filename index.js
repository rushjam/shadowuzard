const { formatWithOptions } = require("node:util");

function shadowizard(option) {
    let images = document.querySelectorAll('.shadowizard');

    if (option.shadow_type === 'hard')
        option.shadow_type = '0px'
    else   
        option.shadow_type = '15px'

    images.forEach(image => {
        image.styles.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.shadowizard = shadowizard;