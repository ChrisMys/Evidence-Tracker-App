'use strict';

let firstEvidence = '';
let secondEvidence = '';
let thirdEvidence = '';
let clickedTimeOne = 0;
let clickedTimeTwo = 0;
let clickedTimeThree = 0;

// METHODS START HERE ------------------------------------------------------------------------>

function removeFirstActive() {

    firstEvidence = "";

    clickedTimeOne = 0;

    document.querySelector('#ghost-type').textContent = '';

    document.querySelector(".firstEvidence .emf-five").classList.remove('active');
    document.querySelector(".firstEvidence .fingerprints").classList.remove('active');
    document.querySelector(".firstEvidence .freezing").classList.remove('active');
    document.querySelector(".firstEvidence .ghost-orbs").classList.remove('active');
    document.querySelector(".firstEvidence .ghost-writing").classList.remove('active');
    document.querySelector(".firstEvidence .spirit-box").classList.remove('active');

}

function removeSecondActive() {

    secondEvidence = "";

    clickedTimeTwo = 0;

    document.querySelector('#ghost-type').textContent = '';

    document.querySelector(".secondEvidence .emf-five").classList.remove('active');
    document.querySelector(".secondEvidence .fingerprints").classList.remove('active');
    document.querySelector(".secondEvidence .freezing").classList.remove('active');
    document.querySelector(".secondEvidence .ghost-orbs").classList.remove('active');
    document.querySelector(".secondEvidence .ghost-writing").classList.remove('active');
    document.querySelector(".secondEvidence .spirit-box").classList.remove('active');

}

function removeSecondEvidence() {

    document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
    document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
    document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
    document.querySelector('.secondEvidence .freezing').style.display = 'none';
    document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
    document.querySelector('.secondEvidence .emf-five').style.display = 'none';
    
}

function removeThirdActive() {

    thirdEvidence = "";

    clickedTimeThree = 0;

    document.querySelector('#ghost-type').textContent = '';

    document.querySelector(".thirdEvidence .emf-five").classList.remove('active');
    document.querySelector(".thirdEvidence .fingerprints").classList.remove('active');
    document.querySelector(".thirdEvidence .freezing").classList.remove('active');
    document.querySelector(".thirdEvidence .ghost-orbs").classList.remove('active');
    document.querySelector(".thirdEvidence .ghost-writing").classList.remove('active');
    document.querySelector(".thirdEvidence .spirit-box").classList.remove('active');

}

function removeThirdEvidence() {

    document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
    document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
    document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
    document.querySelector('.thirdEvidence .freezing').style.display = 'none';
    document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';
    document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
    
}

// CODE STARTS HERE -------------------------------------------------------------------------->

document.querySelector('.firstEvidence .emf-five').addEventListener('click', function() {

    clickedTimeOne++;

    if (clickedTimeOne % 2 == 1) {

        firstEvidence = "emfFive";

        document.querySelector(".firstEvidence .emf-five").classList.add('active');

        document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
        document.querySelector('.secondEvidence .freezing').style.display = 'block';
        document.querySelector('.secondEvidence .spirit-box').style.display = 'block'; 

        document.querySelector('.firstEvidence .fingerprints').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'none';
        document.querySelector('.firstEvidence .freezing').style.display = 'none';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'none'; 
        
    } else if (clickedTimeOne % 2 == 0) {

        removeFirstActive();
        removeSecondActive();
        removeSecondEvidence();
        removeThirdActive();
        removeThirdEvidence();

        document.querySelector('.firstEvidence .fingerprints').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'block';
        document.querySelector('.firstEvidence .freezing').style.display = 'block';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'block';

    }
    
});

