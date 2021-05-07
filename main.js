'use strict';

let firstEvidence = '';
let secondEvidence = '';
let thirdEvidence = '';

// FIRST EVIDENCE --------------------------------------------------------------------------------------------------------->

document.querySelector('.first-evidence .emf-five').addEventListener('click', function() {

    firstEvidence = "emfFive";

    // SHOW THIS

    document.querySelector('.second-evidence .fingerprints').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-orbs').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-writing').style.opacity = '1';
    document.querySelector('.second-evidence .freezing').style.opacity = '1';
    document.querySelector('.second-evidence .spirit-box').style.opacity = '1';

    // HIDE THIS

    document.querySelector('.first-evidence .fingerprints').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-orbs').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-writing').style.opacity = '0';
    document.querySelector('.first-evidence .freezing').style.opacity = '0';
    document.querySelector('.first-evidence .spirit-box').style.opacity = '0';   

});

document.querySelector('.first-evidence .fingerprints').addEventListener('click', function() {

    firstEvidence = "fingerprints";

    // SHOW THIS

    document.querySelector('.second-evidence .emf-five').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-orbs').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-writing').style.opacity = '1';
    document.querySelector('.second-evidence .freezing').style.opacity = '1';
    document.querySelector('.second-evidence .spirit-box').style.opacity = '1';  
    
    // HIDE THIS

    document.querySelector('.first-evidence .emf-five').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-orbs').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-writing').style.opacity = '0';
    document.querySelector('.first-evidence .freezing').style.opacity = '0';
    document.querySelector('.first-evidence .spirit-box').style.opacity = '0';

});

document.querySelector('.first-evidence .freezing').addEventListener('click', function() {

    firstEvidence = "freezing";

    // SHOW THIS

    document.querySelector('.second-evidence .fingerprints').style.opacity = '1';
    document.querySelector('.second-evidence .emf-five').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-orbs').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-writing').style.opacity = '1';
    document.querySelector('.second-evidence .spirit-box').style.opacity = '1';  
    
    // HIDE THIS

    document.querySelector('.first-evidence .emf-five').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-orbs').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-writing').style.opacity = '0';
    document.querySelector('.first-evidence .fingerprints').style.opacity = '0';
    document.querySelector('.first-evidence .spirit-box').style.opacity = '0';

});

document.querySelector('.first-evidence .ghost-orbs').addEventListener('click', function() {

    firstEvidence = "ghostOrbs";

    // SHOW THIS

    document.querySelector('.second-evidence .emf-five').style.opacity = '1';
    document.querySelector('.second-evidence .spirit-box').style.opacity = '1';
    document.querySelector('.second-evidence .freezing').style.opacity = '1';
    document.querySelector('.second-evidence .fingerprints').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-writing').style.opacity = '1'; 
    
    // HIDE THIS

    document.querySelector('.first-evidence .emf-five').style.opacity = '0';
    document.querySelector('.first-evidence .fingerprints').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-writing').style.opacity = '0';
    document.querySelector('.first-evidence .freezing').style.opacity = '0';
    document.querySelector('.first-evidence .spirit-box').style.opacity = '0';

});

document.querySelector('.first-evidence .ghost-writing').addEventListener('click', function() {

    firstEvidence = "ghostWriting";

    // SHOW THIS

    document.querySelector('.second-evidence .freezing').style.opacity = '1';
    document.querySelector('.second-evidence .spirit-box').style.opacity = '1';
    document.querySelector('.second-evidence .emf-five').style.opacity = '1';
    document.querySelector('.second-evidence .fingerprints').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-orbs').style.opacity = '1'; 
    
    // HIDE THIS

    document.querySelector('.first-evidence .emf-five').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-orbs').style.opacity = '0';
    document.querySelector('.first-evidence .fingerprints').style.opacity = '0';
    document.querySelector('.first-evidence .freezing').style.opacity = '0';
    document.querySelector('.first-evidence .spirit-box').style.opacity = '0';

});

document.querySelector('.first-evidence .spirit-box').addEventListener('click', function() {

    firstEvidence = "spiritBox";

    // SHOW THIS

    document.querySelector('.second-evidence .ghost-writing').style.opacity = '1'; 
    document.querySelector('.second-evidence .freezing').style.opacity = '1';
    document.querySelector('.second-evidence .emf-five').style.opacity = '1';
    document.querySelector('.second-evidence .ghost-orbs').style.opacity = '1';
    document.querySelector('.second-evidence .fingerprints').style.opacity = '1'; 
    
    // HIDE THIS

    document.querySelector('.first-evidence .emf-five').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-orbs').style.opacity = '0';
    document.querySelector('.first-evidence .ghost-writing').style.opacity = '0';
    document.querySelector('.first-evidence .freezing').style.opacity = '0';
    document.querySelector('.first-evidence .fingerprints').style.opacity = '0';

});

