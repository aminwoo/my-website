import aboutTxt from './aboutTxt';
import question from './math';
import README from './README';

const txtMap = new Map();
txtMap.set('README', README);
txtMap.set('about.txt', aboutTxt);
txtMap.set('ant.txt', question);
txtMap.set('flag.txt', `You didn't think it would be THAT easy did you?`);

export default txtMap;
