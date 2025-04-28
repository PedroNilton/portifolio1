fetch('sidebar/sidebar.html')
    .then(res => res.text())
    .then(data => {
    document.getElementById('sidebar').innerHTML = data;
});