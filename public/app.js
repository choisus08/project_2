// confirm delete message

const deleteLog = document.querySelector('.delete');
deleteLog.addEventListener('submit', function(event) {
    event.preventDefault();

    const result = confirm('Are you sure you want to delete?');
    if (result) {
        deletePlant();
    }else {
        console.log('Cancelled delete operation');
    }
});

function deletePlant() {
    deleteLog.submit();
};

