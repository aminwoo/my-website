const directoryStructure = new Map();

directoryStructure.set('', ['About', 'Articles', 'Projects', 'Links']);
directoryStructure.set('About', ['about.page', 'about.txt']);
directoryStructure.set('Articles', [`articles.page`]);
directoryStructure.set('Projects', ['projects.txt']);
directoryStructure.set('Links', ['github.lnk', 'linkedin.lnk']);

export default directoryStructure;

const lnkMap = new Map();
lnkMap.set('github.lnk', 'https://github.com/cyrobw/');
lnkMap.set('linkedin.lnk', 'https://www.linkedin.com/in/ben-woo/');

export { lnkMap };

const pageMap = new Map();
pageMap.set('about.page', '/about');
pageMap.set('articles.page', '/articles');
pageMap.set('links.page', '/links');

export { pageMap };
