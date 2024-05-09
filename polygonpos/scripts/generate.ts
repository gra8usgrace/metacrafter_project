import fs from 'fs';
import path from 'path';

const Metadata = path.join(__dirname, 'Metadata');
if (!fs.existsSync(Metadata)) {
    fs.mkdirSync(Metadata);
}

console.log(__dirname);

for (let i = 0; i < 5; i++) {
    const json = {
        name: `Degen NFT #${i}`,
        description: `Black and white street photography of a rainy night in New York, reflections on wet pavement#${i}`,
        tokenId:  `${i}`,
        image: `https://scarlet-just-mosquito-515.mypinata.cloud/ipfs/QmTYdcaxwFjB3gPnP6bC5pCAeofzNMCzFDnELWpKWfg87b/${i}.jpg`
    };

    fs.writeFileSync(path.join(Metadata, String(i)), JSON.stringify(json));
}
console.log("metadata successfully generated");