// SECOND EVIDENCE --------------------------------------------------------------------------------------------------------->

document.querySelector('.second-evidence .emf-five').addEventListener('click', function() {

    secondEvidence = "emfFive";

    if (firstEvidence === "fingerprints") {

        // SHOW THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .freezing').style.opacity = '0';

    } else if (firstEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';
        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';

    }
});

document.querySelector('.second-evidence .fingerprints').addEventListener('click', function() {

    secondEvidence = "fingerprints";

    if (firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';
        document.querySelector('#ghost-type').value = 'Poltergeist';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    }
});

document.querySelector('.second-evidence .freezing').addEventListener('click', function() {

    secondEvidence = "freezing";

    if (firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "fingerprints") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';

    } else if (firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    }
});

document.querySelector('.second-evidence .ghost-orbs').addEventListener('click', function() {

    secondEvidence = "ghostOrbs";

    if (firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "fingerprints") {

        // SHOW THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';
        document.querySelector('#ghost-type').value = 'Poltergeist';

        // HIDE THIS 

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';
        document.querySelector('.third-evidence .emf-five').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .emf-five').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';

    } else if (firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';

        // HIDE THIS 

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';

    }
});

document.querySelector('.second-evidence .ghost-writing').addEventListener('click', function() {

    secondEvidence = "ghostWriting";

    if (firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "fingerprints") {

        // SHOW THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';
        document.querySelector('.third-evidence .emf-five').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .freezing').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    }
});

document.querySelector('.second-evidence .spirit-box').addEventListener('click', function() {

    secondEvidence = "spiritBox";

    if (firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "fingerprints") {

        // SHOW THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '1';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '1';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '1';
        document.querySelector('.third-evidence .freezing').style.opacity = '1';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '1';

        // HIDE THIS

        document.querySelector('.second-evidence .freezing').style.opacity = '0';
        document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.second-evidence .emf-five').style.opacity = '0';
        document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';

    }
});

// THIRD EVIDENCE --------------------------------------------------------------------------------------------------------->

document.querySelector('.third-evidence .emf-five').addEventListener('click', function() {

    thirdEvidence = "emfFive";

    if (firstEvidence === "fingerprints" && secondEvidence === "freezing") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Banshee';
        
        // HIDE THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "freezing") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Banshee';
        
        // HIDE THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Jinn';
        
        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Jinn';
        
        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Oni-Fans';
        
        // HIDE THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Oni-Fans';
        
        // HIDE THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Phantom';
        
        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Phantom';
        
        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Reve... Fuck this I am outta here!';
        
        // HIDE THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Reve... Fuck this I am outta here!';
        
        // HIDE THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs" && secondEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Shadey-Bitch';
        
        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (secondEvidence === "ghostOrbs" && firstEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Shadey-Bitch';
        
        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    }
});

document.querySelector('.third-evidence .fingerprints').addEventListener('click', function() {

    thirdEvidence = "fingerprints";

    if (firstEvidence === "emfFive" && secondEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Banshee';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (secondEvidence === "emfFive" && firstEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Banshee';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Poltergiest';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';
        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Poltergiest';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';
        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (firstEvidence === "emfFive" && secondEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Reve... Fuck this I am outta here!';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (secondEvidence === "emfFive" && firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Reve... Fuck this I am outta here!';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Spirit (Run Tyler!)';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';
        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Spirit (Run Tyler!)';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';
        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Wraith';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Wraith';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    }
});

document.querySelector('.third-evidence .freezing').addEventListener('click', function() {

    thirdEvidence = "freezing";

    if (firstEvidence === "fingerprints" && secondEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Banshee';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Banshee';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Demon';

        // HIDE THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Demon';

        // HIDE THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Mare';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Mare';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs" && secondEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Phantom';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (secondEvidence === "ghostOrbs" && firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Phantom';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Wraith';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Wraith';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs" && secondEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Yurei';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (secondEvidence === "ghostOrbs" && firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Yurei';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    }
});

document.querySelector('.third-evidence .ghost-orbs').addEventListener('click', function() {

    thirdEvidence = "ghostOrbs";

    if (firstEvidence === "emfFive" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Jinn';

        // HIDE THIS 

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (secondEvidence === "emfFive" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Jinn';

        // HIDE THIS 

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Mare';

        // HIDE THIS 

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Mare';

        // HIDE THIS 

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "emfFive" && secondEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Phantom';

        // HIDE THIS 

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (secondEvidence === "emfFive" && firstEvidence === "freezing") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Phantom';

        // HIDE THIS 

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting" && secondEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Shadey-Bitch';

        // HIDE THIS 

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (secondEvidence === "ghostWriting" && firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Shadey-Bitch';

        // HIDE THIS 

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Poltergeist';

        // HIDE THIS 

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Poltergeist';

        // HIDE THIS 

        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (firstEvidence === "freezing" && secondEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Yurei';

        // HIDE THIS 

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "ghostWriting") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Yurei';

        // HIDE THIS 

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    }
});

document.querySelector('.third-evidence .ghost-writing').addEventListener('click', function() {

    thirdEvidence = "ghostWriting";

    if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Demon';

        // HIDE THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Demon';

        // HIDE THIS

        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "emfFive" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Oni-Fans';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (secondEvidence === "emfFive" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Oni-Fans';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "emfFive" && secondEvidence === "fingerprints") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Reve... Fuck this I am outta here!';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (secondEvidence === "emfFive" && firstEvidence === "fingerprints") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Reve... Fuck this I am outta here!';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';

    } else if (firstEvidence === "ghostOrbs" && secondEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Shadey-Bitch';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (secondEvidence === "ghostOrbs" && firstEvidence === "emfFive") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Shadey-Bitch';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';
        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Spirit (Run Tyler!)';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Spirit (Run Tyler!)';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Yurei';

        // HIDE THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Yurei';

        // HIDE THIS

        document.querySelector('.third-evidence .spirit-box').style.opacity = '0';
        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    }
});

document.querySelector('.third-evidence .spirit-box').addEventListener('click', function() {

    thirdEvidence = "spiritBox";

    if (firstEvidence === "freezing" && secondEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Demon';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Demon';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';

    } else if (firstEvidence === "emfFive" && secondEvidence === "ghostOrbs") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Jinn';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (secondEvidence === "emfFive" && firstEvidence === "ghostOrbs") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Jinn';

        // HIDE THIS

        document.querySelector('.third-evidence .freezing').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Mare';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Mare';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';
        document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';

    } else if (firstEvidence === "ghostWriting" && secondEvidence === "emfFive") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Oni-Fans';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (secondEvidence === "ghostWriting" && firstEvidence === "emfFive") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Oni-Fans';

        // HIDE THIS

        document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';
        document.querySelector('.third-evidence .fingerprints').style.opacity = '0';

    } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Poltergeist';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostOrbs") {

        // SHOW THIS

        document.querySelector('#ghost-type').value = 'Poltergeist';

    } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Spirit (Run Tyler!)';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostWriting") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Spirit (Run Tyler!)';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (firstEvidence === "fingerprints" && secondEvidence === "freezing") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Wraith';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    } else if (secondEvidence === "fingerprints" && firstEvidence === "freezing") {

        // SHOW THIS
        
        document.querySelector('#ghost-type').value = 'Wraith';

        // HIDE THIS

        document.querySelector('.third-evidence .emf-five').style.opacity = '0';

    }
});