document.querySelector('.firstEvidence .fingerprints').addEventListener('click', function() {

    clickedTimeOne++;

    if (clickedTimeOne % 2 == 1) {

        firstEvidence = "fingerprints";

        document.querySelector(".firstEvidence .fingerprints").classList.add('active');

        document.querySelector('.secondEvidence .emf-five').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
        document.querySelector('.secondEvidence .freezing').style.display = 'block';
        document.querySelector('.secondEvidence .spirit-box').style.display = 'block';  

        document.querySelector('.firstEvidence .emf-five').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'none';
        document.querySelector('.firstEvidence .freezing').style.display = 'none';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'none';

    } else if (clickedTimeOne % 2 == 0) {

        removeFirstActive();
        removeSecondActive();
        removeSecondEvidence();
        removeThirdActive();
        removeThirdEvidence();

        document.querySelector('.firstEvidence .emf-five').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'block';
        document.querySelector('.firstEvidence .freezing').style.display = 'block';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'block';

    }

});

document.querySelector('.firstEvidence .freezing').addEventListener('click', function() {

    clickedTimeOne++;

    if (clickedTimeOne % 2 == 1) {

        firstEvidence = "freezing";

        document.querySelector(".firstEvidence .freezing").classList.add('active');

        document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
        document.querySelector('.secondEvidence .emf-five').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
        document.querySelector('.secondEvidence .spirit-box').style.display = 'block';  

        document.querySelector('.firstEvidence .emf-five').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'none';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'none';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'none';

    } else if (clickedTimeOne % 2 == 0) {

        removeFirstActive();
        removeSecondActive();
        removeSecondEvidence();
        removeThirdActive();
        removeThirdEvidence();

        document.querySelector('.firstEvidence .emf-five').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'block';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'block';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'block';

    }

});

document.querySelector('.firstEvidence .ghost-orbs').addEventListener('click', function() {

    clickedTimeOne++;

    if (clickedTimeOne % 2 == 1) {

        firstEvidence = "ghostOrbs";

        document.querySelector(".firstEvidence .ghost-orbs").classList.add('active');

        document.querySelector('.secondEvidence .emf-five').style.display = 'block';
        document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
        document.querySelector('.secondEvidence .freezing').style.display = 'block';
        document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-writing').style.display = 'block'; 

        document.querySelector('.firstEvidence .emf-five').style.display = 'none';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'none';
        document.querySelector('.firstEvidence .freezing').style.display = 'none';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'none';

    } else if (clickedTimeOne % 2 == 0) {

        removeFirstActive();
        removeSecondActive();
        removeSecondEvidence();
        removeThirdActive();
        removeThirdEvidence();

        document.querySelector('.firstEvidence .emf-five').style.display = 'block';
        document.querySelector('.firstEvidence .freezing').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'block';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'block';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'block';

    }

});

document.querySelector('.firstEvidence .ghost-writing').addEventListener('click', function() {

    clickedTimeOne++;

    if (clickedTimeOne % 2 == 1) {

        firstEvidence = "ghostWriting";

        document.querySelector(".firstEvidence .ghost-writing").classList.add('active');

        document.querySelector('.secondEvidence .freezing').style.display = 'block';
        document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
        document.querySelector('.secondEvidence .emf-five').style.display = 'block';
        document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block'; 

        document.querySelector('.firstEvidence .emf-five').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'none';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'none';
        document.querySelector('.firstEvidence .freezing').style.display = 'none';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'none';

    } else if (clickedTimeOne % 2 == 0) {

        removeFirstActive();
        removeSecondActive();
        removeSecondEvidence();
        removeThirdActive();
        removeThirdEvidence();

        document.querySelector('.firstEvidence .emf-five').style.display = 'block';
        document.querySelector('.firstEvidence .freezing').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'block';
        document.querySelector('.firstEvidence .spirit-box').style.display = 'block';

    }

});

