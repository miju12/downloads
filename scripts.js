document.addEventListener('DOMContentLoaded', function () {
    const files = [
        {
            name: "Example File 1",
            url: "https://sourceforge.net/projects/mourya-sky/files/crdroid/crDroidAndroid-14.0-20240112-sky-v10.1.zip/download"
        },
        {
            name: "Example File 2",
            url: "https://sourceforge.net/projects/example/files/example2.zip/download"
        },
        {
            name: "Example File 3",
            url: "https://sourceforge.net/projects/example/files/example3.zip/download"
        },
        {
            name: "Example File 4",
            url: "https://sourceforge.net/projects/example/files/example4.zip/download"
        }
        // Add more files as needed
    ];

    const fileList = document.getElementById('file-list');
    files.forEach(file => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = file.url;
        link.textContent = file.name;
        listItem.appendChild(link);
        fileList.appendChild(listItem);
    });
});
