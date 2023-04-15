// js //
const input = document.querySelector('input'),
Button = document.querySelector('button');

Button.addEventListener('click', e => {
    e.preventDefault();
    Button.innerText = 'Downloading file...';
    fetchFile(input.value);
});

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        Button.innerText = 'Download file';
    }).catch(() => {
        Button.innerText = 'Download file';
       alert('Download Failed.');
    });
}