document.querySelector('.firstEvidence .spirit-box').addEventListener('click', function() {

    clickedTimeOne++;

    if (clickedTimeOne % 2 == 1) {

        firstEvidence = "spiritBox";

        document.querySelector(".firstEvidence .spirit-box").classList.add('active');

        document.querySelector('.secondEvidence .ghost-writing').style.display = 'block'; 
        document.querySelector('.secondEvidence .freezing').style.display = 'block';
        document.querySelector('.secondEvidence .emf-five').style.display = 'block';
        document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.secondEvidence .fingerprints').style.display = 'block'; 

        document.querySelector('.firstEvidence .emf-five').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'none';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'none';
        document.querySelector('.firstEvidence .freezing').style.display = 'none';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'none';

    } else if (clickedTimeOne % 2 == 0) {

        removeFirstActive();
        removeSecondActive();
        removeSecondEvidence();
        removeThirdActive();
        removeThirdEvidence();

        document.querySelector('.firstEvidence .emf-five').style.display = 'block';
        document.querySelector('.firstEvidence .freezing').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-orbs').style.display = 'block';
        document.querySelector('.firstEvidence .fingerprints').style.display = 'block';
        document.querySelector('.firstEvidence .ghost-writing').style.display = 'block';

    }

});

document.querySelector('.secondEvidence .emf-five').addEventListener('click', function() {

    clickedTimeTwo++;

    if (clickedTimeTwo % 2 == 1) {

    secondEvidence = "emfFive";

    document.querySelector(".secondEvidence .emf-five").classList.add('active');

        if (firstEvidence === "fingerprints") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            
        } else if (firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';


        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
  
        }

    } else if (clickedTimeTwo % 2 == 0) {

        removeSecondActive();
        removeThirdActive();
        removeThirdEvidence();
    
        if (firstEvidence === "fingerprints") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .freezing').style.display = 'block';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';

        }
    
    }

});

document.querySelector('.secondEvidence .fingerprints').addEventListener('click', function() {

    clickedTimeTwo++;

    if (clickedTimeTwo % 2 == 1) {

    secondEvidence = "fingerprints";
    document.querySelector(".secondEvidence .fingerprints").classList.add('active');

        if (firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('#ghost-type').textContent = 'Poltergeist';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        }

    } else if (clickedTimeTwo % 2 == 0) {

        removeSecondActive();
        removeThirdActive();
        removeThirdEvidence();

        if (firstEvidence === "emfFive") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        }
    
    }

});

document.querySelector('.secondEvidence .freezing').addEventListener('click', function() {

    clickedTimeTwo++;

    if (clickedTimeTwo % 2 == 1) {

        secondEvidence = "freezing";
        document.querySelector(".secondEvidence .freezing").classList.add('active');

        if (firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        }

    } else if (clickedTimeTwo % 2 == 0) {

        removeSecondActive();
        removeThirdActive();
        removeThirdEvidence();

        if (firstEvidence === "emfFive") {

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        }

    }

});

document.querySelector('.secondEvidence .ghost-orbs').addEventListener('click', function() {
    
    clickedTimeTwo++;

    if (clickedTimeTwo % 2 == 1) {

        secondEvidence = "ghostOrbs";
        document.querySelector(".secondEvidence .ghost-orbs").classList.add('active');

        if (firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('#ghost-type').textContent = 'Poltergeist';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';

        }

    } else if (clickedTimeTwo % 2 == 0) {

        removeSecondActive();
        removeThirdActive();
        removeThirdEvidence();

        if (firstEvidence === "emfFive") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';

        }

    }

});

document.querySelector('.secondEvidence .ghost-writing').addEventListener('click', function() {

    clickedTimeTwo++;

    if (clickedTimeTwo % 2 == 1) {

        secondEvidence = "ghostWriting";
        document.querySelector(".secondEvidence .ghost-writing").classList.add('active');

        if (firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        }

    } else if (clickedTimeTwo % 2 == 0) {

        removeSecondActive();
        removeThirdActive();
        removeThirdEvidence();

        if (firstEvidence === "emfFive") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .spirit-box').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "spiritBox") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        }

    }

});

