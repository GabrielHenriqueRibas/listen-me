fetch('./db/musics.json')

.then(response => response.json())    
.then(data => {
    const container = document.getElementById('music-list');
    Object.values(data).forEach(music => {
        const musicComponent = `
            <div class="flex items-center p-3 mt-6 w-full rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-300">
                
                <img src="./assets/img/musics/${formatImageName(music.nome)}.png" class="h-14 w-14 rounded-md object-cover">

                <a href="${music.link}" class="pl-4 flex-1">
                    <h1 class="font-bold text-sm">${music.nome}</h1>
                    <p class="text-xs text-gray-400">${music.descricao}</p>
                </a>
            </div>`;
        container.innerHTML += musicComponent;
    });
});

function formatImageName(nome) {
    return nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "_");
}