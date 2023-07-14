// confirm delete message

const deleteLog = document.querySelector('.delete');
deleteLog.addEventListener('submit', function(event) {
    event.preventDefault();

    const result = confirm('Are you sure you want to delete this log?');
    if (result) {
        deletePlant();
    }else {
        console.log('Cancelled delete operation');
    }
});

function deletePlant() {
    deleteLog.submit();
};

// edit log 
// keep current log info as placeholders before editing for better UI experience

