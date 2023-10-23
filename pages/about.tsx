import Head from 'next/head';
import UISwitch from '@/components/UISwitch';

type LogoAndLanguageDisplayProps = {
  languagesAndLogos: string[][];
};

const LogoAndLanguageDisplay = ({ languagesAndLogos }: LogoAndLanguageDisplayProps) => {
  return (
    <div className={'language-display'}>
      <h2>Languages I work with</h2>
      <div className={'languages'}>
        {languagesAndLogos.map((lal: string[], i: number) => {
          return (
            <div key={i.toString()} className={'language-name-pair'}>
              <img src={lal[1]} alt={lal[0] + ' logo'} />
              <div>
                <strong> {lal[0]} </strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {  
  const languagesAndLogos = [
    ['Python', 'images/Python-icon.png'],
    ['C++', 'images/CPP-icon.png'],
    ['JavaScript', 'images/JS-icon.png'],
    ['TypeScript', 'images/TS-icon.png'],
    ['PyTorch', 'images/Pytorch-icon.png'],
    ['ReactJS', 'images/React-icon.png'],
  ];

  return (
    <div className="page">
      <Head>
        <title>About</title>
        <meta name="description" content="About Ben" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'render-controls'}>
          <UISwitch />
      </div>

      <div className="about-page">
        <h1 className="about-title">About</h1>
        <p className="about-paragraph">

        </p>
        <LogoAndLanguageDisplay languagesAndLogos={languagesAndLogos} />
      </div>
    </div>
  );
};

export default About;
