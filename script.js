// Wait for the document to be fully loaded

document.addEventListener('DOMContentLoaded', function() {
    // Assign events to each circle and square
    let shapes = document.querySelectorAll('.shape');
    assignEvents(shapes);
});

// Function to assign events to shapes

function assignEvents(shapes) {
    shapes.forEach(shape => {
        shape.addEventListener('click', toggleShape);
    });
}

// Function to toggle between circle and square shapes upon clicking

function toggleShape(event) {
    let shape = event.target;
    let circleRow = document.querySelector('.circle-row');
    let squareRow = document.querySelector('.square-row');

    if(shape.classList.contains('circle')) {
        // Move to squares
        shape.classList.remove('circle');
        shape.classList.add('square');
        squareRow.appendChild(shape);
    } else {
        // Move to first position in cicles
        shape.classList.remove('square');
        shape.classList.add('circle');
        circleRow.insertBefore(shape, circleRow.firstChild);
    }

    // Re-assign events since the DOM has changed
    let shapes = document.querySelectorAll('.shape');
    assignEvents(shapes);
}
