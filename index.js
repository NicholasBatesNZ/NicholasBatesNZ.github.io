const servers = [
    {
        name: 'vanilla',
        ip: 'au07.empowerservers.network:7072'
    },
    {
        name: 'modded',
        ip: '139.99.255.108:25566'
    }
];

const container = document.querySelector('#container');

(async () => {
    (await Promise.all(servers.map(async server => {
        const response = await fetch(`https://api.mcsrvstat.us/2/${server.ip}`);
        const json = await response.json();
        return `${server.name}: ${json['players']['online'] > 0 ? json['players']['list'].join(', ') : 'nobody :('}`;
    }))).forEach(result => {
        const node = document.createElement('p');
        node.textContent = result;
        container.appendChild(node);
    });
})();