document.querySelector('form').addEventListener('submit',(e)=> {
    const anyChecked = [...document.querySelectorAll('input[type="checkbox"]')].some(chkbox => chkbox.checked);
    if (!anyChecked){
        alert('Označite barem jedno polje');
        e.preventDefault();
    }
})