document.querySelector('.secondEvidence .spirit-box').addEventListener('click', function() {

    clickedTimeTwo++;

    if (clickedTimeTwo % 2 == 1) {

        secondEvidence = "spiritBox";
        document.querySelector(".secondEvidence .spirit-box").classList.add('active');

        if (firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

            document.querySelector('.secondEvidence .freezing').style.display = 'none';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
            document.querySelector('.secondEvidence .emf-five').style.display = 'none';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';

        }

    } else if (clickedTimeTwo % 2 == 0) {

        removeSecondActive();
        removeThirdActive();
        removeThirdEvidence();

        if (firstEvidence === "emfFive") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "fingerprints") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "freezing") {

            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';

        } else if (firstEvidence === "ghostWriting") {

            document.querySelector('.secondEvidence .freezing').style.display = 'block';
            document.querySelector('.secondEvidence .fingerprints').style.display = 'block';
            document.querySelector('.secondEvidence .emf-five').style.display = 'block';
            document.querySelector('.secondEvidence .ghost-orbs').style.display = 'block';

        }

    }


});

document.querySelector('.thirdEvidence .emf-five').addEventListener('click', function() {

    clickedTimeThree++;

    if (clickedTimeThree % 2 == 1) {

        thirdEvidence = "emfFive";
        document.querySelector(".thirdEvidence .emf-five").classList.add('active');

        if (firstEvidence === "fingerprints" && secondEvidence === "freezing") {
            
            document.querySelector('#ghost-type').textContent = 'Banshee';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "freezing") {
            
            document.querySelector('#ghost-type').textContent = 'Banshee';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {
            
            document.querySelector('#ghost-type').textContent = 'Jinn';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {
            
            document.querySelector('#ghost-type').textContent = 'Jinn';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {
            
            document.querySelector('#ghost-type').textContent = 'Oni-Fans';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {
            
            document.querySelector('#ghost-type').textContent = 'Oni-Fans';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {
            
            document.querySelector('#ghost-type').textContent = 'Phantom';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {
            
            document.querySelector('#ghost-type').textContent = 'Phantom';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Fuckin\' Rev...';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Fuckin\' Rev...';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Shadey-Bitch';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Shadey-Bitch';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        }

    } else if (clickedTimeThree % 2 == 0) {

        removeThirdActive();

        if (firstEvidence === "fingerprints" && secondEvidence === "freezing") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        }

    }

});

document.querySelector('.thirdEvidence .fingerprints').addEventListener('click', function() {

    clickedTimeThree++;

    if (clickedTimeThree % 2 == 1) {

        thirdEvidence = "fingerprints";
        document.querySelector(".thirdEvidence .fingerprints").classList.add('active');

        if (firstEvidence === "emfFive" && secondEvidence === "freezing") {

            document.querySelector('#ghost-type').textContent = 'Banshee';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (secondEvidence === "emfFive" && firstEvidence === "freezing") {

            document.querySelector('#ghost-type').textContent = 'Banshee';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Poltergiest';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Poltergiest';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (firstEvidence === "emfFive" && secondEvidence === "ghostWriting") {

            document.querySelector('#ghost-type').textContent = 'Fuckin\' Rev...';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "emfFive" && firstEvidence === "ghostWriting") {
            document.querySelector('#ghost-type').textContent = 'Fuckin\' Rev...';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Spirit (Run Tyler!)';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Spirit (Run Tyler!)';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Wraith';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Wraith';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        }

    } else if (clickedTimeThree % 2 == 0) {

        removeThirdActive();

        if (firstEvidence === "emfFive" && secondEvidence === "freezing") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (secondEvidence === "emfFive" && firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (firstEvidence === "emfFive" && secondEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "emfFive" && firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        }

    }

});

document.querySelector('.thirdEvidence .freezing').addEventListener('click', function() {

    clickedTimeThree++;

    if (clickedTimeThree % 2 == 1) {

        thirdEvidence = "freezing";
        document.querySelector(".thirdEvidence .freezing").classList.add('active');

        if (firstEvidence === "fingerprints" && secondEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Banshee';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Banshee';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Demon';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Demon';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Mare';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Mare';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Phantom';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Phantom';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Wraith';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Wraith';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "ghostWriting") {

            document.querySelector('#ghost-type').textContent = 'Yurei';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "ghostWriting") {

            document.querySelector('#ghost-type').textContent = 'Yurei';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        }

    } else if (clickedTimeThree % 2 == 0) {

        removeThirdActive();

        if (firstEvidence === "fingerprints" && secondEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        }

    }

});

document.querySelector('.thirdEvidence .ghost-orbs').addEventListener('click', function() {

    clickedTimeThree++;

    if (clickedTimeThree % 2 == 1) {

        thirdEvidence = "ghostOrbs";
        document.querySelector(".thirdEvidence .ghost-orbs").classList.add('active');

        if (firstEvidence === "emfFive" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Jinn';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (secondEvidence === "emfFive" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Jinn';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Mare';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Mare';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (firstEvidence === "emfFive" && secondEvidence === "freezing") {

            document.querySelector('#ghost-type').textContent = 'Phantom';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (secondEvidence === "emfFive" && firstEvidence === "freezing") {

            document.querySelector('#ghost-type').textContent = 'Phantom';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Shadey-Bitch';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Shadey-Bitch';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Poltergeist';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Poltergeist';

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostWriting") {

            document.querySelector('#ghost-type').textContent = 'Yurei';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostWriting") {

            document.querySelector('#ghost-type').textContent = 'Yurei';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        }

    } else if (clickedTimeThree % 2 == 0) {

        removeThirdActive();

        if (firstEvidence === "emfFive" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (secondEvidence === "emfFive" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "emfFive" && secondEvidence === "freezing") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (secondEvidence === "emfFive" && firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';
            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        }

    }
});

document.querySelector('.thirdEvidence .ghost-writing').addEventListener('click', function() {

    clickedTimeThree++;

    if (clickedTimeThree % 2 == 1) {

        thirdEvidence = "ghostWriting";
        document.querySelector(".thirdEvidence .ghost-writing").classList.add('active');

        if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Demon';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Demon';

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "emfFive" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Oni-Fans';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (secondEvidence === "emfFive" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Oni-Fans';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "emfFive" && secondEvidence === "fingerprints") {

            document.querySelector('#ghost-type').textContent = 'Fuckin\' Rev...';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (secondEvidence === "emfFive" && firstEvidence === "fingerprints") {

            document.querySelector('#ghost-type').textContent = 'Fuckin\' Rev...';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Shadey-Bitch';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "emfFive") {

            document.querySelector('#ghost-type').textContent = 'Shadey-Bitch';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Spirit (Run Tyler!)';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

            document.querySelector('#ghost-type').textContent = 'Spirit (Run Tyler!)';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {

            document.querySelector('#ghost-type').textContent = 'Yurei';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {

            document.querySelector('#ghost-type').textContent = 'Yurei';

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        }

    } else if (clickedTimeThree % 2 == 0) {

        removeThirdActive();

        if (firstEvidence === "freezing" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "emfFive" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (secondEvidence === "emfFive" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "emfFive" && secondEvidence === "fingerprints") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (secondEvidence === "emfFive" && firstEvidence === "fingerprints") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';

        } else if (firstEvidence === "ghostOrbs" && secondEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (secondEvidence === "ghostOrbs" && firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "spiritBox") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .spirit-box').style.display = 'block';
            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        }

    }

});

document.querySelector('.thirdEvidence .spirit-box').addEventListener('click', function() {

    clickedTimeThree++;

    if (clickedTimeThree % 2 == 1) {

        thirdEvidence = "spiritBox";
        document.querySelector(".thirdEvidence .spirit-box").classList.add('active');

        if (firstEvidence === "freezing" && secondEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Demon';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Demon';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';

        } else if (firstEvidence === "emfFive" && secondEvidence === "ghostOrbs") {
            
            document.querySelector('#ghost-type').textContent = 'Jinn';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (secondEvidence === "emfFive" && firstEvidence === "ghostOrbs") {
            
            document.querySelector('#ghost-type').textContent = 'Jinn';

            document.querySelector('.thirdEvidence .freezing').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {
            
            document.querySelector('#ghost-type').textContent = 'Mare';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {
            
            document.querySelector('#ghost-type').textContent = 'Mare';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "emfFive") {
            
            document.querySelector('#ghost-type').textContent = 'Oni-Fans';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "emfFive") {
            
            document.querySelector('#ghost-type').textContent = 'Oni-Fans';

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostOrbs") {

            document.querySelector('#ghost-type').textContent = 'Poltergeist';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostOrbs") {

            document.querySelector('#ghost-type').textContent = 'Poltergeist';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Spirit (Run Tyler!)';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostWriting") {
            
            document.querySelector('#ghost-type').textContent = 'Spirit (Run Tyler!)';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "freezing") {
            
            document.querySelector('#ghost-type').textContent = 'Wraith';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "freezing") {
            
            document.querySelector('#ghost-type').textContent = 'Wraith';

            document.querySelector('.thirdEvidence .emf-five').style.display = 'none';

        }

    } else if (clickedTimeThree % 2 == 0) {

        removeThirdActive();

        if (firstEvidence === "freezing" && secondEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';

        } else if (firstEvidence === "emfFive" && secondEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (secondEvidence === "emfFive" && firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .freezing').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "freezing" && secondEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (secondEvidence === "freezing" && firstEvidence === "ghostOrbs") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';
            document.querySelector('.thirdEvidence .ghost-writing').style.display = 'block';

        } else if (firstEvidence === "ghostWriting" && secondEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (secondEvidence === "ghostWriting" && firstEvidence === "emfFive") {

            document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'block';
            document.querySelector('.thirdEvidence .fingerprints').style.display = 'block';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "ghostWriting") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (firstEvidence === "fingerprints" && secondEvidence === "freezing") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        } else if (secondEvidence === "fingerprints" && firstEvidence === "freezing") {

            document.querySelector('.thirdEvidence .emf-five').style.display = 'block';

        }

    }

});

document.querySelector('#game-reset').addEventListener('click', function() {

    removeFirstActive();
    removeSecondActive();
    removeSecondEvidence();
    removeThirdActive();
    removeThirdEvidence();

    document.querySelector('.firstEvidence .emf-five').style.display = 'block';
    document.querySelector('.firstEvidence .fingerprints').style.display = 'block';
    document.querySelector('.firstEvidence .ghost-orbs').style.display = 'block';
    document.querySelector('.firstEvidence .ghost-writing').style.display = 'block';
    document.querySelector('.firstEvidence .freezing').style.display = 'block';
    document.querySelector('.firstEvidence .spirit-box').style.display = 'block';
    document.querySelector('.secondEvidence .emf-five').style.display = 'none';
    document.querySelector('.secondEvidence .fingerprints').style.display = 'none';
    document.querySelector('.secondEvidence .freezing').style.display = 'none';
    document.querySelector('.secondEvidence .ghost-orbs').style.display = 'none';
    document.querySelector('.secondEvidence .ghost-writing').style.display = 'none';
    document.querySelector('.secondEvidence .spirit-box').style.display = 'none';
    document.querySelector('.thirdEvidence .emf-five').style.display = 'none';
    document.querySelector('.thirdEvidence .fingerprints').style.display = 'none';
    document.querySelector('.thirdEvidence .freezing').style.display = 'none';
    document.querySelector('.thirdEvidence .ghost-orbs').style.display = 'none';
    document.querySelector('.thirdEvidence .ghost-writing').style.display = 'none';
    document.querySelector('.thirdEvidence .spirit-box').style.display = 'none';

    document.querySelector('#ghost-type').textContent = '';
    document.querySelector('#ghost-name').value = '';
    document.querySelector('#mission-one').value = 'default';
    document.querySelector('#mission-two').value = 'default';
    document.querySelector('#mission-three').value = 'default';

});
