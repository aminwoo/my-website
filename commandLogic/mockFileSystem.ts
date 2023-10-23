const directoryStructure = new Map();

directoryStructure.set('', ['problems', 'misc', 'classified']);
directoryStructure.set('problems', ['ant.txt']);
directoryStructure.set('misc', ['about.txt']);
directoryStructure.set('classified', ['flag.txt']);

export default directoryStructure;

const lnkMap = new Map();
lnkMap.set('github.lnk', 'https://github.com/aminwoo/');
lnkMap.set('linkedin.lnk', 'https://www.linkedin.com/in/ben-woo/');

export { lnkMap };

const pageMap = new Map();
pageMap.set('about.page', '/about');
pageMap.set('articles.page', '/articles');
pageMap.set('links.page', '/links');

export { pageMap };