// THIS WILL RESET THE GHOST TYPE

document.querySelector('#game-reset').addEventListener('click', function() {
    
    firstEvidence = '';
    secondEvidence = '';
    thirdEvidence = '';

    document.querySelector('.first-evidence .emf-five').style.opacity = '1';
    document.querySelector('.first-evidence .fingerprints').style.opacity = '1';
    document.querySelector('.first-evidence .ghost-orbs').style.opacity = '1';
    document.querySelector('.first-evidence .ghost-writing').style.opacity = '1';
    document.querySelector('.first-evidence .freezing').style.opacity = '1';
    document.querySelector('.first-evidence .spirit-box').style.opacity = '1';
    document.querySelector('.second-evidence .emf-five').style.opacity = '0';
    document.querySelector('.second-evidence .fingerprints').style.opacity = '0';
    document.querySelector('.second-evidence .freezing').style.opacity = '0';
    document.querySelector('.second-evidence .ghost-orbs').style.opacity = '0';
    document.querySelector('.second-evidence .ghost-writing').style.opacity = '0';
    document.querySelector('.second-evidence .spirit-box').style.opacity = '0';
    document.querySelector('.third-evidence .emf-five').style.opacity = '0';
    document.querySelector('.third-evidence .fingerprints').style.opacity = '0';
    document.querySelector('.third-evidence .freezing').style.opacity = '0';
    document.querySelector('.third-evidence .ghost-orbs').style.opacity = '0';
    document.querySelector('.third-evidence .ghost-writing').style.opacity = '0';
    document.querySelector('.third-evidence .spirit-box').style.opacity = '0';

    document.querySelector('#ghost-type').value = '';

});